type MultilineTextProps = {
  text: string;
};

export const MultilineText = ({ text }: MultilineTextProps) => {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

type ParagraphsProps = {
  text: string; 
  className: string;
  firstClassName?: string;
  restClassName?: string;
};

export const Paragraphs = ({ text, className, firstClassName = "", restClassName = "" }: ParagraphsProps) => {
  const paragraphs = text.split("\n\n").map((p) => p.trim()).filter(Boolean);
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`${className} ${index === 0 ? firstClassName : restClassName}`}>
          {paragraph}
        </p>
      ))}
    </>
  );
};