import React from "react";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="w-4 h-4"
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="#22c55e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Card = ({ title, description, price, features, dark }) => (
  <div
    className={`flex-1 max-w-md p-12 rounded-[60px] shadow-xl shadow-gray-300/30
    flex flex-col gap-6 items-center text-center ${
      dark ? "bg-black text-gray-100" : "bg-white text-gray-900"
    }`}
  >
    <h3 className="text-3xl font-normal">{title}</h3>
    <p className={`${dark ? "text-gray-400" : "text-gray-600"} text-base`}>
      {description}
    </p>

    {price && (
      <div className="flex items-end gap-1">
        <span className="text-4xl">${price}</span>
        <span className={`${dark ? "text-gray-400" : "text-gray-600"}`}>
          /h
        </span>
      </div>
    )}

    <button
      className={`px-8 py-3 rounded-lg border-2 transition ${
        dark
          ? "border-white text-white hover:bg-white/10"
          : "border-gray-900 text-gray-900 hover:bg-gray-50"
      }`}
    >
      {dark ? "Request quote via mail" : "Book a call"}
    </button>

    <div
      className={`pt-6 border-t ${
        dark ? "border-gray-800" : "border-gray-100"
      } w-full`}
    >
      <h4
        className={`mb-4 text-base font-semibold ${
          dark ? "text-gray-100" : "text-gray-700"
        }`}
      >
        {dark ? "What’s included" : "Topics I can help you with"}
      </h4>
      <ul className="space-y-3 text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon />
            <span
              className={`${
                dark ? "text-stone-300" : "text-gray-600"
              } text-base`}
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
      className="mx-auto px-6 pt-28 pb-10 min-h-screen scroll-mt-24"
    >
      <h2 className="text-3xl text-gray-900 mb-8">Services</h2>
      <div className="bg-gray-100 rounded-2xl py-14 flex flex-col lg:flex-row gap-12 justify-center items-start px-8 lg:px-32">
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
          features={[
            "Dashboard, Mobile App, Product Strategy",
            "One of 2 clients at a time for max focus",
            "Milestone-based delivery (10-14 days)",
            "Unlimited, review-based revisions",
            "2 updates per week.",
            "Communication via Slack (or your choice)",
            "Figma only design starting at $100",
          ]}
        />
      </div>
    </section>
  );
}

export default Services;
