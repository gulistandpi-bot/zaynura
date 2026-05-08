import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Laptop, BookOpen, Calculator, Languages, Globe, Award, HelpCircle } from 'lucide-react';

interface HomeViewProps {
  onCardClick: (tab: string, prompt?: string) => void;
}

export default function HomeView({ onCardClick }: HomeViewProps) {
  const cards = [
    {
      title: "RTR turlari",
      desc: "Raqamli ta'lim resurslari nima va ularning 1-4 sinflar uchun turlari.",
      icon: BookOpen,
      color: "bg-fun-orange",
      text: "text-fun-orange",
      action: () => onCardClick('resources')
    },
    {
      title: "Matematika + RTR",
      desc: "Matematika darslarida interaktiv elementlar va mantiqiy o'yinlardan foydalanish.",
      icon: Calculator,
      color: "bg-fun-blue",
      text: "text-fun-blue",
      action: () => onCardClick('chat', "2-modul: Matematika darsida RTRdan foydalanish usullarini o'rganmoqchiman. Menga misollar keltiring.")
    },
    {
      title: "O'zbek tili + RTR",
      desc: "Ona tili va o'qish savodxonligi darslarida raqamli innovatsiyalar.",
      icon: Languages,
      color: "bg-primary",
      text: "text-primary",
      action: () => onCardClick('chat', "2-modul: O'zbek tili darsida RTRdan foydalanish usullaridan misol keltiring.")
    },
    {
      title: "Tabiiy fanlar",
      desc: "Atrofimizdagi olam darslarida video va 3D simulyatsiyalar.",
      icon: Globe,
      color: "bg-fun-green",
      text: "text-fun-green",
      action: () => onCardClick('chat', "2-modul: Tabiatshunoslik darsida video va animatsiyadan foydalanish haqida gapiring.")
    },
    {
      title: "O'z-o'zini baholash",
      desc: "Raqamli kompetensiya darajangizni aniqlash va rivojlantirish.",
      icon: Award,
      color: "bg-fun-purple",
      text: "text-fun-purple",
      action: () => onCardClick('chat', "Kompetensiyamni baholash uchun savollarni bering.")
    },
    {
      title: "Metodik tavsiyalar",
      desc: "Zamonaviy maktab va ta'lim standartlari (Raqamli O'zbekiston-2030).",
      icon: HelpCircle,
      color: "bg-secondary",
      text: "text-secondary",
      action: () => onCardClick('competence')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 text-center md:text-left">
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block px-6 py-2 bg-accent text-slate-700 rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-sm rotate-2"
          >
            Sizning raqamli dunyongiz! 🌟
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Keling, birgalikda <br />
            <span className="text-fun-blue">darslarimizni</span> yorqinroq qilamiz!
          </h1>
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
            Boshlang'ich sinf o'quvchilari uchun eng sara raqamli resurslar va innovatsion metodikalar to'plami.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button 
              onClick={() => onCardClick('resources')}
              className="px-8 py-5 bg-primary text-white rounded-[2rem] font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              Start <ArrowRight size={24} />
            </button>
            <button 
              onClick={() => onCardClick('chat')}
              className="px-8 py-5 bg-white text-fun-blue border-4 border-fun-blue/10 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all"
            >
              Savollar bormi?
            </button>
          </div>
        </div>
        <div className="flex-1 relative hidden md:block">
          <div className="w-full aspect-square bg-accent/20 rounded-[4rem] rotate-6 border-8 border-accent/20 flex items-center justify-center relative overflow-hidden">
             <div className="absolute top-10 left-10 w-20 h-20 bg-primary/40 rounded-full blur-2xl"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-fun-blue/40 rounded-full blur-3xl"></div>
             <div className="text-[120px] filter drop-shadow-2xl grayscale-0">🎨</div>
          </div>
          <div className="absolute -bottom-6 -left-6 px-10 py-6 bg-white rounded-[2.5rem] shadow-2xl border-4 border-slate-50 flex items-center gap-4">
            <div className="w-12 h-12 bg-fun-green rounded-2xl flex items-center justify-center text-white">
              <Award size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pedagog kuchi</p>
              <p className="text-sm font-black text-slate-800">100% Innovatsiya</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cards.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={item.action}
            className="group p-10 kid-card cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-5 rounded-full translate-x-12 -translate-y-12`}></div>
            <div className={`w-16 h-16 ${item.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform rotate-3`}>
              <item.icon size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-6">{item.desc}</p>
            <div className={`inline-flex items-center gap-2 text-sm font-black ${item.text} group-hover:gap-4 transition-all uppercase tracking-widest`}>
              Batafsil <ArrowRight size={18} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-16 relative overflow-hidden text-white shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-black mb-8 leading-tight italic">
            "Zamonaviy o'qituvchi — nafaqat o'rgatuvchi, balki <span className="text-accent underline decoration-4 underline-offset-8">o'zi ham o'rganuvchidir.</span>"
          </h2>
          <p className="text-slate-400 mb-10 text-xl leading-relaxed">
            Raqamli dunyo — bu sizning darslaringiz uchun yangi imkoniyatlar eshigi!
          </p>
          <button 
            onClick={() => onCardClick('resources')}
            className="px-10 py-6 bg-accent text-slate-900 hover:bg-white rounded-[2.5rem] font-black text-xl transition-all flex items-center gap-4 shadow-xl shadow-accent/20"
          >
            Sayohatni boshlang <ArrowRight size={24} />
          </button>
        </div>
        <div className="absolute -right-20 top-0 bottom-0 w-1/2 bg-fun-purple opacity-20 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute right-20 top-1/2 -translate-y-1/2 text-9xl opacity-20 rotate-12 select-none">
          🚀
        </div>
      </div>
    </div>
  );
}
