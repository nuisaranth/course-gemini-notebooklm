import { Phone, MessageCircle, Mail } from "lucide-react";
import teamdigitalLogo from "@/assets/teamdigital-logo.jpg";

const CTA_LINK = "https://lin.ee/rmHdC8tm";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-muted/80 py-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <img src={teamdigitalLogo} alt="Team Digital" className="h-10 w-auto" />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              บริษัท Team Digital ผู้นำทางด้านจัดอบรมการตลาดออนไลน์ จัดคอร์สเรียนการตลาดออนไลน์หลากหลายหลักสูตรทุกเดือน
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">ติดต่อเรา</h3>
            <div className="space-y-3">
              <a href="tel:02-077-1784" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                02-077-1784
              </a>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5 text-primary" />
                LINE: @teamdigital
              </a>
              <a href="mailto:info@teamdigital.co" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                info@teamdigital.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
