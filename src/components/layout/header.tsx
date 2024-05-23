import { useEffect, useState } from "react";
import Logo from "../../common/logo";
import { MenuType } from "../../models/menuModel";
import { DarkModeIcons, LightModeIcon } from "../../common/darkModeIcons";
import { GithubDark, GithubLight } from "../../common/githubIcons";

export default function Header() {
  const menuLink: MenuType[] = [
    {
      title: "Docs",
      url: "/docs",
    },
    {
      title: "Components",
      url: "/components",
    },
    {
      title: "Blog",
      url: "/blogs",
    },
    {
      title: "Showcase",
      url: "/showcase",
    },
  ];

  const [isCurrentDarkmode, setIsCurrentDarkmode] = useState<boolean>(() => {
    const darkModeWasSet = localStorage.getItem("darkmode");
    if (darkModeWasSet) return true;
    else return false;
  });
  const toggleDarkMode = () => {
    setIsCurrentDarkmode((prevState: unknown) => !prevState);
  };

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    if (isCurrentDarkmode) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "true");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#0f172a");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("darkmode");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#e2e8f0");
    }
  }, [isCurrentDarkmode]);

  return (
    <header>
      <section className="relative w-full pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
        <article className="flex w-full items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <div className="flex items-center gap-x-8 border-r border-slate-200 dark:border-slate-800 pr-6">
              {menuLink.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.url}
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
            <div className="flex pl-6 gap-x-6 items-center">
              <span
                className="hidden dark:inline cursor-pointer"
                onClick={toggleDarkMode}
              >
                <DarkModeIcons />
              </span>
              <span
                className=" dark:hidden cursor-pointer"
                onClick={toggleDarkMode}
              >
                <LightModeIcon />
              </span>
              <span className=" dark:hidden cursor-pointer">
                <a href="https://github.com/nishantchy842">
                  <GithubDark />
                </a>
              </span>
              <span className=" hidden dark:inline cursor-pointer">
                <a href="https://github.com/nishantchy842">
                  <GithubLight />
                </a>
              </span>
            </div>
          </div>
        </article>
      </section>
    </header>
  );
}
