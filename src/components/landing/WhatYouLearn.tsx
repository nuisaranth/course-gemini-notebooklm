import { Sparkles, Search, BookOpen, Lightbulb, Users, Video } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "ศิลปะแห่ง Prompt Engineering",
    desc: 'เรียนรู้ "วิศวกรรมคำสั่ง" สั่งงาน AI ให้แม่นยำ ตรงใจ ไม่ออกทะเล ด้วยโครงสร้าง RTCF และการสร้าง Persona อัจฉริยะ',
    accent: "bg-google-blue/10 text-google-blue",
  },
  {
    icon: Search,
    title: "เจาะลึก Insight ด้วย Gemini Deep Research",
    desc: "ใช้ Agentic AI เป็นผู้ช่วยวิจัยส่วนตัว ขุดลึก วิเคราะห์ และสรุปข้อมูลมหาศาลจากอินเทอร์เน็ต พร้อมแหล่งอ้างอิงในพริบตา",
    accent: "bg-google-red/10 text-google-red",
  },
  {
    icon: BookOpen,
    title: 'สร้าง "สมองที่สอง" ด้วย NotebookLM',
    desc: "ย่อยเอกสาร กฎหมาย หรือรายงานนับร้อยหน้า ให้เป็นสรุปผู้บริหาร และเปลี่ยนเป็น Audio Podcast ฟังบนรถได้ทันที",
    accent: "bg-google-green/10 text-google-green",
  },
  {
    icon: Lightbulb,
    title: "เปลี่ยนประสบการณ์เป็นทรัพย์สิน (IP)",
    desc: "ถอดรหัสความรู้ในตัวคุณให้กลายเป็น Framework และทรัพย์สินทางปัญญา (Intellectual Property) ที่สร้างมูลค่าทางธุรกิจได้",
    accent: "bg-google-yellow/10 text-[hsl(43,96%,40%)]",
  },
  {
    icon: Users,
    title: "สร้างทีมที่ปรึกษาเสมือน (AI Co-Pilot)",
    desc: "ปรับแต่ง AI ด้วย Gemini Gems ให้เป็นผู้เชี่ยวชาญเฉพาะด้าน (เช่น นักการตลาด, นักวิเคราะห์) เพื่อช่วยคุณตัดสินใจ",
    accent: "bg-google-blue/10 text-google-blue",
  },
  {
    icon: Workflow,
    title: "AI Strategy Workflow",
    desc: "เทคนิคการใช้ Gemini ร่วมกับ NotebookLM เพื่อเปลี่ยนข้อมูล Research มหาศาล ให้กลายเป็นแผนกลยุทธ์และ Action Plan ที่ใช้งานได้จริง",
    accent: "bg-google-red/10 text-google-red",
  },
];

const WhatYouLearn = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-2 text-center text-sm font-medium text-primary">ทำไมต้องเรียนคอร์สนี้</p>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          สิ่งที่คุณจะได้<span className="text-primary">เรียนรู้</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          หลักสูตร AI ครบวงจร ครอบคลุมทุกเครื่องมือ พร้อม Workshop ปฏิบัติจริง
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
