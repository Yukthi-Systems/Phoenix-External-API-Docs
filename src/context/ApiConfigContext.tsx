import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export const STORAGE_KEY_BASE_URL = "admin_api_base_url";
export const STORAGE_KEY_API_KEY = "admin_api_key";
export const DEFAULT_BASE_URL = "";

interface ApiConfigContextType {
  baseUrl: string;
  setBaseUrl: (url: string) => void;
  apiKey: string;
  setApiKey: (key: string) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  hasApiKey: boolean;
}

const ApiConfigContext = createContext<ApiConfigContextType | null>(null);

function getInitialBaseUrl(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(STORAGE_KEY_BASE_URL) || "";
  } catch {
    return "";
  }
}

function getInitialApiKey(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(STORAGE_KEY_API_KEY) || "";
  } catch {
    return "";
  }
}

export function ApiConfigProvider({ children }: { children: ReactNode }) {
  const [baseUrl, setBaseUrlState] = useState<string>(getInitialBaseUrl);
  const [apiKey, setApiKeyState] = useState<string>(getInitialApiKey);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setBaseUrl = (url: string) => {
    const trimmed = url.trim().replace(/\/+$/, "");
    setBaseUrlState(trimmed);
    try {
      localStorage.setItem(STORAGE_KEY_BASE_URL, trimmed);
    } catch {}
  };

  const setApiKey = (key: string) => {
    const trimmed = key.trim();
    setApiKeyState(trimmed);
    try {
      if (trimmed) {
        localStorage.setItem(STORAGE_KEY_API_KEY, trimmed);
      } else {
        localStorage.removeItem(STORAGE_KEY_API_KEY);
      }
    } catch {}
  };

  return (
    <ApiConfigContext.Provider
      value={{
        baseUrl,
        setBaseUrl,
        apiKey,
        setApiKey,
        isModalOpen,
        openModal: () => setIsModalOpen(true),
        closeModal: () => setIsModalOpen(false),
        hasApiKey: Boolean(apiKey && apiKey.length > 0),
      }}
    >
      {children}
    </ApiConfigContext.Provider>
  );
}

export function useApiConfig(): ApiConfigContextType {
  const context = useContext(ApiConfigContext);
  if (!context) {
    return {
      baseUrl: getInitialBaseUrl(),
      setBaseUrl: (url: string) => {
        try {
          localStorage.setItem(STORAGE_KEY_BASE_URL, url.trim().replace(/\/+$/, ""));
        } catch {}
      },
      apiKey: getInitialApiKey(),
      setApiKey: (key: string) => {
        try {
          if (key) {
            localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
          } else {
            localStorage.removeItem(STORAGE_KEY_API_KEY);
          }
        } catch {}
      },
      isModalOpen: false,
      openModal: () => {},
      closeModal: () => {},
      hasApiKey: Boolean(getInitialApiKey()),
    };
  }
  return context;
}
