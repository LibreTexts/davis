import {
  Menu as HeadlessMenu,
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

export type MenuProps = {
  children: ReactNode;
  className?: string;
};

export function Menu({ children, className }: MenuProps) {
  return (
    <HeadlessMenu as="div" className={clsx("relative inline-block text-left", className)}>
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
        className={clsx(
          "inline-flex items-center justify-center gap-2",
          "px-4 py-2 text-sm font-medium",
          "text-gray-700 bg-white border border-gray-300 rounded-md",
          "hover:bg-gray-50",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
      >
        {children}
        <ChevronDownIcon className="w-4 h-4 text-gray-500" aria-hidden="true" />
      </MenuButton>
    );
  }
);

MenuTrigger.displayName = "Menu.Button";

export type MenuItemsContainerProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
  width?: "auto" | "sm" | "md" | "lg" | "full";
};

const widthClasses = {
  auto: "w-auto min-w-[160px]",
  sm: "w-40",
  md: "w-56",
  lg: "w-72",
  full: "w-full",
};

function MenuItemsContainer({
  children,
  className,
  align = "left",
  width = "auto",
}: MenuItemsContainerProps) {
  return (
    <MenuItems
      transition
      className={clsx(
        "absolute z-50 mt-2",
        "transition ease-out duration-100",
        "data-[closed]:opacity-0 data-[closed]:scale-95",
        "data-[enter]:opacity-100 data-[enter]:scale-100",
        align === "left" ? "left-0 origin-top-left" : "right-0 origin-top-right",
        widthClasses[width],
        "bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5",
        "py-1",
        "focus:outline-none",
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
  variant?: "default" | "danger";
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
      {({ focus, disabled: itemDisabled }: { focus: boolean; disabled: boolean }) => (
        <button
          type="button"
          onClick={onClick}
          disabled={itemDisabled}
          className={clsx(
            "flex items-center w-full px-4 py-2 text-sm text-left",
            "transition-colors duration-75",
            focus && variant === "default" && "bg-gray-100 text-gray-900",
            focus && variant === "danger" && "bg-red-50 text-red-700",
            !focus && variant === "default" && "text-gray-700",
            !focus && variant === "danger" && "text-red-600",
            itemDisabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          {icon && (
            <span className="mr-3 flex-shrink-0 w-4 h-4">{icon}</span>
          )}
          <span className="flex-1">{children}</span>
          {shortcut && (
            <span className="ml-auto pl-4 text-xs text-gray-400">{shortcut}</span>
          )}
        </button>
      )}
    </MenuItem>
  );
}

MenuItemComponent.displayName = "Menu.Item";

export type MenuDividerProps = {
  className?: string;
};

function MenuDivider({ className }: MenuDividerProps) {
  return (
    <div
      className={clsx("my-1 h-px bg-gray-200", className)}
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
  return (
    <div
      className={clsx(
        "px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",
        className
      )}
    >
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
