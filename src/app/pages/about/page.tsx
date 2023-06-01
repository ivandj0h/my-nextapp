"use client";

import React, { useState } from "react";
import FirstComboBox from "@/src/components/combobox/FirstComboBox";
import {
  containerClass,
  h1TitleClass,
  pClass,
} from "@/src/utils/tailwind-classes";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelectChange = (selected: string | null) => {
    console.log("Anda memilih Option -", selected);

    setSelectedOption(selected);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-200 p-4 mx-16 space-y-4">
          <Link href="/">
            Back to <strong>Home</strong>
          </Link>
          <div className="block h-12 rounded-lg">
            <h1 className={h1TitleClass}>Combobox Feature</h1>
            <p>
              This is a Combobox in{" "}
              <span className="text-sky-700">NextJS-13 with Typescript</span>
            </p>
          </div>
          <div className="block h-12 bg-white rounded-lg content-center">
            <FirstComboBox onOptionChange={handleSelectChange} />
          </div>
          <div
            className={[
              containerClass,
              "block h-12 rounded-lg content-center",
            ].join(" ")}
          >
            <h3>Anda memilih Option - {selectedOption}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
