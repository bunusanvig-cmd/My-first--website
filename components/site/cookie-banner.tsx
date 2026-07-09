"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "digital-dk-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(COOKIE_KEY) !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl">
      <p className="text-sm leading-6 text-white/75">
        We use cookies to improve the experience and understand how visitors interact with the site.
      </p>
      <div className="mt-4 flex gap-3">
        <Button
          onClick={() => {
            window.localStorage.setItem(COOKIE_KEY, "accepted");
            setVisible(false);
          }}
        >
          Accept
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            window.localStorage.setItem(COOKIE_KEY, "declined");
            setVisible(false);
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  );
}

