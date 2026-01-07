import { useState, useEffect } from "react";

function isLocalStorageAvailable() {
  try {
    const x = "__ls_test__";
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch {
    return false;
  }
}

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const lsAvailable =
    typeof window !== "undefined" && isLocalStorageAvailable();
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!lsAvailable) return initialValue;
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const isEqual = (a: T, b: T) => {
    if (Object.is(a, b)) return true;
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!lsAvailable) return;

    const onCustomEvent = (e: Event) => {
      const ev = e as CustomEvent<{ key: string; newValue: string | null }>;
      if (!ev?.detail || ev.detail.key !== key) return;
      try {
        const parsed = ev.detail.newValue
          ? (JSON.parse(ev.detail.newValue) as T)
          : initialValue;
        setStoredValue((prev) => (isEqual(prev, parsed) ? prev : parsed));
      } catch {
        // ignore parse errors
      }
    };

    const onStorageEvent = (e: StorageEvent) => {
      if (e.key !== key) return;
      try {
        const parsed = e.newValue
          ? (JSON.parse(e.newValue) as T)
          : initialValue;
        setStoredValue((prev) => (isEqual(prev, parsed) ? prev : parsed));
      } catch {
        // ignore parse errors
      }
    };

    window.addEventListener("local-storage", onCustomEvent as EventListener);
    window.addEventListener("storage", onStorageEvent);

    return () => {
      window.removeEventListener(
        "local-storage",
        onCustomEvent as EventListener
      );
      window.removeEventListener("storage", onStorageEvent);
    };
  }, [key, lsAvailable, initialValue]);

  const setValue = (value: T | ((prev: T) => T)) => {
    setStoredValue((prev) => {
      const valueToStore = value instanceof Function ? value(prev) : value;
      if (isEqual(prev, valueToStore)) return prev;
      try {
        if (lsAvailable) {
          const serialized = JSON.stringify(valueToStore);
          localStorage.setItem(key, serialized);
          // broadcast within same tab so other hook instances can sync
          window.dispatchEvent(
            new CustomEvent("local-storage", {
              detail: { key, newValue: serialized },
            })
          );
        }
      } catch {
        // ignore write errors
      }
      return valueToStore;
    });
  };

  return [storedValue, setValue] as const;
}
