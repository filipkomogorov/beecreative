interface ProjectPreviewProps {
  activeIndex: number | null;
}

const ProjectPreview = ({
  activeIndex,
}: ProjectPreviewProps) => {
  return (
    <>
      <div
        className={`pane ${
          activeIndex === 0 ? "on" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, #F2A516, #FFD66B)",
        }}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
        >
          <text
            x="24"
            y="120"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#1D1510"
          >
            Apiary&amp;Co.
          </text>

          <circle
            cx="248"
            cy="52"
            r="26"
            fill="#1D1510"
          />
        </svg>
      </div>

      <div
        className={`pane ${
          activeIndex === 1 ? "on" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, #1D1510, #3A2E22)",
        }}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
        >
          <text
            x="24"
            y="120"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#FFD66B"
          >
            Meridian
          </text>

          <rect
            x="222"
            y="30"
            width="44"
            height="44"
            fill="#6A4CFF"
          />
        </svg>
      </div>

      <div
        className={`pane ${
          activeIndex === 2 ? "on" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, #6A4CFF, #4D33D6)",
        }}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
        >
          <text
            x="24"
            y="120"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#FBF5E9"
          >
            Fieldnote
          </text>

          <circle
            cx="244"
            cy="54"
            r="24"
            fill="none"
            stroke="#FFD66B"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div
        className={`pane ${
          activeIndex === 3 ? "on" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, #FBF5E9, #F3EAD7)",
        }}
      >
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
        >
          <text
            x="24"
            y="120"
            fontFamily="Unbounded, sans-serif"
            fontWeight="800"
            fontSize="28"
            fill="#1D1510"
          >
            StudioNorr
          </text>

          <path
            d="M226 30 264 52v44l-38 22-38-22V52z"
            fill="#F2A516"
          />
        </svg>
      </div>
    </>
  );
};

export default ProjectPreview;