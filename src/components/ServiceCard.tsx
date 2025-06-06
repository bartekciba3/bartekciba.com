import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { Service } from '../constants/services';

interface ServiceCardProps {
  service: Service;
  variants?: Variants;
}

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  background-color: var(--primary-color);
  color: var(--text-color);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const Description = styled.p`
  margin-bottom: 0;
  color: #666;
  line-height: 1.6;
`;

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variants }) => {
  return (
    <Card variants={variants}>
      <Icon>
        <i className={service.icon}></i>
      </Icon>
      <Content>
        <Title>{service.title}</Title>
        <Description>{service.description}</Description>
      </Content>
    </Card>
  );
};

export default ServiceCard;
