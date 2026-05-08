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
      { label: "Mantiqiy Savollar", url: "https://play.google.com/store/apps/details?id=uz.yoqub.mantiq" },
      { label: "Hangman (So'z topish)", url: "https://play.google.com/store/apps/details?id=com.androidcss.hangman" },
      { label: "Numbers 123 (Raqamlar)", url: "https://play.google.com/store/apps/details?id=com.rvappstudios.numbers123.toddler.counting.tracing" },
      { label: "Bimiboo Numbers", url: "https://play.google.com/store/apps/details?id=com.bimiboo.numbers" },
      { label: "So'z o'yini (Uzbek)", url: "https://play.google.com/store/apps/details?id=com.wordgame.uz" }
    ]
  }
];

interface ResourceLibraryProps {
  onCardClick: (tab: string, prompt?: string) => void;
}

export default function ResourceLibrary({ onCardClick }: ResourceLibraryProps) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="mb-16 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-5 py-1.5 bg-accent/20 text-fun-orange rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-accent/20"
        >
          🔍 Resurslar olami
        </motion.span>
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Raqamli Ta'lim Resurslari</h1>
        <p className="text-slate-500 max-w-2xl text-lg font-medium">
          Darslaringizni qiziqarli qilish uchun barcha kerakli vositalar shu yerda!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onCardClick('chat', res.prompt)}
            className="p-8 kid-card shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all group cursor-pointer relative"
          >
            <div className={`w-20 h-20 ${res.bg} ${res.color} rounded-[2rem] flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-sm border-2 border-white`}>
              <res.icon size={40} strokeWidth={2.5} />
            </div>
            <div className="mb-4">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${res.bg} ${res.color} mb-3 inline-block`}>
                {res.type}
              </span>
              <h3 className="text-2xl font-black text-slate-800">{res.title}</h3>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-4 py-2 mb-8 bg-slate-50/50 rounded-r-2xl">
              "{res.desc}"
            </p>
            
            {res.links && (
              <div className="space-y-4 mt-6 pt-6 border-t-2 border-dashed border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MonitorPlay size={14} />
                  {res.linkTitle || "Manbalar:"}
                </p>
                <div className="grid gap-3">
                  {res.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between group/link p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${res.color} group-hover/link:bg-indigo-600 group-hover/link:text-white transition-colors`}>
                          <res.icon size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-700 group-hover/link:text-indigo-600 transition-colors">{link.label}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/link:bg-indigo-50 group-hover/link:text-indigo-600 transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
