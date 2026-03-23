import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { heading as headingVariants } from "@libretexts/davis-core";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingColor = "default" | "muted" | "primary" | "inherit";
export type HeadingAlign = "left" | "center" | "right";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type HeadingBaseProps = {
  level?: HeadingLevel;
  color?: HeadingColor;
  align?: HeadingAlign;
  truncate?: boolean;
  className?: string;
};

export type HeadingProps<C extends ElementType = "h1"> = PolymorphicComponentProp<
  C,
  HeadingBaseProps
>;

const levelToElement: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export const Heading = forwardRef(function Heading<C extends ElementType = "h1">(
  {
    as,
    level = 1,
    color,
    align,
    truncate,
    className,
    children,
    ...props
  }: HeadingProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || levelToElement[level];

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLHeadingElement>}
      className={clsx(headingVariants({ level, color, align, truncate }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = "h1">(
  props: HeadingProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Heading as { displayName?: string }).displayName = "Heading";
