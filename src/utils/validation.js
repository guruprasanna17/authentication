import React from "react";

export function validateEmail(email) {
  if (!email) {
    return "Email is required";
  }
  if (!email.includes("@")) {
    return "Please enter a valid email";
  }
  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  return "";
}