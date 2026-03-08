import { Camera } from "lucide-react";

const placeholders = [
  "บรรยากาศการเรียนรู้",
  "Workshop สุดเข้มข้น",
  "กิจกรรมกลุ่ม",
  "ผู้เข้าร่วมอบรม",
];

const EventGallery = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          ภาพบรรยากาศการอบรม รุ่น 1
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          ประมวลภาพความประทับใจและบรรยากาศการเรียนรู้อย่างใกล้ชิด
        </p>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placeholders.map((label, i) => (
            <div
              key={i}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl bg-muted shadow-card"
            >
              <Camera className="h-10 w-10 text-muted-foreground/50" />
              <span className="text-sm text-muted-foreground/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
