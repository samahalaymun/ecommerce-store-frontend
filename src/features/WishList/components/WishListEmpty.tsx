import { Heart } from 'lucide-react';
import React from 'react'

function WishListEmpty() {
  return (
    <div className="py-20 flex min-h-100 w-full items-center justify-center">
      <div className="w-full flex text-center flex-col gap-4 items-center justify-center">
        <Heart size={32} />
        <h3 className="font-bold">Your WishList is Empty</h3>
        <p className="text-muted-foreground">
          You currently don't have any items in your wishlist
        </p>
      </div>
    </div>
  );
}

export default WishListEmpty
