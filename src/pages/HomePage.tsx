import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import ServicesIndustryTiles from "@/components/sections/features/ServicesIndustryTiles";
import CtaPlusBand from "@/components/sections/statement/CtaPlusBand";
import TeamLeadersBand from "@/components/sections/team/TeamLeadersBand";
import FaqGlyphRows from "@/components/sections/faq/FaqGlyphRows";
import TestimonialDeepCoverflow from "@/components/sections/testimonial/TestimonialDeepCoverflow";
import ContactColumnWindow from "@/components/sections/contact/ContactColumnWindow";
import LoaderHairlineColumns from "@/components/loaders/LoaderHairlineColumns";

export default function HomePage() {
  return (
    <>
      <LoaderHairlineColumns
        brand="BYITS"
        logoSrc="https://storage.googleapis.com/webild/users/user_3MVXxuJnaQd6WXXoRiQdmiVZRX7/uploaded-1795438520588-g0x1llz0.png"
      />

      <div id="hero" data-webild-section="HeroColumnGrid" data-webild-section-id="HeroColumnGrid-1" data-section="hero" data-scene>
        <HeroColumnGrid
          title="AI Solutions Built for Real Business Workflows"
          description="เชื่อม AI เข้ากับ ข้อมูล ระบบ และ งานองค์กร ให้ ทีม ทำงาน เร็วขึ้น นำไปใช้ ได้จริง Better, faster, cheaper."
          primaryButton={{
            text: "ปรึกษาโซลูชัน",
            href: "#contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/3d-modern-background-with-rainbow-coloured-flowing-particles-design_1048-20453.jpg"
          imageAlt="abstract data visualization technology background"
          introDelay={1.7}
        />
      </div>

      <div id="services" data-webild-section="ServicesIndustryTiles" data-webild-section-id="ServicesIndustryTiles-1" data-section="services">
        <ServicesIndustryTiles
          title="ระบบ AI ปรับ กระบวนการ ทำงาน อัตโนมัติ"
          linkText="ปรึกษาโซลูชัน"
          items={[
            {
              title: "Customer Service",
              description: "ระบบ ตอบ ลูกค้า อัตโนมัติ บน LINE และ เว็บไซต์",
              facts: [
                "Input: คำถาม ลูกค้า บน LINE",
                "AI: ค้นหา ข้อมูล และ ร่าง คำตอบ",
                "Action: ทีมงาน ตรวจสอบ เคส"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/smartphone-child-hands-with-incoming-mommy-call-screen_169016-43115.jpg",
              href: "#contact"
            },
            {
              title: "Marketing Content",
              description: "สร้างสรรค์ คอนเทนต์ แคมเปญ การตลาด ได้ รวดเร็ว",
              facts: [
                "Input: บรีฟ แคมเปญ การตลาด",
                "AI: ร่าง โพสต์ และ อีเมล",
                "Action: ทีมงาน คัดเลือก อนุมัติ"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/laptop-with-copy-space-display-empty-desk-performance-metrics_482257-126532.jpg",
              href: "#contact"
            },
            {
              title: "Finance & Data",
              description: "สรุป แนวโน้ม รายงาน การเงิน อัตโนมัติ",
              facts: [
                "Input: ข้อมูล ยอดขาย ค่าใช้จ่าย",
                "AI: สรุป แนวโน้ม และ ร่าง รายงาน",
                "Action: ผู้จัดการ ตรวจสอบ"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/modern-monitor-elegant-table_23-2150706439.jpg",
              href: "#contact"
            },
            {
              title: "IT Operations",
              description: "แจ้งเตือน และ วิเคราะห์ ปัญหา ระบบ คลาวด์",
              facts: [
                "Input: บันทึก แจ้งเตือน คลาวด์",
                "AI: จัดกลุ่ม ปัญหา แนะนำ วิธี",
                "Action: ทีม IT แก้ไข เหตุการณ์"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/data-facility-storing-massive-datasets-used-ai-simulations_482257-124431.jpg",
              href: "#contact"
            },
            {
              title: "Design Concept",
              description: "วาง คอนเซปต์ ผัง อาคาร และ พื้นที่",
              facts: [
                "Input: โจทย์ โครงการ และ พื้นที่",
                "AI: เสนอ ผัง อาคาร หลาย แบบ",
                "Action: สถาปนิก นำไป พัฒนา"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/focused-business-partners-looking-laptop-office_74855-4210.jpg",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="cta" data-webild-section="CtaPlusBand" data-webild-section-id="CtaPlusBand-1" data-section="cta">
        <CtaPlusBand
          label="ติดต่อเรา"
          title="พร้อม ยกระดับ องค์กร ด้วย AI หรือยัง"
          primaryButton={{
            text: "ปรึกษาโซลูชัน",
            href: "#contact"
          }}
          secondaryButton={{
            text: "ดูโซลูชันทั้งหมด",
            href: "#services"
          }}
        />
      </div>

      <div id="team" data-webild-section="TeamLeadersBand" data-webild-section-id="TeamLeadersBand-1" data-section="team" data-scene>
        <TeamLeadersBand
          title="ทีมผู้บริหารและผู้เชี่ยวชาญ BYITS"
          button={{
            text: "ปรึกษาทีมงาน",
            href: "#contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/people-sitting-desk-working-laptop_23-2147650862.jpg"
          imageAlt="People sitting at desk working on laptop"
          items={[
            {
              title: "ธนกฤต วรโชติ",
              description: "ประธานเจ้าหน้าที่บริหาร",
              imageSrc: "https://img.b2bpic.net/free-photo/asian-developer-standing-near-flipchart-looking-blonde-woman-glasses-indoor-portrait-brunette-businessman-writing-graph-white-board-listening-colleagues_197531-3768.jpg",
              imageAlt: "Asian developer standing near flipchart and looking at blonde woman in glasses. Indoor portrait of brunette businessman writing graph at white board and listening colleagues."
            },
            {
              title: "ณิชารีย์ สุวรรณ",
              description: "ประธานฝ่ายเทคโนโลยี",
              imageSrc: "https://img.b2bpic.net/free-photo/tired-asian-young-businesswoman-sleeping-table_1262-2336.jpg",
              imageAlt: "Tired Asian young businesswoman sleeping at table"
            },
            {
              title: "กิตติพงษ์ วิเศษ",
              description: "ผู้อำนวยการฝ่ายโซลูชัน AI",
              imageSrc: "https://img.b2bpic.net/free-photo/annoyed-shocked-businessman-eyeglasses-using-tablet_1262-16870.jpg",
              imageAlt: "Annoyed shocked businessman in eyeglasses using tablet"
            },
            {
              title: "ปรียาพร สายชล",
              description: "ผู้อำนวยการฝ่ายไซเบอร์",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-person-working-while-standing_23-2148961755.jpg",
              imageAlt: "Portrait of person working while standing"
            },
            {
              title: "ศุภโชค ชัยชนะ",
              description: "ผู้อำนวยการฝ่ายระบบคลาวด์",
              imageSrc: "https://img.b2bpic.net/free-photo/cybersecurity-expert-monitoring-network-server-room_23-2152029083.jpg",
              imageAlt: "Cybersecurity expert monitoring network in server room"
            },
            {
              title: "มนัสวี รัตนกุล",
              description: "ผู้อำนวยการฝ่ายปฏิบัติการ",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-business-woman-corporate-office-sitting-desk_482257-8055.jpg",
              imageAlt: "Portrait of business woman in corporate office sitting at desk"
            },
            {
              title: "ชินวัตร เมธา",
              description: "หัวหน้าทีม AI Solutions",
              imageSrc: "https://img.b2bpic.net/free-photo/young-man-wearing-white-clothes-using-tablet_23-2148910216.jpg",
              imageAlt: "Young man wearing white clothes using tablet"
            },
            {
              title: "พิมลพรรณ วงศ์สวัสดิ์",
              description: "หัวหน้าฝ่ายดูแลลูกค้าองค์กร",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-goodlooking-young-blond-woman-wireless-headphones-listens-podcast-favourite_1258-253473.jpg",
              imageAlt: "Portrait of goodlooking young blond woman in wireless headphones listens to podcast or favourite"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlyphRows" data-webild-section-id="FaqGlyphRows-1" data-section="faq">
        <FaqGlyphRows
          label="คำถาม พบบ่อย"
          title="คำถาม เกี่ยวกับ โซลูชัน AI ของ BYITS"
          description="คำตอบ ชัดเจน เรื่อง การ นำ ระบบ AI และ คลาวด์ มา ปรับใช้ ใน องค์กร"
          button={{
            text: "ปรึกษา ทีมงาน",
            href: "#contact"
          }}
          items={[
            {
              title: "การ นำ AI มา ใช้ ใน องค์กร ใช้ เวลา เท่าใด",
              description: "โดยทั่วไป การ ติดตั้ง โซลูชัน AI สำหรับ กระบวนการ ทำงาน ใช้ เวลา ประมาณ 2 ถึง 8 สัปดาห์ ขึ้นอยู่กับ ขนาด และ ความซับซ้อน ของ ข้อมูล องค์กร"
            },
            {
              title: "ข้อมูล ของ องค์กร จะ ปลอดภัย หรือไม่",
              description: "BYITS ให้ ความสำคัญ กับ Cybersecurity และ การ ปกป้อง ข้อมูล สูงสุด ด้วย ระบบ รักษา ความปลอดภัย ตาม มาตรฐาน สากล และ การ เข้ารหัส ข้อมูล ทุก ขั้นตอน"
            },
            {
              title: "บริการ AI Token Services ช่วย คุม ค่าใช้จ่าย อย่างไร",
              description: "เรา มี ระบบ บริหาร จัดการ การ ใช้งาน AI API และ Token ที่ ช่วย ให้ องค์กร มองเห็น วงเงิน และ วางแผน ค่าใช้จ่าย ได้ ตามจริง โดย ไม่ มี ค่าใช้จ่าย แอบแฝง"
            },
            {
              title: "ระบบ เดิม ของ องค์กร สามารถ เชื่อมต่อ AI ได้ หรือไม่",
              description: "ทีมงาน ของ เรา มี ความเชี่ยวชาญ ด้าน System Integration ในการ เชื่อมต่อ AI เข้ากับ ระบบ ERP CRM หรือ แพลตฟอร์ม เดิม ที่ องค์กร ใช้งาน อยู่ ได้ อย่าง ไร้รอยต่อ"
            },
            {
              title: "มี บริการ ดูแล หลัง การ ติดตั้ง อย่างไร",
              description: "เรา มี ทีม Managed IT และ Cybersecurity คอย มอนิเตอร์ ระบบ เสถียรภาพ 99.9% พร้อม ให้ คำปรึกษา และ ดูแล การ ใช้งาน อย่าง ต่อเนื่อง"
            },
            {
              title: "ขั้นตอน การ เริ่มต้น ปรึกษา โซลูชัน ทำ อย่างไร",
              description: "ท่าน สามารถ ติดต่อ ทีมงาน เพื่อ นัดหมาย พูดคุย ประเมิน ความต้องการ และ ออกแบบ โซลูชัน ที่ เหมาะสม กับ ธุรกิจ ของ ท่าน ได้ โดย ไม่มี ค่าใช้จ่าย ใน ขั้น แรก"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialDeepCoverflow" data-webild-section-id="TestimonialDeepCoverflow-1" data-section="testimonial">
        <TestimonialDeepCoverflow
          title="ความประทับใจ จาก ผู้บริหาร องค์กร"
          description="ได้รับ ความไว้วางใจ จาก ผู้นำ องค์กร ยุคใหม่"
          items={[
            {
              name: "สมศักดิ์ ก.",
              role: "CTO",
              quote: "BYITS ช่วย ปฏิวัติ การทำงาน เอกสาร ของเรา ด้วย ระบบ AI ที่มี ประสิทธิภาพ",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-indigenous-businessman_23-2151201366.jpg",
              imageAlt: "Portrait of indigenous businessman"
            },
            {
              name: "พิมพ์ ส.",
              role: "COO",
              quote: "การ เชื่อมต่อ ระบบ เป็นไป อย่าง ราบรื่น ช่วย เพิ่ม ผลงาน ได้ ทันที",
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-smiling-attractive-female-looking-front_181624-25581.jpg",
              imageAlt: "Closeup shot of a smiling attractive female looking at front"
            },
            {
              name: "เดวิด ว.",
              role: "CEO",
              quote: "แนวทาง การรักษา ความปลอดภัย ไซเบอร์ ของ BYITS ช่วยให้ เรา มั่นใจ อย่างมาก",
              imageSrc: "https://img.b2bpic.net/free-photo/stylish-mature-male-browsing-tablet_23-2148673426.jpg",
              imageAlt: "Stylish mature male browsing tablet"
            },
            {
              name: "ลินดา อาร์.",
              role: "Head of Marketing",
              quote: "กระบวนการ AI ช่วย ประหยัด เวลา ให้ ทีมงาน ได้ หลาย ชั่วโมง ทุก สัปดาห์",
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-young-business-person-doing-internship_23-2149305364.jpg",
              imageAlt: "Close up on young business person doing internship"
            },
            {
              name: "วิชัย ต.",
              role: "Finance Director",
              quote: "การ สรุป ข้อมูล และ รายงาน ทาง การเงิน ง่ายขึ้น มาก ด้วย โซลูชัน AI",
              imageSrc: "https://img.b2bpic.net/free-photo/busy-open-plan-office_1098-12690.jpg",
              imageAlt: "Busy Open Plan Office"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title="ปรึกษาโซลูชัน AI องค์กร"
          submitText="ส่งข้อความปรึกษา"
          successText="ทีมงาน BYITS จะติดต่อกลับภายใน 24 ชั่วโมง"
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/business-partners-are-shaking-hands-after-establishing-new-project_482257-98080.jpg",
              imageAlt: "Business partners are shaking hands after establishing a new project"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/black-manager-assesses-reports-tablet_482257-120298.jpg",
              imageAlt: "Black manager assesses reports on tablet"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/business-manager-videocall-with-worker-attending-briefing-meeting_482257-126371.jpg",
              imageAlt: "Business manager on videocall with worker attending briefing meeting"
            }
          ]}
          labels={{
            name: "ชื่อ-นามสกุล",
            company: "บริษัท / องค์กร",
            email: "อีเมลธุรกิจ",
            message: "รายละเอียดโซลูชันที่ต้องการ"
          }}
        />
      </div>
    </>
  );
}
