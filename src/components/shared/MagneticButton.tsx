import { useRef, useCallback, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button as BaseButton, ButtonProps } from "@/components/ui/button";

/**
 * Magnetic button — subtly pulls toward the cursor when nearby.
 * Wraps the standard Button component.
 */
const MagneticButton = forwardRef<HTMLButtonElement, ButtonProps & { magnetStrength?: number }>(
  ({ className, magnetStrength = 0.3, children, ...props }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) * magnetStrength;
        const dy = (e.clientY - centerY) * magnetStrength;
        setOffset({ x: dx, y: dy });
      },
      [magnetStrength]
    );

    const handleMouseLeave = useCallback(() => {
      setOffset({ x: 0, y: 0 });
    }, []);

    return (
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <BaseButton
          ref={ref}
          className={cn(className)}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: offset.x === 0 && offset.y === 0 ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" : "transform 0.15s ease-out",
          }}
          {...props}
        >
          {children}
        </BaseButton>
      </div>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
