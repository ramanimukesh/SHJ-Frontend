/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Navy/blue, derived from the logo rather than chosen separately:
        // brand-950 IS the mark's lower plane (#0a1f3f), so the dark canvas and
        // the logo are literally the same colour instead of two near-misses.
        // Replaces the previous indigo ramp, which disagreed with the identity.
        // 600 keeps the old ramp's contrast guarantee (6.87:1 on white vs 7.10).
        brand: {
          50: "#f2f7fc",
          100: "#e3eefa",
          200: "#c2d9f2",
          300: "#93bce8", // 8.3:1 on the dark canvas — safe for text there
          400: "#5b97d8",
          500: "#2f75c2", // 4.7:1 — links and hover on white
          600: "#1a5aa6", // primary action — 6.9:1 on white, same under white text
          700: "#164a88",
          800: "#153c6c",
          900: "#152f52",
          950: "#0a1f3f", // dark canvas === the logo's navy plane
        },

        // The logo's cyan. Deliberately NOT a text colour on light grounds:
        // accent-500 is only 2.5:1 on white, so it is for fills, rules, marks
        // and dark-ground accents. Use 700 (5.5:1) if it must carry small text.
        accent: {
          50: "#eafafd",
          100: "#cbf2f9",
          200: "#98e5f2",
          300: "#5bd2e6", // 9.2:1 on the dark canvas — links on navy
          400: "#22bcd6",
          500: "#0fb5ce", // the mark's upper plane
          600: "#0a90a6",
          700: "#0c7385", // 5.5:1 on white — the text-safe step
          800: "#105c6b",
          900: "#124c59",
          950: "#06313b",
        },

        // Kept under its original name so existing markup resolves, but it is a
        // true amber now instead of fuchsia. Reserved for genuine highlights;
        // the primary CTA is brand, so this no longer competes with it.
        gold: {
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
        },

        // Page ground: a cool off-white, so light bands sit in the same family
        // as the indigo rather than fighting it with a warm cast.
        paper: "#f7f9fc",

        // Cool neutral ramp. The previous greys were warm (#8d8b85 et al), which
        // muddied against a cool primary and — more importantly — put the common
        // label tone at 3.0:1 on white. Every step here is a known quantity:
        // 500 is 4.9:1 and 600 is 7.5:1, so body and secondary text both pass AA.
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8", // decorative only — 2.8:1, never for text on white
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        // Form validation. Pulled into the palette so success/error styling is a
        // token decision rather than each page reaching for raw red-500.
        success: { 50: "#ecfdf5", 500: "#10b981", 600: "#059669", 700: "#047857" },
        danger: { 50: "#fef2f2", 200: "#fecaca", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c" },
      },

      fontFamily: {
        // Two families only. Inter for everything read or operated — built for
        // UI at small sizes, which is what forms and dense text need. Space
        // Grotesk carries the headings: geometric enough to feel technical,
        // warm enough not to read as a crypto site. The previous Plus Jakarta
        // Sans and the JetBrains Mono used for numerals are gone; tabular
        // figures in the display face do the numeral job now.
        display: ['"Space Grotesk"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],

        // The wordmark only — the one exception to the two-family rule, because
        // the logo is fixed artwork, not typography. Jost is geometric (Futura
        // lineage), which is what the mark was drawn in; keeping it off
        // `display` means the lockup does not drift when the heading face
        // changes, as it just did.
        logo: ["Jost", '"Century Gothic"', "Futura", '"Avenir Next"', "ui-sans-serif", "sans-serif"],
      },

      // Sizes drop roughly a step from the previous scale and the extreme
      // negative tracking is relaxed: -0.035em at 4.5rem was tightening into
      // collisions, and oversized headings are the loudest "template" tell.
      fontSize: {
        // 40px on a phone, 60px on a desktop, 64px on a wide one; H2 32→44.
        // Space Grotesk sets wider than Plus Jakarta did, so the negative
        // tracking is eased a step to keep counters from closing up.
        display: [
          "clamp(2.5rem, 4.6vw + 1rem, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        h2: [
          "clamp(2rem, 2.4vw + 1rem, 2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h3: ["clamp(1.375rem, 0.6vw + 1rem, 1.625rem)", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        lead: ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.65" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "600" }],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },

      // One shared radius for cards, buttons and inputs, plus a larger one for
      // full-width panels. Previously cards were 3px, inputs 8px and chips fully
      // round — three radius languages visible in a single screenshot.
      borderRadius: {
        surface: "10px",
        panel: "16px",
      },

      // Shadows are for separation, not drama. The old `lift` was a 64px blur at
      // 40% opacity, which put a dark smear under every card on hover.
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06)",
        lift: "0 8px 24px -6px rgba(15,23,42,.12), 0 2px 6px rgba(15,23,42,.05)",
        panel: "0 16px 40px -12px rgba(15,23,42,.16)",
        // Focus ring, reused by buttons and inputs so focus looks like one idea.
        focus: "0 0 0 4px rgba(26,90,166,.18)",
        "focus-danger": "0 0 0 4px rgba(239,68,68,.14)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,.06)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: 0, transform: "translateY(16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up .5s cubic-bezier(.16,1,.3,1) both",
        marquee: "marquee 42s linear infinite",
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
