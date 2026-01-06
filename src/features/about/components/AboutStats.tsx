import StatCard from "./StatCard"

function AboutStats() {
  return (
    <section>
      <div className="lg:py-20 py-25">
        <div className="flex justify-between items-center flex-col md:flex-row gap-24.5 lg:gap-7.5">
          <StatCard name="Happy Customers" value="15K" />
          <StatCard name="Monthly Visitors" value="150K" />
          <StatCard name="Countries Worldwide" value="15" />
          <StatCard name="Top Partners" value="100+" />
        </div>
      </div>
    </section>
  );
}

export default AboutStats
