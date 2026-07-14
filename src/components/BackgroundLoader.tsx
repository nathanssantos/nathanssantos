'use client';

import dynamic from 'next/dynamic';

const Background = dynamic(() => import('./Background'), { ssr: false });

const BackgroundLoader = () => <Background />;

export default BackgroundLoader;
