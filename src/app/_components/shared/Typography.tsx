import { boska, switzer } from "@/app/ui/fonts";
import React, { CSSProperties } from "react";

type TypographyProps = {
  level: "title" | "heading" | "subheading" | "paragraph" | "other";
  children: string;
  extra?: CSSProperties;
};

export default function Typography({
  level,
  children,
  extra,
}: TypographyProps) {
  if (level == "title") {
    return (
      <h1
        className={`${boska.className} antialiased font-medium text-5xl tablet:text-6xl laptop:text-7xl`}
      >
        {children}
      </h1>
    );
  }
  if (level == "heading") {
    return (
      <h2
        className={`${boska.className} antialiased font-medium text-3xl tablet:text-5xl laptop:text-5xl`}
      >
        {children}
      </h2>
    );
  }
  if (level == "subheading") {
    return (
      <h3
        className={`${switzer.className} antialiased font-light text-xl tablet:text-2xl laptop:text-3xl`}
      >
        {children}
      </h3>
    );
  }
  if (level == "paragraph") {
    return (
      <p
        className={`${switzer.className} antialiased font-extralight text-lg tablet:text-xl laptop:text-2xl`}
      >
        {children}
      </p>
    );
  }
  return (
    <p
      className={`${switzer.className} antialiased font-light text-sm tablet:text-base laptop:text-lg`}
      style={extra}
    >
      {children}
    </p>
  );
}
