
import { useCallback, useEffect, useRef, useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());
  const nextIdRef = useRef(1);

  const dismissToast = useCallback((id) => {
    const timer = timersRef.current.get(id);

    if (timer !== undefined) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }

    setToasts((current) =>
      current.filter((toast) => toast.id !== id)
    );
  }, []);

  const showToast = useCallback(
    (message, type = "info", duration = 3000) => {
      const id = nextIdRef.current++;

      const newToast = {
        id,
        message,
        type,
      };

      setToasts((current) => [...current, newToast]);

      if (duration > 0) {
        const timer = setTimeout(() => {
          timersRef.current.delete(id);

          setToasts((current) =>
            current.filter((toast) => toast.id !== id)
          );
        }, duration);

        timersRef.current.set(id, timer);
      }

      return id;
    },
    []
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => {
        clearTimeout(timer);
      });

      timersRef.current.clear();
    };
  }, []);

  return {
    toasts,
    showToast,
    dismissToast,
  };
}
