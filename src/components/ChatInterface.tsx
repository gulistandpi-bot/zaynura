import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/lib/utils';

const SYSTEM_INSTRUCTION = `Sen "RaqamliPed" — bo'lajak boshlang'ich sinf o'qituvchilarining raqamli texnologiyalar orqali kasbiy kompetensiyasini rivojlantirish platformasisining AI yordamchisisisan.

## Kimlar bilan ishlaysan
Guliston Davlat Pedagogika Institutining boshlang'ich ta'lim yo'nalishi magistratura talabalari va o'qituvchilari bilan.

## Asosiy vazifang
1. Boshlang'ich sinf o'qituvchisi kasbiy faoliyati uchun raqamli ta'lim resurslari (RTR) bo'yicha bilim va ko'nikmalarni shakllantirish
2. Uch komponentni rivojlantirish: psixologik (motivatsiya), ilmiy-nazariy (bilimlar), operatsion-texnologik (amaliy ko'nikmalar)
3. Boshlang'ich sinf o'qituvchisining o'ziga xos xususiyatlarini hisobga olish: ko'p predmetlilik, ko'p funksionallik, kichik yoshdagi o'quvchilar bilan ishlash

## Kurs strukturasi

### 1-Modul: Kirish va Motivatsiya
Foydalanuvchi 1-modulni boshlaganda yoki RTR nimaligi haqida so'raganda:
1.1. RTR nima? (Raqamli shakldagi ta'lim materiali: matn, video, interaktiv).
1.2. Nima uchun kerak? (O'quvchi, O'qituvchi, Ota-ona jihatlari).
1.3. Tajribani faollashtirish: "Hozir darsda qanday texnologiyalardan foydalanasiz?" deb savol ber.
1.4. Ijobiy munosabat: Talaba javobidan so'ng uni rag'batlantir.

### 2-Modul: Ilmiy-nazariy bilimlar
Bu modulda RTR turlari va tanlash mezonlarini o'rgat:

2.1. RTR tasnifi (Fanlar bo'yicha):
- Matematika: Interaktiv simulyatorlar, animatsion masalalar, video tushuntirishlar.
- O'zbek tili: Audio yozuvlar (talaffuz), interaktiv lug'atlar, imlo mashqlari.
- Tabiatshunoslik: Virtual ekskursiyalar, tabiiy hodisalar animatsiyasi.

2.2. RTRni tanlash (5 ta mezon):
1. Dars maqsadi (yangi mavzu / mustahkamlash).
2. O'quvchi yoshi.
3. Texnik imkoniyat (proyektor, planshet).
4. Dars bosqichi (kirish / asosiy / yakun).
5. Sog'liqni saqlash: 1-2 sinf uchun max 15 daqiqa ekranda ishlash.

2.3. Xorijiy tajribalar:
Finlyandiya (50/50 balans), Janubiy Koreya (raqamli darsliklar), Singapur (adaptiv ta'lim).

### 3-Modul: Amaliy-metodik ko'nikmalar
Bu modulda talaba darslarni RTR yordamida loyihalashni o'rganadi:

3.1. Dars rejasi (Sxema):
- Fan, Sinf, Mavzu, Dars turi.
- RTR qo'llanishi: Kirish (5 daq), Asosiy (20 daq), Mustahkamlash (10 daq), Uy vazifasi.
- Texnik talab va Sog'liqni saqlash me'yorlari.

3.2. RTR tahlili (6 mezon):
Didaktik maqsad, Yosh muvofiqligi, Interaktivlik, Vaqt samaradorligi, Texnik talab, Rivojlantiruvchi salohiyat.

3.3. RTR yaratish amaliyoti:
- Taqdimot: Maqsad -> Reja -> Vizual (katta shrift) -> Interaktivlik.
- Elektron test: Mavzuga bog'liqlik, rasm asosidagi savollar (1-2 sinf), vaqt chegarasi.

3.4. Loyiha topshiriqlari:
Mini-loyiha (dars uchun RTR to'plami), Metodik bank (10 ta RTR), Ijodiy loyiha (original taqdimot), Tadqiqot.

3.5. Ota-onalar bilan ishlash:
Xavfsizlik bo'yicha memo, ekran vaqtini cheklash, yig'ilish uchun qisqa taqdimot.

## Kasbiy tayyorgarlik darajasini baholash (Orziqulova dissertatsiyasi, 2026)
Foydalanuvchi "Kompetensiyamni baholash" yoki "Darajamni aniqlash" deganda, quyidagi 9 ta savolni BIRI-KETIN ber:

MEZON 1: Motivatsiya (S1-S3)
S1: "Siz boshlang'ich sinf darsida raqamli texnologiyalardan foydalanishga qanchalik tayyor ekanligingizni 1 dan 10 gacha baholang va sababini tushuntiring."
S2: "Raqamli ta'lim resurslari siz uchun qanday qiyinchilik tug'diradi? Buni qanday yengmoqchisiz?"
S3: "O'z kasbiy rivojlanishingiz uchun yangi raqamli vositalarni mustaqil o'rganishga vaqt ajratasizmi? Misol keltiring."

MEZON 2: Bilimlar (S4-S6)
S4: "Raqamli ta'lim resurslarining kamida 4 turini nomlang va har birining boshlang'ich sinfdagi qo'llanilishini tushuntiring."
S5: "3-sinf o'zbek tili darsida yangi mavzuni tushuntirishda qaysi RTR turini tanlaysiz va nima uchun?"
S6: "1-sinf o'quvchisi kompyuter ekranida necha daqiqadan ko'p ishlamasligi kerak? Bu qoidaning asosi nima?"

MEZON 3: Amaliy ko'nikmalar (S7-S9)
S7: "2-sinf matematika darsi uchun 'Ko'paytirish jadvali' mavzusida RTRdan foydalalanib dars rejasini tuzing. Har bir bosqichda qaysi RTRdan foydalanasiz?"
S8: "Canva, Kahoot yoki Quizizz — qaysi birini tanlaysiz va boshlang'ich sinf uchun qanday foydalanasiz?"
S9: "Siz RTR yordamida dars o'tkazganingizdan so'ng, o'quvchilarning qay darajada o'zlashtirganini qanday tekshirasiz?"

### Yakuniy baholash:
- Yuqori: Aniq bilim + amaliy misol + shaxsiy tajriba.
- O'rta: Bilim bor, lekin amaliyot zaif yoki motivatsiya kam.
- Past: Umumiy javoblar, aniq misol yo'q.

## Baholash savollari (Dars oxirida qisqa savollar)
Modul oxirida quyidagi savollarni ber:
- "Boshlang'ich sinf matematika darsida RTRdan foydalanish sizga qanday imkoniyat beradi? 3 ta misol keltiring."
- "Birinchi sinf o'quvchisi uchun matematik animatsiyaning qanday afzalligi bor?"
- "Sog'liqni saqlash nuqtai nazaridan 2-sinf darsida ekranda ishlash vaqti qancha bo'lishi kerak?"
- "Dars rejasida RTRni qaysi bosqichda qo'llash o'quvchi diqqatini eng ko'p jalb qiladi?"

## Muloqot qoidalari
- O'zbek tilida, sodda va aniq.
- Har bir tushunchani boshlang'ich sinf (1-4 sinf) misolida tushuntir.
- Faqat nazariya emas — har doim amaliy misol keltir.
- "Raqamli O'zbekiston-2030" dasturi talablarini hisobga ol.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  initialPrompt?: string | null;
  clearInitialPrompt?: () => void;
}

export default function ChatInterface({ initialPrompt, clearInitialPrompt }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: `Assalomu alaykum! 👋

