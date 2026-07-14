import React from "react";

const Maps = () => {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Pineapple" },
    { id: 7, name: "Strawberry" },
    { id: 8, name: "Blueberry" },
    { id: 9, name: "Watermelon" },
    { id: 10, name: "Papaya" },
    { id: 11, name: "Kiwi" },
    { id: 12, name: "Peach" },
    { id: 13, name: "Pear" },
    { id: 14, name: "Cherry" },
    { id: 15, name: "Plum" },
    { id: 16, name: "Pomegranate" },
    { id: 17, name: "Guava" },
    { id: 18, name: "Lemon" },
    { id: 19, name: "Lime" },
    { id: 20, name: "Coconut" },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <h3 key={fruit.id}> {fruit.name} </h3>
      ))}
    </div>
  );
};

export default Maps;
