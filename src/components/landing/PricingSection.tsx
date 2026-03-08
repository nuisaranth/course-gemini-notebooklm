import { Check, MessageCircle } from "lucide-react";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const included = [
  "เรียนกลุ่มเล็ก Exclusive ไม่เกิน 10 ท่าน เพื่อการดูแลที่ทั่วถึง",
  "เอกสารประกอบการอบรมแบบจัดเต็ม",
  "ฟรี! เครื่องดื่มและอาหารว่าง 1 เบรค",
  "สิทธิ์เข้ากลุ่มลับ LINE ตลอดชีพ เพื่ออัปเดตความรู้และปรึกษาหลังเรียนจบ",
];

const PricingSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          โอกาสสุดท้าย! รับจำนวนจำกัด
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
          สิ่งที่รวมอยู่ในค่าอบรม
        </p>

        <div className="mx-auto max-w-md rounded-2xl border-2 border-primary bg-card p-8 shadow-card-hover">
          <div className="mb-6 text-center">
            <p className="text-5xl font-extrabold text-primary">1,900</p>
            <p className="mt-1 text-lg font-semibold text-muted-foreground">บาท (ราคาเดียว)</p>
          </div>

          <div className="mb-8 space-y-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-google-green" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-google-green px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            ทักไลน์สมัครทันที
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
