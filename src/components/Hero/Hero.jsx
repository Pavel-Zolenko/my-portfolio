import {
  HeroSection,
  Name,
  Role,
  BtnLink,
  ContactLink,
  WrapContactLink,
} from './Hero.styled';
import { ParticlesBackground } from 'components/Particles/Particles';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
export const Hero = () => {
  return (
    <HeroSection>
      <ParticlesBackground />
      <Name>Hello, I'm Pavel Zolenko</Name>
      <Role>I'm fullstack developer </Role>

      <BtnLink href="#projects" aria-label="Projects">
        View my projects
      </BtnLink>

      <WrapContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/pavlo-zolenko"
          target="blank"
          aria-label="Linkedin"
        >
          <BsLinkedin size={40} />
        </ContactLink>
        <ContactLink
          href="https://github.com/Pavel-Zolenko"
          target="blank"
          aria-label="Github"
        >
          <BsGithub size={40} />
        </ContactLink>
      </WrapContactLink>
    </HeroSection>
  );
};
