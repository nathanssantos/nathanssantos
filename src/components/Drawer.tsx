'use client';

import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Menu from './Menu';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        aria-label='Menu'
        onClick={() => setOpen(true)}
        className='rounded-md p-1.5 text-blue-500 dark:text-teal-500'
      >
        <RiMenuLine className='h-4 w-4' />
      </button>
      {open && (
        <div className='fixed inset-0 z-50' role='dialog' aria-modal='true'>
          <div
            className='absolute inset-0 bg-black/40'
            onClick={() => setOpen(false)}
            aria-hidden='true'
          />
          <div className='absolute top-0 left-0 h-full w-64 bg-[#f0f0f0] p-6 shadow-[0px_8px_20px_-2px_rgba(0,0,0,0.08)] dark:bg-[#222]'>
            <button
              type='button'
              aria-label='Close'
              onClick={() => setOpen(false)}
              className='mb-8 rounded-md p-1.5 text-blue-500 dark:text-teal-500'
            >
              <RiCloseLine className='h-5 w-5' />
            </button>
            <Menu vertical />
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
