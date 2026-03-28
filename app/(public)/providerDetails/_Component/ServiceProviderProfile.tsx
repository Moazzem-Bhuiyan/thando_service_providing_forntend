'use client';

import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { NavigationTabs } from './NavigationTabs';
import { AboutSection } from './AboutSection';
import { BusinessHoursTable } from './BusinessHoursTable';
import { DateTimePicker } from './DateTimePicker';
import { ServiceProvider } from './types';
import { QuoteData, SidebarBooking } from './SidebarBooking';
import { ServicesGrid } from './ServicesGrid';

interface ServiceProviderProfileProps {
  provider: ServiceProvider;
}

export function ServiceProviderProfile({ provider }: ServiceProviderProfileProps) {
  const [activeTab, setActiveTab] = useState('About');
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleRequestQuote = (data: QuoteData) => {
    console.log('Quote requested:', data);
    // Handle quote request submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <ProfileHeader provider={provider} />

      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Content Area */}
        <div className="flex-1">
          {/* About Tab Content */}
          {activeTab === 'About' && (
            <>
              <AboutSection provider={provider} />
              <div className="border-t border-gray-200">
                <BusinessHoursTable provider={provider} />
              </div>
            </>
          )}

          {/* Services Tab Content */}
          {activeTab === 'Services' && <ServicesGrid provider={provider} />}

          {/* Projects Tab Content */}
          {activeTab === 'Projects' && (
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center">
                <p className="text-gray-600">Projects coming soon...</p>
              </div>
            </div>
          )}

          {/* Reviews Tab Content */}
          {activeTab === 'Reviews' && (
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center">
                <p className="text-gray-600">Reviews coming soon...</p>
              </div>
            </div>
          )}

          {/* Credentials Tab Content */}
          {activeTab === 'Credentials & FAQ' && (
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
              <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center">
                <p className="text-gray-600">Credentials & FAQ coming soon...</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="sticky top-4 w-full lg:w-90 mr-10 m-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-none lg:px-0">
            {/* Date Time Picker */}
            {activeTab === 'About' && (
              <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Select Date & Time</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-gray-900">Date</p>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 5 }, (_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i);
                        const dateStr = date.toISOString().split('T')[0];
                        const dayNum = date.getDate();
                        return (
                          <button
                            key={dateStr}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl text-center transition ${
                              selectedDate === dateStr
                                ? 'bg-blue-600 text-white'
                                : 'border border-gray-300 bg-white text-gray-900 hover:border-blue-300'
                            }`}
                          >
                            <span className="text-xs font-medium">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                            <span className="text-lg font-bold">{dayNum}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-semibold text-gray-900">Time</p>
                    <div className="flex flex-col gap-2">
                      {['7:30 pm', '8:30 pm', '9:30 pm'].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition ${
                            selectedTime === time
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-gray-300 bg-white text-gray-900 hover:border-blue-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Booking Sidebar */}
            <SidebarBooking onRequestQuote={handleRequestQuote} />
          </div>
        </div>
      </div>
    </div>
  );
}
