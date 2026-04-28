import { Coffee } from "lucide-react";

const timeline = [
  {
    time: "09:00 - 12:00 น.",
    title: "The Business Detective: พลิกโลกการวิจัยธุรกิจด้วย Deep Research",
    bullets: [
      "Beyond Chatbots: ก้าวข้ามการ Chat สู่การทำ Deep Research เพื่อหา Market Gap ที่คู่แข่งมองไม่เห็น",
      "Detective Prompting: สูตรคำสั่งสกัด Insight และเทคนิคสืบค้นแหล่งข้อมูลปฐมภูมิ (Primary Sources) อย่างแม่นยำ",
      "Tactical Decoding: การแกะรอยคู่แข่งแบบ 360 องศา และการเจาะลึก Customer Sentiment เพื่อหาโอกาสใหม่",
      "Fact-Check Protocol: ระบบป้องกัน AI มโน (Hallucination) และการสรุปข้อมูลหน้าเดียวเพื่อการตัดสินใจระดับบริหาร",
    ],
    dot: "bg-google-blue",
  },
  {
    time: "12:00 - 13:00 น.",
    title: "พักรับประทานอาหารกลางวัน",
    desc: "อาหารกลางวัน 1 มื้อ และพักผ่อนตามอัธยาศัย",
    dot: "bg-google-yellow",
    isBreak: true,
  },
  {
    time: "13:00 - 17:00 น.",
    title: "The Knowledge Architect: สร้างระบบสมองที่สองและขุนพล AI",
    bullets: [
      'Mastering NotebookLM: สร้างสมองที่สองที่แม่นยำ 100% ไร้อาการ "AI มโน" (Zero Hallucination)',
      "Strategic Audio Overview: เปลี่ยนรายงานมหาศาลเป็น Executive Briefing เพื่อการตัดสินใจ",
      "Virtual C-Suite (Gems): ติดตั้งขุนพล AI ประจำธุรกิจที่ฝังกลยุทธ์และ Insight เฉพาะของคุณ",
      "AI Strategy Workflow: สกัดงานวิจัยช่วงเช้าสู่แผนปฏิบัติการ (Action Plan) ที่ใช้งานได้จริง",
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
          เนื้อหาหลักสูตรเวิร์กชอปเข้มข้น 7 ชั่วโมงเต็ม ครอบคลุมการประยุกต์ใช้ AI เพื่อเพิ่มประสิทธิภาพการทำงาน
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
