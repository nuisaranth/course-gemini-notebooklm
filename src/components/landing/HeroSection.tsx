import { ArrowRight, Download, Flame, CalendarDays, Clock, MapPin, Users } from "lucide-react";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const details = [
  { icon: CalendarDays, label: "รุ่น 2", value: "15 มี.ค. 69", color: "text-google-blue" },
  { icon: Clock, label: "เวลา", value: "13:00-17:00", color: "text-google-red" },
  { icon: MapPin, label: "สถานที่", value: "Punthai Coffee", color: "text-google-green" },
  { icon: Users, label: "จำนวน", value: "จำกัด 10 ท่าน", color: "text-google-yellow" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[hsl(230,60%,50%)] to-[hsl(260,55%,45%)] text-primary-foreground">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[hsl(var(--google-yellow)/0.1)] blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[hsl(var(--google-green)/0.08)] blur-3xl" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            <Flame className="h-4 w-4 text-google-yellow" />
            เปิดรับสมัครรุ่นที่ 2 แล้ว! (รับจำกัดเพียง 10 ที่นั่งเท่านั้น)
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            ปลดล็อกการทำงานยุคใหม่ด้วย AI:{" "}
            <span className="text-google-yellow">Gemini Deep Research</span> &{" "}
            <span className="text-google-green">NotebookLM</span>
          </h1>

          {/* Sub-headline */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            เปลี่ยนข้อมูลมหาศาลให้เป็นไอเดียและบทสรุปในพริบตา
            <br className="hidden md:block" />
            คอร์สเวิร์กชอป 4 ชั่วโมงเต็ม สำหรับผู้เริ่มต้นที่ต้องการเพิ่มความเร็วในการทำงาน 10X
          </p>

          {/* Event details cards */}
          <div className="mb-10 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex flex-col items-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-4 backdrop-blur-sm"
              >
                <d.icon className={`h-6 w-6 ${d.color}`} />
                <span className="text-xs font-medium text-primary-foreground/70">{d.label}</span>
                <span className="text-sm font-bold">{d.value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              สมัครเรียน
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/40 px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Download className="h-5 w-5" />
              ดาวน์โหลดรายละเอียด
            </a>
          </div>

          {/* Price hint */}
          <p className="mt-6 text-sm text-primary-foreground/60">
            ราคาเพียง <span className="text-2xl font-extrabold text-google-yellow">฿1,900</span> / ท่าน
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