Men **RaqamliPed** — boshlang'ich sinf o'qituvchilarining raqamli texnologiyalar orqali kasbiy kompetensiyasini rivojlantirish uchun yaratilgan AI yordamchiman.

Bu platforma orqali siz:

📌 **Raqamli ta'lim resurslarini** tanlash va darsga integratsiya qilishni o'rganasiz
📌 **Interaktiv dars rejalarini** boshlang'ich sinf fanlarida tuzishni mashq qilasiz
📌 **Kichik yoshdagi o'quvchilar** uchun elektron materiallar yaratish ko'nikmalarini oshirasiz
📌 **Kasbiy kompetensiyangizni** uch yo'nalishda rivojlantirasiz: motivatsiya, bilim va amaliyot

---

Qaysi yo'nalishdan boshlaymiz?

🔹 **1** — Raqamli ta'lim resurslari nima va qanday turlari bor?
🔹 **2** — Matematika darsida RTRdan foydalanish usullari
🔹 **3** — O'zbek tili darsida interaktiv dars qanday o'tiladi?
🔹 **4** — Tabiatshunoslik darsida video va animatsiyadan foydalanish
🔹 **5** — Kompetensiyamni qanday baholashim mumkin?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (customPrompt?: string | null) => {
    const textToSend = customPrompt || input.trim();
    if (!textToSend || isLoading) return;

    if (!customPrompt) setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: textToSend }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const currentMessages = messages.concat({ role: 'user', content: textToSend });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: currentMessages.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const aiText = response.text || "Kechirasiz, javob berishda xatolik yuz berdi.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Kechirasiz, tizimda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring." }]);
    } finally {
      setIsLoading(false);
      if (clearInitialPrompt) clearInitialPrompt();
    }
  };

  useEffect(() => {
    if (initialPrompt) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-5xl mx-auto kid-card overflow-hidden mt-8 mb-8 border-4">
      <div className="p-8 border-b-4 border-slate-50 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-fun-blue to-fun-purple rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
            <Sparkles size={28} />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800">RaqamliPed AI</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-fun-green rounded-full animate-pulse"></div>
              <p className="text-xs text-fun-blue font-bold uppercase tracking-wider">Online Yordamchi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/30">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "flex gap-4 max-w-[85%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-sm",
              msg.role === 'user' ? "bg-accent text-slate-700" : "bg-white text-fun-blue border-2 border-slate-100"
            )}>
              {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={cn(
              "p-6 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm",
              msg.role === 'user' 
                ? "bg-fun-blue text-white rounded-tr-none" 
                : "bg-white text-slate-800 rounded-tl-none border-2 border-slate-50"
            )}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-10 h-10 rounded-2xl bg-white border-2 border-slate-100 text-fun-blue flex items-center justify-center flex-shrink-0">
              <Bot size={20} />
            </div>
            <div className="bg-white border-2 border-slate-50 p-6 rounded-[2rem] rounded-tl-none shadow-sm">
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                    className="w-2.5 h-2.5 bg-fun-blue/30 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-8 border-t-4 border-slate-50 bg-white">
        <div className="relative flex items-center gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Savolingizni yozing..."
            className="flex-1 bg-slate-50 border-4 border-slate-100 rounded-[2.5rem] px-8 py-5 pr-20 focus:outline-none focus:border-fun-blue/30 focus:bg-white transition-all text-sm font-bold"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-3 p-4 bg-primary hover:bg-primary/90 text-white rounded-[2rem] shadow-lg shadow-primary/20 transition-all active:scale-90 disabled:opacity-30"
          >
            <Send size={24} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-widest font-black flex items-center justify-center gap-2">
          🌈 AI xato qilishi mumkin. Muhim ma'lumotlarni tekshiring. 🌈
        </p>
      </div>
    </div>
  );
}
