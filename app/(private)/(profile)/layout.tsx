// app/(dashboard)/settings/layout.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SettingsSidebar } from "./Component/Settingssidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: replace with your real auth / session logic
  const role = "user"; // "user" | "service_provider"
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen-lg bg-gray-50 font-sans">

      {/* ── Mobile top bar ── */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3 md:hidden">
        <h1 className="text-base font-bold text-gray-800">Settings</h1>
        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* ── Mobile drawer backdrop ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <h1 className="text-base font-bold text-gray-800">Settings</h1>
          <button
            onClick={() => setDrawerOpen(false)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-3">
          <SettingsSidebar role={role} onNavigate={() => setDrawerOpen(false)} />
        </div>
      </div>

      {/* ── Main content area ── */}
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6 md:py-6">
        <div className="flex gap-6">
          {/* Sidebar — desktop only */}
          <aside className="hidden w-68 shrink-0 md:block">
            <SettingsSidebar role={role} />
          </aside>

          {/* Page content */}
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}