import { Sparkles, Search, BookOpen, Video } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    desc: 'ทักษะ "วิศวกรรมคำสั่ง" สั่งงาน AI อย่างไรให้ได้ผลลัพธ์แม่นยำ ตรงใจ ไม่ออกทะเล',
    accent: "bg-google-blue/10 text-google-blue",
  },
  {
    icon: Search,
    title: "Gemini Deep Research",
    desc: "วิธีใช้ AI ขุดค้น วิเคราะห์ข้อมูลเชิงลึกจากอินเทอร์เน็ต และสรุปพร้อมแหล่งอ้างอิง",
    accent: "bg-google-red/10 text-google-red",
  },
  {
    icon: BookOpen,
    title: "Google NotebookLM",
    desc: 'สร้าง "สมองที่สอง" เปลี่ยนเอกสารนับร้อยหน้าให้เป็นสรุปผู้บริหาร และทำ Audio Podcast ฟังบนรถ',
    accent: "bg-google-green/10 text-google-green",
  },
  {
    icon: Video,
    title: "Bonus: Google Vids",
    desc: "ทำความรู้จัก AI ตัวใหม่ล่าสุดที่ช่วยสร้างวิดีโอพรีเซนต์เทชันระดับโปรจากข้อมูลของคุณ",
    accent: "bg-google-yellow/10 text-[hsl(43,96%,40%)]",
  },
];

const WhatYouLearn = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          สิ่งที่คุณจะได้เรียนรู้ในคอร์สนี้
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${item.accent}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
