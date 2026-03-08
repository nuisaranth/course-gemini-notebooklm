import { CheckCircle2 } from "lucide-react";

const yes = [
  "ผู้ที่ใช้งาน AI เบื้องต้นเป็นอยู่แล้ว และต้องการต่อยอดเทคนิคขั้นสูงขึ้น",
  "คนทำงานที่ต้องสรุปเอกสาร อ่านบทความ หรือหาข้อมูลจำนวนมาก",
  'ผู้ที่ต้องการดึง "ไอเดีย" และเพิ่ม "ความเร็ว" ในการทำงาน (Productivity)',
];

const TargetAudience = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          หลักสูตรนี้เหมาะสำหรับ...
        </h2>
        <div className="space-y-4">
          {yes.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-google-green/20 bg-google-green/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-google-green" />
              <p className="text-sm font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
