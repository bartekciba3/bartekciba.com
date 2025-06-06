import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CONTACT_INFO, SOCIAL_MEDIA } from '../constants/contactInfo';
import SEO from '../components/SEO';

const ContactContainer = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
`;

const ContactSection = styled.section`
  width: 100%;
`;

const ContactContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ContactCard = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 3rem;
`;

const ContactTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const ContactMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  background-color: var(--primary-color);
  color: var(--text-color);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--primary-color);
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  background-color: var(--primary-color);
  color: var(--text-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ContactPage = () => {
  // SEO configuration for the contact page
  const seoConfig = {
    title: 'Contact Bartek Ciba | Personal Trainer in Galway',
    description: 'Get in touch with Bartek Ciba for personal training services in Galway. Available for consultations, training sessions, and fitness program inquiries.',
    keywords: 'contact Bartek Ciba, personal trainer contact, fitness consultation, Galway personal trainer contact, training inquiry',
    image: '/assets/images/bartek_pose_side.webp'
  };

  return (
    <>
      {/* SEO Configuration */}
      <SEO {...seoConfig} />
      
      <ContactContainer>
      <ContactSection>
        <ContactContent>
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactTitle>Get in Touch</ContactTitle>
            <ContactMessage>
              For the fastest response, reach me through WhatsApp. For business inquiries and collaboration opportunities, please send an email and I'll get back to you within 24 hours.
            </ContactMessage>
            
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <i className="fab fa-whatsapp"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>WhatsApp</ContactLabel>
                  <ContactValue>{CONTACT_INFO.phone}</ContactValue>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <i className="fas fa-envelope"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>{CONTACT_INFO.email}</ContactValue>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <i className="fas fa-map-marker-alt"></i>
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>{CONTACT_INFO.location}</ContactValue>
                </ContactDetails>
              </ContactItem>
            </ContactInfo>
            
            <SocialLinks>
              {Object.entries(SOCIAL_MEDIA).map(([key, social]) => (
                <SocialIcon 
                  key={key}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </SocialIcon>
              ))}
            </SocialLinks>
          </ContactCard>
        </ContactContent>
      </ContactSection>
    </ContactContainer>
    </>
  );
};

export default ContactPage;
