import React, { useState } from "react";
import "./_categoriesFilter.scss";

const keywords = [
  "All",
  "React js",
  "Vue Js",
  "Android",
  "Sitcoms",
  "IOS",
  "Consumer Electronics",
  "JavaScript",
  "Computer Programming",
  "Redux",
  "Gaming",
  "Nvidia RTX",
  "Football",
  "Cryptocurrency",
  "Music",
  "Benchmarks",
  "Routers",
];

const CategoriesFilter = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  const scrollContainer = document.querySelector("div");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  return (
    <div className="categories__filter">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesFilter;
