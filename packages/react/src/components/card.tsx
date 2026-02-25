import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { card as cardVariants } from "./variants";

export type CardVariant = "default" | "elevated" | "outline";
export type CardPadding = "none" | "sm" | "md" | "lg";

export type CardImageProps = {
  src: string;
  alt: string;
  height?: string | number;
};

export type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
};

export type CardHeaderProps = {
  children?: ReactNode;
  image?: CardImageProps;
  className?: string;
};

export type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

type CardStyles = ReturnType<typeof cardVariants>;

const CardContext = createContext<CardStyles | null>(null);

function useCardStyles(): CardStyles {
  const ctx = useContext(CardContext);
  if (!ctx) {
    throw new Error("Card subcomponents must be used within a <Card>");
  }
  return ctx;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  onClick,
  href,
  target,
  className,
}: CardProps) {
  const clickable = onClick !== undefined || href !== undefined;
  const styles = cardVariants({ variant, padding, clickable });
  const rootClass = clsx(styles.root(), className);

  const sharedContext = (
    <CardContext.Provider value={styles}>
      {children}
    </CardContext.Provider>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        {...(target !== undefined ? { target } : {})}
        className={rootClass}
      >
        {sharedContext}
      </a>
    );
  }

  if (onClick !== undefined) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={rootClass}
      >
        {sharedContext}
      </div>
    );
  }

  return (
    <div className={rootClass}>
      {sharedContext}
    </div>
  );
}

Card.displayName = "Card";

function CardHeader({ children, image, className }: CardHeaderProps) {
  const styles = useCardStyles();

  return (
    <div className={clsx(styles.header(), className)}>
      {image !== undefined && (
        <img
          src={image.src}
          alt={image.alt}
          className={styles.image()}
          {...(image.height !== undefined ? { style: { height: image.height } } : {})}
        />
      )}
      {children != null && (
        <div className={styles.headerContent()}>
          {children}
        </div>
      )}
    </div>
  );
}

CardHeader.displayName = "Card.Header";

function CardBody({ children, className }: CardBodyProps) {
  const styles = useCardStyles();
  return (
    <div className={clsx(styles.body(), className)}>
      {children}
    </div>
  );
}

CardBody.displayName = "Card.Body";

function CardFooter({ children, className }: CardFooterProps) {
  const styles = useCardStyles();
  return (
    <div className={clsx(styles.footer(), className)}>
      {children}
    </div>
  );
}

CardFooter.displayName = "Card.Footer";

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
