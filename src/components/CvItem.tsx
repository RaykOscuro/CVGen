import {
  Calendar,
  ChevronRight,
  Github,
  Home,
  Linkedin,
  Mail,
  Smartphone,
} from "lucide-react";

export const CvItem = ({
  icon,
  text,
  extraLine,
}: {
  icon: string;
  text: string;
  extraLine?: string;
}) => {
  return (
    <div className="cv-item flex flex-row gap-2 items-top">
      <div className="icon-container flex pt-px min-h-[20px] min-w-[20px] justify-center">
        {icon === "Calendar" && <Calendar size={16} />}
        {icon === "ChevronRight" && <ChevronRight size={16} />}
        {icon === "Github" && <Github size={16} />}
        {icon === "Home" && <Home size={16} />}
        {icon === "Linkedin" && <Linkedin size={16} />}
        {icon === "Mail" && <Mail size={16} />}
        {icon === "Smartphone" && <Smartphone size={16} />}
      </div>
      <p className="item-text">
        {text}
        {extraLine && <br />}
        {extraLine}
      </p>
    </div>
  );
};
