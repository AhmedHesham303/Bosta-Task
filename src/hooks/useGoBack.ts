import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export const useGoBack = (fallbackPath = "/") => {
  const navigate = useNavigate();
  const location = useLocation();
  const entryPathnameRef = useRef<string | null>(null);
  const entryIdxRef = useRef<number | null>(null);
  useEffect(() => {
    if (entryPathnameRef.current === null) {
      entryPathnameRef.current = location.pathname;
      entryIdxRef.current = window.history.state?.idx ?? 0;
    }
  }, [location.pathname]);
  return () => {
    const currentIdx = window.history.state?.idx ?? 0;
    const entryIdx = entryIdxRef.current ?? 0;
    const stepsBack = currentIdx - entryIdx + 1;
    if (stepsBack > 1) {
      navigate(-stepsBack);
    } else if (entryIdx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };
};
