// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CrowdfundingCampaign {
    address public immutable creator;
    uint256 public immutable goal;
    uint256 public immutable deadline;
    string public name;
    string public description;
    string public imageUrl;
    bool public isFlexible;
    uint256 public platformFeePercentage;
    
    uint256 public totalContributions;
    mapping(address => uint256) public contributions;
    mapping(address => bool) public contributors;
    mapping(address => bool) public votes;
    uint256 public totalVotes;
    
    bool public fundsReleased;
    
    event Contributed(address indexed contributor, uint256 amount);
    event VotedForRelease(address indexed voter);
    event FundsReleased(uint256 amount, uint256 fee);
    event CampaignCompleted(bool success);

    constructor(
        address _creator,
        uint256 _goal,
        uint256 _deadline,
        string memory _name,
        string memory _description,
        string memory _imageUrl,
        bool _isFlexible,
        uint256 _platformFeePercentage
    ) {
        creator = _creator;
        goal = _goal;
        deadline = _deadline;
        name = _name;
        description = _description;
        imageUrl = _imageUrl;
        isFlexible = _isFlexible;
        platformFeePercentage = _platformFeePercentage;
    }

    receive() external payable {
        contribute();
    }

    function contribute() public payable {
        require(block.timestamp < deadline, "Campaign is not active");
        require(msg.value > 0, "Contribution must be > 0");
        
        totalContributions += msg.value;
        contributions[msg.sender] += msg.value;
        contributors[msg.sender] = true;
        
        emit Contributed(msg.sender, msg.value);
    }

    function voteForRelease() public {
        require(contributors[msg.sender], "Not a contributor");
        require(!votes[msg.sender], "Already voted");
        require(block.timestamp >= deadline, "Voting not started yet");
        
        votes[msg.sender] = true;
        totalVotes += contributions[msg.sender];
        
        emit VotedForRelease(msg.sender);
    }

    function withdrawFunds() public {
        require(msg.sender == creator, "Only creator can withdraw");
        require(block.timestamp >= deadline, "Campaign not ended yet");
        require(!fundsReleased, "Funds already released");
        
        if (!isFlexible) {
            bool success = totalContributions >= goal;
            require(success || (totalVotes * 100) / totalContributions > 50, "Not enough votes");
        }
        
        fundsReleased = true;
        uint256 amount;
        uint256 fee;
        
        if (isFlexible) {
            // For flexible funding, send full amount to creator
            amount = totalContributions;
            fee = 0;
            (bool sent, ) = payable(creator).call{value: amount}("");
            require(sent, "Failed to send Ether to creator");
        } else {
            // For fixed funding, apply platform fee
            fee = (totalContributions * platformFeePercentage) / 100;
            amount = totalContributions - fee;
            (bool sent, ) = payable(creator).call{value: amount}("");
            require(sent, "Failed to send Ether to creator");
            if (fee > 0) {
                (bool feeSent, ) = payable(msg.sender).call{value: fee}("");
                require(feeSent, "Failed to send platform fee");
            }
        }
        
        emit FundsReleased(amount, fee);
        emit CampaignCompleted(isFlexible || totalContributions >= goal);
    }
}
