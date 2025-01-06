import { Twitter } from "lucide-react";
import AsciiTitle from "./AsciiTitle";

const Header = () => {
  return (
    <header className="w-full bg-container p-4 mb-8 relative">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-heading hover:opacity-80 transition-opacity"
          >
            <Twitter size={20} />
          </a>
        </div>
        <AsciiTitle />
        <div className="w-[20px]"></div>
      </div>
    </header>
  );
};

export default Header;