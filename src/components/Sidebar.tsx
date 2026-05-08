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
    { id: 'dashboard', label: 'Bosh sahifa', icon: HomeIcon, color: 'bg-fun-orange', text: 'text-fun-orange' },
    { id: 'chat', label: 'AI Yordamchi', icon: MessageSquare, color: 'bg-fun-blue', text: 'text-fun-blue' },
    { id: 'resources', label: 'Raqamli Resurslar', icon: BookOpen, color: 'bg-fun-green', text: 'text-fun-green' },
    { id: 'competence', label: 'Kompetensiyalar', icon: Layers, color: 'bg-fun-purple', text: 'text-fun-purple' },
  ];

  return (
    <div className="w-64 h-screen bg-white/90 backdrop-blur-xl border-r-4 border-slate-100 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-8 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-fun-orange rounded-[2rem] flex items-center justify-center text-white shadow-lg rotate-3">
          <GraduationCap size={32} />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-800 tracking-tight leading-none">Raqamli</h1>
          <span className="text-primary font-bold text-lg">PEDAGOG</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-4 px-5 py-4 rounded-3xl transition-all duration-300 group text-sm font-bold",
              activeTab === item.id
                ? `${item.color} text-white shadow-lg scale-105 -rotate-1`
                : "text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:scale-102"
            )}
          >
            <div className={cn(
              "p-2 rounded-2xl transition-colors",
              activeTab === item.id ? "bg-white/20" : "bg-slate-100 group-hover:bg-slate-200"
            )}>
              <item.icon 
                size={22} 
                strokeWidth={2.5}
                className={cn(
                  "transition-colors",
                  activeTab === item.id ? "text-white" : item.text
                )} 
              />
            </div>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6">
        <div className="bg-amber-50 rounded-[2rem] p-5 border-2 border-amber-100 mb-4 transform -rotate-1">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Magistratura talabasi</p>
          <p className="text-xs font-black text-slate-700 leading-tight">ORZIQULOVA ZAYNURA MUHAMMATQUL QIZI</p>
        </div>
        <button className="flex items-center justify-center gap-3 text-slate-400 hover:text-red-500 transition-colors px-4 py-3 w-full text-xs font-bold uppercase tracking-widest bg-slate-50 rounded-2xl hover:bg-red-50">
          <LogOut size={16} />
          Chiqish
        </button>
      </div>
    </div>
  );
}
