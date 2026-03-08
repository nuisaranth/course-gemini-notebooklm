import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "หลักสูตรนี้เหมาะกับผู้เริ่มต้นไหม?",
    answer:
      "เหมาะอย่างยิ่งครับ หลักสูตรนี้ออกแบบมาสำหรับทุกระดับ ไม่จำเป็นต้องมีพื้นฐานด้าน AI มาก่อน เราจะเริ่มตั้งแต่พื้นฐานไปจนถึงการประยุกต์ใช้งานจริงอย่างเป็นขั้นตอน",
  },
  {
    question: "ต้องเตรียมอะไรมาบ้าง?",
    answer:
      "เตรียม Laptop ส่วนตัวมาเพียงเครื่องเดียว พร้อมบัญชี Google (Gmail) สำหรับเข้าใช้งาน Gemini และ NotebookLM ระหว่างการอบรม Workshop",
  },
  {
    question: "สามารถนำไปหักภาษีได้หรือไม่?",
    answer:
      "ได้ครับ สำหรับนิติบุคคลสามารถนำใบเสร็จไปหักค่าใช้จ่ายในการฝึกอบรมได้ และสามารถหักภาษี ณ ที่จ่ายได้ 3%",
  },
  {
    question: "มีการสอนแบบ Workshop ไหม?",
    answer:
      "มีครับ หลักสูตรเน้น Workshop ลงมือปฏิบัติจริงเป็นหลัก ผู้เรียนจะได้ทดลองใช้ Gemini Deep Research ค้นคว้าข้อมูลเชิงลึก และใช้ NotebookLM สรุปเอกสารจริงในห้องอบรม",
  },
  {
    question: "หลังอบรมจะได้รับอะไรบ้าง?",
    answer:
      "ผู้เข้าอบรมจะได้รับเอกสารประกอบการอบรม, สิทธิ์เข้ากลุ่มลับ LINE เพื่อสอบถามหลังเรียนตลอดชีพ, และ Template Prompt ที่สามารถนำไปใช้งานได้ทันที",
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
