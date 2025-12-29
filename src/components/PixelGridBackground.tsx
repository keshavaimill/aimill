import { motion } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";

const colors = [
  "rgba(59, 130, 246, 0.6)", // deep blue - darker
  "rgba(139, 92, 246, 0.6)", // violet - darker
  "rgba(20, 184, 166, 0.6)", // teal - darker
  "rgba(236, 72, 153, 0.6)", // soft magenta - darker
];

export const PixelGridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || window.innerWidth,
          height: rect.height || window.innerHeight,
        });
      }
    };

    updateDimensions();
    const timeoutId = setTimeout(updateDimensions, 100);
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  const cellSize = 40;
  const borderWidth = 1;
  const width = dimensions.width || (typeof window !== 'undefined' ? window.innerWidth : 1920);
  const height = dimensions.height || (typeof window !== 'undefined' ? window.innerHeight : 1080);
  const cols = Math.ceil(width / cellSize);
  const rows = Math.ceil(height / cellSize);

  const cells = useMemo(() => {
    if (cols === 0 || rows === 0) {
      const fallbackCols = Math.ceil(1920 / cellSize);
      const fallbackRows = Math.ceil(1080 / cellSize);
      const cellsArray = [];
      for (let row = 0; row < fallbackRows; row++) {
        for (let col = 0; col < fallbackCols; col++) {
          cellsArray.push({
            id: row * fallbackCols + col,
            x: col * cellSize,
            y: row * cellSize,
            color: colors[Math.floor(Math.random() * colors.length)],
            baseDelay: Math.random() * 2,
          });
        }
      }
      return cellsArray;
    }
    const cellsArray = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        cellsArray.push({
          id: row * cols + col,
          x: col * cellSize,
          y: row * cellSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseDelay: Math.random() * 2,
        });
      }
    }
    return cellsArray;
  }, [cols, rows]);

  const getDistanceFromMouse = (cell: { x: number; y: number }) => {
    if (!mousePosition) return Infinity;
    const cellCenterX = cell.x + cellSize / 2;
    const cellCenterY = cell.y + cellSize / 2;
    const dx = cellCenterX - mousePosition.x;
    const dy = cellCenterY - mousePosition.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#000000",
      }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid cells - rectangular grid with borders - ALL INTERACTIVE */}
      <div className="absolute inset-0" style={{ pointerEvents: 'auto' }}>
        {cells.map((cell) => {
          const distance = getDistanceFromMouse(cell);
          const isNearMouse = distance < 150;
          const intensity = isNearMouse ? Math.max(0, 1 - distance / 150) : 0;
          const rippleDistance = Math.floor(distance / cellSize);

          return (
            <motion.div
              key={cell.id}
              className="absolute cursor-pointer"
              style={{
                left: `${cell.x}px`,
                top: `${cell.y}px`,
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                border: `${borderWidth}px solid rgba(255, 255, 255, 0.1)`,
                backgroundColor: 'transparent',
              }}
              animate={{
                borderColor: isNearMouse
                  ? [
                      `rgba(255, 255, 255, ${0.1 + intensity * 0.3})`,
                      `${cell.color}`,
                      `${cell.color}`,
                      `rgba(255, 255, 255, ${0.1 + intensity * 0.2})`,
                    ]
                  : `rgba(255, 255, 255, 0.1)`,
                backgroundColor: isNearMouse
                  ? [
                      'transparent',
                      `${cell.color.replace('0.6', String(0.2 + intensity * 0.4))}`,
                      `${cell.color.replace('0.6', String(0.15 + intensity * 0.3))}`,
                      'transparent',
                    ]
                  : 'transparent',
                boxShadow: isNearMouse
                  ? [
                      'none',
                      `0 0 ${15 + intensity * 25}px ${cell.color}, 0 0 ${8 + intensity * 15}px ${cell.color}, inset 0 0 ${6 + intensity * 12}px ${cell.color}`,
                      `0 0 ${12 + intensity * 20}px ${cell.color}, inset 0 0 ${4 + intensity * 8}px ${cell.color}`,
                      'none',
                    ]
                  : 'none',
              }}
              transition={{
                duration: isNearMouse ? 0.35 : 4 + cell.baseDelay,
                repeat: isNearMouse ? 0 : Infinity,
                ease: "easeInOut",
                delay: isNearMouse ? rippleDistance * 0.025 : cell.baseDelay,
              }}
              whileHover={{
                borderColor: cell.color,
                backgroundColor: cell.color.replace('0.6', '0.3'),
                boxShadow: `0 0 25px ${cell.color}, 0 0 15px ${cell.color}, inset 0 0 12px ${cell.color}`,
                scale: 1.02,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
