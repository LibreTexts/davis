import clsx from "clsx";
import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";
import { container } from "@libretexts/davis-core";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "prose";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentProp<
  C extends ElementType,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type ContainerBaseProps = {
  size?: ContainerSize;
  centered?: boolean;
  padded?: boolean;
  className?: string;
};

export type ContainerProps<C extends ElementType = "div"> = PolymorphicComponentProp<
  C,
  ContainerBaseProps
>;

export const Container = forwardRef(function Container<C extends ElementType = "div">(
  {
    as,
    size,
    centered,
    padded,
    className,
    children,
    ...props
  }: ContainerProps<C>,
  ref: React.Ref<Element>
) {
  const Component = as || "div";

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={clsx(container({ size, centered, padded }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = "div">(
  props: ContainerProps<C> & { ref?: React.Ref<Element> }
) => React.ReactElement;

(Container as { displayName?: string }).displayName = "Container";
