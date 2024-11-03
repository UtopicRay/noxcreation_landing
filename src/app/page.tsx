import SecondSection from "@/components/SecondSection/SecondSection";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuestionSection from "@/components/QuestionSection/QuestionSection";
import FavoriteSection from "@/components/FavoriteSection/FavoriteSection";
import UserSection from "@/components/UserSection/UserSection";
import StorySection from "@/components/StorySection/StorySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection/>
      <SecondSection/>
      <StorySection/>
      <UserSection/>
      <FavoriteSection/>
      <QuestionSection/>
    </div>
  );
}
