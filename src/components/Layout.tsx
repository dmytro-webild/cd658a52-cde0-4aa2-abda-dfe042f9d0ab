import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";
import { useLanguage } from "@/context/LanguageContext";

export default function Layout() {
  const { t } = useLanguage();

  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="outline" data-pattern="grid">
      <header data-webild-section="Header">
        <NavbarBoxLinks
          brand="BYITS"
          logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795440569491-7wr8bf8n.png"
          navItems={[
            {
              name: t("โซลูชัน AI", "AI Solutions"),
              href: "#services"
            },
            {
              name: t("เสียงตอบรับ", "Testimonials"),
              href: "#testimonial"
            },
            {
              name: t("ทีมงานผู้เชี่ยวชาญ", "Our Team"),
              href: "#team"
            },
            {
              name: t("คำถามที่พบบ่อย", "FAQ"),
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: t("ปรึกษาโซลูชัน", "Consultation"),
            href: "#contact"
          }}
          menuText={t("เมนู", "Menu")}
          closeText={t("ปิด", "Close")}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="outline" data-pattern="grid">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795440569491-7wr8bf8n.png"
          description={t(
            "ยกระดับการทำงานขององค์กรด้วย AI โซลูชัน เชื่อมต่อข้อมูล ระบบ และงานขององค์กรเพื่อให้ทีมทำงานได้เร็วขึ้นและปลอดภัย",
            "Elevate your enterprise productivity with tailored AI solutions. Connect data, systems, and operations seamlessly and securely."
          )}
          primaryButton={{
            text: t("ปรึกษาโซลูชัน", "Consultation"),
            href: "#contact"
          }}
          columns={[
            {
              title: t("โซลูชัน", "Solutions"),
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
              title: t("เมนูหลัก", "Navigation"),
              links: [
                {
                  text: t("หน้าแรก", "Home"),
                  href: "#hero"
                },
                {
                  text: t("คำถามที่พบบ่อย", "FAQ"),
                  href: "#faq"
                },
                {
                  text: t("ความเห็นจากผู้ใช้จริง", "Testimonials"),
                  href: "#testimonial"
                },
                {
                  text: t("ติดต่อทีมงาน", "Contact"),
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
