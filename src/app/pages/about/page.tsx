"use client";

import React, { useState } from "react";
import FirstComboBox from "@/src/components/combobox/FirstComboBox";

const AboutPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelectChange = (selected: string | null) => {
    console.log("selected", selected);

    setSelectedOption(selected);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <FirstComboBox onOptionChange={handleSelectChange} />
    </div>
  );
};

export default AboutPage;
