import { ArrowRight, Flame } from "lucide-react";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[hsl(230,60%,50%)] to-[hsl(260,55%,45%)] text-primary-foreground">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[hsl(var(--google-yellow)/0.15)] blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[hsl(var(--google-green)/0.1)] blur-3xl" />

      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            <Flame className="h-4 w-4 text-google-yellow" />
            เปิดรับสมัครรุ่นที่ 2 แล้ว! (รับจำกัดเพียง 10 ที่นั่งเท่านั้น)
          </div>

          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            ปลดล็อกการทำงานยุคใหม่ด้วย AI:{" "}
            <span className="text-google-yellow">Gemini Deep Research</span> &{" "}
            <span className="text-google-green">NotebookLM</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            เปลี่ยนข้อมูลมหาศาลให้เป็นไอเดียและบทสรุปในพริบตา คอร์สเวิร์กชอป 4 ชั่วโมงเต็ม สำหรับผู้เริ่มต้นที่ต้องการเพิ่มความเร็วในการทำงาน 10X
          </p>

          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            สมัครเรียนรุ่น 2 (1,900 บาท)
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
