import React from "react";
import Logo from "../../common/logo";

type footerType = {
  label: string;
  list: string[];
};

export default function Footer() {
  const data: footerType[] = [
    {
      label: "Getting Started",
      list: [
        "Installation",
        "Editor Setup",
        "Using with Preprocessors",
        "Optimizing for Production",
        "Browser Support",
        "Upgrade Guide",
      ],
    },
    {
      label: "Core Concepts",
      list: [
        "Utility-First Fundamentals",
        "Handling Hover, Focus, and Other States",
        "Responsive Design",
        "Dark Mode",
        "Reusing Styles",
        "Adding Custom Styles",
        "Functions & Directives",
      ],
    },
    {
      label: "Customization",
      list: [
        "Configuration",
        "Content Configuration",
        "Theme Configuration",
        "Customizing Screens",
        "Customizing Colors",
        "Customizing Spacing",
        "Plugins",
        "Presets",
      ],
    },
    {
      label: "Community",
      list: ["GitHub", "Discord", "Twitter", "YouTube"],
    },
  ];

  return (
    <footer className="py-16 text-sm leading-6">
      <section className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
          {data.map((item) => (
            <div key={item.label} className="lg:flex-none lg:w-1/2">
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">
                {item.label}
              </h2>
              <ul className="mt-3 space-y-2">
                {item.list.map((list) => (
                  <li
                    key={list}
                    className="hover:text-slate-900 dark:hover:text-slate-300 dark:text-slate-400 cursor-pointer"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-10">
          <Logo />
        </div>
      </section>
    </footer>
  );
}
