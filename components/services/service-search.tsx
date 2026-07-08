"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { services } from "@/constants/services";

const rotating = [
  "wash & fold",
  "dry cleaning",
  "steam ironing",
  "shoe cleaning",
  "curtains & drapes",
  "blankets & bedding",
];

export function ServiceSearch() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [focused, setFocused] = useState(false);

  const idx = useRef(0);
  const char = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    if (focused || value) {
      setPlaceholder("Search a service…");
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = rotating[idx.current];
      if (!deleting.current) {
        char.current++;
        setPlaceholder("Search for " + word.slice(0, char.current));
        if (char.current === word.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
      } else {
        char.current--;
        setPlaceholder("Search for " + word.slice(0, char.current));
        if (char.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % rotating.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 45 : 90);
    };
    timeout = setTimeout(tick, 300);
    return () => clearTimeout(timeout);
  }, [focused, value]);

  const matches = value
    ? services.filter((s) =>
        s.title.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  const submit = () => {
    if (matches.length > 0) {
      router.push("/book");
    }
  };

  return (
    <div className="relative mt-8 w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 px-5 py-3 shadow-lg shadow-primary/5 backdrop-blur focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          onClick={submit}
          className="hidden shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:block"
        >
          Search
        </button>
      </div>

      {focused && value && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-card text-left shadow-xl">
          {matches.length > 0 ? (
            matches.map((s) => (
              <button
                key={s.slug}
                onMouseDown={() => router.push("/book")}
                className="flex w-full items-center justify-between px-5 py-3 text-sm transition-colors hover:bg-accent"
              >
                <span className="font-medium">{s.title}</span>
                <span className="text-xs text-primary">from {s.priceFrom}</span>
              </button>
            ))
          ) : (
            <p className="px-5 py-3 text-sm text-muted-foreground">
              No match — <span className="font-medium text-foreground">book a custom pickup</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
