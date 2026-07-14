import { ReactNode } from 'react';

import SectionHeader from './SectionHeader';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = '' }: SectionProps) => (
  <section id={id}>
    <div className='mx-auto flex w-full max-w-7xl pt-24 pr-[3.625rem] pb-48 pl-2 lg:pr-[8.25rem]'>
      <div className='flex w-full items-start gap-3.5 lg:gap-7'>
        <div className='sticky top-20 flex'>
          <SectionHeader>{title}</SectionHeader>
        </div>
        <div className={`min-w-0 flex-1 ${className}`}>{children}</div>
      </div>
    </div>
  </section>
);

export default Section;
