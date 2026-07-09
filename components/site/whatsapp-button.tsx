import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779805835865"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

