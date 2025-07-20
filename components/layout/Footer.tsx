import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} LuxStay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
