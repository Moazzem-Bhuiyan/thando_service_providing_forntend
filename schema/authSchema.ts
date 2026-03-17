// authValidationSchema.ts
import { passwordRegex } from "@/utils/commonRegex";
import * as z from "zod";

// ------------------- Login Schema -------------------
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;

// ------------------- Sign Up Schema -------------------
export const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(passwordRegex, {
        message:
          "Minimum 6 characters with a combination of capital letters, small letters, numbers, and special characters",
      }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    termsCheckbox: z.boolean().refine((v) => v === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom", // ✅ Required in Zod v3+
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;

// ------------------- Forgot Password Schema -------------------
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

// ------------------- Set New Password Schema -------------------
export const setNewPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters long" })
      .regex(passwordRegex, {
        message:
          "Minimum 6 characters with a combination of capital letters, small letters, numbers, and special characters",
      }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export type SetNewPasswordFormValues = z.infer<typeof setNewPasswordSchema>;

// ------------------- Reset Password Schema -------------------
export const resetPasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: "Old password is required" }),
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters long" })
      .regex(passwordRegex, {
        message:
          "Minimum 6 characters with a combination of capital letters, small letters, numbers, and special characters",
      }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

// ------------------- Export all schemas together -------------------
export const authValidationSchema = {
  loginSchema,
  signUpSchema,
  forgotPasswordSchema,
  setNewPasswordSchema,
  resetPasswordSchema,
};