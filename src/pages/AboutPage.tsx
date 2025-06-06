import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import { ABOUT_CONTENT } from '../constants/aboutContent';

const AboutContainer = styled.div`
  padding-top: 80px;
  overflow: hidden;
`;

const AboutSection = styled.section`
  padding: 5rem 0;
`;

const AboutContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 400px;
    order: -1;
  }
`;

const AboutImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
`;

const AboutText = styled(motion.div)``;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutParagraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #555;
`;

// Stats section removed as requested

const AboutPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { ref: inViewRef, inView: isInView } = useInView({ threshold: 0.3, triggerOnce: true });
  
  // Combine refs
  useEffect(() => {
    if (ref.current && inViewRef) {
      // Use callback ref pattern to set the ref value
      inViewRef(ref.current);
    }
  }, [inViewRef]);
  
  // SEO configuration for the about page
  const seoConfig = {
    title: 'About Bartek Ciba | Professional Personal Trainer',
    description: 'Learn about Bartek Ciba, experienced personal trainer with a passion for helping clients achieve their fitness goals through personalized training programs.',
    keywords: 'about Bartek Ciba, personal trainer background, fitness expertise, training philosophy, London personal trainer',
    image: '/assets/images/bartek_pose_side.webp'
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  return (
    <AboutContainer>
      {/* SEO Configuration */}
      <SEO {...seoConfig} />
      <AboutSection ref={ref}>
        <AboutContent
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <AboutText variants={itemVariants}>
            <AboutTitle 
              variants={itemVariants}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              {ABOUT_CONTENT.title}
            </AboutTitle>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <AboutParagraph 
                key={index}
                variants={itemVariants}
              >
                {paragraph}
              </AboutParagraph>
            ))}
          </AboutText>
          
          <AboutImageContainer
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          >
            <AboutImagePlaceholder>
              Image will be placed here
            </AboutImagePlaceholder>
          </AboutImageContainer>
        </AboutContent>
      </AboutSection>
    </AboutContainer>
  );
};

export default AboutPage;
