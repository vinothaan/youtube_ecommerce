import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      here is our app
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
}
