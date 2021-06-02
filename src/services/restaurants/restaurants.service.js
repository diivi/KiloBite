import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const getRestaurants = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    !mock ? reject("Not Found") : resolve(mock);
  });
};

export const transformRestaurants = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant["photos"] = restaurant["photos"].map(() => {
      return mockImages[Math.floor(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
