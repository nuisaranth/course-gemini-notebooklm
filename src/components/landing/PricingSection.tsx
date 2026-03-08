import { Check, Calendar, Clock, MapPin, Users } from "lucide-react";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const included = [
"อบรมสด 4 ชั่วโมงเต็ม (ไม่ใช่ออนไลน์)",
"กลุ่มเล็กไม่เกิน 10 ท่าน ดูแลทั่วถึง",
"เอกสารประกอบการอบรม",
"เครื่องดื่มและอาหารว่าง",
"เข้ากลุ่มลับ LINE ตลอดชีพ",
"หักภาษี ณ ที่จ่ายได้ (นิติบุคคล)"];


const PricingSection = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          รายละเอียดการอบรม
        </p>
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
          สมัครอบรม<span className="text-primary">รุ่นนี้</span>
        </h2>
        <p className="mx-auto mb-10 max-w-md text-center text-muted-foreground">
          รุ่น 2 เปิดรับสมัครแล้ว จำนวนจำกัด
        </p>

        <div className="mx-auto max-w-lg">
          {/* Event details card */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card mb-6">
            {/* Batch badge */}
            <div className="flex justify-center mb-6">
              <span className="rounded-full border border-primary/30 bg-primary/5 px-5 py-1.5 text-sm font-semibold text-primary">
                รุ่น 2
              </span>
            </div>

            {/* Details list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">วันที่ 15 มีนาคม 2569</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">เวลา 13:00 - 17:00 น.</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/vVKHdN76rwAxhGH1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium underline decoration-primary/40 hover:decoration-primary">
                    
                    Punthai Coffee ลาดพร้าว 130
                  </a>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Users className="h-3.5 w-3.5" />
                    กลุ่มเล็ก รับไม่เกิน 10 ท่าน
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6" />

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-sm font-semibold text-muted-foreground mb-2">ค่าอบรม</p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-lg text-muted-foreground">฿</span>
                <span className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">1,900</span>
              </div>
              <p className="mt-1 text-muted-foreground">/ ท่าน (รวม VAT แล้ว)</p>
            </div>
            {/* What's included */}
            <div className="border-t border-border my-6" />
            <div className="space-y-3 mb-8">
              {included.map((item, i) =>
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-google-green" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl">
              สมัครอบรมเลย
            </a>

            {/* Contact */}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              สอบถาม: <a href="tel:02-077-1784" className="underline">02-077-1784</a>{" "}
              หรือ LINE{" "}
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                @teamdigital
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default PricingSection;