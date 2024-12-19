"use client";

import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import Link from "next/link";
import { Search } from "lucide-react";
import { Api } from "@/services/api-client";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useEffect(() => {
    Api.products.search(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}

      <div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          <Link href="/product/1" className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
            <img
              className="rounded-sm h-8 w-8"
              src="https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp"
              alt="Пицца"
            />
            <span>Пицца 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};