import { Animated } from "@/components/ui/animated";
import StatCard from "./StatCard";

function AboutStats() {
  return (
    <section>
      <div className="lg:py-20 py-25">
        <div className="flex justify-between items-center flex-col md:flex-row gap-24.5 lg:gap-7.5">
          <Animated variant="scale" direction="bottom" delay={0}>
            <StatCard name="Happy Customers" value="15K" />
          </Animated>
          <Animated variant="scale" direction="bottom" delay={60}>
            <StatCard name="Monthly Visitors" value="150K" />
          </Animated>
          <Animated variant="scale" direction="bottom" delay={120}>
            <StatCard name="Countries Worldwide" value="15" />
          </Animated>
          <Animated variant="scale" direction="bottom" delay={180}>
            <StatCard name="Top Partners" value="100+" />
          </Animated>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;
