import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import SEO from '../components/SEO';

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
  align-items: center;
  
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
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
              My Story
            </AboutTitle>
            <AboutParagraph 
              variants={itemVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </AboutParagraph>
            <AboutParagraph 
              variants={itemVariants}
            >
              Suspendisse in orci enim. Donec suscipit ante in hendrerit posuere. Mauris eleifend fringilla nullam aenean mi ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur suscipit egestas imperdiet. Proin ipsum purus, eleifend vel tincidunt in, dictum vel diam.
            </AboutParagraph>
            <AboutParagraph 
              variants={itemVariants}
            >
              Nam blandit quam ut lacus. Quisque ornare risus quis ligula. Phasellus tristique purus a augue condimentum adipiscing. Aenean sagittis. Etiam leo pede, rhoncus venenatis, tristique in, vulputate at, odio. Donec et ipsum et sapien vehicula nonummy.
            </AboutParagraph>
          </AboutText>
          
          <AboutImageContainer
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
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
