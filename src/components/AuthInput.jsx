import React from "react";
import "./AuthInput.css";

export default function AuthInput({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="auth-input"
    />
  )
}

 