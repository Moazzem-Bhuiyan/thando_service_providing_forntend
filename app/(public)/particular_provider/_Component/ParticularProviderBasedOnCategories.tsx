"use client";
// app/(main)/search/page.tsx  — or drop anywhere as a page component

import { useState } from "react";
import {
  MapPin, Star, Clock, Users, ChevronRight,
  Zap, ShieldCheck, DollarSign, Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ── Types ──────────────────────────────────────────────────────────────────
interface Provider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  hires: number;
  responseTime: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  badge?: string;
}

// ── Mock Data ──────────────────────────────────────────────────────────────
const FEATURED: Provider[] = [
  {
    id: "f1",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 4.8,
    reviews: 120,
    hires: 37,
    responseTime: "5 hr",
    price: 50,
    unit: "/hr",
    description: "",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
    badge: "Top Rated",
  },
  {
    id: "f2",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 4.6,
    reviews: 98,
    hires: 21,
    responseTime: "3 hr",
    price: 50,
    unit: "/hr",
    description: "",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
  },
  {
    id: "f3",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 4.9,
    reviews: 205,
    hires: 52,
    responseTime: "1 hr",
    price: 50,
    unit: "/hr",
    description: "",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=300&fit=crop",
    badge: "Best Value",
  },
];

const ALL_PROVIDERS: Provider[] = [
  {
    id: "1",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 5.0,
    reviews: 3,
    hires: 2,
    responseTime: "7 hr",
    price: 50,
    unit: "/hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read More",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=160&fit=crop",
  },
  {
    id: "2",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 5.0,
    reviews: 3,
    hires: 2,
    responseTime: "7 hr",
    price: 50,
    unit: "/hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read More",
    image: "https://images.unsplash.com/photo-1527515637462-cff94aca208b?w=200&h=160&fit=crop",
  },
  {
    id: "3",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 4.7,
    reviews: 14,
    hires: 9,
    responseTime: "2 hr",
    price: 50,
    unit: "/hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read More",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=160&fit=crop",
  },
  {
    id: "4",
    name: "All House Cleaners",
    category: "All House Cleaners",
    rating: 4.4,
    reviews: 7,
    hires: 4,
    responseTime: "4 hr",
    price: 50,
    unit: "/hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Read More",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&h=160&fit=crop",
  },
];

const WHY_US = [
  {
    icon: <Zap size={28} />,
    title: "Hassle-Free Process",
    desc: "With professionals who deliver quality results, transparent pricing, and reliable service.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <DollarSign size={28} />,
    title: "No Hidden Costs",
    desc: "With professionals who deliver quality results, transparent pricing, and reliable service.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <Clock size={28} />,
    title: "Fast Response",
    desc: "With professionals who deliver quality results, transparent pricing, and reliable service.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure & Reliable",
    desc: "With professionals who deliver quality results, transparent pricing, and reliable service.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      <Star size={12} className="fill-amber-400 text-amber-400" />
      <span className="text-sm font-semibold text-amber-600">{rating.toFixed(1)}</span>
    </span>
  );
}

function FeaturedCard({ p }: { p: Provider }) {
  const router = useRouter();
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
      {p.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
          {p.badge}
        </span>
      )}
      <div className="h-40 overflow-hidden sm:h-44">
        <Image
          width={200}
          height={200}
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-lg font-bold text-gray-900">{p.name}</p>
            <p className="mt-0.5 text-[15px] text-gray-400">{p.category}</p>
          </div>
          {/* <span className="shrink-0 rounded-xl bg-blue-600 px-2.5 py-1 text-lg font-extrabold text-white">
            ${p.price}
            <span className="text-[10px] font-normal opacity-80">{p.unit}</span>
          </span> */}
        </div>

        <div className="mt-2.5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <StarRating rating={p.rating} />
          <span className="flex items-center gap-1">
            <Users size={11} />
            {p.hires} hires
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            Response {p.responseTime}
          </span>
        </div>

        <button onClick={() => router.push(`/providerDetails`)} className="mt-3 w-full  border-2  bg-[#001a4d] text-white py-2 text-xs font-bold  transition hover:bg-[#002368] hover:text-white">
          View Profile
        </button>
      </div>
    </div>
  );
}

function ProviderRow({ p }: { p: Provider }) {
  const router = useRouter();
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-start sm:p-5">
      {/* Image */}
      <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <Image
          width={200}
          height={200}
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-base font-bold text-gray-900">{p.name}</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
              <MapPin size={11} /> {p.category}
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <StarRating rating={p.rating} />
              <span className="flex items-center gap-1">
                <Users size={11} />
                {p.hires} hires
              </span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                Response {p.responseTime}
              </span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-2xl font-extrabold text-gray-900">${p.price}</span>
            <span className="block text-[11px] text-gray-400">{p.unit}</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-gray-500 line-clamp-2">{p.description}</p>

        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-500 ring-1 ring-red-100">
            Register
          </span>
          <button onClick={() => router.push(`/providerDetails`)} className="flex items-center gap-1.5 rounded-xl bg-[#001a4d] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700">
            View Profile <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SearchResultsPage() {
  const [query, setQuery] = useState("House Cleaning");
  const [location, setLocation] = useState("35458");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Search Bar ── */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
              <Search size={16} className="ml-4 mt-3 shrink-0 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What service are you looking for?"
                className="flex-1 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 sm:w-40">
              <MapPin size={16} className="ml-4 mt-3 shrink-0 text-gray-400" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Zip Code"
                className="w-full px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-95">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6">

        {/* ── Matching / Featured ── */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900 sm:text-xl">
            Matching house cleaners
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p) => (
              <FeaturedCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* ── All Providers ── */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-gray-900 sm:text-xl">
            All House Cleaners
          </h2>
          <div className="space-y-4">
            {ALL_PROVIDERS.map((p) => (
              <ProviderRow key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* ── Why Choose Our Experts ── */}
        <section className="rounded-3xl bg-white px-6 py-10 shadow-sm ring-1 ring-gray-100 sm:px-10 sm:py-12">
          <div className="mb-2 text-center">
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              Why Choose Our Experts
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              Work with professionals who deliver quality results, transparent
              pricing, and reliable service.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3 text-center">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm",
                    item.bg,
                    item.color
                  )}
                >
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            {/* <button className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-95">
              Get Started
            </button> */}
          </div>
        </section>

      </div>
    </div>
  );
}