import { Clock, MessageCircle, ChevronRight } from "lucide-react";
import type { Post } from "@/features/home/types";
import { cn } from "@/lib/utils";

type PostCardProps = {
  post: Post;
  className?: string;
};

function PostCard({ post, className }: PostCardProps) {
  return (
    <div
      className={`flex flex-col bg-background shadow-sm rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      {/* Image with NEW tag */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        {post.isNew && (
          <h6 className="absolute rounded-xs top-5 start-5 bg-destructive text-white px-3 py-1  font-bold uppercase">
            NEW
          </h6>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 px-6 pt-6 pb-8.75">
        {/* Tags */}
        <div className="flex flex-wrap gap-3.75">
          {post.tags.map((tag, index) => (
            <small
              key={index}
              className={cn(
                "text-second-text font-normal",
                index === 0 && "text-disabled-element"
              )}
            >
              {tag}
            </small>
          ))}
        </div>

        {/* Title */}
        <h4 className="font-normal text-foreground">{post.title}</h4>

        {/* Description */}
        <p className="text-second-text">{post.description}</p>

        {/* Metadata */}
        <div className="flex items-center justify-between py-3.75 gap-6 text-second-text">
          <small className="flex items-center gap-1.25">
            <Clock size={16} className="text-primary" />
            <span>{post.date}</span>
          </small>
          <small className="flex items-center gap-1.25">
            <MessageCircle size={16} className="text-secondary-1" />
            <span>{post.commentsCount} comments</span>
          </small>
        </div>

        {/* Learn More Link */}
        <a
          href={post.learnMoreLink || "#"}
          className="text-second-text font-bold  flex items-center gap-2 hover:underline mt-2"
        >
          Learn More <ChevronRight size={16} className="text-primary"/>
        </a>
      </div>
    </div>
  );
}

export default PostCard;
