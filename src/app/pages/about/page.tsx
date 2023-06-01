"use client";

import React, { useState } from "react";
import FirstComboBox from "@/src/components/combobox/FirstComboBox";

const AboutPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelectChange = (selected: string | null) => {
    setSelectedOption(selected);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Terpilih</h1>
      <FirstComboBox onOptionChange={handleSelectChange} />
    </div>
  );
};

export default AboutPage;
