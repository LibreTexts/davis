import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { stack } from "@libretexts/davis-core";

export type StackDirection = "vertical" | "horizontal";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type StackBaseProps = {
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  className?: string;
};

export type StackProps<C extends ElementType = "div"> = PolymorphicComponentProp<
  C,
  StackBaseProps
>;

export const Stack = forwardRef(function Stack<C extends ElementType = "div">(
  {
    as,
    direction,
    gap,
    align,
    justify,
    wrap,
    className,
    children,
    ...props
  }: StackProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={clsx(stack({ direction, gap, align, justify, wrap }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = "div">(
  props: StackProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Stack as { displayName?: string }).displayName = "Stack";
