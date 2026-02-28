/**
 * Davis Design System — Component Variant Definitions
 *
 * Framework-agnostic variant definitions using tailwind-variants.
 * These produce class strings consumed by React and Vue components.
 *
 * Elevation levels used in variants:
 *   Level 0: none        — Flat elements (disabled, inline)
 *   Level 1: sm/DEFAULT  — Cards, dropdowns at rest
 *   Level 2: md          — Hovered cards, active dropdowns
 *   Level 3: lg          — Dialogs, popovers, floating panels (max for most UI)
 *   Level 4: xl/2xl      — Reserved for rare high-emphasis overlays
 *
 * Focus patterns:
 *   - Buttons/controls: focus:ring-2 focus:ring-offset-2 focus:ring-{color}
 *   - Inputs: focus:outline-2 focus:-outline-offset-2 focus:outline-primary
 *   - Links: focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
 */
import { tv } from 'tailwind-variants';

export const BUTTON_BASE_CLASSES = [
  'inline-flex items-center justify-center',
  'font-medium',
  'transition-all',
  'duration-200',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  'rounded-md',
].join(' ');

export const BUTTON_VARIANTS = {
  primary: [
    'bg-primary',
    'text-white',
    'hover:bg-primary-600',
    'focus:ring-primary',
  ].join(' '),
  secondary: [
    'border',
    'border-primary',
    'bg-transparent',
    'text-primary',
    'hover:bg-primary',
    'hover:text-white',
    'focus:ring-primary',
  ].join(' '),
  tertiary: [
    'bg-gray-100',
    'text-gray-700',
    'hover:bg-gray-200',
    'focus:ring-gray-500',
  ].join(' '),
  destructive: [
    'bg-danger',
    'text-white',
    'hover:bg-red-700',
    'focus:ring-danger',
  ].join(' '),
  warning: [
    'bg-amber-500',
    'text-white',
    'hover:bg-amber-600',
    'focus:ring-amber-500',
  ].join(' '),
  ghost: [
    'bg-transparent',
    'text-gray-700',
    'hover:bg-gray-100',
    'focus:ring-gray-500',
  ].join(' '),
  outline: [
    'border',
    'border-gray-300',
    'bg-transparent',
    'text-gray-700',
    'hover:bg-gray-50',
    'focus:ring-gray-500',
  ].join(' '),
};

export const BUTTON_SIZE_VARIANTS = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
};

export const BUTTON_DEFAULT_VARIANTS = {
  variant: 'primary' as const,
  size: 'md' as const,
};

export const INPUTS_FOCUS = 'focus:outline-2 focus:-outline-offset-2 focus:outline-primary';
export const INPUTS_DISABLED = 'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100';

export const INPUT_SIZE_VARIANTS = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const INPUT_DEFAULT_VARIANTS = {
  variant: 'default' as const,
  size: 'md' as const,
};

export const CHECKBOX_RADIO_SIZE_VARIANTS = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
};

export const TOGGLE_SIZE_VARIANTS = {
  sm: 'size-5',
  md: 'size-6',
  lg: 'size-7',
};

export const TOGGLE_DEFAULT_VARIANTS = {
  checked: false as const,
  size: 'md' as const,
};

