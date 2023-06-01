"use client";

import Link from "next/link";

const HomePage = () => {
  const myName = "Combo Box";

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <h3>
          This is the home page. Go to{" "}
          <Link href="/pages/about">
            <strong>{myName}</strong>
          </Link>
        </h3>
      </div>
    </>
  );
};

export default HomePage;
