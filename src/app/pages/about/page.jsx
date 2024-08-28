import { BackButton } from "@/components/Buttons/BackButton";
import { SocialButton } from "@/components/Buttons/SocialButton";
import { StartButton } from "@/components/Buttons/StartButton";
import { SubmitButton } from "@/components/Buttons/SubmitButton";

const About = () => {
  return (
    <div className={styles.page_contents}>
      <SocialButton />
      <SubmitButton />
      <BackButton />
      <StartButton />
    </div>
  );
};
export default About;
