import "./styles.css";

import { useToast } from "./useToast";
import ToastContainer from "./ToastContainer";

function App() {
  const { toasts, showToast, dismissToast } = useToast();

  return (
    <main className="app">
      <section className="demo-card">
        <span className="eyebrow">REACT MACHINE CODING</span>
        <h1>Toast Notification System</h1>
        <p className="subtitle">
          Click a button to trigger a notification.
          Each toast disappears automatically after 3 seconds.
        </p>

        <div className="button-group">
          <button
            className="demo-btn success-btn"
            onClick={() =>
              showToast("Profile updated successfully!", "success")
            }
          >
            Show Success
          </button>

          <button
            className="demo-btn error-btn"
            onClick={() =>
              showToast(
                "Something went wrong. Please try again.",
                "error"
              )
            }
          >
            Show Error
          </button>

          <button
            className="demo-btn info-btn"
            onClick={() =>
              showToast("A new update is available.", "info")
            }
          >
            Show Info
          </button>

          <button
            className="demo-btn custom-btn"
            onClick={() =>
              showToast(
                "This notification stays for 6 seconds.",
                "info",
                6000
              )
            }
          >
            Show 6-Second Toast
          </button>
        </div>

        <div className="demo-footer">
          Active notifications: {toasts.length}
        </div>
      </section>

      <ToastContainer
        toasts={toasts}
        onClose={dismissToast}
      />
    </main>
  );
}

export default App;

