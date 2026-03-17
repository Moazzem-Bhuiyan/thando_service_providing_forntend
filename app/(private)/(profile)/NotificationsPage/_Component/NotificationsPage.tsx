"use client";
// app/(dashboard)/settings/notifications/page.tsx

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, MessageSquare, CreditCard, Star, Tag } from "lucide-react";

interface NotifItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  defaultOn: boolean;
}

const NOTIFICATIONS: NotifItem[] = [
  {
    id: "booking_updates",
    icon: <Bell size={18} className="text-blue-500" />,
    title: "Booking Updates",
    description: "Get notified about your upcoming and past bookings.",
    defaultOn: true,
  },
  {
    id: "provider_messages",
    icon: <MessageSquare size={18} className="text-violet-500" />,
    title: "Provider Messages",
    description: "Receive messages from service providers.",
    defaultOn: true,
  },
  {
    id: "payment_confirmations",
    icon: <CreditCard size={18} className="text-emerald-500" />,
    title: "Payment Confirmations",
    description: "Get receipts and payment status updates.",
    defaultOn: false,
  },
  {
    id: "reviews",
    icon: <Star size={18} className="text-amber-500" />,
    title: "Reviews & Ratings",
    description: "Be notified when someone reviews your service.",
    defaultOn: true,
  },
  {
    id: "promotions",
    icon: <Tag size={18} className="text-pink-500" />,
    title: "Promotions & Offers",
    description: "Receive special deals and promotional updates.",
    defaultOn: false,
  },
];

export default function NotificationsPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.defaultOn]))
  );

  const toggle = (id: string) =>
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Notifications</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your notifications information and preferences.
        </p>
      </div>

      {/* Preferences */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-5 text-base font-bold text-gray-900 sm:text-lg">
          Notification Preferences
        </h2>

        <div className="divide-y divide-gray-50">
          {NOTIFICATIONS.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="flex items-start gap-3 sm:items-center">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-100 sm:mt-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <Switch
                checked={prefs[item.id]}
                onCheckedChange={() => toggle(item.id)}
                className="shrink-0 data-[state=checked]:bg-gray-900"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}