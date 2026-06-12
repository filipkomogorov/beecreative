import type { ProjectCover as ProjectCoverType } from "../../data/projects";

interface ProjectCoverProps {
  type: ProjectCoverType;
}

const ProjectCover = ({
  type,
}: ProjectCoverProps) => {
  switch (type) {
    case "apiary":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Apiary & Co. — корица"
        >
          <defs>
            <linearGradient
              id="project-apiary-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#F2A516" />
              <stop offset="1" stopColor="#FFD66B" />
            </linearGradient>
          </defs>

          <rect
            width="600"
            height="400"
            fill="url(#project-apiary-gradient)"
          />

          <circle
            cx="470"
            cy="110"
            r="58"
            fill="#1D1510"
          />

          <circle
            cx="470"
            cy="110"
            r="24"
            fill="#FFD66B"
          />

          <text
            x="48"
            y="248"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="56"
            fill="#1D1510"
          >
            Apiary
          </text>

          <text
            x="48"
            y="312"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="56"
            fill="#1D1510"
          >
            &amp; Co.
          </text>
        </svg>
      );

    case "meridian":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Meridian Bank — корица"
        >
          <rect width="600" height="400" fill="#1D1510" />

          <rect
            x="430"
            y="64"
            width="92"
            height="92"
            fill="#6A4CFF"
          />

          <rect
            x="476"
            y="110"
            width="92"
            height="92"
            fill="none"
            stroke="#FFD66B"
            strokeWidth="3"
          />

          <text
            x="48"
            y="280"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="54"
            fill="#FFD66B"
          >
            Meridian
          </text>

          <line
            x1="48"
            y1="318"
            x2="300"
            y2="318"
            stroke="#6A4CFF"
            strokeWidth="4"
          />
        </svg>
      );

    case "fieldnote":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Fieldnote — корица"
        >
          <defs>
            <linearGradient
              id="project-fieldnote-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#6A4CFF" />
              <stop offset="1" stopColor="#4D33D6" />
            </linearGradient>
          </defs>

          <rect
            width="600"
            height="400"
            fill="url(#project-fieldnote-gradient)"
          />

          <circle
            cx="478"
            cy="104"
            r="46"
            fill="none"
            stroke="#FFD66B"
            strokeWidth="9"
          />

          <rect
            x="48"
            y="86"
            width="160"
            height="12"
            rx="6"
            fill="#FBF5E9"
            opacity="0.5"
          />

          <rect
            x="48"
            y="116"
            width="110"
            height="12"
            rx="6"
            fill="#FBF5E9"
            opacity="0.3"
          />

          <text
            x="48"
            y="290"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="54"
            fill="#FBF5E9"
          >
            Fieldnote
          </text>
        </svg>
      );

    case "dolina":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Долина — корица"
        >
          <defs>
            <linearGradient
              id="project-dolina-gradient"
              x1="0"
              y1="1"
              x2="1"
              y2="0"
            >
              <stop offset="0" stopColor="#6A4CFF" />
              <stop offset="0.55" stopColor="#C77BA0" />
              <stop offset="1" stopColor="#F2A516" />
            </linearGradient>
          </defs>

          <rect
            width="600"
            height="400"
            fill="url(#project-dolina-gradient)"
          />

          <circle
            cx="300"
            cy="86"
            r="34"
            fill="#FFD66B"
          />

          <path
            d="M0 320 Q150 250 300 320 T600 320 V400 H0 Z"
            fill="#1D1510"
            opacity="0.85"
          />

          <text
            x="48"
            y="276"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="58"
            fill="#FBF5E9"
          >
            Долина
          </text>
        </svg>
      );

    case "norr":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Studio Norr — корица"
        >
          <defs>
            <linearGradient
              id="project-norr-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0" stopColor="#FBF5E9" />
              <stop offset="1" stopColor="#F3EAD7" />
            </linearGradient>
          </defs>

          <rect
            width="600"
            height="400"
            fill="url(#project-norr-gradient)"
          />

          <path
            d="M470 60 530 95v70l-60 35-60-35V95z"
            fill="#F2A516"
          />

          <path
            d="M410 165 470 200v70l-60 35-60-35v-70z"
            fill="none"
            stroke="#1D1510"
            strokeWidth="3"
          />

          <text
            x="48"
            y="276"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="50"
            fill="#1D1510"
          >
            Studio
          </text>

          <text
            x="48"
            y="332"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="50"
            fill="#1D1510"
          >
            Norr
          </text>
        </svg>
      );

    case "atlas":
      return (
        <svg
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Атлас Тур — корица"
        >
          <defs>
            <linearGradient
              id="project-atlas-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#1D1510" />
              <stop offset="1" stopColor="#4D33D6" />
            </linearGradient>
          </defs>

          <rect
            width="600"
            height="400"
            fill="url(#project-atlas-gradient)"
          />

          <circle
            cx="300"
            cy="400"
            r="210"
            fill="none"
            stroke="#FFD66B"
            strokeWidth="2"
            opacity="0.7"
          />

          <circle
            cx="300"
            cy="400"
            r="150"
            fill="none"
            stroke="#FFD66B"
            strokeWidth="2"
            opacity="0.4"
          />

          <circle
            cx="448"
            cy="118"
            r="12"
            fill="#FFD66B"
          />

          <text
            x="48"
            y="276"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="52"
            fill="#FBF5E9"
          >
            Атлас Тур
          </text>
        </svg>
      );
  }
};

export default ProjectCover;