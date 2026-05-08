import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Wrench, Users } from 'lucide-react';

const components = [
  {
    title: "Psixologik komponent",
    subtitle: "Tayyorgarlik va Motivatsiya",
    details: [
      "Raqamli texnologiyalardan foydalanishga ijobiy munosabat",
      "O'zgarishlarga moslashuvchanlik",
      "Kichik yoshdagi o'quvchilar bilan ishlashda qiziqish uyg'ota olish"
    ],
    icon: Lightbulb,
    colorClass: "indigo",
    styles: {
      bg: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      text: "text-indigo-600",
      dot: "bg-indigo-400"
    }
  },
  {
    title: "Ilmiy-nazariy komponent",
    subtitle: "Bilim va Tushunish",
    details: [
      "RTR turlarining tasnifi va didaktik imkoniyatlari",
      "Xavfsiz internet va gigiyena qoidalari",
      "Boshlang'ich ta'lim metodikasi bilan raqamli resurslar integratsiyasi"
    ],
    icon: Target,
    colorClass: "amber",
    styles: {
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      text: "text-amber-600",
      dot: "bg-amber-400"
    }
  },
  {
    title: "Operatsion-texnologik komponent",
    subtitle: "Amaliy Ko'nikmalar",
    details: [
      "Taqdimotlar va video-lavhalar tayyorlash",
      "Onlayn test va kvestlar yaratish platformalari (Kahoot, Quizizz)",
      "Bulutli texnologiyalar bilan ishlash (Google Drive, One Drive)"
    ],
    icon: Wrench,
    colorClass: "emerald",
    styles: {
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      text: "text-emerald-600",
      dot: "bg-emerald-400"
    }
  }
];

export default function LearningComponents() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-block px-5 py-1.5 bg-fun-purple/10 text-fun-purple rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-fun-purple/10"
        >
          🚀 Kasbiy yuksalish
        </motion.span>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Kasbiy Kompetensiya Tuzilishi</h1>
        <p className="text-xl text-slate-500 font-medium leading-relaxed">
          Boshlang'ich sinf o'qituvchisining raqamli kompetensiyasi uchta o'zaro bog'liq komponentdan tashkil topadi. 
        </p>
      </div>

      <div className="space-y-16">
        {components.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 p-12 kid-card relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-48 h-48 ${c.styles.bg} rounded-full -translate-x-1/4 -translate-y-1/4 opacity-40 group-hover:scale-125 transition-transform duration-700`}></div>
              <div className="relative z-10">
                <div className={`w-20 h-20 ${c.styles.iconBg} ${c.styles.text} rounded-[2rem] flex items-center justify-center mb-10 shadow-lg rotate-3 group-hover:rotate-12 transition-transform`}>
                  <c.icon size={40} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-3">{c.title}</h2>
                <p className={`${c.styles.text} font-black mb-8 tracking-widest uppercase text-[10px] bg-slate-50 border border-slate-100 inline-block px-4 py-1.5 rounded-full`}>
                  {c.subtitle}
                </p>
                <ul className="space-y-5">
                  {c.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-600 font-bold leading-relaxed">
                      <div className={`w-2.5 h-2.5 rounded-full ${c.styles.dot} mt-2.5 flex-shrink-0 shadow-sm shadow-black/5`}></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="p-10 bg-white border-4 border-slate-50 rounded-[3rem] shadow-sm relative rotate-1">
                  <div className="absolute -top-4 left-8 px-5 py-2 bg-accent text-slate-800 font-black text-[10px] uppercase tracking-widest rounded-full shadow-sm">
                    💎 Pedagogik Maslahat
                  </div>
                  <p className="text-slate-500 font-bold italic leading-relaxed text-lg">
                    "{i === 0 ? "Psixologik tayyorgarlik bo'lmasa, texnologiya shunchaki qimmatbaho asbob bo'lib qoladi. Avval maqsadni, keyin asbobni tanlang." : 
                      i === 1 ? "Nazariyasiz amaliyot - ko'r kabi harakatlanishdir. Har bir resursning dars bosqichidagi o'rnini yaxshi biling." : 
                      "Amaliyotda qo'llamasangiz bilimlaringiz eskiradi. Har haftada bitta yangi vositadan foydalanib ko'ring."}"
                  </p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 p-20 bg-gradient-to-br from-fun-blue to-fun-purple rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-xl border-2 border-white/30 rotate-6">
            <Users size={48} strokeWidth={2.5} />
          </div>
          <h2 className="text-4xl font-black mb-6">Hamkorlikdagi rivojlanish</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-medium leading-relaxed mb-12">
            Hamkasblar va ota-onalar bilan raqamli aloqani yo'lga qo'yish ta'lim sifatini oshirishning eng qisqa yo'lidir.
          </p>
          <div className="flex justify-center gap-6">
             <div className="px-8 py-3 bg-white/10 rounded-full text-sm font-black border border-white/20">Pedagog</div>
             <div className="px-8 py-3 bg-white/10 rounded-full text-sm font-black border border-white/20">O'quvchi</div>
             <div className="px-8 py-3 bg-white/10 rounded-full text-sm font-black border border-white/20">Valideyn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

