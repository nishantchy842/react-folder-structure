import Card from "../../components/card";
import { CardType } from "../../models/cardModel";

export const Testimonial = () => {
  const dataFirst: CardType[] = [
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "I feel like an idiot for not using Tailwind CSS until now.",
    },
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "I feel like an idiot for not using Tailwind CSS until now.",
    },
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "I feel like an idiot for not using Tailwind CSS until now.",
    },
  ];

  const dataSecond: CardType[] = [
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
    },
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.",
    },
    {
      image: "",
      name: "Ryan Florence",
      position: "Remix & React Training",
      desc: "I feel like an idiot for not using Tailwind CSS until now.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <article className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-8">
          {dataFirst.map((item) => (
            <Card data={item} key={item.name} />
          ))}
        </div>
        <div className="space-y-8">
          {dataSecond.map((item) => (
            <Card data={item} key={item.name} />
          ))}
        </div>
        <div className="space-y-8">
          {dataFirst.map((item) => (
            <Card data={item} key={item.name} />
          ))}
        </div>
      </article>
    </section>
  );
};
