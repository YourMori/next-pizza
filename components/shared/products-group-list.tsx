"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { ProductCard, Title } from ".";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  categoryId: number;
  listClassName?: string;
  className?: string;
  items: any[];
}

export const ProductGroupList: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item, index) => (
          <ProductCard key={item.id} id={item.id} name={item.name} price={item.items[0].price} imageUrl={item.imageUrl} />
        ))}
      </div>
    </div>
  );
};
