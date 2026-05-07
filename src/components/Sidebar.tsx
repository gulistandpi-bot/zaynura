import React from 'react';
import { Home as HomeIcon, MessageSquare, BookOpen, Layers, Settings, LogOut, GraduationCap, Laptop } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils'; // I'll create this helper

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Bosh sahifa', icon: HomeIcon },
    { id: 'chat', label: 'AI Yordamchi', icon: MessageSquare },
    { id: 'resources', label: 'Raqamli Resurslar', icon: BookOpen },
    { id: 'competence', label: 'Kompetensiyalar', icon: Layers },
  ];

  return (
    <div className="w-64 h-screen bg-white border-right border-slate-200 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
          <GraduationCap size={24} />
        </div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">RaqamliPed</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
              activeTab === item.id
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            )}
          >
            <item.icon 
              size={20} 
              className={cn(
                "transition-colors",
                activeTab === item.id ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
              )} 
            />
            {item.label}
            {activeTab === item.id && (
              <motion.div
                layoutId="active-indicator"
                className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-100">
        <div className="bg-slate-50 rounded-2xl p-4 mb-4">
          <p className="text-xs text-slate-500 mb-1">Magistratura talabasi</p>
          <p className="text-[10px] font-semibold text-slate-800 uppercase leading-tight">ORZIQULOVA ZAYNURA MUHAMMATQUL QIZINING</p>
        </div>
        <button className="flex items-center gap-3 text-slate-500 hover:text-red-600 transition-colors px-4 py-2 w-full text-sm font-medium">
          <LogOut size={18} />
          Chiqish
        </button>
      </div>
    </div>
  );
}
