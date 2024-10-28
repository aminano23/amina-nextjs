"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function MyButton({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      {label}
    </button>
  );
}
