import workshopGroup from "@/assets/workshop-group.jpg";
import workshopTeaching from "@/assets/workshop-teaching.jpg";
import workshopHandsOn from "@/assets/workshop-hands-on.jpg";
import workshopCertificate from "@/assets/workshop-certificate.jpg";

const photos = [
  { src: workshopTeaching, alt: "วิทยากรสอน AI Model Landscape" },
  { src: workshopHandsOn, alt: "ผู้เข้าอบรมลงมือปฏิบัติจริง" },
  { src: workshopCertificate, alt: "ผลงานจาก Gemini Deep Research" },
  { src: workshopGroup, alt: "ภาพหมู่ผู้เข้าร่วมอบรมรุ่น 1" },
];

const EventGallery = () => {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-2xl font-extrabold text-foreground md:text-4xl">
          ภาพบรรยากาศการอบรม รุ่น 1
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-sm text-muted-foreground md:text-base">
          ประมวลภาพความประทับใจและบรรยากาศการเรียนรู้อย่างใกล้ชิด
        </p>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, i) => (
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
