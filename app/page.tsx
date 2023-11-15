import BannerSection from "@/components/bannerSection";
import ContactSection from "@/components/contactSection";
import FooterSection from "@/components/footerSection";
import NewsSections from "@/components/newsSections";

export default function Home() {
  return (
    <>
      <BannerSection />
      <NewsSections />
      <ContactSection />
      <FooterSection />
    </>
  );
}
