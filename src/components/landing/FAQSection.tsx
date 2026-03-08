import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ไม่มีพื้นฐาน AI หรือเขียนโค้ดไม่เป็น เรียนได้ไหม?",
    answer:
      "เรียนได้แน่นอนครับ! คอร์สนี้ออกแบบมาสำหรับ 'ผู้ใช้งานทั่วไป (End-User)' และคนทำงานโดยเฉพาะ ไม่มีการเขียนโค้ดใดๆ อาจารย์จะปูพื้นฐานการเขียนคำสั่ง (Prompt) ตั้งแต่เริ่มต้น ไปจนถึงเทคนิคขั้นสูงแบบค่อยเป็นค่อยไปครับ",
  },
  {
    question: "ต้องเตรียมอุปกรณ์อะไรมาบ้าง?",
    answer:
      "สิ่งที่ต้องเตรียมมีเพียง 2 อย่างครับ คือ 1) คอมพิวเตอร์โน้ตบุ๊ก (พร้อมสายชาร์จ) และ 2) บัญชี Google (Gmail) เพื่อใช้ล็อกอินเข้าสู่ระบบครับ (แนะนำให้ใช้โน้ตบุ๊กแทนแท็บเล็ต เพื่อให้ทำเวิร์กชอปได้สะดวกที่สุด)",
  },
  {
    question: "จำเป็นต้องเสียเงินสมัคร Gemini Advanced เพิ่มไหม?",
    answer:
      "เนื้อหาหลักสามารถใช้เวอร์ชันฟรีเรียนได้ครับ แต่สำหรับฟีเจอร์ขั้นสูงอย่าง Deep Research และ Gems แนะนำให้ใช้เวอร์ชัน Advanced ซึ่งผู้เรียนสามารถกดรับสิทธิ์ 'ทดลองใช้ฟรี 1 เดือน' ในวันอบรมได้เลยครับ (ยังไม่ต้องเสียเงิน)",
  },
  {
    question: "หลังเรียนจบแล้ว หากติดปัญหา มีที่ปรึกษาไหม?",
    answer:
      "มีครับ! ผู้เข้าอบรมทุกท่านจะได้รับสิทธิ์เข้า 'กลุ่มลับ LINE ตลอดชีพ' ซึ่งสามารถเข้ามาอัปเดตฟีเจอร์ AI ใหม่ๆ และสอบถามปัญหาการใช้งานจริงกับ อ.ชีพธรรม และทีมงานได้ตลอดเวลาครับ",
  },
  {
    question: "สามารถออกใบกำกับภาษีในนามบริษัทได้หรือไม่?",
    answer:
      "สามารถออกใบกำกับภาษีเต็มรูปแบบได้ครับ ราคา 1,900 บาท เป็นราคาที่รวม VAT เรียบร้อยแล้ว สามารถแจ้งชื่อ-ที่อยู่บริษัทกับแอดมินตอนทัก LINE สมัครอบรมได้เลยครับ",
  },
  {
    question: "สถานที่อบรมอยู่ที่ไหน? มีที่จอดรถไหม?",
    answer:
      "อบรมที่ ร้านกาแฟพันธุ์ไทย (ซอยลาดพร้าว 130) ครับ \n🚇 MRT: สายสีเหลือง (สถานีลาดพร้าว 101 หรือ มหาดไทย) \n🚗 รถยนต์: มีที่จอดรถฟรีให้บริการครับ",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          คำถามที่พบบ่อย
        </p>
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
          มีคำถาม<span className="text-primary">ไหม?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          รวมคำถามที่พบบ่อยเกี่ยวกับหลักสูตรอบรม AI: Gemini Deep Research & NotebookLM
        </p>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
