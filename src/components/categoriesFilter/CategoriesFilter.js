import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
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

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

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
