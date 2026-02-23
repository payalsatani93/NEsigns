import {
  Mail,
  CreditCard,
  Image,
  BookOpen,
  Gift,
  Smartphone,
  Check,
  Gem,
} from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email marketing",
    desc: "Reach inboxes Drive real results",
  },
  {
    icon: CreditCard,
    title: "Cards and invitations",
    desc: "Custom cards crafted to impress",
  },
  {
    icon: Image,
    title: "Postcards",
    desc: "Small format Big impact",
  },
  {
    icon: BookOpen,
    title: "ePublications",
    desc: "Publish smarter Reach wider",
  },
  {
    icon: Gift,
    title: "Promotional items",
    desc: "Make your logo go further",
  },
  {
    icon: Smartphone,
    title: "Mobile marketing",
    desc: "Marketing that moves",
  },
];

{
  /* Services Grid */
}
const hoverColors = [
  "hover:bg-[#311B9280]",
  "hover:bg-[#D81B60B2]",
  "hover:bg-[#0085FF]",
  "hover:bg-[#DA5251]",
  "hover:bg-[#D7A700]",
  "hover:bg-[#73AE43]",
];

const steps = [
  "Identify your ideal target market",
  "Build and manage a strong customer database",
  "Create the right message for your audience",
  "Print and distribute marketing materials",
  "Track and measure campaign performance",
];

export default function DirectMailFAQ() {
  return (
    <div>
      
      {/* Header */}
      <div className="container flex flex-col items-center mb-12 relative">
        <div className="flex gap-2 mb-4 items-center">
          <Gem className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
            Common Questions
          </span>
        </div>

        <h2 className="text-white font-extrabold text-3xl lg:text-5xl leading-tight max-w-3xl">
          Everything You're Wondering
          <br />
          About this Services
        </h2>
      </div>

      {/* FAQ Cards */}
      <div className="container flex flex-col lg:flex-row gap-4 mb-14 relative">

          {/* ── Decorative Concentric Circles top-right ── */}
      <div className="absolute -top-18 -right-10 w-40 h-40 hidden 2xl:block pointer-events-none">
        {[32, 56, 80, 108, 136].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[var(--color-gradient)]"
            style={{
              width: size,
              height: size,
              top: (136 - size) / 2,
              right: (136 - size) / 2,
            }}
          />
        ))}
      </div>
      {/* Curved arrow decoration */}
      <div className="absolute -bottom-3 -right-10 hidden 2xl:block pointer-events-none">
       <img src="/images/directmailing/TwistArrow_Vactor.png" alt="" />
      </div>
        {/* Orange Card */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 lg:w-100 shrink-0 flex flex-col gap-4">
          <h3 className="font-extrabold text-xl leading-snug">
            What is direct marketing?
          </h3>
          <p className="text-sm leading-relaxed">
            Direct marketing delivers measurable results by targeting specific
            customer segments. Each campaign features actionable messaging and
            performance insights to help you track engagement and return on
            investment.
          </p>
        </div>

        {/* White Card */}
        <div className="bg-white text-black rounded-2xl p-8 flex-1">
          <h3 className=" font-bold text-xl mb-6">
            How can NE Signs help me build a campaign?
          </h3>

          <ul className="flex flex-col gap-4">
            {steps.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-neutral-800 text-sm"
              >
                <Check className="w-5 h-5 mt-0.5" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <div className="containers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={title}
            className={`bg-white rounded-2xl px-6 py-6 flex items-start gap-4
                  transition-all duration-300 cursor-pointer group
                  shadow-sm hover:shadow-xl
                  ${hoverColors[index % hoverColors.length]}`}
          >
            {/* Icon */}
            <div
              className="p-3 rounded-xl
                      transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-neutral-700 group-hover:text-white" />
            </div>

            {/* Content */}
            <div>
              <p
                className="text-neutral-900 font-semibold text-sm 
                      transition-colors duration-300 
                      group-hover:text-white"
              >
                {title}
              </p>
              <p
                className="text-neutral-500 text-xs mt-1 
                      transition-colors duration-300 
                      group-hover:text-white/90"
              >
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
