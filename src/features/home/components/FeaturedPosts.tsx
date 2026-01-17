import PostCard from "@/components/PostCard";
import type { Post } from "../types";
import { Animated } from "@/components/ui/animated";

// Sample post data - replace with actual data from API or props
const samplePosts: Post[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentsCount: 10,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentsCount: 10,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
    isNew: true,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentsCount: 10,
  },
];

function FeaturedPosts() {
  return (
    <section className="flex flex-col gap-20 items-center bg-background py-28 px-4 lg:px-10">
      <Animated
        variant="enter"
        direction="bottom"
        delay={ 80}
      >
        <div className="gap-2.5 flex flex-col items-center">
          <h6 className="text-primary font-normal text-center">
            Practice Advice
          </h6>
          <h2 className="font-bold text-center">Featured Posts</h2>
          <p className="text-muted-foreground font-normal text-center max-w-2xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </Animated>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 lg:gap-7.5">
        {samplePosts.map((post, index) => (
          <Animated
            key={post.id}
            variant="enter"
            direction="bottom"
            delay={(index+1) * 80}
          >
            <PostCard key={post.id} post={post} />
          </Animated>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;
