import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import HexIcon from "./HexIcon";

interface EyebrowProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  iconColor?: string;
}

const Eyebrow = ({
  children,
  className = "",
  iconColor = "var(--honey)",
  ...paragraphProps
}: EyebrowProps) => {
  const classNames = [
    "eyebrow",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <p
      className={classNames}
      {...paragraphProps}
    >
      <HexIcon
        className="hex"
        color={iconColor}
      />

      <span>{children}</span>
    </p>
  );
};

export default Eyebrow;