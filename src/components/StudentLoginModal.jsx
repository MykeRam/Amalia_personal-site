import React, { useEffect, useRef, useState } from "react";
import "./StudentLoginModal.css";

function StudentLoginModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const emailInputRef = useRef(null);
  const helpEmail = import.meta.env.VITE_STUDENT_LOGIN_HELP_EMAIL;

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setMessage("");
      return;
    }

    const timer = window.setTimeout(() => {
      emailInputRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
    }
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Enter your student email to continue.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");
      await onSubmit(normalizedEmail);
      setStatus("success");
      setMessage("If that email is approved, we sent a login link.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the login link.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="student-login-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="student-login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-login-title"
        aria-describedby="student-login-description"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="student-login-modal-header">
          <div>
            <p className="student-login-eyebrow">Student Access</p>
            <h2 id="student-login-title">Log in by email</h2>
          </div>
          <button className="student-login-close" type="button" onClick={onClose} aria-label="Close login modal">
            Close
          </button>
        </div>

        <p id="student-login-description" className="student-login-copy">
          Enter your approved student email and we will send you a passwordless login link.
        </p>

        <p className="student-login-help-link-wrap">
          <a
            className="student-login-help-link"
            href={helpEmail ? `mailto:${helpEmail}` : undefined}
            aria-disabled={helpEmail ? undefined : "true"}
            tabIndex={helpEmail ? undefined : -1}
          >
            If you are a student, but are not able to login, please send me a message!
          </a>
        </p>

        <form className="student-login-form" onSubmit={handleSubmit}>
          <label className="student-login-label" htmlFor="student-email">
            Student email
          </label>
          <input
            ref={emailInputRef}
            id="student-email"
            className="student-login-input"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={status === "loading"}
            required
          />

          <p className="student-login-helper">
            Only approved student emails can receive a link.
          </p>

          {message ? (
            <p className={`student-login-status is-${status}`} role={status === "error" ? "alert" : "status"}>
              {message}
            </p>
          ) : null}

          <button className="student-login-submit" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending link..." : "Send login link"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentLoginModal;
