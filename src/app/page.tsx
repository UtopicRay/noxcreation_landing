import SecondSection from "@/components/SecondSection/SecondSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuestionSection from "@/components/QuestionSection/QuestionSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection></HeroSection>
      <SecondSection/>
      <QuestionSection/>
    </div>
  );
}
