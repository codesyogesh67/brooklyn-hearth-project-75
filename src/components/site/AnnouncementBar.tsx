import { Link } from "@tanstack/react-router";
import { ANNOUNCEMENT } from "@/lib/images";

export function AnnouncementBar() {
  return (
    <Link
      to="/seasonal"
      className="block w-full bg-[#C8A96E] text-[#0F0F0F] text-center"
      style={{ height: 36, lineHeight: "36px" }}
    >
      <span className="text-[12px] font-medium uppercase tracking-[0.1em]">
        {ANNOUNCEMENT} →
      </span>
    </Link>
  );
}
