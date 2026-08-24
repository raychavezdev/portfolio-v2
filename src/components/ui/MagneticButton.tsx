import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 6,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(media.matches);
    };

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate3d(
      ${(x / rect.width) * strength}px,
      ${(y / rect.height) * strength}px,
      0
    )`;
  };

  const resetPosition = () => {
    if (!ref.current) return;

    ref.current.style.transform =
      "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className={`inline-flex transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}