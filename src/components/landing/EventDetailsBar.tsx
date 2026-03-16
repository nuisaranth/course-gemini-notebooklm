import { CalendarDays, Clock, MapPin, Laptop } from "lucide-react";

const details = [
  { icon: CalendarDays, label: "วันที่", value: "1 เมษายน 2569", color: "text-google-blue" },
  { icon: Clock, label: "เวลา", value: "09:00 - 17:00 น.", color: "text-google-red" },
  { icon: MapPin, label: "สถานที่", value: "ห้องประชุม กาแฟพันธุ์ไทย ลาดพร้าว 130", color: "text-google-green" },
  { icon: Laptop, label: "สิ่งที่ต้องเตรียมมา", value: "คอมพิวเตอร์พกพา (พร้อมอะแดปเตอร์) และ บัญชี Google", color: "text-google-yellow" },
];

const EventDetailsBar = () => {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container mx-auto grid gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((d) => (
          <div key={d.label} className="flex items-start gap-3">
            <d.icon className={`mt-0.5 h-6 w-6 shrink-0 ${d.color}`} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d.label}</p>
              <p className="text-sm font-medium text-foreground">{d.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventDetailsBar;
