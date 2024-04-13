import { forwardRef, HTMLAttributes } from "react";

type LetterToPrintProps = HTMLAttributes<HTMLDivElement>;

export const LetterToPrint = forwardRef<HTMLDivElement, LetterToPrintProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="flex flex-row min-w-[21cm] min-h-[29.7cm] max-h-[29.7cm] max-w-[21cm] bg-white -z-20 text-slate-800 rounded overflow-hidden leading-5"
      >
        <div className="flex flex-col relative text-maintext w-[100%] text-left text-base gap-4 overflow-hidden p-12">
          <div className="absolute right-0 top-0 -z-10">
            <img src="/src/assets/eu.svg" />
            <div className="absolute left-0 bottom-0 w-[172px] h-[114px] bg-white/50"></div>
          </div>
          <div className="flex flex-col mb-8 gap-4"></div>

          <div className="flex flex-col gap-4 h-40">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-3xl"></div>
              <div className="text-3xl text-lefttext text-right">
                Rayk Oscuro
              </div>
              <div>
                <p className="text-lg">Unternehmensname</p>
                <p>Ansprechperson</p>
                <p>Muster Straße 123</p>
                <p>12345 Some City</p>
              </div>
              <div className="flex flex-col text-lefttext text-right self-start">
                <p>Some Street 123, 01234 Leipzig</p>
                <p>name@mail.com</p>
                <p>+49 123 4567890</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-4xl w-full text-center">
              Application - Software Developer
            </p>
            <p className="text-3xl w-full text-center">
              Your offer as seen on ...
            </p>
            <p className="text-lg w-full text-right my-4">April 10th, 2024</p>
            <p>Dear xyz,</p>
            <p>This is my first paragraph! Hype! Hype! Hype! Hype! Hype!</p>
          </div>
        </div>
      </div>
    );
  }
);
