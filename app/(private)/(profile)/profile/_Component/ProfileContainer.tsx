"use client";
// app/(dashboard)/settings/profile/page.tsx

import { useState, useRef } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// TODO: replace with your real auth / session
const MOCK_ROLE = "user"; // "user" | "service_provider"

const INITIAL = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "1234567890",
  address: "123 Tech Lane, Silicon Valley, CA 94025",
  companyName: "Alex Johnson",
  bankAccount: "12312323434345465778",
  experience: "5 years in event management",
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  disabled,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800",
          "outline-none transition placeholder:text-gray-400",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
          disabled && "cursor-not-allowed bg-gray-50 text-gray-500"
        )}
      />
    </div>
  );
}

export default function ProfilePage() {
  const role = MOCK_ROLE;
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [nidFileName, setNidFileName] = useState("No Chosen File");
  const [saving, setSaving] = useState(false);

  const avatarRef = useRef<HTMLInputElement>(null);
  const nidRef = useRef<HTMLInputElement>(null);

  const set = (key: keyof typeof INITIAL) => (value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    // TODO: call your API here
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setEditMode(false);
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">

      {/* ── Avatar row ── */}
      <div className="flex flex-col gap-4 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-gray-200 sm:h-16 sm:w-16">
              {avatarPreview ? (
                <Image
                  fill
                  src={avatarPreview}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-blue-100 text-xl font-bold text-blue-600 sm:text-2xl">
                  {form.name[0]}
                </div>
              )}
            </div>
            <button
              onClick={() => avatarRef.current?.click()}
              className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-white shadow hover:bg-gray-900 transition"
            >
              <Camera size={12} />
            </button>
            <input
              ref={avatarRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setAvatarPreview(URL.createObjectURL(f));
              }}
            />
          </div>
          <div>
            <p className="text-base font-bold text-gray-900 sm:text-lg">{form.name}</p>
            <p className="text-xs text-gray-500 sm:text-sm">{form.email}</p>
          </div>
        </div>

        <button
          onClick={() => setEditMode((v) => !v)}
          className="self-start rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition sm:self-auto"
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* ── Form ── */}
      <div className="space-y-4 px-4 py-5 sm:space-y-5 sm:px-7 sm:py-6">

        {/* Two-col grid on sm+ for some fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name"  value={form.name}  onChange={set("name")}  disabled={!editMode} />
          <Field label="Email" value={form.email} onChange={set("email")} type="email" disabled={!editMode} />
        </div>

        {role === "service_provider" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Company Name" value={form.companyName} onChange={set("companyName")} disabled={!editMode} />
              <Field label="Phone Number" value={form.phone}       onChange={set("phone")}       disabled={!editMode} />
            </div>

            <Field label="Address" value={form.address} onChange={set("address")} disabled={!editMode} />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Bank Account Number" value={form.bankAccount} onChange={set("bankAccount")} disabled={!editMode} />
              <Field label="Experience"          value={form.experience}  onChange={set("experience")}  disabled={!editMode} />
            </div>

            {/* NID */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-gray-700">
                NID or Driving License
              </label>
              <div className="flex overflow-hidden rounded-lg border border-gray-200">
                <button
                  disabled={!editMode}
                  onClick={() => nidRef.current?.click()}
                  className={cn(
                    "shrink-0 bg-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition sm:px-4",
                    editMode ? "hover:bg-gray-300" : "cursor-not-allowed opacity-60"
                  )}
                >
                  Choose File
                </button>
                <span className="flex-1 truncate px-3 py-2.5 text-sm text-gray-500 sm:px-4">
                  {nidFileName}
                </span>
              </div>
              <input
                ref={nidRef}
                type="file"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setNidFileName(f.name);
                }}
              />
            </div>
          </>
        )}

        {role === "user" && (
          <Field label="Address" value={form.address} onChange={set("address")} disabled={!editMode} />
        )}

        <div className="flex justify-end pt-1">
          <button
            onClick={handleSave}
            disabled={!editMode || saving}
            className={cn(
              "w-full rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition sm:w-auto",
              editMode
                ? "bg-blue-700 hover:bg-blue-800 shadow-sm"
                : "cursor-not-allowed bg-blue-300"
            )}
          >
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}