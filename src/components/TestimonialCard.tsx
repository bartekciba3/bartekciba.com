import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Testimonial } from '../constants/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

const Card = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  font-size: 4rem;
  color: var(--text-color);
  opacity: 0.3;
  font-family: Georgia, serif;
  line-height: 1;
`;

const TestimonialText = styled.p`
  margin-bottom: 1.5rem;
  font-style: italic;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--text-color);
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--primary-color);
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.h4`
  margin-bottom: 0.2rem;
`;

const TestimonialRole = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <QuoteIcon>"</QuoteIcon>
      <TestimonialText>{testimonial.text}</TestimonialText>
      <TestimonialAuthor>
        <TestimonialAvatar>{testimonial.author.initials}</TestimonialAvatar>
        <TestimonialInfo>
          <TestimonialName>{testimonial.author.name}</TestimonialName>
          <TestimonialRole>{testimonial.author.role}</TestimonialRole>
        </TestimonialInfo>
      </TestimonialAuthor>
    </Card>
  );
};

export default TestimonialCard;
