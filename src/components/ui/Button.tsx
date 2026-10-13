'use client';

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from 'react-aria-components/Button';
import { tv, type VariantProps } from 'tailwind-variants';
import { cx } from '@/lib/primitive';

export const buttonStyles = tv({
  base: [
    '[--btn-border:var(--color-fg)]/15 [--btn-icon-active:var(--btn-fg)] [--btn-outline:var(--color-ring)] [--btn-radius:var(--radius-md)] [--btn-ring:var(--color-ring)]/20',
    'bg-(--btn-bg) text-(--btn-fg) outline-(--btn-outline) ring-(--btn-ring) hover:bg-(--btn-overlay)',
    'relative isolate inline-flex items-center justify-center border border-(--btn-border) font-medium transition-colors duration-200 hover:no-underline',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-offset-3 focus-visible:ring-offset-bg',
    'forced-colors:[--btn-icon:ButtonText] forced-colors:hover:[--btn-icon:ButtonText] *:[svg]:-mx-0.5 *:[svg]:shrink-0 *:[svg]:self-center *:[svg]:text-(--btn-icon) hover:*:[svg]:text-(--btn-icon-active)/90 focus-visible:*:[svg]:text-(--btn-icon-active)/80',
    '*:data-[slot=loader]:-mx-0.5 *:data-[slot=loader]:shrink-0 *:data-[slot=loader]:self-center *:data-[slot=loader]:text-(--btn-icon)',
    'pending:opacity-50 disabled:opacity-50 disabled:forced-colors:text-[GrayText]',
    '*:data-[slot=color-swatch]:-mx-0.5 *:data-[slot=color-swatch]:shrink-0 *:data-[slot=color-swatch]:self-center *:data-[slot=color-swatch]:[--size:--spacing(5)]',
  ],
  variants: {
    intent: {
      primary:
        '[--btn-bg:var(--color-primary)] [--btn-fg:var(--color-primary-fg)] [--btn-icon-active:var(--primary-fg)] [--btn-icon:var(--primary-fg)] [--btn-overlay:var(--color-primary)]',
      secondary:
        '[--btn-bg:var(--color-secondary)] [--btn-fg:var(--color-secondary-fg)] [--btn-icon:var(--color-muted-fg)] [--btn-overlay:color-mix(in_oklab,var(--color-secondary-fg)_10%,var(--color-secondary)_90%)]',
      warning:
        '[--btn-bg:var(--color-warning)] [--btn-fg:var(--color-warning-fg)] [--btn-icon:var(--color-warning-fg)]/60 [--btn-overlay:color-mix(in_oklab,var(--color-white)_10%,var(--color-warning)_90%)]',
      danger:
        '[--btn-bg:var(--color-danger)] [--btn-fg:var(--color-danger-fg)] [--btn-icon:color-mix(in_oklab,var(--color-danger-fg)_60%,var(--danger)_40%)] [--btn-overlay:color-mix(in_oklab,var(--color-white)_10%,var(--color-danger)_90%)]',
      success:
        '[--btn-bg:var(--color-success)] [--btn-fg:var(--color-success-fg)] [--btn-icon:color-mix(in_oklab,var(--color-success-fg)_60%,var(--success)_40%)] [--btn-overlay:color-mix(in_oklab,var(--color-white)_10%,var(--color-success)_90%)]',
      outline:
        'border-primary [--btn-border:var(--color-primary)] [--btn-bg:transparent] [--btn-fg:var(--color-primary)] [--btn-icon:var(--color-primary)] [--btn-outline:var(--color-ring)] [--btn-overlay:var(--color-primary)] [--btn-ring:var(--color-ring)]/20 hover:[--btn-fg:var(--color-primary-fg)] hover:[--btn-icon:var(--color-primary-fg)] focus-visible:bg-primary focus-visible:[--btn-fg:var(--color-primary-fg)] focus-visible:[--btn-icon:var(--color-primary-fg)] active:bg-primary active:[--btn-fg:var(--color-primary-fg)] active:[--btn-icon:var(--color-primary-fg)] pressed:bg-primary pressed:[--btn-fg:var(--color-primary-fg)] pressed:[--btn-icon:var(--color-primary-fg)]',
      plain:
        'border-transparent [--btn-bg:transparent] [--btn-icon:var(--color-muted-fg)] [--btn-outline:var(--color-ring)] [--btn-overlay:var(--color-secondary)] [--btn-ring:var(--color-ring)]/20',
    },
    size: {
      xs: [
        'min-h-8 gap-x-1.5 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] text-sm sm:min-h-7 sm:px-2 sm:py-[calc(--spacing(1.5)-1px)] sm:text-xs/4',
        '*:[svg]:-mx-px *:[svg]:size-3.5 sm:*:[svg]:size-3',
        '*:data-[slot=loader]:-mx-px *:data-[slot=loader]:size-3.5 sm:*:data-[slot=loader]:size-3',
      ],
      sm: [
        'min-h-9 gap-x-1.5 px-3 py-[calc(--spacing(2)-1px)] sm:min-h-8 sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/5',
        '*:[svg]:size-4.5 sm:*:[svg]:size-4',
        '*:data-[slot=loader]:size-4.5 sm:*:data-[slot=loader]:size-4',
      ],
      md: [
        'min-h-10 gap-x-2 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6',
        '*:[svg]:size-5 sm:*:[svg]:size-4',
        '*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4',
      ],
      lg: [
        'min-h-10 gap-x-2 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(3)-1px)] sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/7',
        '*:[svg]:size-5 sm:*:[svg]:size-4.5',
        '*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4.5',
      ],
      'sq-xs': [
        'touch-target size-8 shrink-0 sm:size-7',
        '*:[svg]:size-3.5 sm:*:[svg]:size-3',
        '*:data-[slot=loader]:size-3.5 sm:*:data-[slot=loader]:size-3',
      ],
      'sq-sm': [
        'touch-target size-10 shrink-0 sm:size-8',
        '*:[svg]:size-4.5 sm:*:[svg]:size-4',
        '*:data-[slot=loader]:size-4.5 sm:*:data-[slot=loader]:size-4',
      ],
      'sq-md': [
        'touch-target size-11 shrink-0 sm:size-9',
        '*:[svg]:size-5 sm:*:[svg]:size-4.5',
        '*:data-[slot=loader]:size-5 sm:*:data-[slot=loader]:size-4.5',
      ],
      'sq-lg': [
        'touch-target size-12 shrink-0 sm:size-10',
        '*:[svg]:size-6 sm:*:[svg]:size-5',
        '*:data-[slot=loader]:size-6 sm:*:data-[slot=loader]:size-5',
      ],
    },

    isCircle: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    isCircle: false,
  },
});

export interface ButtonProps extends ButtonPrimitiveProps, VariantProps<typeof buttonStyles> {
  ref?: React.Ref<HTMLButtonElement>;
}

export function Button({ className, intent, size, isCircle, ref, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      ref={ref}
      {...props}
      className={cx(
        buttonStyles({
          intent,
          size,
          isCircle,
        }),
        className,
      )}
    />
  );
}
