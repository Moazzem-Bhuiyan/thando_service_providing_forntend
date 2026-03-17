/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import FormWrapper from "@/components/form-components/FormWrapper";
import UInput from "@/components/form-components/UInput";

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = async (data: any) => {
    try {
      console.log("Change Password Data:", data);
      // TODO: call your API to change password
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl border border-gray-200 rounded-lg p-14 mx-auto">
<div className="mb-6 border p-5 rounded">
            <h1 className="text-xl font-bold">Security</h1>
        <p>Update your password to keep your account secure.</p>
</div>
      <FormWrapper onSubmit={onFormSubmit}>
        <div className="space-y-4">
          {/* Current Password */}
          <UInput
            name="currentPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Current Password"
            className="px-3 py-5"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* New Password */}
          <UInput
            name="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="px-3 py-5"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Confirm New Password */}
          <UInput
            name="confirmNewPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            className="px-3 py-5"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold px-4 py-3 rounded hover:bg-blue-600 cursor-pointer transition"
          >
            Update Password
          </button>
        </div>
      </FormWrapper>
    </div>
  );
};

export default ChangePasswordForm;