import { ArrowRight, Flame } from "lucide-react";
import workshopImg from "@/assets/workshop-1.jpg";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[hsl(230,60%,50%)] to-[hsl(260,55%,45%)] text-primary-foreground">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[hsl(var(--google-yellow)/0.15)] blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[hsl(var(--google-green)/0.1)] blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <Flame className="h-4 w-4 text-google-yellow" />
              เปิดรับสมัครรุ่นที่ 2 แล้ว! (รับจำกัดเพียง 10 ที่นั่งเท่านั้น)
            </div>

            {/* Image - mobile only, shown between badge and headline */}
            <div className="relative mx-auto mb-8 w-full max-w-lg lg:hidden">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary-foreground/20">
                <img
                  src={workshopImg}
                  alt="Gemini Deep Research & NotebookLM Workshop"
                  className="h-auto w-full object-cover"
                  loading="eager" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-google-yellow px-4 py-2 font-bold text-foreground shadow-lg">🎓 รุ่น 2</div>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              ปลดล็อกการทำงานยุคใหม่ด้วย AI:{" "}
              <span className="text-google-yellow">Gemini Deep Research</span> &{" "}
              <span className="text-google-green">NotebookLM</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              เปลี่ยนข้อมูลมหาศาลให้เป็นไอเดียและบทสรุปในพริบตา คอร์สเวิร์กชอป 4 ชั่วโมงเต็ม สำหรับผู้เริ่มต้นที่ต้องการเพิ่มความเร็วในการทำงาน 10X
            </p>

            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              สมัครเรียนรุ่น 2 (1,900 บาท)
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image - desktop only */}
          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary-foreground/20">
              <img
                src={workshopImg}
                alt="Gemini Deep Research & NotebookLM Workshop"
                className="h-auto w-full object-cover"
                loading="eager" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-google-yellow px-4 py-2 font-bold text-foreground shadow-lg md:-bottom-6 md:-left-6">🎓 รุ่น 2</div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;