"use client";
// components/settings/SettingsSidebar.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User, Shield, CreditCard, BookOpen, Bell,
  HelpCircle, LogOut, Trash2, Briefcase, FileText,
  DollarSign, ArrowDownToLine, Info, Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "user" | "service_provider";

interface NavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  danger?: boolean;
}

const USER_NAV: NavItem[] = [
  { key: "profile",          label: "Profile",          icon: <User size={16} />,       href: "/profile" },
  { key: "security",         label: "Security",         icon: <Shield size={16} />,     href: "/security" },
  { key: "payments_history", label: "Payments History", icon: <CreditCard size={16} />, href: "/PaymentsHistoryPage" },
  { key: "booking_history",  label: "Booking History",  icon: <BookOpen size={16} />,   href: "/BookingHistoryPage" },
  { key: "notifications",    label: "Notifications",    icon: <Bell size={16} />,       href: "/NotificationsPage" },
  { key: "help",             label: "Help & Support",   icon: <HelpCircle size={16} />, href: "/HelpPage" },
  { key: "signout",          label: "Sign Out",         icon: <LogOut size={16} />,     href: "/settings/signout" },
];

const PROVIDER_NAV: NavItem[] = [
  { key: "profile",      label: "Profile",             icon: <User size={16} />,            href: "/settings/profile" },
  { key: "my_services",  label: "My Services",         icon: <Briefcase size={16} />,       href: "/settings/my-services" },
  { key: "earnings",     label: "Total Earnings",      icon: <DollarSign size={16} />,      href: "/settings/earnings" },
  { key: "withdraw",     label: "Withdraw Payment",    icon: <ArrowDownToLine size={16} />, href: "/settings/withdraw" },
  { key: "security",     label: "Security",            icon: <Lock size={16} />,            href: "/settings/security" },
  { key: "about",        label: "About Us",            icon: <Info size={16} />,            href: "/settings/about" },
  { key: "terms",        label: "Terms and Condition", icon: <FileText size={16} />,        href: "/settings/terms" },
  { key: "privacy",      label: "Privacy Policy",      icon: <Shield size={16} />,          href: "/settings/privacy" },
  { key: "signout",      label: "Sign Out",            icon: <LogOut size={16} />,          href: "/settings/signout" },
  { key: "delete",       label: "Delete Account",      icon: <Trash2 size={16} />,          href: "/settings/delete", danger: true },
];

interface Props {
  role: Role;
  onNavigate?: () => void; // called on mobile to close drawer
}

export function SettingsSidebar({ role, onNavigate }: Props) {
  const pathname = usePathname();
  const navItems = role === "service_provider" ? PROVIDER_NAV : USER_NAV;
  const isUser = role === "user";

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
      {isUser && (
        <h2 className="mb-3 px-2 text-xl font-bold text-gray-900">Setting</h2>
      )}

      <nav className="space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5  font-medium transition-all mb-3",
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : item.danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <span
                className={cn(
                  "shrink-0",
                  isActive
                    ? "text-white"
                    : item.danger
                    ? "text-red-500"
                    : "text-gray-400"
                )}
              >
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {isUser && <div className="mt-4 border-t border-gray-100" />}
    </div>
  );
}