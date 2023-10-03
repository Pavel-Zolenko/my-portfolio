import { FaEye } from 'react-icons/fa';
import {
  CertContainer,
  IconContainer,
  Img,
  Wrap,
  Link,
} from './Certificates.styled.js';
import certgoit from '../../images/cert/cert-goit.jpg';
export const Certificates = () => {
  return (
    <CertContainer id="certificate">
      <Wrap>
        <IconContainer>
          <Link
            href="https://drive.google.com/file/d/1YBaF_b4eC29H30bojjbmovB-iLsXQL7Q/view?usp=drive_link"
            target="blank"
            aria-label="Fullstack developer certificate"
          >
            <FaEye size="20" />
          </Link>
        </IconContainer>
        <Img src={certgoit} alt="Fullstack developer certificate" width={490} />
      </Wrap>
    </CertContainer>
  );
};
