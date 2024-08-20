import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home Page App",
};

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-semibold">Home</div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div className="grid-cols-1 gap-4 grid lg:grid-cols-5">
        <div className="h-32 bg-green-100">Div 1</div>
        <div className="h-32 bg-green-100">Div 2</div>
        <div className="h-32 bg-green-100">Div 3</div>
        <div className="h-32 bg-green-100">Div 4</div>
        <div className="h-32 bg-green-100">Div 5</div>
      </div>
    </div>
  );
}
