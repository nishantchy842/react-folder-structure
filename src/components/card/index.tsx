import { memo } from "react";
import { CardType } from "../../models/cardModel";

function Card({ data }: { data: CardType }) {
  const { name, position, desc } = data;
  return (
    <section className=" flex flex-col bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
      <div className="flex items-center space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/117557072?v=4"
          className="flex-none w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-auto">
          <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
            <span className="absolute inset-0"></span>
            {name}
          </div>
          <div className="mt-0.5 dark:text-slate-400">{position}</div>
        </div>
      </div>
      <div className="mt-6 text-slate-700 dark:text-slate-300">{desc}</div>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Card);
