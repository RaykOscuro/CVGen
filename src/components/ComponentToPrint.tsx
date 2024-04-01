import { forwardRef, HTMLAttributes } from "react";
import { CvItem } from "./CvItem";

type ComponentToPrintProps = HTMLAttributes<HTMLDivElement>;

export const ComponentToPrint = forwardRef<
  HTMLDivElement,
  ComponentToPrintProps
>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex flex-row min-w-[21cm] min-h-[29.7cm] max-h-[29.7cm] max-w-[21cm] bg-white text-slate-800 rounded overflow-hidden leading-5"
    >
      <div className="flex flex-col min-w-[33%] max-w-[33%] bg-sidebar text-lefttext text-left text-sm p-8 gap-8 overflow-hidden">
        <div>
          <img src="./src/assets/cv_pic.png" className="w-full h-auto mt-6" />
        </div>

        <div className="flex flex-col gap-8">
          <p>
            I have recently found my way back into coding. Now, after attending
            a six month bootcamp on web development and improving my Python
            skills independently, I am ready to put my skills to the test and
            take on a new challenge.
          </p>

          <div className="flex flex-col gap-1">
            <CvItem icon="Calendar" text="January 1, 1990" />
            <CvItem
              icon="Home"
              text="Random Street 123"
              extraLine="Berlin, Germany"
            />
            <CvItem icon="Smartphone" text="+49 123 456 789" />
            <CvItem icon="Mail" text="random@email.com" />
            <CvItem icon="Linkedin" text="https://linkedin.com/in/xyz" />
            <CvItem icon="Github" text="https://github.com/RaykOscuro" />
          </div>
        </div>

        <div>
          <hr className="h-[2px] mb-4 bg-subtext border-0 rounded-full" />
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold">SKILLS</p>
            </div>
            <div className="flex flex-col gap-1">
              <CvItem icon="ChevronRight" text="HTML5" />
              <CvItem icon="ChevronRight" text="CSS" />
              <CvItem icon="ChevronRight" text="JavaScript" />
              <CvItem icon="ChevronRight" text="TypeScript" />
              <CvItem icon="ChevronRight" text="Python" />
              <CvItem icon="ChevronRight" text="React" />
              <CvItem icon="ChevronRight" text="SQL" />
              <CvItem icon="ChevronRight" text="AI-assisted programming" />
              <CvItem icon="ChevronRight" text="UI / UX design" />
              <CvItem icon="ChevronRight" text="Scrum" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-maintext min-w-[67%] max-w-[67%] font-bold text-left text-sm p-8 gap-8 overflow-hidden">
        More content here...
      </div>
      <hr />
    </div>
  );
});
