import React from 'react';
import { motion } from 'motion/react';
import { FileText, Video, Layout, MousePointer2, Smartphone, MonitorPlay, ArrowRight } from 'lucide-react';

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
    linkTitle: "O'yinli test platformalari:",
    prompt: "Wordwall platformasida boshlang'ich sinf o'quvchilari uchun qanday o'yinli testlar yaratish mumkin? Misollar keltiring.",
    links: [
      { label: "Wordwall", url: "https://wordwall.net/?utm_source=chatgpt.com" },
      { label: "LearningApps", url: "https://learningapps.org/?utm_source=chatgpt.com" },
      { label: "Wayground", url: "https://wayground.com/?utm_source=chatgpt.com&lng=ru" },
      { label: "Blooket", url: "https://www.blooket.com/?utm_source=chatgpt.com" },
      { label: "Kahoot", url: "https://kahoot.com/?utm_source=chatgpt.com" },
      { label: "Zukkoo.uz", url: "https://www.zukkoo.uz/uz?utm_source=chatgpt.com" },
      { label: "Edugames.uz", url: "https://edugames.uz/?utm_source=chatgpt.com" },
      { label: "Intertalim.uz", url: "https://www.intertalim.uz/?utm_source=chatgpt.com" },
      { label: "Wordlar.uz (Wordle)", url: "https://wordly.org/wordle-games/wordlar-uz?utm_source=chatgpt.com" },
      { label: "Yodol Online", url: "https://www.yodol.online/en/?utm_source=chatgpt.com" },
      { label: "So'z o'yini (App Store)", url: "https://apps.apple.com/uz/app/so-z-o-yini-krossvord/id1461117747" }
    ]
  },
  {
    title: "Video-dars (YouTube)",
    type: "Video Resurs",
    desc: "3-sinf Matematika: 'Ko'paytirish jadvali'. Animatsion personajlar ishtirokidagi qiziqarli tushuntirish.",
    icon: Video,
    color: "text-red-600",
    bg: "bg-red-50",
    linkTitle: "Video manbalar:",
    prompt: "YouTube dagi video-darslardan boshlang'ich sinf darslarida samarali foydalanish usullaridan misol keltiring. Mana bu havolalardan foydalaning:\n- https://youtube.com/playlist?list=PLgq3V5XV7XI12TjcOJ3a0HD8QGNuGuGly&si=1zXq8AvF5T8TEg4I\n- https://youtube.com/shorts/UXuUQZfBMRA?si=JQeSXcOnSgV74qAu\n- https://youtube.com/shorts/b7ur4gcTFmY?si=DmAB-1L8L7D4SU11\n- https://youtube.com/watch?v=T8cvUzQ7RaI&feature=shared\n- https://youtube.com/watch?v=i6hSCSYoTko&feature=shared\n- https://youtube.com/watch?v=mNm6acIyrjY&feature=shared",
    links: [
      { label: "Birinchi video dars (Pleylist)", url: "https://youtube.com/playlist?list=PLgq3V5XV7XI12TjcOJ3a0HD8QGNuGuGly&si=1zXq8AvF5T8TEg4I" },
      { label: "Ikkinchi video dars (Matematika)", url: "https://youtube.com/shorts/UXuUQZfBMRA?si=JQeSXcOnSgV74qAu" },
      { label: "Uchinchi video dars (O'quvchi bilan)", url: "https://youtube.com/shorts/b7ur4gcTFmY?si=DmAB-1L8L7D4SU11" },
      { label: "To'rtinchi video dars", url: "https://youtube.com/watch?v=T8cvUzQ7RaI&feature=shared" },
      { label: "Beshinchi video dars", url: "https://youtube.com/watch?v=i6hSCSYoTko&feature=shared" },
      { label: "Oltinchi video dars", url: "https://youtube.com/watch?v=mNm6acIyrjY&feature=shared" }
    ]
  },
  {
    title: "Virtual Laboratoriya",
    type: "Simulyator",
    desc: "4-sinf Tabiiy fanlar: 'O'simlikning o'sishi'. O'quvchilar virtual muhitda tajriba o'tkazishlari mumkin.",
    icon: MonitorPlay,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    linkTitle: "Virtual tajribalar va simulyatorlar:",
    prompt: "Virtual laboratoriya va simulyatorlarni (masalan, PhET) boshlang'ich sinf tabiiy fanlar darsida qanday qo'llash mumkin?",
    links: [
      { label: "PhET Simulations", url: "https://phet.colorado.edu/?utm_source=chatgpt.com" },
      { label: "ExploreLearning (Gizmos)", url: "https://www.explorelearning.com/?utm_source=chatgpt.com" },
      { label: "OLabs", url: "https://www.olabs.edu.in/?utm_source=chatgpt.com" },
      { label: "HHMI BioInteractive", url: "https://www.biointeractive.org/?utm_source=chatgpt.com" },
      { label: "LabXchange", url: "https://www.labxchange.org/?utm_source=chatgpt.com" },
      { label: "CK-12 Simulations", url: "https://www.ck12.org/student/?utm_source=chatgpt.com" }
    ]
  },
  {
    title: "Elektron darslik",
    type: "RTR",
    desc: "Barcha sinflar uchun multimedia vositalari bilan boyitilgan elektron o'quv qo'llanmalari.",
    icon: FileText,
    color: "text-amber-600",
    bg: "bg-amber-50",
    linkTitle: "Darsliklar (PDF/Drive):",
    prompt: "Elektron darsliklarning afzalliklari va ulardan darsning qaysi bosqichida foydalanish maqsadga muvofiqligi haqida ma'lumot bering.",
    links: [
      { label: "Elektron darslik 1", url: "https://drive.google.com/file/d/1IArmuur3wcKmuMy4bCxSqobMKJWtYU3l/view?usp=drive_link" },
      { label: "Elektron darslik 2", url: "https://drive.google.com/file/d/16DzkFRokBgU01PRQvfIC0spo7_Mz5Vrg/view?usp=drive_link" },
      { label: "Elektron darslik 3", url: "https://drive.google.com/file/d/1uEejpzjsQtvw7QZTJXHdXqJGsRk9Cha8/view?usp=drive_link" },
      { label: "Elektron darslik 4", url: "https://drive.google.com/file/d/136PV8cV4tTHSpw-PASioq6O4BIeRQ_Jm/view?usp=drive_link" },
      { label: "Elektron darslik 5", url: "https://drive.google.com/file/d/1uAy5ixM_1Y3HCO1YHi32ZEj88b1Dwl_C/view?usp=drive_link" },
      { label: "Elektron darslik 6", url: "https://drive.google.com/file/d/1iql4I2GTTYp6NRZvr51auIxjZE15ISWU/view?usp=drive_link" },
      { label: "Elektron darslik 7", url: "https://drive.google.com/file/d/1bzlXSaC_GH1ub60GoUaC0OczKNBgIFIh/view?usp=drive_link" },
      { label: "Elektron darslik 8", url: "https://drive.google.com/file/d/1iXDqV-x4wl2KEyfexkbAuSZKZCFqcdIW/view?usp=drive_link" }
    ]
  },
  {
    title: "Mobil ilovalar",
    type: "Interaktiv",
    desc: "Alifbe o'rganish va mantiqiy fikrlashni rivojlantiruvchi ta'limiy o'yinlar.",
    icon: Smartphone,
    color: "text-purple-600",
    bg: "bg-purple-50",
    linkTitle: "Foydali mobil ilovalar:",
    prompt: "Boshlang'ich sinf o'quvchilari uchun ta'limiy mobil ilovalar (masalan, o'yinli alifbe) haqida tavsiyalar bering.",
    links: [
      { label: "Bolajon Kutubxonasi", url: "https://play.google.com/store/apps/details?id=dev.mobile.books" },
      { label: "Mantiqiy o'yinlar (BrainRage)", url: "https://play.google.com/store/apps/details?id=com.joongly.brainrage" },
      { label: "Mantiqiy Savollar", url: "https://play.google.com/store/apps/details?id=uz.yoqub.mantiq" }
    ]
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
            <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 py-1 mb-4">
              "{res.desc}"
            </p>
            {res.links && (
              <div className="space-y-3 mt-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{res.linkTitle || "Manbalar:"}</p>
                {res.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-between group/link p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center ${res.color} shadow-sm border border-slate-100 group-hover/link:bg-indigo-600 group-hover/link:text-white transition-colors`}>
                        <res.icon size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 group-hover/link:text-indigo-600 transition-colors">{link.label}</span>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover/link:text-indigo-400 -translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all" />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
