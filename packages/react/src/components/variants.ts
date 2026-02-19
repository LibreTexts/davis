import { tv } from 'tailwind-variants';

// ===========================================================
// Standardized values across different button types
// ===========================================================
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
    'hover:bg-primary-hover',
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

// ===========================================================
// Standardized values across different input types
// ===========================================================
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

// ===========================================================
// Button components
// ===========================================================
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

// ===========================================================
// Input components
// ===========================================================
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

// ===========================================================
// Checkbox & Radio components
// ===========================================================
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

// ===========================================================
// Switch/Toggle component
// ===========================================================
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

// ===========================================================
// Badge component
// ===========================================================
export const badge = tv({
  base: 'inline-flex items-center rounded-full font-medium',
  variants: {
    variant: {
      default: 'bg-gray-100 text-gray-800',
      primary: 'bg-blue-100 text-primary',
      success: 'bg-green-100 text-success',
      warning: 'bg-amber-100 text-warning',
      danger: 'bg-red-100 text-danger',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// ===========================================================
// Dialog component
// ===========================================================
export const DIALOG_SIZE_VARIANTS = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full',
};

export const dialog = tv({
  base: 'relative w-full bg-white rounded-lg shadow-xl',
  variants: {
    size: DIALOG_SIZE_VARIANTS,
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

// ===========================================================
// Card component
// ===========================================================
export const card = tv({
  base: 'border bg-white rounded-lg shadow-sm',
  variants: {
    variant: {
      default: 'border-gray-200',
      elevated: 'border-gray-200 shadow-md',
      outline: 'border-gray-300',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});
