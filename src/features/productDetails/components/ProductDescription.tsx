import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Product } from "@/features/home/types";

type Props = { product: Product };

export default function ProductDescription({ product }: Props) {
  return (
    <section className="space-y-4">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Description</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <p>{product.description}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Product Dimensions</AccordionTrigger>
          <AccordionContent className="text-muted-foreground flex flex-col gap-2">
            <p>
              <strong>Width: </strong>
              {product.dimensions?.width}
            </p>
            <p>
              <strong>Height: </strong>
              {product.dimensions?.height}
            </p>
            <p>
              <strong>Depth: </strong>
              {product.dimensions?.depth}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shipping Description</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <p>{product.shippingInformation}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {product.returnPolicy}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Warranty Information</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {product.warrantyInformation}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
