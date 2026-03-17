"use client";
// app/(dashboard)/settings/payments-history/page.tsx

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type PayStatus = "Completed" | "Pending" | "Refunded" | "Failed";

interface Payment {
  id: string;
  service: string;
  date: string;
  amount: string;
  status: PayStatus;
}

const PAYMENTS: Payment[] = [
  { id: "1", service: "Home Service",   date: "10/01/2026", amount: "$120", status: "Completed" },
  { id: "2", service: "Cleaning",       date: "10/01/2026", amount: "$120", status: "Completed" },
  { id: "3", service: "Installation",   date: "09/28/2026", amount: "$200", status: "Completed" },
  { id: "4", service: "Touch-up",       date: "09/25/2026", amount: "$75",  status: "Refunded"  },
  { id: "5", service: "Garden Service", date: "09/20/2026", amount: "$60",  status: "Completed" },
  { id: "6", service: "Plumbing",       date: "09/18/2026", amount: "$95",  status: "Pending"   },
  { id: "7", service: "Electrical",     date: "09/15/2026", amount: "$180", status: "Failed"    },
];

const STATUS_STYLE: Record<PayStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Pending:   "bg-amber-50  text-amber-600  border-amber-200",
  Refunded:  "bg-blue-50   text-blue-600   border-blue-200",
  Failed:    "bg-red-50    text-red-500    border-red-200",
};

const SUMMARY = [
  { label: "Total Spent",  value: "$770",  icon: <DollarSign size={18} />, color: "text-blue-600",    bg: "bg-blue-50"    },
  { label: "Completed",    value: "5",     icon: <TrendingUp size={18} />, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Pending",      value: "1",     icon: <Clock size={18} />,      color: "text-amber-600",   bg: "bg-amber-50"   },
  { label: "Failed",       value: "1",     icon: <XCircle size={18} />,    color: "text-red-500",     bg: "bg-red-50"     },
];

export default function PaymentsHistoryPage() {
  const [search, setSearch] = useState("");

  const filtered = PAYMENTS.filter((p) =>
    p.service.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Payments</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your payments information and preferences.
        </p>

        {/* Summary cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SUMMARY.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-gray-100 bg-gray-50 p-3 sm:p-4"
            >
              <div
                className={cn(
                  "mb-2 flex h-8 w-8 items-center justify-center rounded-lg",
                  s.bg,
                  s.color
                )}
              >
                {s.icon}
              </div>
              <p className="text-base font-extrabold text-gray-900 sm:text-xl">{s.value}</p>
              <p className="mt-0.5 text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Table card */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <h2 className="text-base font-bold text-gray-900">Payment History</h2>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search service..."
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:w-52"
          />
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                <TableHead className="text-xs font-bold uppercase text-gray-500">Service Name</TableHead>
                <TableHead className="text-xs font-bold uppercase text-gray-500">Date</TableHead>
                <TableHead className="text-xs font-bold uppercase text-gray-500">Amount</TableHead>
                <TableHead className="text-xs font-bold uppercase text-gray-500">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-50/50">
                  <TableCell className="text-sm font-medium text-gray-800">{row.service}</TableCell>
                  <TableCell className="text-sm text-gray-500">{row.date}</TableCell>
                  <TableCell className="text-sm font-semibold text-gray-800">{row.amount}</TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                        STATUS_STYLE[row.status]
                      )}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="py-10 text-center text-sm text-gray-400">
                    No payments found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile list */}
        <div className="divide-y divide-gray-50 sm:hidden">
          {filtered.map((row) => (
            <div key={row.id} className="flex items-center justify-between px-5 py-3.5">
              <div>
                <p className="text-sm font-semibold text-gray-800">{row.service}</p>
                <p className="mt-0.5 text-xs text-gray-400">{row.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-sm font-bold text-gray-900">{row.amount}</p>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                    STATUS_STYLE[row.status]
                  )}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-gray-400">No payments found.</p>
          )}
        </div>
      </div>
    </div>
  );
}