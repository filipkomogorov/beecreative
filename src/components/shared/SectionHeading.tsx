import type { ReactNode } from "react";

import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="section-head" data-reveal>
      <div>
        <Eyebrow className="section-heading-eyebrow">
          {eyebrow}
        </Eyebrow>

        <h2 className="title">{title}</h2>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;