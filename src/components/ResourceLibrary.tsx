import React from 'react';
import { motion } from 'motion/react';
import { FileText, Video, Layout, MousePointer2, Smartphone, MonitorPlay } from 'lucide-react';

const resources = [
  {
    title: "Interaktiv taqdimot",
    type: "Taqdimot (PowerPoint / Canva)",
    desc: "1-sinf Atrofimizdagi olam: 'Fasllar almashinuvi'. O'quvchilarni darsga jalb qilish uchun vizual ko'rgazmalar.",
    icon: Layout,
    color: "text-blue-600",
    bg: "bg-blue-50",
    prompt: "Boshlang'ich sinf uchun Canva yoki PowerPointda interaktiv taqdimot yaratish bo'yicha maslahatlar bering."
  },
  {
    title: "O'yinli Test (Wordwall)",
    type: "Interaktiv Test",
    desc: "2-sinf Ona tili: 'So'z turkumlari'. O'quvchilar darajasini aniqlash uchun quvnoq viktorina.",
    icon: MousePointer2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    prompt: "Wordwall platformasida boshlang'ich sinf o'quvchilari uchun qanday o'yinli testlar yaratish mumkin? Misollar keltiring."
  },
  {
    title: "Video-dars (YouTube)",
    type: "Video Resurs",
    desc: "3-sinf Matematika: 'Ko'paytirish jadvali'. Animatsion personajlar ishtirokidagi qiziqarli tushuntirish.",
    icon: Video,
    color: "text-red-600",
    bg: "bg-red-50",
    prompt: "YouTube dagi video-darslardan boshlang'ich sinf darslarida samarali foydalanish usullarini tushuntiring."
  },
  {
    title: "Virtual Laboratoriya",
    type: "Simulyator",
    desc: "4-sinf Tabiiy fanlar: 'O'simlikning o'sishi'. O'quvchilar virtual muhitda tajriba o'tkazishlari mumkin.",
    icon: MonitorPlay,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    prompt: "Virtual laboratoriya va simulyatorlarni (masalan, PhET) boshlang'ich sinf tabiiy fanlar darsida qanday qo'llash mumkin?"
  },
  {
    title: "Elektron darslik",
    type: "RTR",
    desc: "Barcha sinflar uchun multimedia vositalari bilan boyitilgan elektron o'quv qo'llanmalari.",
    icon: FileText,
    color: "text-amber-600",
    bg: "bg-amber-50",
    prompt: "Elektron darsliklarning afzalliklari va ulardan darsning qaysi bosqichida foydalanish maqsadga muvofiqligi haqida ma'lumot bering."
  },
  {
    title: "Mobil ilovalar",
    type: "Interaktiv",
    desc: "Alifbe o'rganish va mantiqiy fikrlashni rivojlantiruvchi ta'limiy o'yinlar.",
    icon: Smartphone,
    color: "text-purple-600",
    bg: "bg-purple-50",
    prompt: "Boshlang'ich sinf o'quvchilari uchun ta'limiy mobil ilovalar (masalan, o'yinli alifbe) haqida tavsiyalar bering."
  }
];

interface ResourceLibraryProps {
  onCardClick: (tab: string, prompt?: string) => void;
}

export default function ResourceLibrary({ onCardClick }: ResourceLibraryProps) {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Raqamli Ta'lim Resurslari (RTR)</h1>
        <p className="text-slate-600 max-w-2xl">
          Boshlang'ich sinf darslarida qo'llash mumkin bo'lgan asosiy raqamli resurslar turlari va ularga misollar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onCardClick('chat', res.prompt)}
            className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all group cursor-pointer"
          >
            <div className={`w-14 h-14 ${res.bg} ${res.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <res.icon size={28} />
            </div>
            <div className="mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{res.type}</span>
              <h3 className="text-xl font-bold text-slate-800">{res.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 py-1">
              "{res.desc}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
