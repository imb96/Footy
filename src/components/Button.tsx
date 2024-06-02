import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {}

const Button = ({ children, ...attributes }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <button ref={ref} {...attributes}>
      {children}
    </button>
  );
};

export default forwardRef(Button);
