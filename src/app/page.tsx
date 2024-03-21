import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Services className="pt-3" />
      <Testimonials className="pt-3" />
    </>
  );
}
