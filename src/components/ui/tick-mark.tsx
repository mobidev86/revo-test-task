function TickMark() {
  return (
    <svg
      className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default TickMark;
