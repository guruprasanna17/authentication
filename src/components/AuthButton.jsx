import React from "react";
import "./AuthButton.css";

export default function AuthButton({ text, type = "submit" }) {
  return (
    <button type={type} className="auth-button">
      {text}
    </button>
  );
}

