import { ExternalLink, Youtube, Cpu, BookOpenCheck } from "lucide-react";
import instructorImg from "@/assets/instructor.png";
const PROFILE_URL =
  "https://www.teamdigital.co/instructors/%E0%B8%AD-%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%84%E0%B8%B3%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%93%E0%B9%8C/";

const InstructorProfile = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          วิทยากร
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">
          เรียนรู้จากผู้ใช้งานจริง ไม่ใช่แค่ทฤษฎี
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          ยูทูบเบอร์ช่อง "ชีพธรรม คำวิเศษณ์" ผู้ติดตามกว่า 230,000 คน ผู้เชี่ยวชาญด้านการประยุกต์ใช้ AI
        </p>

        {/* Card */}
        <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-border bg-card p-8 shadow-card">
          {/* Circular avatar */}
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-secondary shadow-md">
            <img
              src={instructorImg}
              alt="อ.ชีพธรรม คำวิเศษณ์"
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-2xl font-extrabold text-foreground">
            อ.ชีพธรรม คำวิเศษณ์
          </h3>
          <p className="text-sm text-primary">(อ.ไตร)</p>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            ผู้ใช้งานจริงยุคแรกเริ่ม ที่ใช้ NotebookLM ทำงานและสร้างคอนเทนต์มาเกือบ 2 ปี
            ผู้เชี่ยวชาญด้านการประยุกต์ใช้ AI เพื่อเพิ่มประสิทธิภาพการทำงานและการเล่าเรื่อง
          </p>

          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            ดูประวัติเพิ่มเติม
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
