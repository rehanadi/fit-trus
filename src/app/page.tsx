import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>
      <Overview />
      <Services className="pt-3" />
      <Testimonials className="pt-3" />
    </>
  );
}
