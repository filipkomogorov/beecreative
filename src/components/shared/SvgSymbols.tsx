const SvgSymbols = () => {
  return (
    <svg
      className="svg-symbols"
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
    >
      <symbol id="hexagon" viewBox="0 0 28 32">
        <path
          d="M14 1 27 8.5v15L14 31 1 23.5v-15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        />
      </symbol>

      <symbol id="hexagon-solid" viewBox="0 0 28 32">
        <path
          d="M14 1 27 8.5v15L14 31 1 23.5v-15z"
          fill="currentColor"
        />
      </symbol>
    </svg>
  );
};

export default SvgSymbols;