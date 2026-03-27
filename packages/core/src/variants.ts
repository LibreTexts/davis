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
  'hover:cursor-pointer',
  // Native <button disabled> pseudo-class
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
  // HeadlessUI data-disabled attribute (e.g. when rendered as <a>)
  'data-[disabled]:opacity-50',
  'data-[disabled]:cursor-not-allowed',
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
    'bg-secondary',
    'text-white',
    'hover:bg-secondary-600',
    'focus:ring-secondary',
  ].join(' '),
  tertiary: [
    'bg-tertiary',
    'text-white',
    'hover:bg-tertiary-600',
    'focus:ring-tertiary',
  ].join(' '),
  destructive: [
    'bg-danger',
    'text-white',
    'hover:bg-danger-600',
    'focus:ring-danger',
  ].join(' '),
  warning: [
    'bg-warning',
    'text-white',
    'hover:bg-warning-600',
    'focus:ring-warning',
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
    image:         'w-full h-48 object-cover block',
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
      true: { root: 'cursor-pointer transition-shadow duration-200 hover:shadow-md hover:border-primary hover:border-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2' },
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

export const tabs = tv({
  slots: {
    list:   'flex',
    tab: [
      'relative inline-flex items-center justify-center whitespace-nowrap',
      'font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    panels: 'mt-4',
    panel:  'focus:outline-none',
  },
  variants: {
    variant: {
      line: {
        list: 'border-b border-gray-200',
        tab: [
          'px-4 py-2.5 -mb-px border-b-2 border-transparent',
          'text-gray-500 hover:text-gray-700 hover:border-gray-300',
          'data-[selected]:border-primary data-[selected]:text-primary',
        ].join(' '),
      },
      pills: {
        list: 'inline-flex bg-gray-100 p-1 rounded-lg gap-1',
        tab: [
          'px-4 py-2 rounded-md',
          'text-gray-500 hover:text-gray-700',
        ].join(' '),
      },
    },
    color: {
      white:   {},
      primary: {},
    },
    size: {
      sm: { tab: 'text-sm'   },
      md: { tab: 'text-base' },
      lg: { tab: 'text-lg'   },
    },
  },
  compoundVariants: [
    {
      variant: 'pills',
      color: 'white',
      class: {
        tab: 'data-[selected]:bg-white data-[selected]:text-gray-900 data-[selected]:shadow-sm data-[selected]:ring-1 data-[selected]:ring-black/5',
      },
    },
    {
      variant: 'pills',
      color: 'primary',
      class: {
        tab: 'data-[selected]:bg-primary data-[selected]:text-white data-[selected]:shadow-sm',
      },
    },
  ],
  defaultVariants: {
    variant: 'line'  as const,
    color:   'white' as const,
    size:    'md'    as const,
  },
});

export const accordion = tv({
  slots: {
    root:    '',
    item:    '',
    trigger: [
      'group flex w-full items-center justify-between',
      'text-left font-medium text-gray-900 bg-white',
      'hover:bg-gray-50 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    icon:  'shrink-0 ml-2 text-gray-400 transition-transform duration-200 group-data-[open]:rotate-180',
    panel: 'text-gray-600 bg-white',
  },
  variants: {
    variant: {
      default: {
        root:    'divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden',
        trigger: 'px-4 py-4',
        panel:   'px-4 pb-4',
      },
      flush: {
        root:    'divide-y divide-gray-200',
        trigger: 'px-0 py-4',
        panel:   'pb-4',
      },
      bordered: {
        root:    'flex flex-col gap-2',
        item:    'border border-gray-200 rounded-lg overflow-hidden',
        trigger: 'px-4 py-4',
        panel:   'px-4 pb-4',
      },
    },
    size: {
      sm: { trigger: 'text-sm',  panel: 'text-xs',  icon: 'size-4' },
      md: { trigger: 'text-base', panel: 'text-sm',  icon: 'size-5' },
      lg: { trigger: 'text-lg',  panel: 'text-base', icon: 'size-6' },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size:    'md'      as const,
  },
});

// ─── Layout Primitives ─────────────────────────────────────────────────────

const GAP_VARIANTS = {
  none: 'gap-0',
  xs:   'gap-1',
  sm:   'gap-2',
  md:   'gap-4',
  lg:   'gap-6',
  xl:   'gap-8',
  '2xl':'gap-12',
};

export const stack = tv({
  base: 'flex',
  variants: {
    direction: {
      vertical:   'flex-col',
      horizontal: 'flex-row',
    },
    gap: GAP_VARIANTS,
    align: {
      start:    'items-start',
      center:   'items-center',
      end:      'items-end',
      stretch:  'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start:   'justify-start',
      center:  'justify-center',
      end:     'justify-end',
      between: 'justify-between',
      around:  'justify-around',
      evenly:  'justify-evenly',
    },
    wrap: {
      true:  'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'md',
    wrap: false,
  },
});

export const grid = tv({
  base: 'grid',
  variants: {
    cols: {
      1:  'grid-cols-1',
      2:  'grid-cols-2',
      3:  'grid-cols-3',
      4:  'grid-cols-4',
      6:  'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: GAP_VARIANTS,
  },
  defaultVariants: { cols: 1, gap: 'md' },
});

export const container = tv({
  base: 'w-full',
  variants: {
    size: {
      sm:    'max-w-screen-sm',
      md:    'max-w-screen-md',
      lg:    'max-w-screen-lg',
      xl:    'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      prose: 'max-w-prose',
    },
    centered: { true: 'mx-auto' },
    padded:   { true: 'px-4 sm:px-6 lg:px-8' },
  },
  defaultVariants: { size: 'xl', centered: true, padded: true },
});

export const divider = tv({
  slots: {
    root:  'flex items-center',
    line:  'flex-1 border-gray-200',
    label: 'mx-3 text-sm text-neutral whitespace-nowrap select-none',
  },
  variants: {
    orientation: {
      horizontal: { root: 'w-full flex-row', line: 'border-t' },
      vertical:   { root: 'h-full flex-col', line: 'border-l w-0 flex-none' },
    },
  },
  defaultVariants: { orientation: 'horizontal' },
});

// ─── Loading State Components ───────────────────────────────────────────────

export const skeleton = tv({
  base: 'animate-pulse bg-gray-200 block',
  variants: {
    variant: {
      text:        'rounded h-4',
      circular:    'rounded-full',
      rectangular: 'rounded-none',
      rounded:     'rounded-md',
    },
  },
  defaultVariants: { variant: 'rounded' },
});

export const progress = tv({
  slots: {
    root: 'w-full overflow-hidden rounded-full bg-gray-200',
    bar:  'h-full rounded-full transition-[width] duration-300 ease-in-out',
  },
  variants: {
    variant: {
      default: { bar: 'bg-primary' },
      success: { bar: 'bg-success' },
      warning: { bar: 'bg-warning' },
      danger:  { bar: 'bg-danger'  },
    },
    size: {
      sm: { root: 'h-1' },
      md: { root: 'h-2' },
      lg: { root: 'h-3' },
    },
    indeterminate: {
      true: { bar: 'w-1/3 animate-[davis-indeterminate_1.5s_ease-in-out_infinite]' },
    },
  },
  defaultVariants: { variant: 'default', size: 'md' },
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

// ─── Typography ─────────────────────────────────────────────────────────────

export const text = tv({
  base: '',
  variants: {
    size: {
      xs:   'text-xs',
      sm:   'text-sm',
      base: 'text-base',
      lg:   'text-lg',
      xl:   'text-xl',
      '2xl': 'text-2xl',
    },
    weight: {
      normal:   'font-normal',
      medium:   'font-medium',
      semibold: 'font-semibold',
      bold:     'font-bold',
    },
    color: {
      default: 'text-gray-900',
      muted:   'text-gray-500',
      primary: 'text-primary',
      danger:  'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      inherit: 'text-inherit',
    },
    align: {
      left:   'text-left',
      center: 'text-center',
      right:  'text-right',
    },
    truncate: {
      true: 'truncate',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    size:   'base'    as const,
    weight: 'normal'  as const,
    color:  'default' as const,
  },
});

export const heading = tv({
  base: 'text-gray-900 leading-tight',
  variants: {
    level: {
      1: 'text-4xl font-bold',
      2: 'text-3xl font-bold',
      3: 'text-2xl font-semibold',
      4: 'text-xl  font-semibold',
      5: 'text-lg  font-semibold',
      6: 'text-base font-semibold',
    },
    color: {
      default: 'text-gray-900',
      muted:   'text-gray-500',
      primary: 'text-primary',
      inherit: 'text-inherit',
    },
    align: {
      left:   'text-left',
      center: 'text-center',
      right:  'text-right',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    level: 1 as const,
    color: 'default' as const,
  },
});

// ─── Form Ecosystem ──────────────────────────────────────────────────────────

export const formSection = tv({
  slots: {
    root:        'border border-gray-200 rounded-lg p-6 min-w-0',
    legend:      'text-base font-semibold text-gray-900',
    description: 'mt-1 mb-4 text-sm text-gray-500',
    content:     'flex flex-col gap-4',
  },
});

export const inputGroup = tv({
  slots: {
    root:         'flex',
    addon: [
      'inline-flex shrink-0 items-center',
      'border border-gray-400 bg-gray-50 text-gray-500',
      'transition-colors duration-200',
    ].join(' '),
    prefix: 'rounded-l-md border-r-0 rounded-r-none',
    suffix: 'rounded-r-md border-l-0 rounded-l-none',
    inputSlot: 'flex-1 min-w-0 [&>div]:mt-0 [&_input]:rounded-none',
    inputFirst: '[&_input]:rounded-l-none',
    inputLast:  '[&_input]:rounded-r-none',
  },
  variants: {
    size: {
      sm: { addon: 'px-2.5 py-1.5 text-sm' },
      md: { addon: 'px-3 py-2 text-base' },
      lg: { addon: 'px-4 py-3 text-lg' },
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const numberInput = tv({
  slots: {
    root:      'inline-flex w-full',
    stepper: [
      'inline-flex items-center justify-center shrink-0',
      'border border-gray-400 bg-white text-gray-600',
      'hover:bg-gray-50 active:bg-gray-100',
      'transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'select-none',
    ].join(' '),
    decrement: 'rounded-l-md border-r-0',
    increment: 'rounded-r-md border-l-0',
    input:     'rounded-none text-center flex-1 min-w-0',
  },
  variants: {
    size: {
      sm: { stepper: 'px-2 py-1.5 text-sm' },
      md: { stepper: 'px-3 py-2 text-base' },
      lg: { stepper: 'px-4 py-3 text-lg' },
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const combobox = tv({
  slots: {
    root:      'relative w-full',
    inputWrap: 'relative',
    button:    'absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-gray-600 focus:outline-none',
    options: [
      'absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1',
      'shadow-lg ring-1 ring-black/5 focus:outline-none',
      'max-h-60',
    ].join(' '),
    option: [
      'relative cursor-default select-none px-4 py-2 text-sm',
      'data-[focus]:bg-primary data-[focus]:text-white',
      'text-gray-900',
    ].join(' '),
    noResults: 'px-4 py-2 text-sm text-gray-500 text-center',
  },
});

// ─── Navigation ──────────────────────────────────────────────────────────────

export const breadcrumb = tv({
  slots: {
    root:      '',
    list:      'flex items-center flex-wrap',
    item:      'flex items-center',
    link: [
      'text-sm text-gray-500 hover:text-gray-700',
      'rounded focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary',
      'transition-colors duration-150',
    ].join(' '),
    current:   'text-sm font-medium text-gray-900',
    separator: 'mx-2 text-gray-400 select-none',
  },
});

export const pagination = tv({
  slots: {
    root:    'flex items-center justify-center',
    list:    'flex items-center gap-1',
    button: [
      'inline-flex items-center justify-center rounded-md',
      'border border-gray-300 bg-white text-gray-700',
      'hover:bg-gray-50 hover:border-gray-400',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300',
      'transition-colors duration-200 select-none font-medium',
    ].join(' '),
    current:  'bg-primary! text-white! border-primary! hover:bg-primary-600!',
    ellipsis: 'inline-flex items-center justify-center text-gray-400 select-none',
  },
  variants: {
    size: {
      sm: { button: 'size-8 text-sm',  ellipsis: 'size-8 text-sm'  },
      md: { button: 'size-9 text-sm',  ellipsis: 'size-9 text-sm'  },
      lg: { button: 'size-10 text-base', ellipsis: 'size-10 text-base' },
    },
  },
  defaultVariants: {
    size: 'md' as const,
  },
});

export const stepper = tv({
  slots: {
    root:        'flex',
    step:        'flex items-center',
    stepContent: 'flex flex-col',
    connector:   'border-gray-200',
    circle: [
      'inline-flex items-center justify-center rounded-full shrink-0',
      'font-medium transition-colors duration-200',
    ].join(' '),
    label:       'font-medium',
    description: 'text-gray-500',
  },
  variants: {
    orientation: {
      horizontal: {
        root:        'flex-row w-full',
        step:        'flex-col items-center flex-1 relative',
        stepContent: 'items-center text-center mt-2',
        connector:   'absolute top-4 left-[calc(50%+1.25rem)] right-[calc(-50%+1.25rem)] border-t',
      },
      vertical: {
        root:        'flex-col',
        step:        'flex-row gap-3 items-start',
        stepContent: 'pt-0.5 pb-4',
        connector:   'ml-4 border-l h-6 w-0',
      },
    },
    status: {
      complete: {
        circle: 'bg-primary text-white',
        label:  'text-gray-900',
      },
      current: {
        circle: 'bg-primary text-white ring-4 ring-primary/20',
        label:  'text-primary',
      },
      upcoming: {
        circle: 'bg-white text-gray-400 border-2 border-gray-300',
        label:  'text-gray-400',
      },
    },
    size: {
      sm: { circle: 'size-6 text-xs',  label: 'text-xs', description: 'text-xs'  },
      md: { circle: 'size-8 text-sm',  label: 'text-sm', description: 'text-xs'  },
      lg: { circle: 'size-10 text-base', label: 'text-base', description: 'text-sm' },
    },
  },
  defaultVariants: {
    orientation: 'horizontal' as const,
    size:        'md'         as const,
  },
});

// ─── Overlays ────────────────────────────────────────────────────────────────

export const drawer = tv({
  base: 'fixed inset-y-0 flex flex-col bg-white shadow-xl overflow-y-auto',
  variants: {
    side: {
      left:  'left-0',
      right: 'right-0',
    },
    size: {
      sm:   'w-72',
      md:   'w-96',
      lg:   'w-[32rem]',
      full: 'w-full',
    },
  },
  defaultVariants: {
    side: 'right' as const,
    size: 'md'    as const,
  },
});

export const popover = tv({
  base: 'absolute z-50 bg-white rounded-lg border border-gray-200 shadow-lg p-4 min-w-48',
  variants: {
    side: {
      top:    'bottom-full mb-2',
      bottom: 'top-full mt-2',
      left:   'right-full mr-2 top-0',
      right:  'left-full ml-2 top-0',
    },
  },
  defaultVariants: {
    side: 'bottom' as const,
  },
});

// ─── Data Display ─────────────────────────────────────────────────────────────

export const table = tv({
  base: 'w-full text-sm text-left border-collapse',
});

export const tableHead = tv({
  base: 'border-b border-gray-200 bg-gray-50',
});

export const tableRow = tv({
  base: 'border-b border-gray-100 hover:bg-gray-50 transition-colors',
});

export const tableCell = tv({
  base: 'px-4 py-3 text-gray-700',
});

export const tableHeaderCell = tv({
  base: 'px-4 py-3 font-medium text-gray-900',
});

export const statCard = tv({
  slots: {
    root:        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
    header:      'flex items-start justify-between',
    body:        'mt-2',
    label:       'text-sm font-medium uppercase tracking-wide text-gray-500',
    value:       'mt-2 text-3xl font-bold text-gray-900',
    trend:       'mt-2 flex items-center gap-1 text-sm font-medium',
    trendLabel:  'ml-1 font-normal text-gray-500',
    icon:        'size-8 shrink-0',
  },
  variants: {
    variant: {
      default: { icon: 'text-primary'  },
      success: { icon: 'text-success'  },
      warning: { icon: 'text-warning'  },
      danger:  { icon: 'text-danger'   },
    },
    trendDirection: {
      up:      { trend: 'text-success' },
      down:    { trend: 'text-danger'  },
      neutral: { trend: 'text-gray-500' },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
});

export const timeline = tv({
  slots: {
    root:        'flex flex-col',
    item:        'relative flex gap-4 pb-8 last:pb-0',
    connector:   'absolute left-[15px] top-8 bottom-0 w-px bg-gray-200 last:hidden',
    indicator: [
      'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 bg-white',
      'transition-colors duration-200',
    ].join(' '),
    content:     'min-w-0 flex-1 pt-1',
    title:       'text-sm font-semibold text-gray-900',
    description: 'mt-0.5 text-sm text-gray-500',
    timestamp:   'mt-1 text-xs text-gray-400',
  },
  variants: {
    status: {
      complete: { indicator: 'border-primary bg-primary text-white' },
      current:  { indicator: 'border-primary bg-white text-primary ring-4 ring-primary/10' },
      pending:  { indicator: 'border-gray-300 bg-white text-gray-400' },
    },
  },
  defaultVariants: {
    status: 'pending' as const,
  },
});

// ─── Menu ─────────────────────────────────────────────────────────────────────

export const menu = tv({
  slots: {
    root:         'relative inline-block text-left',
    trigger: [
      'inline-flex items-center justify-center gap-2',
      'px-4 py-2 text-sm font-medium',
      'bg-white text-gray-700 border border-gray-300 rounded-md',
      'hover:bg-gray-50 hover:cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'transition-colors duration-200',
    ].join(' '),
    triggerIcon:  'size-4 text-gray-400 shrink-0',
    items: [
      'absolute z-50 mt-2',
      'bg-white rounded-md shadow-lg',
      'ring-1 ring-black/5',
      'py-1',
      'focus:outline-none',
    ].join(' '),
    item: [
      'flex items-center w-full px-4 py-2 text-sm text-left',
      'transition-colors duration-150',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' '),
    itemIcon:     'mr-3 shrink-0 size-4',
    itemShortcut: 'ml-auto pl-4 text-xs text-gray-400',
    divider:      'my-1 h-px bg-gray-200',
    label:        'px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider select-none',
  },
  variants: {
    align: {
      left:  { items: 'left-0 origin-top-left'  },
      right: { items: 'right-0 origin-top-right' },
    },
    width: {
      auto: { items: 'w-auto min-w-[160px]' },
      sm:   { items: 'w-40'                 },
      md:   { items: 'w-56'                 },
      lg:   { items: 'w-72'                 },
      full: { items: 'w-full'               },
    },
    itemVariant: {
      default: { item: 'text-gray-700' },
      danger:  { item: 'text-red-600'  },
    },
    itemFocused: {
      true:  {},
      false: {},
    },
  },
  compoundVariants: [
    {
      itemVariant: 'default',
      itemFocused: true,
      class: { item: 'bg-gray-100 text-gray-900' },
    },
    {
      itemVariant: 'danger',
      itemFocused: true,
      class: { item: 'bg-red-50 text-red-700' },
    },
  ],
  defaultVariants: {
    align:       'left'    as const,
    width:       'auto'    as const,
    itemVariant: 'default' as const,
    itemFocused: false     as const,
  },
});
