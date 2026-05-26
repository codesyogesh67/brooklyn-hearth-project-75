import { useEffect, useState } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("pf-cookies")) {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const decide = (v: string) => {
    localStorage.setItem("pf-cookies", v);
    setShow(false);
  };
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#1A1A1A] border-t border-[#2A2A2A] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-[#A0A0A0]">
        We use cookies for analytics. By continuing, you accept our use.
      </p>
      <div className="flex items-center gap-4">
        <button onClick={() => decide("declined")} className="text-sm text-[#A0A0A0] hover:text-white">
          Decline
        </button>
        <button
          onClick={() => decide("accepted")}
          className="bg-[#C8A96E] text-[#0F0F0F] px-5 py-2 text-xs uppercase tracking-wider font-medium"
          style={{ borderRadius: 4 }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
