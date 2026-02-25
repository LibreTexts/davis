import clsx from "clsx";
import { type ReactNode, createContext, useContext } from "react";
import { card as cardVariants } from "./variants";

// ============================================
// Types
// ============================================

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
  /** Makes the card clickable — renders a <div role="button"> with keyboard support */
  onClick?: () => void;
  /** Makes the card a link — renders an <a> element */
  href?: string;
  /** Target for href links */
  target?: string;
  className?: string;
};

export type CardHeaderProps = {
  children?: ReactNode;
  /** When provided, renders a full-width <img> above the children */
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

// ============================================
// Context
// ============================================

type CardStyles = ReturnType<typeof cardVariants>;

const CardContext = createContext<CardStyles | null>(null);

function useCardStyles(): CardStyles {
  const ctx = useContext(CardContext);
  if (!ctx) {
    throw new Error("Card subcomponents must be used within a <Card>");
  }
  return ctx;
}

// ============================================
// Card Root
// ============================================

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

// ============================================
// Card Header
// ============================================

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

// ============================================
// Card Body
// ============================================

function CardBody({ children, className }: CardBodyProps) {
  const styles = useCardStyles();
  return (
    <div className={clsx(styles.body(), className)}>
      {children}
    </div>
  );
}

CardBody.displayName = "Card.Body";

// ============================================
// Card Footer
// ============================================

function CardFooter({ children, className }: CardFooterProps) {
  const styles = useCardStyles();
  return (
    <div className={clsx(styles.footer(), className)}>
      {children}
    </div>
  );
}

CardFooter.displayName = "Card.Footer";

// ============================================
// Attach subcomponents
// ============================================

Card.Header = CardHeader;
Card.Body   = CardBody;
Card.Footer = CardFooter;
