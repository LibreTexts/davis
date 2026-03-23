import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { grid } from "@libretexts/davis-core";
import type { StackGap } from "./stack";

export type GridCols = 1 | 2 | 3 | 4 | 6 | 12;
export type GridGap = StackGap;

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type GridBaseProps = {
  cols?: GridCols;
  gap?: GridGap;
  className?: string;
};

export type GridProps<C extends ElementType = "div"> = PolymorphicComponentProp<
  C,
  GridBaseProps
>;

export const Grid = forwardRef(function Grid<C extends ElementType = "div">(
  {
    as,
    cols,
    gap,
    className,
    children,
    ...props
  }: GridProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={clsx(grid({ cols, gap }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = "div">(
  props: GridProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Grid as { displayName?: string }).displayName = "Grid";