export const button = tv({
  base: BUTTON_BASE_CLASSES,
  variants: {
    variant: BUTTON_VARIANTS,
    size: BUTTON_SIZE_VARIANTS,
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: BUTTON_DEFAULT_VARIANTS,
});

export const iconButton = tv({
  base: BUTTON_BASE_CLASSES,
  variants: {
    variant: BUTTON_VARIANTS,
    size: {
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
    },
  },
  defaultVariants: BUTTON_DEFAULT_VARIANTS,
});

export const input = tv({
  base: [
    'block w-full',
    'rounded-md',
    'bg-white',
    'text-gray-900',
    'border',
    'placeholder:text-gray-400',
    'transition-colors',
    'duration-200',
    INPUTS_FOCUS,
    INPUTS_DISABLED,
  ].join(' '),
  variants: {
    variant: {
      default: [
        'border-gray-400',
        'focus:border-primary',
      ].join(' '),
      error: [
        'border-danger',
        'focus:border-danger',
        'focus:outline-danger',
        'bg-red-50',
      ].join(' '),
    },
    size: INPUT_SIZE_VARIANTS,
  },
  defaultVariants: INPUT_DEFAULT_VARIANTS,
});

export const textarea = tv({
  base: [
    'block w-full',
    'rounded-md',
    'bg-white',
    'text-gray-900',
    'border',
    'placeholder:text-gray-400',
    'transition-colors',
    'duration-200',
    'resize-vertical',
    INPUTS_FOCUS,
    INPUTS_DISABLED,
  ].join(' '),
  variants: {
    variant: {
      default: [
        'border-gray-400',
        'focus:border-primary',
      ].join(' '),
      error: [
        'border-danger',
        'focus:border-danger',
        'focus:outline-danger',
        'bg-red-50',
      ].join(' '),
    },
    size: INPUT_SIZE_VARIANTS,
    autoResize: {
      true: 'resize-none overflow-hidden',
      false: '',
    },
  },
  defaultVariants: {
    ...INPUT_DEFAULT_VARIANTS,
    autoResize: false as const,
  },
});

export const select = tv({
  base: [
    'block w-full',
    'rounded-md',
    'bg-white',
    'text-gray-900',
    'border',
    'transition-colors',
    'duration-200',
    'appearance-none',
    'pr-8',
    INPUTS_FOCUS,
    INPUTS_DISABLED,
  ].join(' '),
  variants: {
    variant: {
      default: [
        'border-gray-400',
        'focus:border-primary',
      ].join(' '),
      error: [
        'border-danger',
        'focus:border-danger',
        'focus:outline-danger',
        'bg-red-50',
      ].join(' '),
    },
    size: INPUT_SIZE_VARIANTS,
  },
  defaultVariants: INPUT_DEFAULT_VARIANTS,
});

export const checkbox = tv({
  base: [
    'rounded border bg-white',
    'border-gray-400',
    'group-data-[checked]:border-primary group-data-[checked]:bg-primary',
    'group-data-[indeterminate]:border-primary group-data-[indeterminate]:bg-primary',
    'group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100',
  ].join(' '),
  variants: {
    variant: {
      default: '',
      error: 'border-danger bg-red-50 group-data-[checked]:bg-danger',
    },
    size: CHECKBOX_RADIO_SIZE_VARIANTS,
  },
  defaultVariants: INPUT_DEFAULT_VARIANTS,
});

export const radio = tv({
  base: [
    'rounded-full border bg-white',
    'border-gray-400',
    'group-data-[checked]:border-primary group-data-[checked]:bg-primary',
    'group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100',
  ].join(' '),
  variants: {
    variant: {
      default: '',
      error: 'border-danger bg-red-50 group-data-[checked]:bg-danger',
    },
    size: CHECKBOX_RADIO_SIZE_VARIANTS,
  },
  defaultVariants: INPUT_DEFAULT_VARIANTS,
});

export const switchToggle = tv({
  slots: {
    track: [
      'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
      'transition-colors duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ].join(' '),
    thumb: [
      'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0',
      'transform transition duration-200 ease-in-out',
    ].join(' '),
  },
  variants: {
    size: {
      sm: {
        track: 'h-5 w-9',
        thumb: 'h-4 w-4',
      },
      md: {
        track: 'h-6 w-11',
        thumb: 'h-5 w-5',
      },
      lg: {
        track: 'h-7 w-14',
        thumb: 'h-6 w-6',
      },
    },
    checked: {
      true: {
        track: 'bg-primary',
        thumb: 'translate-x-full',
      },
      false: {
        track: 'bg-gray-200',
        thumb: 'translate-x-0',
      },
    },
  },
  defaultVariants: TOGGLE_DEFAULT_VARIANTS,
  compoundVariants: [
    { size: 'sm', checked: true, class: { thumb: 'translate-x-4' } },
    { size: 'md', checked: true, class: { thumb: 'translate-x-5' } },
    { size: 'lg', checked: true, class: { thumb: 'translate-x-7' } },
  ],
});

export const alert = tv({
  slots: {
    container: 'flex gap-3 rounded-md border p-4',
    icon:      'shrink-0 size-5 mt-0.5',
    body:      'flex-1 min-w-0',
    title:     'text-sm font-semibold mb-0.5',
    message:   'text-sm',
    action:    'mt-2',
    closeBtn: [
      'shrink-0 self-start rounded p-0.5 -mt-0.5 -mr-0.5',
      'focus:outline-none focus:ring-2 focus:ring-offset-1',
      'transition-colors duration-150',
    ].join(' '),
  },
  variants: {
    variant: {
      info: {
        container: 'bg-blue-50 border-blue-200',
        icon:      'text-primary',
        title:     'text-primary',
        message:   'text-blue-700',
        closeBtn:  'text-blue-400 hover:text-blue-600 hover:bg-blue-100 focus:ring-primary',
      },
      success: {
        container: 'bg-green-50 border-green-200',
        icon:      'text-success',
        title:     'text-success',
        message:   'text-green-700',
        closeBtn:  'text-green-400 hover:text-green-600 hover:bg-green-100 focus:ring-success',
      },
      warning: {
        container: 'bg-amber-50 border-amber-200',
        icon:      'text-warning',
        title:     'text-warning',
        message:   'text-amber-700',
        closeBtn:  'text-amber-400 hover:text-amber-600 hover:bg-amber-100 focus:ring-warning',
      },
      error: {
        container: 'bg-red-50 border-red-200',
        icon:      'text-danger',
        title:     'text-danger',
        message:   'text-red-700',
        closeBtn:  'text-red-400 hover:text-red-600 hover:bg-red-100 focus:ring-danger',
      },
    },
  },
  defaultVariants: {
    variant: 'info' as const,
  },
});

export const badge = tv({
  slots: {
    root:   'inline-flex items-center gap-1.5 rounded-full font-medium',
    dot:    'rounded-full shrink-0',
    remove: 'inline-flex items-center justify-center rounded hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-inset transition-colors duration-150',
  },
  variants: {
    variant: {
      default: {
        root:   'bg-gray-100 text-gray-800',
        dot:    'bg-gray-500',
        remove: 'text-gray-500 focus:ring-gray-400',
      },
      primary: {
        root:   'bg-blue-100 text-primary',
        dot:    'bg-primary',
        remove: 'text-primary/70 focus:ring-primary',
      },
      success: {
        root:   'bg-green-100 text-success',
        dot:    'bg-success',
        remove: 'text-success/70 focus:ring-success',
      },
      warning: {
        root:   'bg-amber-100 text-warning',
        dot:    'bg-warning',
        remove: 'text-warning/70 focus:ring-warning',
      },
      danger: {
        root:   'bg-red-100 text-danger',
        dot:    'bg-danger',
        remove: 'text-danger/70 focus:ring-danger',
      },
    },
    size: {
      sm: { root: 'px-2 py-0.5 text-xs',    dot: 'size-1.5', remove: 'size-3.5 -mr-0.5' },
      md: { root: 'px-3 py-1 text-sm',       dot: 'size-2',   remove: 'size-4 -mr-1'     },
      lg: { root: 'px-4 py-1.5 text-base',   dot: 'size-2.5', remove: 'size-5 -mr-1'     },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'md' as const,
  },
});

export const DIALOG_SIZE_VARIANTS = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full',
};

export const dialog = tv({
  base: 'relative w-full bg-white rounded-lg shadow-lg',
  variants: {
    size: DIALOG_SIZE_VARIANTS,
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const notification = tv({
  slots: {
    container: [
      'w-80 max-w-full pointer-events-auto',
      'bg-white rounded-lg shadow-lg',
      'border border-gray-200 border-l-4',
      'p-4',
    ].join(' '),
    body: 'flex items-start gap-3',
    icon: 'shrink-0 size-5 mt-0.5',
    content: 'flex-1 min-w-0',
    title: 'text-sm font-semibold text-gray-900',
    message: 'text-sm text-gray-600',
    action: 'mt-2',
    closeBtn: [
      'shrink-0 self-start rounded p-0.5 -mt-0.5 -mr-0.5',
      'text-gray-400 hover:text-gray-600 hover:bg-gray-100',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
      'transition-colors duration-150',
    ].join(' '),
  },
  variants: {
    variant: {
      success: { container: 'border-l-success', icon: 'text-success' },
      error:   { container: 'border-l-danger',  icon: 'text-danger'  },
      warning: { container: 'border-l-warning', icon: 'text-warning' },
      info:    { container: 'border-l-primary', icon: 'text-primary' },
    },
  },
  defaultVariants: {
    variant: 'info' as const,
  },
});

export const tooltip = tv({
  slots: {
    content: [
      'absolute z-50',
      'w-max max-w-xs',
      'rounded-md px-2.5 py-1.5',
      'bg-gray-900 text-white text-xs font-medium',
      'shadow-sm',
      'pointer-events-none',
    ].join(' '),
  },
});

export const card = tv({
  slots: {
    root:          'border bg-white rounded-lg shadow-sm overflow-hidden',
    header:        'border-b border-gray-100',
    headerContent: '',
    body:          '',
    footer:        'border-t border-gray-100 bg-gray-50/50',
    image:         'w-full object-cover block',
  },
  variants: {
    variant: {
      default:  { root: 'border-gray-200' },
      elevated: { root: 'border-gray-200 shadow-md' },
      outline:  { root: 'border-gray-300' },
    },
    padding: {
      none: { headerContent: '',           body: '',           footer: ''           },
      sm:   { headerContent: 'px-4 py-3', body: 'px-4 py-3', footer: 'px-4 py-3' },
      md:   { headerContent: 'px-6 py-4', body: 'px-6 py-4', footer: 'px-6 py-4' },
      lg:   { headerContent: 'px-8 py-6', body: 'px-8 py-6', footer: 'px-8 py-6' },
    },
    clickable: {
      true: { root: 'cursor-pointer transition-shadow duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    padding: 'md' as const,
  },
});

export const AVATAR_SIZE_VARIANTS = {
  xs: 'size-6 text-xs',
  sm: 'size-8 text-sm',
  md: 'size-10 text-base',
  lg: 'size-12 text-lg',
  xl: 'size-16 text-xl',
};

export const avatar = tv({
  slots: {
    root: [
      'relative inline-flex items-center justify-center',
      'rounded-full',
      'bg-gray-200 text-gray-600',
      'font-medium uppercase',
      'overflow-hidden',
      'select-none',
      'shrink-0',
    ].join(' '),
    image: 'w-full h-full object-cover',
    fallback: 'flex items-center justify-center w-full h-full',
  },
  variants: {
    size: {
      xs: { root: AVATAR_SIZE_VARIANTS.xs },
      sm: { root: AVATAR_SIZE_VARIANTS.sm },
      md: { root: AVATAR_SIZE_VARIANTS.md },
      lg: { root: AVATAR_SIZE_VARIANTS.lg },
      xl: { root: AVATAR_SIZE_VARIANTS.xl },
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const avatarGroup = tv({
  base: 'flex -space-x-3',
  variants: {
    size: {
      xs: '-space-x-1.5',
      sm: '-space-x-2',
      md: '-space-x-3',
      lg: '-space-x-4',
      xl: '-space-x-5',
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const visuallyHidden = tv({
  base: [
    'absolute',
    'w-px h-px',
    'overflow-hidden',
    'whitespace-nowrap',
    'border-0',
    'p-0',
    'm-[-1px]',
    '[clip:rect(0,0,0,0)]',
  ].join(' '),
  variants: {
    focusable: {
      true: 'focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:[clip:auto] focus:m-0',
    },
  },
  defaultVariants: {
    focusable: false as const,
  },
});

export const skipLink = tv({
  base: [
    'absolute',
    'w-px h-px',
    'overflow-hidden',
    'whitespace-nowrap',
    'border-0',
    'p-0',
    'm-[-1px]',
    '[clip:rect(0,0,0,0)]',
    // Visible on focus
    'focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:[clip:auto] focus:m-0',
    'focus:z-[9999] focus:fixed focus:top-4 focus:left-4',
    'focus:inline-block focus:px-4 focus:py-2',
    'focus:bg-primary focus:text-white focus:font-semibold focus:text-sm',
    'focus:rounded-md focus:shadow-lg',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
    'focus:no-underline',
  ].join(' '),
});

export const spinner = tv({
  base: 'animate-spin',
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
      xl: 'size-12',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-gray-500',
      white: 'text-white',
      current: 'text-current',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
  },
  defaultVariants: {
    size: 'md' as const,
    color: 'primary' as const,
  },
});
