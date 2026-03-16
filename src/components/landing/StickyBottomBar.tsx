import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const StickyBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const benefitsSection = document.getElementById("benefits");
      if (benefitsSection) {
        const rect = benefitsSection.getBoundingClientRect();
        setVisible(rect.top <= window.innerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-4px_20px_hsl(var(--foreground)/0.08)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm text-muted-foreground">รุ่น 3: 1 เมษายน 2569</p>
          <p className="text-lg font-extrabold text-primary">
            ฿3,900 <span className="text-sm font-normal text-muted-foreground">รวม VAT</span>
          </p>
        </div>
        <a
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02]"
        >
          สมัครอบรม
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StickyBottomBar;
