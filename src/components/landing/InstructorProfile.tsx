import { Youtube, Cpu, BookOpenCheck } from "lucide-react";
import instructorImg from "@/assets/instructor.png";
import workshopImg2 from "@/assets/workshop-2.jpg";
import workshopImg3 from "@/assets/workshop-3.jpg";

const bullets = [
  { icon: Youtube, text: 'ยูทูบเบอร์ช่อง "ชีพธรรม คำวิเศษณ์" (ผู้ติดตามกว่า 230,000 คน)' },
  { icon: Cpu, text: "ผู้เชี่ยวชาญด้านการประยุกต์ใช้ AI เพื่อเพิ่มประสิทธิภาพการทำงานและการเล่าเรื่อง" },
  { icon: BookOpenCheck, text: "ผู้ใช้งานจริงยุคแรกเริ่ม ที่ใช้ NotebookLM ทำงานและสร้างคอนเทนต์มาเกือบ 2 ปี" },
];

const InstructorProfile = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          เรียนรู้จากผู้ใช้งานจริง ไม่ใช่แค่ทฤษฎี
        </h2>

        <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img src={instructorImg} alt="อ.ชีพธรรม คำวิเศษณ์" className="h-auto w-full object-cover" />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-1 text-2xl font-extrabold text-foreground">อ.ชีพธรรม คำวิเศษณ์</h3>
            <p className="mb-6 text-sm text-muted-foreground">(อ.ไตร)</p>
            <div className="space-y-4">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img src={workshopImg2} alt="บรรยากาศการอบรม" className="h-60 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img src={workshopImg3} alt="บรรยากาศการอบรม" className="h-60 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
