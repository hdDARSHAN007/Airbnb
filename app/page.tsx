import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Airbnb Clone</h1>
      </div>
    </div>
  );
}