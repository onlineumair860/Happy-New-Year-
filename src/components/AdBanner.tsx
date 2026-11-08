import React from 'react';

interface AtOptionsAdProps {
  adKey: string;
  format?: string;
  height: number;
  width: number;
  src: string;
  className?: string;
}

/**
 * Isolated Iframe Ad Banner for atOptions advertising scripts.
 * Isolating inside an iframe prevents global window.atOptions collisions,
 * prevents document.write page wiping, and ensures responsive rendering.
 */
export const AtOptionsAd: React.FC<AtOptionsAdProps> = ({
  adKey,
  format = 'iframe',
  height,
  width,
  src,
  className = '',
}) => {
  const srcDoc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '${adKey}',
      'format' : '${format}',
      'height' : ${height},
      'width' : ${width},
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="${src}"></script>
</body>
</html>`;

  return (
    <div className={`flex flex-col items-center justify-center my-3 ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 select-none font-medium">
        Advertisement
      </span>
      <div
        className="rounded-xl overflow-hidden bg-slate-950/40 border border-slate-800/80 shadow-lg flex items-center justify-center"
        style={{ width: `${width}px`, maxWidth: '100%', minHeight: `${height}px` }}
      >
        <iframe
          title={`Ad-${adKey}`}
          srcDoc={srcDoc}
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
          className="border-0 overflow-hidden block"
          style={{ width: `${width}px`, height: `${height}px`, maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

/**
 * Specific Pre-configured Ads:
 */

// 1. 300 × 250 – Medium Rectangle
export const MediumRectangleAd: React.FC<{ className?: string }> = ({ className = '' }) => (
  <AtOptionsAd
    adKey="e2409394f8033a8b3efbd383eb7d91fa"
    width={300}
    height={250}
    src="https://bauval.org/22/e2409394f8033a8b3efbd383eb7d91fa"
    className={className}
  />
);

// 2. 320 × 50 – Large Mobile Banner
export const MobileBannerAd: React.FC<{ className?: string }> = ({ className = '' }) => (
  <AtOptionsAd
    adKey="3cfb5868255fce2a6b36d60a797d8413"
    width={320}
    height={50}
    src="https://bauval.org/22/3cfb5868255fce2a6b36d60a797d8413"
    className={className}
  />
);

// 3. 728 × 90 – Leaderboard (Desktop user k leya)
export const LeaderboardAd: React.FC<{ className?: string }> = ({ className = '' }) => (
  <AtOptionsAd
    adKey="d05ad0915d06172fe8acacc63f99ac3c"
    width={728}
    height={90}
    src="https://www.highrevenueformat.com/d05ad0915d06172fe8acacc63f99ac3c/invoke.js"
    className={className}
  />
);
