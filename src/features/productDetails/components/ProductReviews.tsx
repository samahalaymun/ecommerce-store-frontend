import type { productReview } from "@/features/home/types";
import { Star } from "lucide-react";

function ReviewItem({ r }: { r: productReview }) {
  return (
    <div className="border rounded-md p-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm">
          {String(r.reviewerName).charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h5 className="font-medium">{r.reviewerName}</h5>
            <div className="flex items-center gap-1 text-amber-400">
              <Star />
              <span>{r.rating}</span>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">{r.comment}</p>
          <small className=" text-muted-foreground mt-2">{r.date}</small>
        </div>
      </div>
    </div>
  );
}

export default function ProductReviews({
  reviews,
}: {
  reviews?: productReview[];
}) {
  if (!reviews || reviews.length === 0) {
    return <div className="text-muted-foreground">No reviews</div>;
  }

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Reviews</h3>
      <div className="grid gap-4">
        {reviews.map((r) => (
          <ReviewItem key={r.id} r={r} />
        ))}
      </div>
    </section>
  );
}
