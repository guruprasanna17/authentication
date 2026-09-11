import React from "react";
import { Link } from "react-router-dom";
import "./SignOut.css";

export default function SignOut() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign Out</h1>
        <p>Are you sure you want to sign out?</p>

        <Link to="/" className="auth-button">
          Sign Out
        </Link>
      </div>
    </div>
  );
}

 