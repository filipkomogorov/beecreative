import type { CSSProperties } from "react";

interface HexIconProps {
  className?: string;
  color?: string;
  solid?: boolean;
}

const HexIcon = ({
  className = "",
  color = "var(--honey)",
  solid = false,
}: HexIconProps) => {
  const iconStyle: CSSProperties = {
    color,
  };

  return (
    <svg
      className={className}
      style={iconStyle}
      aria-hidden="true"
      focusable="false"
    >
      <use href={solid ? "#hexagon-solid" : "#hexagon"} />
    </svg>
  );
};

export default HexIcon;