import React from "react";
import { HeartPulse } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100">
      <header className="w-full py-4 bg-white shadow-md">
        <div className="flex items-center justify-center">
          <HeartPulse className="text-blue-500 mr-2" size={28} />
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Health Buddy
          </h1>
        </div>
      </header>
      <main className="w-full flex-grow flex flex-col items-center justify-center p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
