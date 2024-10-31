import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection></HeroSection>
    </div>
  );
}
