import styles from "@/styles/page.module.css";
import { BackButton } from "@/components/Buttons/BackButton";
import { SocialButton } from "@/components/Buttons/SocialButton";
import { SubmitButton } from "@/components/Buttons/SubmitButton";

const About = () => {
  return (
    <div className={styles.page_contents}>
      <SocialButton />
      <SubmitButton />
      <BackButton />
    </div>
  );
};
export default About;
