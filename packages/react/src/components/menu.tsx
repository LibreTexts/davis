"use client";

import {
  Menu as HeadlessMenu,
  type MenuProps as HeadlessMenuProps,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import clsx from "clsx";
import {
  type ReactNode,
  forwardRef,
  type ElementType,
  type MouseEventHandler,
  type KeyboardEventHandler,
} from "react";
import { menu as menuVariants, type MenuAlign, type MenuWidth, type MenuItemVariant } from "@libretexts/davis-core";

export type MenuProps = HeadlessMenuProps & {
  children: ReactNode;
  className?: string;
};

export function Menu({ children, className, ...props }: MenuProps) {
  const { root } = menuVariants();
  return (
    <HeadlessMenu as="div" className={clsx(root(), className)} {...props}>
      {children}
    </HeadlessMenu>
  );
}

export type MenuTriggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-controls"?: string;
  "aria-expanded"?: boolean | "true" | "false";
};

const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({
    children,
    className,
    as,
    disabled,
    type,
    id,
    onClick,
    onKeyDown,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
  }, ref) => {
    const { trigger, triggerIcon } = menuVariants();
    return (
      <MenuButton
        ref={ref}
        {...(as !== undefined ? { as } : {})}
        {...(disabled !== undefined ? { disabled } : {})}
        {...(type !== undefined ? { type } : {})}
        {...(id !== undefined ? { id } : {})}
        {...(onClick !== undefined ? { onClick } : {})}
        {...(onKeyDown !== undefined ? { onKeyDown } : {})}
        {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
        {...(ariaDescribedBy !== undefined ? { "aria-describedby": ariaDescribedBy } : {})}
        {...(ariaControls !== undefined ? { "aria-controls": ariaControls } : {})}
        {...(ariaExpanded !== undefined ? { "aria-expanded": ariaExpanded } : {})}
        className={clsx(trigger(), className)}
      >
        {children}
        <ChevronDownIcon className={triggerIcon()} aria-hidden="true" />
      </MenuButton>
    );
  }
);

MenuTrigger.displayName = "Menu.Button";

export type MenuItemsContainerProps = {
  children: ReactNode;
  className?: string;
  align?: MenuAlign;
  width?: MenuWidth;
};

function MenuItemsContainer({
  children,
  className,
  align = "left",
  width = "auto",
}: MenuItemsContainerProps) {
  const { items } = menuVariants({ align, width });
  return (
    <MenuItems
      transition
      className={clsx(
        items(),
        className
      )}
    >
      {children}
    </MenuItems>
  );
}

MenuItemsContainer.displayName = "Menu.Items";

export type MenuItemProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: MenuItemVariant;
  icon?: ReactNode;
  shortcut?: string;
};

function MenuItemComponent({
  children,
  className,
  onClick,
  disabled = false,
  variant = "default",
  icon,
  shortcut,
}: MenuItemProps) {
  return (
    <MenuItem disabled={disabled}>
      {({ focus, disabled: itemDisabled }: { focus: boolean; disabled: boolean }) => {
        const { item, itemIcon, itemShortcut } = menuVariants({
          itemVariant: variant,
          itemFocused: focus,
          itemDisabled,
        });
        return (
          <button
            type="button"
            onClick={onClick}
            disabled={itemDisabled}
            className={clsx(item(), itemDisabled && "opacity-50 cursor-not-allowed", className)}
          >
            {icon && <span className={itemIcon()}>{icon}</span>}
            <span className="flex-1">{children}</span>
            {shortcut && <span className={itemShortcut()}>{shortcut}</span>}
          </button>
        );
      }}
    </MenuItem>
  );
}

MenuItemComponent.displayName = "Menu.Item";

export type MenuDividerProps = {
  className?: string;
};

function MenuDivider({ className }: MenuDividerProps) {
  const { divider } = menuVariants();
  return (
    <div
      className={clsx(divider(), className)}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}

MenuDivider.displayName = "Menu.Divider";

export type MenuLabelProps = {
  children: ReactNode;
  className?: string;
};

function MenuLabel({ children, className }: MenuLabelProps) {
  const { label } = menuVariants();
  return (
    <div className={clsx(label(), className)}>
      {children}
    </div>
  );
}

MenuLabel.displayName = "Menu.Label";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

Menu.Button = MenuTrigger;
Menu.Items = MenuItemsContainer;
Menu.Item = MenuItemComponent;
Menu.Divider = MenuDivider;
Menu.Label = MenuLabel;

export type {
  MenuProps as MenuRootProps,
  MenuTriggerProps as MenuButtonProps,
  MenuItemsContainerProps as MenuItemsProps,
};
