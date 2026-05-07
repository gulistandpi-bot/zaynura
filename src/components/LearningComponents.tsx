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
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Kasbiy Kompetensiya Tuzilishi</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Boshlang'ich sinf o'qituvchisining raqamli kompetensiyasi uchta o'zaro bog'liq komponentdan tashkil topadi. 
          Har bir qadam sizni professional raqamli pedagogga aylantiradi.
        </p>
      </div>

      <div className="space-y-12">
        {components.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-1/2 p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group`}>
              <div className={`absolute top-0 right-0 w-32 h-32 ${c.styles.bg} rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center p-4 ${c.styles.iconBg} ${c.styles.text} rounded-3xl mb-8`}>
                  <c.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{c.title}</h2>
                <p className={`${c.styles.text} font-semibold mb-6 tracking-wide uppercase text-xs italic`}>{c.subtitle}</p>
                <ul className="space-y-4">
                  {c.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.styles.dot} mt-2 flex-shrink-0`}></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
               <div className="p-8 bg-slate-50 rounded-3xl border-dashed border-2 border-slate-200">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pedagogik Maslahat</h4>
                  <p className="text-slate-600 italic leading-relaxed">
                    "{i === 0 ? "Psixologik tayyorgarlik bo'lmasa, texnologiya shunchaki qimmatbaho asbob bo'lib qoladi. Avval maqsadni, keyin asbobni tanlang." : 
                      i === 1 ? "Nazariyasiz amaliyot - ko'r kabi harakatlanishdir. Har bir resursning dars bosqichidagi o'rnini yaxshi biling." : 
                      "Amaliyotda qo'llamasangiz bilimlaringiz eskiradi. Har haftada bitta yangi vositadan foydalanib ko'ring."}"
                  </p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-indigo-600 rounded-[3rem] text-center text-white">
        <Users size={48} className="mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl font-bold mb-4">Hamkorlikdagi rivojlanish</h2>
        <p className="text-indigo-100 max-w-xl mx-auto text-lg leading-relaxed mb-8">
          Hamkasblar va ota-onalar bilan raqamli aloqani yo'lga qo'yish ta'lim sifatini oshirishning eng qisqa yo'lidir.
        </p>
      </div>
    </div>
  );
}

