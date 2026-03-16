import { useState } from "react";
import ws1_1 from "@/assets/workshop1-1.webp";
import ws1_2 from "@/assets/workshop1-2.webp";
import ws1_3 from "@/assets/workshop1-3.webp";
import ws1_4 from "@/assets/workshop1-4.webp";

import ws2_1 from "@/assets/workshop2-1.webp";
import ws2_2 from "@/assets/workshop2-2.webp";
import ws2_3 from "@/assets/workshop2-3.webp";
import ws2_4 from "@/assets/workshop2-4.webp";

const photosBatch1 = [
  { src: ws1_1, alt: "วิทยากรสอน AI Model Landscape" },
  { src: ws1_2, alt: "ผู้เข้าอบรมลงมือปฏิบัติจริง" },
  { src: ws1_3, alt: "ผลงานจาก Gemini Deep Research" },
  { src: ws1_4, alt: "ภาพหมู่ผู้เข้าร่วมอบรมรุ่น 1" },
];

const photosBatch2 = [
  { src: ws2_1, alt: "บรรยากาศ อ.ชีพธรรม และขณะสอนเวิร์กชอป Gemini & NotebookLM รุ่น 2 แบบจับมือทำ" },
  { src: ws2_2, alt: "การแลกเปลี่ยนเรียนรู้และสอบถามข้อสงสัยระหว่างผู้เรียนและวิทยากร ในคอร์ส Gemini รุ่น 2" },
  { src: ws2_3, alt: "ผู้เข้าร่วมการอบรม รุ่น 2 กำลังลงมือปฏิบัติจริงโดยใช้ NotebookLM ย่อยเอกสาร" },
  { src: ws2_4, alt: "ภาพหมู่ผู้เข้าร่วมอบรมรุ่น 2" },
];

const EventGallery = () => {
  const [activeTab, setActiveTab] = useState<"รุ่น 2" | "รุ่น 1">("รุ่น 2");

  const currentPhotos = activeTab === "รุ่น 2" ? photosBatch2 : photosBatch1;

  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-2xl font-extrabold text-foreground md:text-4xl">
          ภาพบรรยากาศการอบรมที่ผ่านมา
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-sm text-muted-foreground md:text-base">
          ประมวลภาพความประทับใจและบรรยากาศการเรียนรู้อย่างใกล้ชิดแบบจับมือทำ
        </p>

        {/* Tabs */}
        <div className="mx-auto mb-10 flex max-w-md justify-center gap-4">
          <button
            onClick={() => setActiveTab("รุ่น 2")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 md:text-base ${
              activeTab === "รุ่น 2"
                ? "bg-primary text-white shadow-md"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            รุ่น 2
          </button>
          <button
            onClick={() => setActiveTab("รุ่น 1")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 md:text-base ${
              activeTab === "รุ่น 1"
                ? "bg-primary text-white shadow-md"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            รุ่น 1
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {currentPhotos.map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-card"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
