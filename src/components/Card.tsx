"use client";

import React, { useState } from "react";
import MyButton from "./MyButtom";

interface UserData {
  name: string;
  email: string;
  age: number;
  location: string;
}

interface CardProps {
  userData: UserData;
}

export default function Card({ userData }: CardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-xs">
      <h2 className="text-lg font-semibold mb-2">{userData.name}</h2>
      <p className="text-gray-700">Email: {userData.email}</p>
      <p className="text-gray-700">Age: {userData.age}</p>
      <p className="text-gray-700">Location: {userData.location}</p>

      {showDetails && (
        <p className="text-gray-600 mt-2">
          More details {userData.name}...
        </p>
      )}

      <MyButton
        label={showDetails ? "Скрыть" : "Подробнее"}
        onClick={handleButtonClick}
      />
    </div>
  );
}
