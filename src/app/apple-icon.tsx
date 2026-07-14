import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const AppleIcon = () =>
  new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222222',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 130,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          color: 'transparent',
          backgroundImage: 'linear-gradient(120deg, #64ffda 20%, #5374fa 70%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }}
      >
        N
      </div>
    </div>,
    size,
  );

export default AppleIcon;
