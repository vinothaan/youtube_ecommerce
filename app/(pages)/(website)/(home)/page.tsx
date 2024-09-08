import Image from "next/image";

export default function Home() {
  return (
    <div>
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
