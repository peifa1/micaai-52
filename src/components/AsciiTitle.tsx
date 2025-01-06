import React from 'react';

const AsciiTitle: React.FC = () => {
  return (
    <pre className="font-arcade text-heading text-center whitespace-pre leading-none text-xs sm:text-sm">
{`
███╗   ███╗██╗ ██████╗ █████╗ 
████╗ ████║██║██╔════╝██╔══██╗
██╔████╔██║██║██║     ███████║
██║╚██╔╝██║██║██║     ██╔══██║
██║ ╚═╝ ██║██║╚██████╗██║  ██║
╚═╝     ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝
`}</pre>
  );
};

export default AsciiTitle;