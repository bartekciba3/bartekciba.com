import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CONTACT_INFO, SOCIAL_MEDIA, QUICK_LINKS, SERVICES, COMPANY_INFO, COPYRIGHT_INFO } from '../constants/contactInfo';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--text-color);
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--text-color);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--text-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 2rem 2rem 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <img src={COMPANY_INFO.logo.simple} alt={`${COMPANY_INFO.name} Logo`} style={{ height: '40px', width: 'auto', objectFit: 'contain', marginBottom: '1rem', alignSelf: 'flex-start' }} />
          <p>{COMPANY_INFO.tagline}</p>
          <SocialLinks>
            {Object.entries(SOCIAL_MEDIA).map(([key, social]) => (
              <SocialIcon 
                key={key}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label={social.label}
              >
                <i className={social.icon}></i>
              </SocialIcon>
            ))}
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          {QUICK_LINKS.map((link, index) => (
            <FooterLink key={index} to={link.path}>{link.label}</FooterLink>
          ))}
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          {SERVICES.map((service, index) => (
            <FooterLink key={index} to={service.path}>{service.label}</FooterLink>
          ))}
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <p>{CONTACT_INFO.location}</p>
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Phone: {CONTACT_INFO.phone}</p>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} {COPYRIGHT_INFO.holder}. {COPYRIGHT_INFO.text}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
