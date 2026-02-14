import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Faux Tesla Logo Style */}
                    <span className="text-xl tracking-[0.2em] font-bold text-white">TESLA</span>
                    <span className="text-gray-400 text-sm border-l border-gray-600 pl-2 ml-2">ÍSLAND</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-900/50 rounded text-red-500 text-xs font-mono uppercase tracking-widest">
                    <ShieldAlert size={14} />
                    <span>Confidential // Crisis Strategy</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
