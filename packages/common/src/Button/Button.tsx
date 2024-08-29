import { type ComponentPropsWithRef, forwardRef } from 'react';

type Prop = ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Prop>(({ className, children, ...rest }, ref) => (
  <button ref={ref} className={className} {...rest}>
    {children}
  </button>
));
