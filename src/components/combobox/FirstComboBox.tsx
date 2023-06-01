"use client";

import {
  containerClass,
  h1TitleClass,
  pClass,
} from "@/src/utils/tailwind-classes";
import React, { ChangeEvent } from "react";

interface FirstComboBoxProps {
  onOptionChange: (selected: string | null) => void;
}

const FirstComboBoxContainer: React.FC<FirstComboBoxProps> = ({
  onOptionChange,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(event.target.value);
  };

  return (
    <div className={containerClass}>
      <div className="block h-12 rounded-lg">
        <select onChange={handleSelectChange}>
          <option value="pertama">Option Pertama</option>
          <option value="kedua">Option Kedua</option>
          <option value="ketiga">Option Ketiga</option>
        </select>
      </div>
    </div>
  );
};

export default FirstComboBoxContainer;
