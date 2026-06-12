import { useRef } from "react";

import PageMeta from "../components/shared/PageMeta";
import useRevealAnimations from "../hooks/useRevealAnimations";
import HomeCta from "../sections/home/HomeCta";
import HomeHero from "../sections/home/HomeHero";
import HomeManifesto from "../sections/home/HomeManifesto";
import HomeProcess from "../sections/home/HomeProcess";
import HomeServices from "../sections/home/HomeServices";
import HomeWork from "../sections/home/HomeWork";

const HomePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useRevealAnimations(pageRef);

  return (
    <>
      <PageMeta
        title="BeeCreative — Студио за уеб разработка"
        description="BeeCreative е студио за уеб разработка, което създава бързи, прецизни и безкомпромисно изпипани уебсайтове."
      />

      <div ref={pageRef}>
        <HomeHero />
        <HomeServices />
        <HomeProcess />
        <HomeWork />
        <HomeManifesto />
        <HomeCta />
      </div>
    </>
  );
};

export default HomePage;