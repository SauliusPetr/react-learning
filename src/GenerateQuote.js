import { useState } from "react";
import { quotes } from "./data";
import FancyText from "./FancyText";
export default function GenerateQuote({ children }) {
  const [quoteNr, setQuoteNr] = useState(0);

  const quote = quotes[quoteNr];

  const nextQuote = () => setQuoteNr((quoteNr + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote: </p>
      <FancyText text={quote} />
      <button onClick={nextQuote}>New Inspiration</button>
      {children}
    </>
  );
}
