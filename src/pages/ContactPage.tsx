import { useRef } from "react";

import PageHero from "../components/shared/PageHero";
import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import ContactFaq from "../sections/contact/ContactFaq";
import ContactSection from "../sections/contact/ContactSection";

const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title="Контакти — BeeCreative"
        description="Свържете се с BeeCreative — разкажете ни за проекта си и ще отговорим до един работен ден."
      />

      <div ref={pageRef}>
        <PageHero
          eyebrow="Контакти"
          firstLine="Кошерът е"
          secondLine={<em>отворен.</em>}
          description="Разкажете ни за проекта си — отговаряме до един работен ден. Без формуляри в десет стъпки, без търговски натиск."
          currentPage="Контакти"
        />

        <ContactSection />
        <ContactFaq />
      </div>
    </>
  );
};

export default ContactPage;