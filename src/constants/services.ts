export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one training sessions designed specifically for your body type, fitness level, and goals. I\'ll guide you through proper form, technique, and progressive overload to ensure maximum results with minimum risk of injury.',
    icon: 'fas fa-dumbbell'
  },
  {
    id: 'diet-training',
    title: 'Diet / Training Plans',
    description: 'Customized nutrition plans that complement your training regimen. Learn how to fuel your body properly for your specific goals, whether it\'s building muscle, losing fat, or improving athletic performance.',
    icon: 'fas fa-apple-alt'
  },
  {
    id: 'fat-loss',
    title: 'Fat Loss',
    description: 'Specialized programs focused on sustainable fat loss through a combination of strategic training and nutrition. No quick fixes or fad diets—just science-backed methods that deliver long-term results.',
    icon: 'fas fa-fire'
  },
  {
    id: 'online-coaching',
    title: 'Online Coaching',
    description: 'Remote coaching for clients worldwide. Get personalized workout programs, nutrition guidance, and regular check-ins to keep you accountable and progressing, no matter where you are.',
    icon: 'fas fa-laptop'
  }
];
