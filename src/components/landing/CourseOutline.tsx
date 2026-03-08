import { Coffee } from "lucide-react";

const timeline = [
  {
    time: "13:00 - 15:00 น.",
    title: "เจาะลึก AI, Prompt Engineering & Deep Research",
    bullets: [
      "ปูพื้นฐาน Prompt Engineering ด้วยสูตร RTCF (Role-Task-Context-Format)",
      "การสร้าง Persona อัจฉริยะ ให้ AI สวมบทบาทผู้เชี่ยวชาญเพื่อช่วยงานองค์กร",
      'เทคนิคสกัด "ประสบการณ์" ให้เป็นทรัพย์สินทางปัญญา (IP) ด้วย AI',
      "การใช้ Gemini Deep Research ขุดค้นและวิเคราะห์ข้อมูลเชิงลึกแบบอัตโนมัติ",
    ],
    dot: "bg-google-blue",
  },
  {
    time: "15:00 - 15:30 น. (พักเบรก 30 นาที)",
    title: "พักเบรกและ Networking (Coffee Break)",
    desc: "เสิร์ฟเครื่องดื่มและเบเกอรี่ พร้อมเวลาพูดคุยสอบถามวิทยากรแบบส่วนตัว",
    dot: "bg-google-yellow",
    isBreak: true,
  },
  {
    time: "15:30 - 17:30 น.",
    title: "เวิร์กชอป NotebookLM, Gems & Google Vids",
    bullets: [
      'เวิร์กชอป NotebookLM: สร้าง "สมองที่สอง" ย่อยเอกสารนับร้อยหน้าในพริบตา',
      "การทำ Audio Overview เปลี่ยนรายงานที่น่าเบื่อให้เป็นเสียงพอดแคสต์",
      "สร้างและปรับแต่ง Gemini Gems ให้เป็นทีมที่ปรึกษาเสมือนส่วนตัว (Virtual C-Suite)",
      "[Bonus] แนะนำ Google Vids สร้างวิดีโอพรีเซนต์เทชันระดับโปรด้วย AI",
    ],
    dot: "bg-google-green",
  },
];

interface TimelineItem {
  time: string;
  title: string;
  desc?: string;
  bullets?: string[];
  dot: string;
  isBreak?: boolean;
}

const CourseOutline = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-bold text-google-blue">หลักสูตร</p>
        <h2 className="mt-2 text-center text-3xl font-extrabold md:text-4xl">
          <span className="text-google-blue">Gemini </span>
          <span className="text-slate-900">Deep Research </span>
          <span className="text-slate-400">&amp; </span>
          <span className="text-google-green">NotebookLM</span>
        </h2>
        <p className="mt-4 mb-10 text-center text-lg text-muted-foreground">
          เนื้อหาหลักสูตรเวิร์กชอป 1 วันเต็ม ครอบคลุมการใช้งาน Agentic AI ขั้นสูง
        </p>

        <div className="mx-auto max-w-2xl">
          {timeline.map((item: TimelineItem, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Line */}
              {i < timeline.length - 1 && (
                <div className="absolute left-[15px] top-8 h-[calc(100%-16px)] w-0.5 bg-border" />
              )}
              {/* Dot */}
              <div className={`relative z-10 mt-1.5 h-8 w-8 shrink-0 rounded-full ${item.dot} flex items-center justify-center`}>
                {item.isBreak ? (
                  <Coffee className="h-4 w-4 text-foreground" />
                ) : (
                  <span className="h-3 w-3 rounded-full bg-primary-foreground" />
                )}
              </div>
              {/* Content */}
              <div className={`rounded-xl border border-border bg-card p-5 shadow-card flex-1 ${item.isBreak ? "bg-google-yellow/5" : ""}`}>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.time}</p>
                <h3 className="mb-1 text-base font-bold text-card-foreground">{item.title}</h3>
                {item.desc && <p className="text-sm text-muted-foreground">{item.desc}</p>}
                {item.bullets && (
                  <ul className="mt-2 space-y-1.5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;
