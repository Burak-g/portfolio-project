import { useEffect, useState } from 'react';
import DotGrid from '@/components/ui/DotGrid';

function asHex(value: string) {
  const context = document.createElement('canvas').getContext('2d');
  if (!context) return '#808080';
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  return `#${Array.from(context.getImageData(0, 0, 1, 1).data)
    .slice(0, 3)
    .map((channel) => channel.toString(16).padStart(2, '0'))
    .join('')}`;
}

export default function HeroDotGrid() {
  const [colors, setColors] = useState<{ base: string; active: string } | null>(null);
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const styles = getComputedStyle(root);
      setColors({
        base: asHex(styles.getPropertyValue('--border').trim()),
        active: asHex(styles.getPropertyValue('--primary').trim()),
      });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'style'] });
    return () => observer.disconnect();
  }, []);
  return (
    <div aria-hidden="true" className="hero-dot-grid">
      {colors && (
        <DotGrid
          dotSize={4}
          gap={26}
          baseColor={colors.base}
          activeColor={colors.active}
          proximity={120}
          speedTrigger={180}
          maxSpeed={700}
          shockRadius={130}
          shockStrength={0.6}
          resistance={1400}
          returnDuration={1.2}
        />
      )}
    </div>
  );
}
