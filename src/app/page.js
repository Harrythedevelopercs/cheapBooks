import Hero from "@/components/home-components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
       <section className="bg-gray-100">
        <div className="container mx-auto ">
           <Hero />
        </div> 
       </section>
    </>
  );
}
