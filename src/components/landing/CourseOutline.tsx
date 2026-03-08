import { Coffee } from "lucide-react";

const timeline = [
  {
    time: "13:00 - 15:00 น.",
    title: "ปูพื้นฐาน Prompt Engineering & Gemini Deep Research",
    desc: "เจาะลึกการใช้งาน Google Gemini Deep Research เพื่อการหาข้อมูลขั้นสูง",
    dot: "bg-google-blue",
  },
  {
    time: "15:00 - 15:15 น.",
    title: "☕ พักรับประทานอาหารว่าง",
    desc: "เสิร์ฟเครื่องดื่มและเบเกอรี่",
    dot: "bg-google-yellow",
    isBreak: true,
  },
  {
    time: "15:15 - 17:00 น.",
    title: "Workshop: NotebookLM & Google Vids",
    desc: "เวิร์กชอป Google NotebookLM จัดการข้อมูลมหาศาล และแนะนำการใช้งาน Google Vids เบื้องต้น",
    dot: "bg-google-green",
  },
];

const CourseOutline = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          กำหนดการและเนื้อหาหลักสูตร
        </h2>

        <div className="mx-auto max-w-2xl">
          {timeline.map((item, i) => (
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
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;
