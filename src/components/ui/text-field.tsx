'use client';

import {
  TextField as TextFieldPrimitive,
  type TextFieldProps,
} from 'react-aria-components/TextField';
import { cx } from '@/components/ui/primitive.ts';
import { fieldStyles } from './field.tsx';

export function TextField({ className, ...props }: TextFieldProps) {
  return (
    <TextFieldPrimitive data-slot="control" className={cx(fieldStyles(), className)} {...props} />
  );
}
