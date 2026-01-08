import heroImg from "@/assets/hero/women.png";
import { Button } from "@/components/ui/button";

function AboutHero() {
  return (
    <section className=" overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left content card */}
        <div className="py-12 lg:py-28 flex flex-col gap-8.75 items-center lg:items-start">
          <h5 className="uppercase text-foreground font-bold md:block hidden">
            About Company
          </h5>
          <h1 className="font-bold">About Us</h1>
          <h4 className="text-muted-foreground lg:text-start text-center">
            We know how large objects will act, but things on a small scale.
            Problems trying to resolve the conflict between
          </h4>

          <div className="flex items-center gap-6">
            <Button>Get Quote Now</Button>
          </div>
        </div>

        {/* Right image area */}
        <div className="relative py-12 lg:py-28 flex items-center justify-center overflow-hidden">
          <div className="absolute left-5 sm:left-[20%]  top-5 lg:top-[10%] md:left-[10%]   w-full h-full max-w-72 max-h-72  sm:max-w-80 sm:max-h-80 lg:max-w-120 lg:max-h-120 bg-[#FFE9EA] rounded-full z-0" />
          <div className="absolute left-[5%] top-[8%] w-full h-full max-w-10 max-h-10 lg:max-w-22.5 lg:max-h-22.5 bg-[#FFE9EA] rounded-full z-0" />
          <div className="absolute right-0 sm:right-[15%]  md:right-[5%] top-[50%] w-5 h-5 rounded-full bg-[#FFE9EA]"></div>

          <img
            src={heroImg}
            alt="Shopping"
            className=" z-10  w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
