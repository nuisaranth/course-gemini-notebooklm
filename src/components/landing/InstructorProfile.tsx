import { Youtube, Briefcase, BookOpen, Award, Cpu, Newspaper, Mic, Building, Bot } from "lucide-react";
import instructorImg from "@/assets/cheeptham.webp";
import pantitImg from "@/assets/pantit.webp";

const InstructorProfile = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          วิทยากร
        </span>

        <h2 className="mt-4 text-2xl font-extrabold text-foreground md:text-4xl">
          เรียนรู้จากผู้ใช้งานจริง <span className="text-primary">ไม่ใช่แค่ทฤษฎี</span>
        </h2>

        {/* Grid for Cards */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

          {/* Card 1 */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card h-full">
            {/* Circular avatar */}
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-secondary shadow-md shrink-0">
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

            <div className="mx-auto mt-5 max-w-md space-y-3 text-left flex-grow">
              {[
                { icon: Youtube, text: 'YouTuber ช่อง "ชีพธรรม คำวิเศษณ์" ผู้ติดตามกว่า 230,000 คน' },
                { icon: Briefcase, text: "อดีตนักข่าว อสมท. และนักจัดรายการวิทยุ FM101 ด้านเทคโนโลยี" },
                { icon: Award, text: "อดีตที่ปรึกษา Social Media กระทรวงการต่างประเทศ" },
                { icon: BookOpen, text: "ผู้แต่งหนังสือ Google Apps, จับเสือมือเปล่า, เรียน MBA ฟรีที่ฮาร์วาร์ด" },
                { icon: Cpu, text: "ผู้ใช้งานจริงยุคแรกเริ่ม ที่ใช้ NotebookLM ทำงานและสร้างคอนเทนต์มาเกือบ 2 ปี" },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card h-full">
            {/* Circular avatar */}
            <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-secondary shadow-md shrink-0">
              <img
                src={pantitImg}
                alt="อ.พันธุ์ทิตต์ สิรภพธาดา"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-foreground">
              อ.พันธุ์ทิตต์ สิรภพธาดา
            </h3>
            <p className="text-sm text-primary">(อ.ต้อง)</p>

            <div className="mx-auto mt-5 max-w-md space-y-3 text-left flex-grow">
              {[
                { icon: Award, text: "ผู้ก่อตั้ง PANTIT Academy และผู้เชี่ยวชาญด้าน Digital Marketing & SEO ประสบการณ์กว่า 25 ปี" },
                { icon: Newspaper, text: "อดีตบรรณาธิการ \"นิตยสาร E-commerce\" นิตยสารด้านการค้าออนไลน์ฉบับแรกในประเทศไทย" },
                { icon: Mic, text: "อดีตนักจัดรายการวิทยุด้านเทคโนโลยี 101dotNet ทางสถานีวิทยุ FM101 และพอดแคสต์เตอร์" },
                { icon: Building, text: "ที่ปรึกษาด้านธุรกิจดิจิทัลและการตลาดออนไลน์ ให้กับองค์กรภาครัฐ วิสาหกิจชุมชน และเอกชน" },
                { icon: Bot, text: "ผู้บุกเบิกและวิทยากรผู้สอนการประยุกต์ใช้ AI (Google Gemini) เพื่อการทำ SEO และ Content Marketing" },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
