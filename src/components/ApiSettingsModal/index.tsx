import React, { useState, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useApiConfig } from "@site/src/context/ApiConfigContext";
import { KeyIcon, CloseIcon, EyeIcon, EyeOffIcon } from "@site/src/components/Icons";
import styles from "./styles.module.css";

export function ApiSettingsModal(): ReactNode {
  const {
    baseUrl,
    setBaseUrl,
    apiKey,
    setApiKey,
    isModalOpen,
    closeModal,
  } = useApiConfig();

  const [localBaseUrl, setLocalBaseUrl] = useState<string>(baseUrl);
  const [localApiKey, setLocalApiKey] = useState<string>(apiKey);
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  useEffect(() => {
    if (isModalOpen) {
      setLocalBaseUrl(baseUrl);
      setLocalApiKey(apiKey);
      setShowApiKey(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
      if (e.key === "Enter") {
        handleSave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, localBaseUrl, localApiKey]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    closeModal();
  };

  const handleSave = () => {
    setBaseUrl(localBaseUrl);
    setApiKey(localApiKey);
    closeModal();
  };

  if (!isMounted || !isModalOpen) {
    return null;
  }

  const modalElement = (
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.dialog}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <div className={styles.iconBadge}>
              <KeyIcon />
            </div>
            <span>API Credentials</span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Form Body */}
        <div className={styles.content}>
          {/* API URL */}
          <div className={styles.formGroup}>
            <label className={styles.labelRow} htmlFor="api-url-input">
              <span>API URL</span>
            </label>
            <input
              id="api-url-input"
              type="text"
              className={styles.textInput}
              value={localBaseUrl}
              placeholder="https://api.yourdomain.com"
              onChange={(e) => setLocalBaseUrl(e.target.value)}
            />
          </div>

          {/* API Key */}
          <div className={styles.formGroup}>
            <label className={styles.labelRow} htmlFor="api-key-input">
              <span>API Key (x-api-key)</span>
            </label>
            <div className={styles.inputWithAction}>
              <input
                id="api-key-input"
                type={showApiKey ? "text" : "password"}
                className={styles.textInput}
                value={localApiKey}
                placeholder="Paste your API key here..."
                onChange={(e) => setLocalApiKey(e.target.value)}
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="button"
                className={styles.inputActionBtn}
                onClick={() => setShowApiKey((prev) => !prev)}
                aria-label={showApiKey ? "Hide API key" : "Show API key"}
                title={showApiKey ? "Hide API key" : "Show API key"}
              >
                {showApiKey ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.ghostBtn}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}

export default ApiSettingsModal;
