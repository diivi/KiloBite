import React, { useState, createContext, useEffect, useMemo } from "react";

import { getRestaurants, transformRestaurants } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      getRestaurants()
        .then(transformRestaurants)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
          console.log(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
