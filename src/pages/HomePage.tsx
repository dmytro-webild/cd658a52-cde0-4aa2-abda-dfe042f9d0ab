import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import ServicesIndustryTiles from "@/components/sections/features/ServicesIndustryTiles";
import CtaPlusBand from "@/components/sections/statement/CtaPlusBand";
import TeamLeadersBand from "@/components/sections/team/TeamLeadersBand";
import FaqGlyphRows from "@/components/sections/faq/FaqGlyphRows";
import TestimonialDeepCoverflow from "@/components/sections/testimonial/TestimonialDeepCoverflow";
import ContactColumnWindow from "@/components/sections/contact/ContactColumnWindow";
import LoaderHairlineColumns from "@/components/loaders/LoaderHairlineColumns";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <LoaderHairlineColumns
        brand="BYITS"
        logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795438520588-g0x1llz0.png"
      />

      <div id="hero" data-webild-section="HeroColumnGrid" data-webild-section-id="HeroColumnGrid-1" data-section="hero" data-scene>
        <HeroColumnGrid
          title={t("AI Solutions Built for Real Business Workflows", "AI Solutions Built for Real Business Workflows")}
          description={t(
            "เชื่อม AI เข้ากับ ข้อมูล ระบบ และ งานองค์กร ให้ ทีม ทำงาน เร็วขึ้น นำไปใช้ ได้จริง Better, faster, cheaper.",
            "Integrate enterprise AI with your data, systems, and workflows. Empower your team to work faster, smarter, and with proven ROI."
          )}
          primaryButton={{
            text: t("ปรึกษาโซลูชัน", "Get Consultation"),
            href: "#contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/3d-modern-background-with-rainbow-coloured-flowing-particles-design_1048-20453.jpg"
          imageAlt="abstract data visualization technology background"
          introDelay={1.7}
        />
      </div>

      <div id="services" data-webild-section="ServicesIndustryTiles" data-webild-section-id="ServicesIndustryTiles-1" data-section="services">
        <ServicesIndustryTiles
          title={t("ระบบ AI ปรับ กระบวนการ ทำงาน อัตโนมัติ", "Enterprise AI Workflow Automation")}
          linkText={t("ปรึกษาโซลูชัน", "Get Consultation")}
          items={[
            {
              title: "Customer Service",
              description: t("ระบบ ตอบ ลูกค้า อัตโนมัติ บน LINE และ เว็บไซต์", "Automated customer engagement system for LINE & Website"),
              facts: t(
                [
                  "Input: คำถาม ลูกค้า บน LINE",
                  "AI: ค้นหา ข้อมูล และ ร่าง คำตอบ",
                  "Action: ทีมงาน ตรวจสอบ เคส"
                ],
                [
                  "Input: Customer inquiries via LINE / Web",
                  "AI: Instant knowledge lookup & response drafting",
                  "Action: Support team review & approval"
                ]
              ),
              imageSrc: "https://img.b2bpic.net/free-photo/smartphone-child-hands-with-incoming-mommy-call-screen_169016-43115.jpg",
              href: "#contact"
            },
            {
              title: "Marketing Content",
              description: t("สร้างสรรค์ คอนเทนต์ แคมเปญ การตลาด ได้ รวดเร็ว", "AI-powered marketing content and campaign generation"),
              facts: t(
                [
                  "Input: บรีฟ แคมเปญ การตลาด",
                  "AI: ร่าง โพสต์ และ อีเมล",
                  "Action: ทีมงาน คัดเลือก อนุมัติ"
                ],
                [
                  "Input: Marketing briefs & goals",
                  "AI: Automated post & email drafting",
                  "Action: Marketing team selection & publish"
                ]
              ),
              imageSrc: "https://img.b2bpic.net/free-photo/laptop-with-copy-space-display-empty-desk-performance-metrics_482257-126532.jpg",
              href: "#contact"
            },
            {
              title: "Finance & Data",
              description: t("สรุป แนวโน้ม รายงาน การเงิน อัตโนมัติ", "Automated financial summaries & data analytics"),
              facts: t(
                [
                  "Input: ข้อมูล ยอดขาย ค่าใช้จ่าย",
                  "AI: สรุป แนวโน้ม และ ร่าง รายงาน",
                  "Action: ผู้จัดการ ตรวจสอบ"
                ],
                [
                  "Input: Sales, revenue & expense data",
                  "AI: Trend analysis & report synthesis",
                  "Action: Financial manager review"
                ]
              ),
              imageSrc: "https://img.b2bpic.net/free-photo/modern-monitor-elegant-table_23-2150706439.jpg",
              href: "#contact"
            },
            {
              title: "IT Operations",
              description: t("แจ้งเตือน และ วิเคราะห์ ปัญหา ระบบ คลาวด์", "Cloud infrastructure monitoring & incident analysis"),
              facts: t(
                [
                  "Input: บันทึก แจ้งเตือน คลาวด์",
                  "AI: จัดกลุ่ม ปัญหา แนะนำ วิธี",
                  "Action: ทีม IT แก้ไข เหตุการณ์"
                ],
                [
                  "Input: Cloud logs & alert notifications",
                  "AI: Incident grouping & resolution guide",
                  "Action: IT team swift resolution"
                ]
              ),
              imageSrc: "https://img.b2bpic.net/free-photo/data-facility-storing-massive-datasets-used-ai-simulations_482257-124431.jpg",
              href: "#contact"
            },
            {
              title: "Design Concept",
              description: t("วาง คอนเซปต์ ผัง อาคาร และ พื้นที่", "Architectural and spatial concept optimization"),
              facts: t(
                [
                  "Input: โจทย์ โครงการ และ พื้นที่",
                  "AI: เสนอ ผัง อาคาร หลาย แบบ",
                  "Action: สถาปนิก นำไป พัฒนา"
                ],
                [
                  "Input: Project requirements & area limits",
                  "AI: Multiple spatial layout proposals",
                  "Action: Architect refinement & delivery"
                ]
              ),
              imageSrc: "https://img.b2bpic.net/free-photo/focused-business-partners-looking-laptop-office_74855-4210.jpg",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="cta" data-webild-section="CtaPlusBand" data-webild-section-id="CtaPlusBand-1" data-section="cta">
        <CtaPlusBand
          label={t("ติดต่อเรา", "CONTACT US")}
          title={t("พร้อม ยกระดับ องค์กร ด้วย AI หรือยัง", "Ready to Elevate Your Business with AI?")}
          primaryButton={{
            text: t("ปรึกษาโซลูชัน", "Schedule Consultation"),
            href: "#contact"
          }}
          secondaryButton={{
            text: t("ดูโซลูชันทั้งหมด", "Explore All Solutions"),
            href: "#services"
          }}
        />
      </div>

      <div id="team" data-webild-section="TeamLeadersBand" data-webild-section-id="TeamLeadersBand-1" data-section="team" data-scene>
        <TeamLeadersBand
          title={t("ทีมผู้บริหารและผู้เชี่ยวชาญ BYITS", "BYITS Leadership & Specialist Team")}
          button={{
            text: t("ปรึกษาทีมงาน", "Contact Experts"),
            href: "#contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/people-sitting-desk-working-laptop_23-2147650862.jpg"
          imageAlt="People sitting at desk working on laptop"
          items={[
            {
              title: t("ธนกฤต วรโชติ", "Tanakrit Worachot"),
              description: t("ประธานเจ้าหน้าที่บริหาร", "Chief Executive Officer (CEO)"),
              imageSrc: "https://img.b2bpic.net/free-photo/asian-developer-standing-near-flipchart-looking-blonde-woman-glasses-indoor-portrait-brunette-businessman-writing-graph-white-board-listening-colleagues_197531-3768.jpg",
              imageAlt: "Asian developer standing near flipchart"
            },
            {
              title: t("ณิชารีย์ สุวรรณ", "Nicharee Suwan"),
              description: t("ประธานฝ่ายเทคโนโลยี", "Chief Technology Officer (CTO)"),
              imageSrc: "https://img.b2bpic.net/free-photo/tired-asian-young-businesswoman-sleeping-table_1262-2336.jpg",
              imageAlt: "Asian businesswoman"
            },
            {
              title: t("กิตติพงษ์ วิเศษ", "Kittipong Wiset"),
              description: t("ผู้อำนวยการฝ่ายโซลูชัน AI", "Director of AI Solutions"),
              imageSrc: "https://img.b2bpic.net/free-photo/annoyed-shocked-businessman-eyeglasses-using-tablet_1262-16870.jpg",
              imageAlt: "Businessman using tablet"
            },
            {
              title: t("ปรียาพร สายชล", "Preeyaporn Saichol"),
              description: t("ผู้อำนวยการฝ่ายไซเบอร์", "Director of Cybersecurity"),
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-person-working-while-standing_23-2148961755.jpg",
              imageAlt: "Portrait of person working while standing"
            },
            {
              title: t("ศุภโชค ชัยชนะ", "Suphachok Chaichana"),
              description: t("ผู้อำนวยการฝ่ายระบบคลาวด์", "Director of Cloud Solutions"),
              imageSrc: "https://img.b2bpic.net/free-photo/cybersecurity-expert-monitoring-network-server-room_23-2152029083.jpg",
              imageAlt: "Cybersecurity expert monitoring network"
            },
            {
              title: t("มนัสวี รัตนกุล", "Manaswee Rattanakul"),
              description: t("ผู้อำนวยการฝ่ายปฏิบัติการ", "Chief Operating Officer (COO)"),
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-business-woman-corporate-office-sitting-desk_482257-8055.jpg",
              imageAlt: "Portrait of business woman sitting at desk"
            },
            {
              title: t("ชินวัตร เมธา", "Chinawat Metha"),
              description: t("หัวหน้าทีม AI Solutions", "Lead AI Solutions Engineer"),
              imageSrc: "https://img.b2bpic.net/free-photo/young-man-wearing-white-clothes-using-tablet_23-2148910216.jpg",
              imageAlt: "Young man using tablet"
            },
            {
              title: t("พิมลพรรณ วงศ์สวัสดิ์", "Pimonpan Wongsawat"),
              description: t("หัวหน้าฝ่ายดูแลลูกค้าองค์กร", "Head of Enterprise Accounts"),
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-goodlooking-young-blond-woman-wireless-headphones-listens-podcast-favourite_1258-253473.jpg",
              imageAlt: "Portrait of young woman"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlyphRows" data-webild-section-id="FaqGlyphRows-1" data-section="faq">
        <FaqGlyphRows
          label={t("คำถาม พบบ่อย", "FAQ")}
          title={t("คำถาม เกี่ยวกับ โซลูชัน AI ของ BYITS", "Frequently Asked Questions about BYITS AI")}
          description={t("คำตอบ ชัดเจน เรื่อง การ นำ ระบบ AI และ คลาวด์ มา ปรับใช้ ใน องค์กร", "Clear insights on implementing enterprise AI and cloud solutions.")}
          button={{
            text: t("ปรึกษา ทีมงาน", "Consult Team"),
            href: "#contact"
          }}
          items={[
            {
              title: t("การ นำ AI มา ใช้ ใน องค์กร ใช้ เวลา เท่าใด", "How long does enterprise AI implementation take?"),
              description: t(
                "โดยทั่วไป การ ติดตั้ง โซลูชัน AI สำหรับ กระบวนการ ทำงาน ใช้ เวลา ประมาณ 2 ถึง 8 สัปดาห์ ขึ้นอยู่กับ ขนาด และ ความซับซ้อน ของ ข้อมูล องค์กร",
                "Typically, workflow AI implementation takes between 2 to 8 weeks depending on the scope of enterprise data and operational complexity."
              )
            },
            {
              title: t("ข้อมูล ของ องค์กร จะ ปลอดภัย หรือไม่", "Is enterprise data secure with your AI solutions?"),
              description: t(
                "BYITS ให้ ความสำคัญ กับ Cybersecurity และ การ ปกป้อง ข้อมูล สูงสุด ด้วย ระบบ รักษา ความปลอดภัย ตาม มาตรฐาน สากล และ การ เข้ารหัส ข้อมูล ทุก ขั้นตอน",
                "BYITS prioritizes corporate cybersecurity and maximum data privacy, employing international security standards and end-to-end data encryption."
              )
            },
            {
              title: t("บริการ AI Token Services ช่วย คุม ค่าใช้จ่าย อย่างไร", "How do AI Token Services help control corporate costs?"),
              description: t(
                "เรา มี ระบบ บริหาร จัดการ การ ใช้งาน AI API และ Token ที่ ช่วย ให้ องค์กร มองเห็น วงเงิน และ วางแผน ค่าใช้จ่าย ได้ ตามจริง โดย ไม่ มี ค่าใช้จ่าย แอบแฝง",
                "Our AI API & token management system provides total visibility over spending caps and transparent usage tracking with no hidden costs."
              )
            },
            {
              title: t("ระบบ เดิม ของ องค์กร สามารถ เชื่อมต่อ AI ได้ หรือไม่", "Can legacy enterprise systems integrate with your AI?"),
              description: t(
                "ทีมงาน ของ เรา มี ความเชี่ยวชาญ ด้าน System Integration ในการ เชื่อมต่อ AI เข้ากับ ระบบ ERP CRM หรือ แพลตฟอร์ม เดิม ที่ องค์กร ใช้งาน อยู่ ได้ อย่าง ไร้รอยต่อ",
                "Our integration specialists seamlessly connect AI capabilities directly to your existing ERP, CRM, and internal business platforms."
              )
            },
            {
              title: t("มี บริการ ดูแล หลัง การ ติดตั้ง อย่างไร", "What post-implementation support do you provide?"),
              description: t(
                "เรา มี ทีม Managed IT และ Cybersecurity คอย มอนิเตอร์ ระบบ เสถียรภาพ 99.9% พร้อม ให้ คำปรึกษา และ ดูแล การ ใช้งาน อย่าง ต่อเนื่อง",
                "Our Managed IT & Cybersecurity team continuously monitors system reliability (99.9% uptime) with ongoing technical advisory."
              )
            },
            {
              title: t("ขั้นตอน การ เริ่มต้น ปรึกษา โซลูชัน ทำ อย่างไร", "How do we get started with an initial consultation?"),
              description: t(
                "ท่าน สามารถ ติดต่อ ทีมงาน เพื่อ นัดหมาย พูดคุย ประเมิน ความต้องการ และ ออกแบบ โซลูชัน ที่ เหมาะสม กับ ธุรกิจ ของ ท่าน ได้ โดย ไม่มี ค่าใช้จ่าย ใน ขั้น แรก",
                "Simply contact our team to schedule a preliminary discovery meeting to assess your business needs—at zero obligation."
              )
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialDeepCoverflow" data-webild-section-id="TestimonialDeepCoverflow-1" data-section="testimonial">
        <TestimonialDeepCoverflow
          title={t("ความประทับใจ จาก ผู้บริหาร องค์กร", "Executive Testimonials & Success Stories")}
          description={t("ได้รับ ความไว้วางใจ จาก ผู้นำ องค์กร ยุคใหม่", "Trusted by forward-thinking leaders across industries.")}
          items={[
            {
              name: t("สมศักดิ์ ก.", "Somsak K."),
              role: "CTO",
              quote: t("BYITS ช่วย ปฏิวัติ การทำงาน เอกสาร ของเรา ด้วย ระบบ AI ที่มี ประสิทธิภาพ", "BYITS revolutionized our document workflows with remarkably efficient AI automation."),
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-indigenous-businessman_23-2151201366.jpg",
              imageAlt: "Portrait of businessman"
            },
            {
              name: t("พิมพ์ ส.", "Phim S."),
              role: "COO",
              quote: t("การ เชื่อมต่อ ระบบ เป็นไป อย่าง ราบรื่น ช่วย เพิ่ม ผลงาน ได้ ทันที", "The system integration was seamless and delivered immediate productivity gains across departments."),
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-smiling-attractive-female-looking-front_181624-25581.jpg",
              imageAlt: "Closeup shot of female"
            },
            {
              name: t("เดวิด ว.", "David W."),
              role: "CEO",
              quote: t("แนวทาง การรักษา ความปลอดภัย ไซเบอร์ ของ BYITS ช่วยให้ เรา มั่นใจ อย่างมาก", "BYITS's proactive cybersecurity and AI data protection give us full confidence."),
              imageSrc: "https://img.b2bpic.net/free-photo/stylish-mature-male-browsing-tablet_23-2148673426.jpg",
              imageAlt: "Male browsing tablet"
            },
            {
              name: t("ลินดา อาร์.", "Linda R."),
              role: "Head of Marketing",
              quote: t("กระบวนการ AI ช่วย ประหยัด เวลา ให้ ทีมงาน ได้ หลาย ชั่วโมง ทุก สัปดาห์", "AI workflows save our marketing team dozens of hours every single week."),
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-young-business-person-doing-internship_23-2149305364.jpg",
              imageAlt: "Young business person"
            },
            {
              name: t("วิชัย ต.", "Wichai T."),
              role: "Finance Director",
              quote: t("การ สรุป ข้อมูล และ รายงาน ทาง การเงิน ง่ายขึ้น มาก ด้วย โซลูชัน AI", "Financial data analysis and executive reporting became much faster with BYITS AI."),
              imageSrc: "https://img.b2bpic.net/free-photo/busy-open-plan-office_1098-12690.jpg",
              imageAlt: "Busy Open Plan Office"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title={t("ปรึกษาโซลูชัน AI องค์กร", "Consult on Enterprise AI Solutions")}
          submitText={t("ส่งข้อความปรึกษา", "Submit Consultation Request")}
          successText={t("ทีมงาน BYITS จะติดต่อกลับภายใน 24 ชั่วโมง", "Our BYITS team will get back to you within 24 hours.")}
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/business-partners-are-shaking-hands-after-establishing-new-project_482257-98080.jpg",
              imageAlt: "Business partners shaking hands"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/black-manager-assesses-reports-tablet_482257-120298.jpg",
              imageAlt: "Manager assessing reports"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/business-manager-videocall-with-worker-attending-briefing-meeting_482257-126371.jpg",
              imageAlt: "Business manager on videocall"
            }
          ]}
          labels={{
            name: t("ชื่อ-นามสกุล", "Full Name"),
            company: t("บริษัท / องค์กร", "Company / Organization"),
            email: t("อีเมลธุรกิจ", "Business Email"),
            message: t("รายละเอียดโซลูชันที่ต้องการ", "Solution Details & Requirements")
          }}
        />
      </div>
    </>
  );
}
