import { useRef } from "react";
import "./App.css";
import { ComponentToPrint } from "./components/ComponentToPrint";
import { useReactToPrint } from "react-to-print";
import { LetterToPrint } from "./components/LetterToPrint";

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        {/* <ComponentToPrint ref={componentRef} /> */}
        <LetterToPrint ref={componentRef} />
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}

export default App;
