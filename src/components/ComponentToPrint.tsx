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
          <img src="./src/assets/cv_pic.png" className="w-full h-auto" />
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
        <div>
          <hr className="h-[2px] mb-4 bg-subtext border-0 rounded-full" />
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold">LANGUAGES</p>
            </div>
            <div className="flex flex-col gap-1">
              <CvItem icon="ChevronRight" text="German (native)" />
              <CvItem icon="ChevronRight" text="English (advanced)" />
              <CvItem icon="ChevronRight" text="French (beginner)" />
              <CvItem icon="ChevronRight" text="Spanish (beginner)" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative text-maintext min-w-[67%] max-w-[67%] font-bold text-left text-base p-8 gap-4 overflow-hidden">
        <div className="absolute right-0 top-0">
          <img src="/src/assets/eu.svg" />
        </div>
        <div className="flex flex-col mb-8 gap-4">
          <p className="text-lefttext">JOB TITLE</p>
          <p className="text-5xl">Tim</p>
          <p className="text-5xl">Template</p>
        </div>
        <div>
          <hr className="h-[2px] mb-4 bg-subtext border-0 rounded-full" />
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold text-lefttext">EXPERIENCE</p>
            </div>

            <div className="grid grid-cols-cv gap-8">
              <div className="text-lefttext">
                <CvItem icon="ChevronRight" text="2023" extraLine="2019" />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  CURRENT JOB
                  <br />
                  Company
                </p>
                <ul className="list-disc text-subbase">
                  <li>some tasks</li>
                </ul>
              </div>
              <div className="text-lefttext">
                <CvItem icon="ChevronRight" text="2019" extraLine="2017" />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  FORMER JOB
                  <br />
                  Another Company
                </p>
                <ul className="list-disc text-subbase">
                  <li>different tasks</li>
                </ul>
              </div>
              <div className="text-lefttext">
                <CvItem icon="ChevronRight" text="2016" extraLine="2010" />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  YET ANOTHER JOB
                  <br />
                  And another Employer
                </p>
                <ul className="list-disc text-subbase space-y-3">
                  <li>definitely did these tasks</li>
                  <li>but also these other tasks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="h-[2px] mb-4 bg-subtext border-0 rounded-full" />
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold text-lefttext">EDUCATION</p>
            </div>

            <div className="grid grid-cols-cv gap-8">
              <div className="text-lefttext">
                <CvItem icon="ChevronRight" text="2024" extraLine="2023" />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  TYPE OF EDUCATION
                  <br />
                  Place of education
                </p>
                <ul className="list-disc text-subbase">
                  <li>Some more details</li>
                </ul>
              </div>
              <div className="text-lefttext">
                <CvItem
                  icon="ChevronRight"
                  text="2020"
                  extraLine="2015"
                ></CvItem>
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  MORE EDUCATION
                  <br />
                  In another place
                </p>
                <ul className="list-disc text-subbase">
                  <li>final grade: A+</li>
                </ul>
              </div>
              <div className="text-lefttext">
                <CvItem icon="ChevronRight" text="2015" extraLine="2009" />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p>
                  EDUCATION AGAIN
                  <br />
                  Template University
                </p>
                <ul className="list-disc text-subbase space-y-3">
                  <li>final grade: A-</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
});
