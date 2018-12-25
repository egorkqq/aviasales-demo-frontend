import { am, ru, md } from "./content";

const deals = [
  {
    id: 1,
    icon: ru,
    country: "Россия",
    name: "Симферополь (Крым)",
    offers: [
      { id: 1, from: "Из Москвы", price: " 4 595" },
      { id: 2, from: "Из Тюмени", price: "12 121" },
      { id: 3, from: "Из Сочи", price: "1 132" },
      { id: 4, from: "Из Челябинска", price: "3 212" },
      { id: 5, from: "Из Екатеринбурга", price: "4 000" },
      { id: 6, from: "Из Новосибирска", price: "22 112" }
    ]
  },
  {
    id: 2,
    icon: am,
    country: "Армения",
    name: "Ереван",
    offers: [
      { id: 1, from: "Из Москвы", price: " 4 595" },
      { id: 2, from: "Из Сочи", price: "1 132" },
      { id: 3, from: "Из Тюмени", price: "5 121" },
      { id: 4, from: "Из Челябинска", price: "3 212" },
      { id: 5, from: "Из Новосибирска", price: "22 112" },
      { id: 6, from: "Из Екатеринбурга", price: "4 000" }
    ]
  },
  {
    id: 3,
    icon: md,
    country: "Молдова",
    name: "Кишенев",
    offers: [
      { id: 1, from: "Из Москвы", price: " 4 595" },
      { id: 2, from: "Из Челябинска", price: "3 212" },
      { id: 3, from: "Из Тюмени", price: "2 121" },
      { id: 4, from: "Из Сочи", price: "1 132" },
      { id: 5, from: "Из Екатеринбурга", price: "4 000" },
      { id: 6, from: "Из Новосибирска", price: "22 112" }
    ]
  }
];

export default deals;
