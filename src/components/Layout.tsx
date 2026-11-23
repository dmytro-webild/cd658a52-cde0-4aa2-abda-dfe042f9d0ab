import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="outline" data-pattern="grid">
      <header data-webild-section="Header">
        <NavbarBoxLinks
          brand="BYITS"
          logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795438520588-g0x1llz0.png"
          navItems={[
            {
              name: "โซลูชัน AI",
              href: "#services"
            },
            {
              name: "เสียงตอบรับ",
              href: "#testimonial"
            },
            {
              name: "ทีมงานผู้เชี่ยวชาญ",
              href: "#team"
            },
            {
              name: "คำถามที่พบบ่อย",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "ปรึกษาโซลูชัน",
            href: "#contact"
          }}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="outline" data-pattern="grid">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795438520588-g0x1llz0.png"
          description="ยกระดับการทำงานขององค์กรด้วย AI โซลูชัน เชื่อมต่อข้อมูล ระบบ และงานขององค์กรเพื่อให้ทีมทำงานได้เร็วขึ้นและปลอดภัย"
          primaryButton={{
            text: "ปรึกษาโซลูชัน",
            href: "#contact"
          }}
          columns={[
            {
              title: "โซลูชัน",
              links: [
                {
                  text: "Enterprise AI Platform",
                  href: "#services"
                },
                {
                  text: "AI API & Token Services",
                  href: "#services"
                },
                {
                  text: "Digital Apps & Data",
                  href: "#services"
                },
                {
                  text: "Cybersecurity & Recovery",
                  href: "#services"
                },
                {
                  text: "Cloud Workplace & IT",
                  href: "#services"
                }
              ]
            },
            {
              title: "เมนูหลัก",
              links: [
                {
                  text: "หน้าแรก",
                  href: "#hero"
                },
                {
                  text: "คำถามที่พบบ่อย",
                  href: "#faq"
                },
                {
                  text: "ความเห็นจากผู้ใช้จริง",
                  href: "#testimonial"
                },
                {
                  text: "ติดต่อทีมงาน",
                  href: "#contact"
                }
              ]
            }
          ]}
          wordmark="BYITS"
          city="Bangkok"
          timeZone="Asia/Bangkok"
          copyright="© 2026 BEYOND IT SOLUTIONS CO.,LTD. All rights reserved."
        />
      </footer>
    </div>
  );
}
