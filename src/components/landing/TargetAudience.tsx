import { Briefcase, Megaphone, Search, Cpu } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "เจ้าของธุรกิจ ผู้บริหาร และที่ปรึกษา",
    description:
      "ที่ต้องการย่อยข้อมูลมหาศาลเพื่อช่วยตัดสินใจ (Strategic Co-Pilot) และต้องการสกัด 'ประสบการณ์' ของตัวเองให้กลายเป็น 'ทรัพย์สินทางปัญญา (IP)' เพื่อต่อยอดธุรกิจ",
  },
  {
    icon: Megaphone,
    title: "นักการตลาด คอนเทนต์ครีเอเตอร์ และแอดมินเพจ",
    description:
      "ที่ต้องการหา Insight เชิงลึกแบบฉับไว เพื่อทำคอนเทนต์หรือวางแผนแคมเปญให้ทันกระแส หมดปัญหา 'ไอเดียตัน'",
  },
  {
    icon: Search,
    title: "นักวิเคราะห์ นักวิจัย และคนทำงานยุคดิจิทัล",
    description:
      "ที่เหนื่อยล้ากับการอ่านรายงานหรือเอกสารกองโต ต้องการ 'สมองที่สอง' (NotebookLM) มาช่วยสรุปข้อมูลยาวๆ ให้เข้าใจง่ายพร้อมแหล่งอ้างอิง",
  },
  {
    icon: Cpu,
    title: "ผู้ที่ใช้ AI เบื้องต้นเป็นอยู่แล้ว",
    description:
      "แต่ต้องการก้าวข้ามการถาม-ตอบธรรมดา ไปสู่การใช้เทคโนโลยีขั้นสูงอย่าง Agentic AI (Gemini Deep Research) เพื่อเพิ่ม Productivity 10 เท่า",
  },
];

const TargetAudience = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          เหมาะสำหรับ
        </p>
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          หลักสูตรนี้เหมาะสำหรับ<span className="text-primary">ใคร?</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
