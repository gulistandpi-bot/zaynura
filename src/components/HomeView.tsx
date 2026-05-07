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
      action: () => onCardClick('resources')
    },
    {
      title: "Matematika + RTR",
      desc: "Matematika darslarida interaktiv elementlar va mantiqiy o'yinlardan foydalanish.",
      icon: Calculator,
      action: () => onCardClick('chat', "2-modul: Matematika darsida RTRdan foydalanish usullarini o'rganmoqchiman. Menga misollar keltiring.")
    },
    {
      title: "O'zbek tili + RTR",
      desc: "Ona tili va o'qish savodxonligi darslarida raqamli innovatsiyalar.",
      icon: Languages,
      action: () => onCardClick('chat', "2-modul: O'zbek tili darsida RTRdan foydalanish usullaridan misol keltiring.")
    },
    {
      title: "Tabiiy fanlar",
      desc: "Atrofimizdagi olam darslarida video va 3D simulyatsiyalar.",
      icon: Globe,
      action: () => onCardClick('chat', "2-modul: Tabiatshunoslik darsida video va animatsiyadan foydalanish haqida gapiring.")
    },
    {
      title: "O'z-o'zini baholash",
      desc: "Raqamli kompetensiya darajangizni aniqlash va rivojlantirish.",
      icon: Award,
      action: () => onCardClick('chat', "Kompetensiyamni baholash uchun savollarni bering.")
    },
    {
      title: "Metodik tavsiyalar",
      desc: "Zamonaviy maktab va ta'lim standartlari (Raqamli O'zbekiston-2030).",
      icon: HelpCircle,
      action: () => onCardClick('competence')
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Raqamli O'zbekiston - 2030
        </span>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Boshlang'ich sinf ta'limini <br />
          <span className="text-indigo-600">raqamli texnologiyalar</span> bilan boyitamiz
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Guliston Davlat Pedagogika Instituti magistrantlari uchun maxsus ishlab chiqilgan platforma. 
          Bo'lajak o'qituvchilarning raqamli kompetensiyasini rivojlantirish va zamonaviy darslar tashkil etishda yordam beradi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            onClick={item.action}
            className="group p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-12 relative overflow-hidden text-white">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 italic">"O'qituvchi o'z ustida ishlashdan to'xtasa, u o'z-o'zidan o'qituvchilikdan to'xtaydi."</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Zamonaviy maktab o'qituvchisi nafaqat bilim beruvchi, balki raqamli resurslar orqali o'quvchini qiziqtira oladigan dizayner hamdir.
          </p>
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold transition-all flex items-center gap-3">
            O'rganishni boshlash <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-indigo-600 opacity-10 blur-3xl rounded-full translate-x-1/2"></div>
      </div>
    </div>
  );
}
