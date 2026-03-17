"use client";

import { useState } from "react";
import { CalendarDays, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Status = "All" | "Completed" | "Pending" | "Cancelled";

interface Booking {
  id: string;
  title: string;
  date: string;
  amount: string;
  status: "Completed" | "Pending" | "Cancelled";
  image: string;
}

const BOOKINGS: Booking[] = [
  { id: "1", title: "Home Service",    date: "10/01/2026", amount: "$120", status: "Completed",  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop" },
  { id: "2", title: "Deep Cleaning",   date: "10/01/2026", amount: "$85",  status: "Pending",    image: "https://images.unsplash.com/photo-1527515637462-cff94aca208b?w=80&h=80&fit=crop" },
  { id: "3", title: "Installation",    date: "09/28/2026", amount: "$200", status: "Completed",  image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=80&h=80&fit=crop" },
  { id: "4", title: "Painting",        date: "09/25/2026", amount: "$150", status: "Cancelled",  image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=80&h=80&fit=crop" },
  { id: "5", title: "Garden Service",  date: "09/20/2026", amount: "$60",  status: "Completed",  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=80&h=80&fit=crop" },
  { id: "6", title: "Plumbing Fix",    date: "09/18/2026", amount: "$95",  status: "Pending",    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=80&h=80&fit=crop" },
];

const STATUS_STYLE: Record<string, string> = {
  Completed: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  Pending:   "bg-amber-50  text-amber-600  ring-1 ring-amber-200",
  Cancelled: "bg-red-50    text-red-500    ring-1 ring-red-200",
};

const TABS: Status[] = ["All", "Completed", "Pending", "Cancelled"];

export default function BookingHistoryPage() {
  const [active, setActive] = useState<Status>("All");

  const filtered =
    active === "All" ? BOOKINGS : BOOKINGS.filter((b) => b.status === active);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Booking History</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your booking information and preferences.
        </p>

        {/* Filter tabs */}
        <div className="mt-5 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold transition",
                active === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <CalendarDays size={36} className="mb-3 text-gray-300" />
            <p className="text-sm font-medium text-gray-500">No bookings found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {filtered.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 px-5 py-4 transition hover:bg-gray-50/60"
              >
                {/* Image */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16">
                  <Image
                    width={56}
                    height={56}
                    src={booking.image}
                    alt={booking.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-800 sm:text-base">
                    {booking.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">{booking.date}</p>
                </div>

                {/* Amount + status */}
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <span className="text-sm font-bold text-gray-900 sm:text-base">
                    {booking.amount}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                      STATUS_STYLE[booking.status]
                    )}
                  >
                    {booking.status}
                  </span>
                </div>

                <ChevronRight size={16} className="hidden shrink-0 text-gray-300 sm:block" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}