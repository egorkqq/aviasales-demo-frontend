import React, { Component } from "react";
import {
  category0,
  category1,
  category2,
  category3,
  category4,
  category5
} from "./icons";

const categoriesArray = [
  { id: 1, icon: category5, title: "Куда угодно", active: true },
  { id: 2, icon: category4, title: "Солнце и море" },
  { id: 3, icon: category3, title: "Шопинг, город" },
  { id: 4, icon: category2, title: "Культура и история" },
  { id: 5, icon: category1, title: "Ночная жизнь" },
  { id: 6, icon: category0, title: "Отдых с детьми" }
];

const CategoryTemplate = ({ icon, categoryName, active }) => {
  const isActive = active
    ? " popular-ways__categories__category__text active"
    : "popular-ways__categories__category__text";
  return (
    <button className="popular-ways__categories__category">
      <div className="popular-ways__categories__category__image-wrapper">
        <img src={icon} alt={categoryName} />
      </div>
      <p className={isActive}>{categoryName}</p>
    </button>
  );
};

class Categories extends Component {
  state = {};

  render() {
    const elements = categoriesArray.map(el => {
      return (
        <CategoryTemplate
          active={el.active}
          key={el.id}
          icon={el.icon}
          categoryName={el.title}
        />
      );
    });
    return <div className="popular-ways__categories">{elements}</div>;
  }
}

export default Categories;
