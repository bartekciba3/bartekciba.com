export interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    initials: string;
    role: string;
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial1",
    text: "Working with Bartek completely changed my approach to fitness. His personalized program helped me lose 15kg in 6 months, and for the first time, I've been able to maintain my results. His knowledge and support are invaluable.",
    author: {
      name: "Mark Kelly",
      initials: "MK",
      role: "Fat Loss Client"
    }
  },
  {
    id: "testimonial2",
    text: "As someone who had never stepped foot in a gym before, I was intimidated to start. Bartek made me feel comfortable from day one and built my confidence along with my strength. His patience and expertise are second to none.",
    author: {
      name: "Sarah O'Connor",
      initials: "SO",
      role: "Personal Training Client"
    }
  },
  {
    id: "testimonial3",
    text: "Even though I'm in a different country, Bartek's online coaching has been incredibly effective. The detailed workout videos, nutrition guidance, and constant support have helped me achieve results I never thought possible.",
    author: {
      name: "James Murphy",
      initials: "JM",
      role: "Online Coaching Client"
    }
  }
];
