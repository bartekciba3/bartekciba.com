import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFoundContainer = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--background-color);
`;

const NotFoundContent = styled(motion.div)`
  max-width: 600px;
  padding: 2rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: var(--primary-color);
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 2rem;
  color: var(--primary-color-accent);
`;

const NotFoundText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--text-secondary-color);
`;

const NotFoundButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
  
  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const NotFoundLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const NotFoundPage = () => {
  // SEO configuration for the 404 page
  const seoConfig = {
    title: 'Page Not Found | Bartek Ciba Personal Trainer',
    description: 'The page you are looking for does not exist. Explore our personal training services, fitness programs, and nutrition advice.',
    keywords: 'page not found, 404, personal trainer, fitness services, Bartek Ciba',
    noindex: true
  };

  return (
    <>
      {/* SEO Configuration */}
      <SEO {...seoConfig} />
      
      <NotFoundContainer>
        <NotFoundContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
          <NotFoundText>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </NotFoundText>
          <NotFoundButton to="/">
            Back to Home
          </NotFoundButton>
          
          <NotFoundLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </NotFoundLinks>
        </NotFoundContent>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
