import { Animated } from "@/components/ui/animated";

function AboutMissionIntro() {
  return (
    <section className="grid grid-cols-1  items-center lg:grid-cols-3 gap-15 py-20 lg:py-6">
      <Animated variant="slide" direction="left" delay={60}>
        <div className=" w-full flex flex-col py-6 gap-6 lg:items-start items-center">
          <p className="text-danger-text">Problems trying</p>
          <h3 className="font-bold text-foreground  text-center lg:text-start">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
      </Animated>
      <Animated
        variant="slide"
        direction="right"
        delay={120}
        className="lg:col-span-2 col-span-1 flex flex-col px-12.25"
      >
        <div className=" w-full ">
          <p className="text-muted-foreground   items-center lg:text-start text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </Animated>
    </section>
  );
}

export default AboutMissionIntro
