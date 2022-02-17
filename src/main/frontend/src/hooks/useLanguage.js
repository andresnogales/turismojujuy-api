import { useState } from "react";

const initialLanguage = "es";

export function useLanguage() {
  const [storedLanguage, setStoredLanguage] = useState(() => {
    try {
      const language = window.localStorage.getItem("language");
      return language ? language : initialLanguage;
    } catch (error) {
      console.log(error);
      return initialLanguage;
    }
  });

  const setValue = (value) => {
    try {
      setStoredLanguage(value);
      window.localStorage.setItem("language", value);
    } catch (error) {
      console.log(error);
    }
  };
  return [storedLanguage, setValue];
}
