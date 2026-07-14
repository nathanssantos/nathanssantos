import { ReactNode } from 'react';

type SectionHeaderProps = {
  children: ReactNode;
};

const SectionHeader = ({ children }: SectionHeaderProps) => (
  <div className='flex rotate-180 items-center gap-4 font-mono text-[1.75rem] text-blue-500 uppercase [writing-mode:vertical-lr] lg:text-[4rem] dark:text-teal-500'>
    {children}
  </div>
);

export default SectionHeader;
