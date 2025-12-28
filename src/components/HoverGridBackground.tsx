import { useEffect, useRef } from "react";

const SQUARE_SIZE = 20;
const COLORS = ["#3c45bcff", "#ff6bf0ff", "#9b5cff"];

export default function HoverGridBackground() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Helper function to get random color
  const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const createGrid = () => {
      if (!grid) return;

      grid.innerHTML = ""; // clear previous squares

      const cols = Math.floor(window.innerWidth / SQUARE_SIZE);
      const rows = Math.floor(window.innerHeight / SQUARE_SIZE);

      grid.style.display = "grid";
      grid.style.gridTemplateColumns = `repeat(${cols}, ${SQUARE_SIZE}px)`;
      grid.style.gridTemplateRows = `repeat(${rows}, ${SQUARE_SIZE}px)`;

      const totalSquares = cols * rows;

      for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");

        // Square styles
        square.style.width = `${SQUARE_SIZE}px`;
        square.style.height = `${SQUARE_SIZE}px`;
        square.style.background = "#111"; // default background
        square.style.transition = "background 0.3s ease";
        square.style.pointerEvents = "auto";

        // Hover effect with 150ms flash (exactly like JS)
        square.addEventListener("mouseenter", () => {
          square.style.background = getRandomColor();

          setTimeout(() => {
            square.style.background = "#111"; // reset after 150ms
          }, 150);
        });

        grid.appendChild(square);
      }
    };

    createGrid();

    // Recreate grid on resize
    window.addEventListener("resize", createGrid);
    return () => window.removeEventListener("resize", createGrid);
  }, []);

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "#0f0f0f" }}
    />
  );
}
