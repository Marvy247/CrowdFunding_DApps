import { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  PlusIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import CampaignCard from "../components/campaign/CampaignCard";

const mockCreatedCampaigns = [
  {
    id: 1,
    title: "Eco-Friendly Water Bottles",
    description: "Sustainable water bottles made from 100% recycled materials",
    progress: 65,
    target: 5000,
    daysLeft: 12,
    category: "Environment",
    image: "/assets/waterbottle.jpg",
    status: "active",
  },
  {
    id: 2,
    title: "Urban Garden Initiative",
    description: "Creating community gardens in food desert neighborhoods",
    progress: 42,
    target: 10000,
    daysLeft: 25,
    category: "Community",
    image: "/assets/commgarden.jpg",
    status: "active",
  },
];

const mockBackedCampaigns = [
  {
    id: 3,
    title: "Solar Panel Project",
    description: "Bringing solar energy to low-income households",
    progress: 89,
    target: 15000,
    daysLeft: 5,
    category: "Environment",
    pledgeAmount: 50,
    reward: "Special thank you package",
    image: "/assets/ai.jpg",
    status: "funded",
  },
  {
    id: 4,
    title: "Children's Coding Camp",
    description: "Free programming classes for underprivileged youth",
    progress: 120,
    target: 8000,
    daysLeft: 0,
    category: "Education",
    pledgeAmount: 100,
    reward: "Early access to curriculum",
    image: "/assets/childreneducation.jpg",
    status: "completed",
  },
];

export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">
            Manage your campaigns and contributions
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex border-b border-gray-200">
              <Tab
                className={({ selected }) =>
                  `px-6 py-4 text-sm font-medium focus:outline-none ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                My Campaigns
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-6 py-4 text-sm font-medium focus:outline-none ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                Backed Projects
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-6 py-4 text-sm font-medium focus:outline-none ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                Account Settings
              </Tab>
            </Tab.List>
            <Tab.Panels className="p-6">
              {/* My Campaigns Panel */}
              <Tab.Panel>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Your Campaigns
                    </h2>
                    <a
                      href="/create-campaign"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                      New Campaign
                    </a>
                  </div>

                  {mockCreatedCampaigns.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockCreatedCampaigns.map((campaign) => (
                        <div key={campaign.id} className="relative">
                          <CampaignCard campaign={campaign} isOwner={true} />
                          <div className="mt-2 flex space-x-2">
                            <a
                              href={`/campaigns/${campaign.id}/edit`}
                              className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Edit
                            </a>
                            <a
                              href={`/campaigns/${campaign.id}`}
                              className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        No campaigns
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Get started by creating a new campaign.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/create-campaign"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                          New Campaign
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Tab.Panel>

              {/* Backed Projects Panel */}
              <Tab.Panel>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Projects You've Backed
                  </h2>

                  {mockBackedCampaigns.length > 0 ? (
                    <div className="space-y-4">
                      {mockBackedCampaigns.map((campaign) => (
                        <div
                          key={campaign.id}
                          className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start space-x-4">
                              <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="h-16 w-16 rounded-lg object-cover"
                              />
                              <div>
                                <h3 className="font-medium text-gray-900">
                                  {campaign.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  {campaign.description}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      campaign.status === "funded"
                                        ? "bg-green-100 text-green-800"
                                        : campaign.status === "completed"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {campaign.status === "funded"
                                      ? "Funded"
                                      : campaign.status === "completed"
                                      ? "Completed"
                                      : "Active"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="md:text-right">
                              <div className="text-sm text-gray-900">
                                <span className="font-medium">
                                  ${campaign.pledgeAmount}
                                </span>{" "}
                                pledged
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {campaign.reward}
                              </div>
                              <a
                                href={`/campaigns/${campaign.id}`}
                                className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                              >
                                View project{" "}
                                <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        No backed projects
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Support a project to see it appear here.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/campaigns"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Browse Projects
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Tab.Panel>

              {/* Account Settings Panel */}
              <Tab.Panel>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Account Settings
                  </h2>
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Profile Information
                        </h3>
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border"
                            />
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border"
                            />
                          </div>

                          <div className="sm:col-span-4">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Security
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="current-password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Current password
                            </label>
                            <input
                              type="password"
                              name="current-password"
                              id="current-password"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="new-password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              New password
                            </label>
                            <input
                              type="password"
                              name="new-password"
                              id="new-password"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 border"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-6 border-t border-gray-200">
                        <button
                          type="button"
                          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
