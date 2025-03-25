export default function SlideUpText(props: {
  text?: string;
  symbol?: React.ReactNode;
  className?: string;
}) {
  const letters = props.text?.split("");
  return props.symbol ? (
    <span id="transitionContentLetter" className="relative">
      {props.symbol}
    </span>
  ) : (
    <span className="">
      {letters?.map((letter, i) => {
        return (
          <span
            key={i}
            id="transitionContentLetter"
            className={`relative ${props.className}`}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}
