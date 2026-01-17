import AnimatedCard from "@/components/animation/AnimatedCard";
import ShopCard from "./ShopCard";
import { Animated } from "@/components/ui/animated";

function ShopCards() {
  return (
    <section className="flex flex-col items-center bg-secondary gap-12 py-20 px-4 lg:px-10">
      <Animated variant="enter" direction="bottom" delay={80}>
        <div className="gap-2.5 flex flex-col items-center">
          <h3 className="font-bold text-center">EDITOR’S PICK</h3>
          <p className="text-muted-foreground font-normal text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
      </Animated>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5  lg:h-125  w-full">
        <div className="lg:h-full h-125">
          <Animated variant="flip" delay={0}>
            <ShopCard
              category="Men"
              image="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Animated>
        </div>
        <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-7.5 h-full">
          <div className="lg:h-full h-125">
            <Animated variant="flip" delay={60}>
              <ShopCard
                category="Women"
                image="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Animated>
          </div>
          <div className=" w-full flex flex-col gap-7.5 lg:h-full h-125">
            <Animated variant="flip" delay={120}>
              <ShopCard
                category="Accessories"
                image="https://images.unsplash.com/photo-1721746930135-f9401608be2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Animated>
            <Animated variant="flip" delay={180}>
              <ShopCard
                category="Kids"
                image="https://images.unsplash.com/photo-1715317931439-541563107b99?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCards;
