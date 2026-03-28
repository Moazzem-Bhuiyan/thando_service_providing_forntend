'use client';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['About', 'Services', 'Projects', 'Reviews', 'Credentials & FAQ'];

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`border-b-2 px-1 py-4 text-sm font-medium transition ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
