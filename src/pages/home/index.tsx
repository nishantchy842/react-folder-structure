import { HtmlHTMLAttributes, useContext } from "react";
import { MessageContext } from "../../context/messageContext";

export default function HomePage() {
  const { setMessage } = useContext(MessageContext);

  return (
    <section className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        A utility-first CSS framework packed with classes like{" "}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          flex
        </code>
        ,{" "}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          pt-4
        </code>
        ,{" "}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          text-center
        </code>{" "}
        and{" "}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
          rotate-90
        </code>{" "}
        that can be composed to build any design, directly in your markup.
      </p>
      <div
        className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"
        onClick={() => setMessage({ message: "Welcome", success: true })}
      >
        <button type="button" className="btn">
          Get started
        </button>
        <button
          type="button"
          className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <input
            className="flex-auto h-full dark:bg-slate-800 focus:outline-none dark:hover:bg-slate-700"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              setMessage({
                message: (e.target as HTMLInputElement).value,
                success: true,
              })
            }
          />
          <kbd className="font-sans font-semibold dark:text-slate-500">
            <abbr
              title="Control"
              className="no-underline text-slate-300 dark:text-slate-500"
            >
              Ctrl{" "}
            </abbr>{" "}
            K
          </kbd>
        </button>
      </div>
    </section>
  );
}
