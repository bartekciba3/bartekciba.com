import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { TESTIMONIALS } from '../constants/testimonials';
import { SERVICES } from '../constants/services';

// Modern hero section with dual image showcase
const HeroSectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  color: var(--text-color);
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    flex-direction: column;
    height: auto;
  }
`;

const HeroContentSide = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
  background-color: var(--primary-color);
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 80%;
    background-image: url('/assets/svg/bicep.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    opacity: 0.05;
    z-index: -1;
  }

  @media (max-width: 992px) {
    padding: 7rem 2rem 4rem;
    align-items: center;
    text-align: center;
    height: auto;
    min-height: 60vh;
    
    &::before {
      background-position: center;
      opacity: 0.03;
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }
`;

const HeroImageContainer = styled.div`
  flex: 0.8;
  position: relative;
  background-color: var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
  height: 100vh;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    padding: 1rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
    max-height: 60vh;
    padding: 1rem 1rem 2rem;
  }

  @media (max-width: 768px) {
    max-height: 50vh;
  }
`;

const ImageWrapper = styled.div<{ isFirst?: boolean }>`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  ${props => props.isFirst && `
    transform: translateY(-5%);
    
    @media (max-width: 992px) {
      transform: translateY(0);
      display: none;
    }
  `}
`;

const HeroImage = styled.img<{ isLoaded: boolean }>`
  height: 85%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: scale(${props => props.isLoaded ? 1 : 1.05});
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  
  @media (max-width: 992px) {
    height: auto;
    max-height: 55vh;
    width: 100%;
  }

  @media (max-width: 768px) {
    max-height: 45vh;
  }
`;

// Decorative elements
const HeroAccentLine = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 30%;
  width: 5px;
  height: 100px;
  background: linear-gradient(to bottom, var(--text-color), transparent);
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const HeroContent = styled.div`
    
`;

const HeroTagline = styled(motion.span)`
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #e6e6e6;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 40px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 30px;
    height: 2px;
    background-color: var(--text-color);
    transform: translateY(-50%);
  }
  
  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 1rem;
    
    &:before {
      display: none;
    }
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #e6e6e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 992px) {
    font-size: 3.5rem;
    margin-top: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: #e6e6e6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HeroButton = styled(motion.button)`
  background-color: transparent;
  color: var(--text-color);
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid var(--text-color);
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--text-color);
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: var(--primary-color);
    
    &:before {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #666;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  margin: 0 auto;
  padding: 0 1rem;
`;

// ServiceCard component is now imported from '../components/ServiceCard'

// Service component styling has been moved to the ServiceCard component

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  position: relative;
  background-image: url('/assets/images/bartek-bg.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

// TestimonialCard component is now imported from '../components/TestimonialCard'

const HomePage = () => {
  // SEO configuration for the home page with targeted keywords for Ballinasloe and Galway
  const seoConfig = {
    title: 'Bartek Ciba | Personal Trainer in Ballinasloe, Galway',
    description: 'Professional personal trainer in Ballinasloe, Galway offering personalized fitness coaching, diet planning, and online training programs for effective fat loss and muscle gain.',
    keywords: 'Personal Trainer Ballinasloe, Personal Trainer Galway, Bartek Ciba, Gym Coach, Online Coaching, Diet Planning, Fat Loss, Fitness Trainer Ballinasloe',
    image: '/assets/images/bartek_pose_front.webp',
    type: 'website'
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Handle multiple image loading
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = 2;
    
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImageLoaded(true);
      }
    };
    
    const frontImg = new Image();
    frontImg.src = '/assets/images/bartek_pose_front.webp';
    frontImg.onload = checkAllLoaded;
    
    const sideImg = new Image();
    sideImg.src = '/assets/images/bartek_pose_side.webp';
    sideImg.onload = checkAllLoaded;
  }, []);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      {/* SEO Configuration */}
      <SEO {...seoConfig} />
      
      <HeroSectionWrapper>
        <HeroContentSide>
          <HeroContent>
            <HeroAccentLine
              initial={{ height: 0 }}
              animate={{ height: 100 }}
              transition={{ duration: 0.8 }}
            />
            <HeroTagline
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Personal Trainer in Ballinasloe, Galway
            </HeroTagline>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform Your Body.<br />Elevate Your Life.
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              As a certified personal trainer based in Ballinasloe, Galway, I help clients achieve their fitness goals through personalized training programs, online coaching, and diet planning. After winning 1st place in the Natural Junior category at the Muscle Contest in Dublin, I've dedicated my career to effective fat loss and muscle gain strategies.
            </HeroSubtitle>
            <HeroButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              Discover My Services
            </HeroButton>
          </HeroContent>
        </HeroContentSide>
        
        <HeroImageContainer>
          <ImageWrapper isFirst>
            <HeroImage 
              src="/assets/images/bartek_pose_side.webp" 
              alt="Bartek Ciba striking a side bodybuilding pose" 
              isLoaded={imageLoaded} 
            />
          </ImageWrapper>
          <ImageWrapper>
            <HeroImage 
              src="/assets/images/bartek_pose_front.webp" 
              alt="Bartek Ciba striking a front bodybuilding pose" 
              isLoaded={imageLoaded} 
            />
          </ImageWrapper>
        </HeroImageContainer>
      </HeroSectionWrapper>
      
      <ServicesSection id="services" ref={ref}>
        <SectionTitle>What I Offer</SectionTitle>
        <SectionSubtitle>Comprehensive fitness solutions tailored to your unique goals and needs</SectionSubtitle>
        
        <ServicesGrid as={motion.div} 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {SERVICES.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              variants={itemVariants}
            />
          ))}
        </ServicesGrid>
      </ServicesSection>
      
      <TestimonialsSection>
        <TestimonialsContainer>
          <SectionTitle style={{ color: 'white', position: 'relative', zIndex: 2 }}>Client Testimonials</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.7)', position: 'relative', zIndex: 2 }}>What my clients say about their transformation journeys</SectionSubtitle>
          <TestimonialsGrid>
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={index * 0.2}
              />
            ))}
          </TestimonialsGrid>
        </TestimonialsContainer>
      </TestimonialsSection>
    </>
  );
};

export default HomePage;
