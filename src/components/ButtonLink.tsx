import { AnchorHTMLAttributes } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({ className = '', ...props }: ButtonLinkProps) => (
  <a
    className={`inline-flex rounded-md border border-blue-500 px-4 py-2 text-blue-500 transition hover:bg-blue-500/10 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500/10 ${className}`}
    {...props}
  />
);

export default ButtonLink;
