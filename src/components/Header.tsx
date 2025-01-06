import { Twitter } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-container p-4 mb-8">
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
        <h1 className="font-arcade text-heading text-2xl">MICA</h1>
        <div className="w-[20px]"></div>
      </div>
    </header>
  );
};

export default Header;