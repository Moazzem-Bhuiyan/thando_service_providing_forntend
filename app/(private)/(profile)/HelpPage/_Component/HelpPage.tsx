"use client";
// app/(dashboard)/settings/help/page.tsx

import { useState } from "react";
import { ChevronDown, ChevronRight, HeadphonesIcon, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    id: 1,
    question: "How do I change my payment method?",
    answer:
      "Go to the Payments tab and click 'Add Card' or select 'Set as Default' on an existing card.",
  },
  {
    id: 2,
    question: "Where can I see my booking history?",
    answer:
      "Navigate to the Booking History section from the sidebar. You can filter by status: All, Completed, Pending, or Cancelled.",
  },
  {
    id: 3,
    question: "Is my data secure?",
    answer:
      "Yes, all your data is encrypted using industry-standard AES-256 encryption. We never share your personal information with third parties.",
  },
  {
    id: 4,
    question: "How do I cancel a booking?",
    answer:
      "Open the booking from your Booking History, then click 'Cancel Booking'. Cancellations made 24 hours before the service are fully refunded.",
  },
  {
    id: 5,
    question: "How long does a refund take?",
    answer:
      "Refunds are typically processed within 5–7 business days depending on your bank or card provider.",
  },
];

export default function HelpPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="space-y-4">
      {/* Header card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Help & Support</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your help &amp; support information and preferences.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Contact Us */}
          <button className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition group-hover:bg-blue-600 group-hover:ring-blue-600">
              <HeadphonesIcon size={22} className="text-blue-600 transition group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Contact Us</p>
              <p className="text-xs text-gray-500">Talk to our support team</p>
            </div>
          </button>

          {/* Help Center */}
          <button className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition group-hover:bg-blue-600 group-hover:ring-blue-600">
              <BookOpen size={22} className="text-blue-600 transition group-hover:text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Help Center</p>
              <p className="text-xs text-gray-500">Browse FAQs</p>
            </div>
          </button>
        </div>
      </div>

      {/* FAQ card */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h2 className="mb-4 text-base font-bold text-gray-900 sm:text-lg">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "overflow-hidden rounded-xl border transition-all duration-200",
                  isOpen
                    ? "border-blue-200 bg-blue-50/50"
                    : "border-gray-100 bg-white hover:border-gray-200"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left sm:px-5"
                >
                  <span
                    className={cn(
                      "text-sm font-semibold transition",
                      isOpen ? "text-blue-700" : "text-gray-800"
                    )}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronDown size={16} className="shrink-0 text-blue-500" />
                  ) : (
                    <ChevronRight size={16} className="shrink-0 text-gray-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5">
                    <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}