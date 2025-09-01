import React from "react";

const CheckIcon = ({ white }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="w-4 h-4 flex-shrink-0"
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke={"#ffffff"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GreenDot = () => (
  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
);

const Card = ({ title, description, price, features, dark, hasSprintInfo }) => (
  <div
    className={`flex-1 max-w-md p-8 sm:p-12 rounded-[40px] sm:rounded- shadow-xl shadow-gray-300/30
    flex flex-col gap-2 sm:gap-4 items-center text-center ${
      dark ? "bg-black text-gray-100" : "bg-white text-gray-900"
    }`}
  >
    <h3 className="text-2xl sm:text-3xl font-normal">{title}</h3>
    <p
      className={`${
        dark ? "text-gray-400" : "text-gray-600"
      } text-sm sm:text-base leading-relaxed px-2 sm:px-0`}
    >
      {description}
    </p>

    {hasSprintInfo && (
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm sm:text-base text-gray-300">
          Design Tool sprint
        </span>
        <div className="flex items-center gap-2">
          <GreenDot />
          <span className="text-sm sm:text-base text-gray-300">
            Available in Sep
          </span>
        </div>
      </div>
    )}

    {price && (
      <div className="flex flex-col gap-1 pt-1 sm:pt-3">
        <span className="text-base sm:text-base text-gray-500">1:1 call</span>
        <div>
          <span className="text-3xl sm:text-4xl">${price}</span>
          <span
            className={`${
              dark ? "text-gray-400" : "text-gray-600"
            } text-base sm:text-lg`}
          >
            /h
          </span>
        </div>
      </div>
    )}

    <button
      className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 transition text-sm sm:text-base font-medium min-w-[00px] sm:min-w-[340px] ${
        dark
          ? "border-white text-white hover:bg-white/10"
          : "border-gray-900 text-gray-900 hover:bg-gray-50"
      }`}
    >
      {dark ? "Request quote via mail" : "Book a call"}
    </button>

    <div
      className={`pt-4 sm:pt-5 border-t border-dashed ${
        dark ? "border-gray-800" : "border-gray-100"
      } w-full`}
    >
      <h4
        className={`text-sm sm:text-base font-semibold ${
          dark ? "text-gray-100" : "text-gray-700 text-start mb-3 sm:mb-4 "
        }`}
      >
        {dark ? "" : "Topics I can help you with"}
      </h4>
      <ul className="text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <div className="mt-1">
              <CheckIcon white={dark} />
            </div>
            <span
              className={`${
                dark ? "text-stone-300" : "text-gray-600"
              } text-xs sm:text-base leading-relaxed`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function Services() {
  return (
    <section
      id="services"
      className="mx-auto px-4 sm:px-6 pt-16 sm:pt-28 pb-8 sm:pb-10 min-h-screen scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">
        Services
      </h2>
      <div className="bg-gray-100 rounded-2xl py-8 sm:py-14 flex flex-col lg:flex-row gap-8 sm:gap-12 justify-center items-center lg:items-start sm:px-8 lg:px-32">
        <Card
          title="Mentoring"
          description="Stuck on your design journey and in need of clarity? Contact me whenever you're ready."
          price={7}
          features={[
            "Where to start in Design",
            "Audience & Networking",
            "Documenting your Journey",
            "How to upskill with a 9-5",
            "Design Process & Communication",
          ]}
        />
        <Card
          title="Design Services"
          description="Ready to bring your vision to life and turn visitors into customers? Let's build something great."
          dark
          hasSprintInfo
          features={[
            "Dashboard, Mobile App, Product Strategy",
            "One of 2 clients at a time for max focus",
            "One of 2 clients at a time for max focus",
            "Milestone-based delivery (10-14 days)",
            "Unlimited, review-based revisions",
            "2 updates per week.",
            "Communication via Slack (or of your choice)",
            "Figma only design starting at $100",
          ]}
        />
      </div>
    </section>
  );
}

export default Services;
