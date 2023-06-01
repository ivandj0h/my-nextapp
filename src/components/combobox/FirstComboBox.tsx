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
        <h1 className={h1TitleClass}>Combobox Feature</h1>
        <p>
          This is a Combobox in{" "}
          <span className={pClass}>NextJS-13 with Typescript</span>
        </p>
      </div>
      <div className="block h-12 rounded-lg">
        <select onChange={handleSelectChange}>
          <option value="1">Satu</option>
          <option value="2">Dua</option>
          <option value="3">Tiga</option>
        </select>
      </div>
    </div>
  );
};

export default FirstComboBoxContainer;
