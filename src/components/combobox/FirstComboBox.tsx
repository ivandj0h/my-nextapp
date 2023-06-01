"use client";

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
    <select onChange={handleSelectChange}>
      <option value="1">Satu</option>
      <option value="2">Dua</option>
      <option value="3">Tiga</option>
    </select>
  );
};

export default FirstComboBoxContainer;
