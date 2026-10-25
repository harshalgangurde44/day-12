
const toastConfig = {
    success: {
      icon: "✓",
      title: "Success",
    },
    error: {
      icon: "✕",
      title: "Error",
    },
    info: {
      icon: "i",
      title: "Information",
    },
  };
  
  function Toast({ toast, onClose }) {
    const config = toastConfig[toast.type] || toastConfig.info;
  
    return (
      <div
        className={`toast toast-${toast.type}`}
        role={toast.type === "error" ? "alert" : "status"}
      >
        <span className="toast-icon" aria-hidden="true">
          {config.icon}
        </span>
  
        <div className="toast-content">
          <strong>{config.title}</strong>
          <p>{toast.message}</p>
        </div>
  
        <button
          type="button"
          className="toast-close"
          onClick={() => onClose(toast.id)}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    );
  }
  
  export default Toast;
  