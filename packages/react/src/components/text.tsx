import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { text as textVariants } from "@libretexts/davis-core";

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
export type TextWeight = "normal" | "medium" | "semibold" | "bold";
export type TextColor = "default" | "muted" | "primary" | "danger" | "success" | "warning" | "inherit";
export type TextAlign = "left" | "center" | "right";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextBaseProps = {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  italic?: boolean;
  className?: string;
};

export type TextProps<C extends ElementType = "span"> = PolymorphicComponentProp<
  C,
  TextBaseProps
>;

export const Text = forwardRef(function Text<C extends ElementType = "span">(
  {
    as,
    size,
    weight,
    color,
    align,
    truncate,
    italic,
    className,
    children,
    ...props
  }: TextProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || "span";

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLSpanElement>}
      className={clsx(textVariants({ size, weight, color, align, truncate, italic }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = "span">(
  props: TextProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Text as { displayName?: string }).displayName = "Text";
