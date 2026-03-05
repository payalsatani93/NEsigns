import { motion } from "framer-motion";

const tags = [
  {
    label: "Effective result",
    color: "text-amber-500",
    border: "border-amber-400",
    style: { top: "85px", left: "25px" },
  },
  {
    label: "Profitable",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { top: "55px", right: "35px" },
  },
  {
    label: "Impactful ranking",
    color: "text-purple-500",
    border: "border-purple-300",
    style: { top: "135px", left: "135px" },
  },
  {
    label: "Strategic",
    color: "text-neutral-800",
    border: "border-neutral-300",
    style: { bottom: "40px", left: "20px" },
  },
  {
    label: "Personalized",
    color: "text-pink-500",
    border: "border-pink-400",
    style: { bottom: "40px", right: "30px" },
  },
];

export default function DirectMailFAQ() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6 relative">

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full">
          <motion.div
            className="w-[2px] h-full bg-gradient-to-b from-yellow-400 via-yellow-400/60 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* ===== ROWS ===== */}
        <div className="space-y-32">

  {/* ================= ROW 1 ================= */}
  <div className="grid lg:grid-cols-[1fr_120px_1fr] gap-10 items-center">

    {/* LEFT IMAGE */}
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <img
        src="/images/directmailing/WhyDM_1.png"
        className="rounded-xl w-full h-[350px] object-cover"
      />
    </div>

    {/* CENTER */}
    <div className="hidden lg:flex justify-center relative">
      <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
      <img
        src="/images/directmailing/Dash_Arrow_Right.png"
        className="absolute right-0 w-24"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl xl:text-[60px] mb-6">
        What is direct marketing?
      </h2>
      <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
        Direct marketing delivers measurable results by targeting specific
        customer segments.
      </p>
      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-7 py-3 rounded-full w-fit">
        Contact Now →
      </button>
    </div>
  </div>

  {/* ================= ROW 2 ================= */}
  <div className="grid lg:grid-cols-[1fr_120px_1fr] gap-10 items-center">

    {/* LEFT TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl xl:text-[60px] mb-6">
        Why choose direct marketing?
      </h2>
      <p className="text-neutral-400 text-lg leading-relaxed">
        Direct marketing targets specific audiences with personalized messaging
        and measurable ROI.
      </p>
    </div>

    {/* CENTER */}
    <div className="hidden lg:flex justify-center relative">
      <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
      <img
        src="/images/directmailing/Dash_Arrow_Right.png"
        className="absolute left-0 w-24 rotate-180"
      />
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white rounded-2xl p-8 shadow-xl text-black max-w-md">
      <h3 className="font-bold text-xl mb-6">
        Targeted Mail Pros
      </h3>

      <div className="relative h-56">
        {tags.map(({ label, color, border, style }, i) => (
          <motion.span
            key={label}
            className={`absolute px-4 py-1.5 text-xs rounded-lg font-semibold bg-[#D9D9D933] ${color} ${border}`}
            style={style}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  </div>

  {/* ================= ROW 3 (THE MISSING ONE) ================= */}
  <div className="grid lg:grid-cols-[1fr_120px_1fr] gap-10 items-center">

    {/* LEFT SERVICES LIST */}
    <div className="space-y-4">
      {[
        "Email marketing",
        "Cards and invitations",
        "Postcards",
        "ePublications",
        "Promotional items",
        "Mobile marketing",
      ].map((item) => (
        <div
          key={item}
          className="bg-white text-black rounded-xl p-4 shadow-lg"
        >
          {item}
        </div>
      ))}
    </div>

    {/* CENTER */}
    <div className="hidden lg:flex justify-center relative">
      <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
      <img
        src="/images/directmailing/Dash_Arrow_Right.png"
        className="absolute right-0 w-24"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl xl:text-[60px] mb-6">
        How can NE signs help me build a campaign?
      </h2>

      <ul className="space-y-3 text-neutral-400 mb-6">
        <li>✔ Identify your ideal target market</li>
        <li>✔ Build and manage a strong customer database</li>
        <li>✔ Create the right message for your audience</li>
        <li>✔ Print and distribute marketing materials</li>
        <li>✔ Track and measure campaign performance</li>
      </ul>

      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-7 py-3 rounded-full w-fit">
        Contact Now →
      </button>
    </div>
  </div>

  {/* ================= ROW 4 ================= */}
  <div className="grid lg:grid-cols-[1fr_120px_1fr] gap-10 items-center">

    {/* LEFT TEXT */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl xl:text-[60px] mb-6">
        Grow Your Business
      </h2>
      <p className="text-neutral-400 text-lg mb-6">
        Leverage targeted marketing strategies to reach the right audience and
        drive measurable growth.
      </p>
      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-7 py-3 rounded-full w-fit">
        Contact Now →
      </button>
    </div>

    {/* CENTER */}
    <div className="hidden lg:flex justify-center relative">
      <div className="w-4 h-4 bg-amber-400 rounded-full z-20" />
      <img
        src="/images/directmailing/Dash_Arrow_Right.png"
        className="absolute left-0 w-24 rotate-180"
      />
    </div>

    {/* RIGHT STACKED IMAGE CARD */}
    <div className="bg-white rounded-2xl p-6 shadow-xl space-y-6">
      <img
        src="/images/directmailing/WhyDM_2.png"
        className="rounded-xl w-full h-[280px] object-cover"
      />
      <img
        src="/images/directmailing/WhyDM_1.png"
        className="rounded-xl w-full h-[280px] object-cover"
      />
    </div>
  </div>

</div>
      </div>
    </section>
  );
}