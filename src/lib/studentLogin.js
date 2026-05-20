const STUDENT_LOGIN_ENDPOINT = import.meta.env.VITE_STUDENT_LOGIN_ENDPOINT;

export async function requestStudentMagicLink({ email, redirectTo }) {
  if (!STUDENT_LOGIN_ENDPOINT) {
    throw new Error("Student login is not configured yet.");
  }

  const response = await fetch(STUDENT_LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      redirectTo
    })
  });

  if (!response.ok) {
    let message = "We could not send the login link right now.";

    try {
      const payload = await response.json();
      if (payload?.error) {
        message = payload.error;
      }
    } catch {
      // Keep the generic message when the server does not return JSON.
    }

    throw new Error(message);
  }

  return response.json().catch(() => ({}));
}
