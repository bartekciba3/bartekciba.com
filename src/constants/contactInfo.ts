/**
 * Contact Information Constants
 * 
 * This file contains all contact information, social media links, and other
 * related constants used throughout the website. Update this file to change
 * information across the entire site.
 */

// Personal Contact Information
export const CONTACT_INFO = {
  name: "Bartek Ciba",
  email: "contact@bartekciba.com",
  phone: "+353 89 227 56 05",
  location: "Galway, Ireland",
  profession: "Personal Trainer"
};

// Social Media Links
export const SOCIAL_MEDIA = {
  instagram: {
    url: "https://instagram.com/bartekciba_fitness",
    label: "Instagram",
    icon: "fab fa-instagram"
  },
  facebook: {
    url: "https://facebook.com/bartekciba",
    label: "Facebook",
    icon: "fab fa-facebook-f"
  },
  twitter: {
    url: "https://twitter.com/bartekciba",
    label: "Twitter",
    icon: "fab fa-twitter"
  }
};

// Quick Links for Navigation
export const QUICK_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/contact", label: "Contact" }
];

// Services Offered
export const SERVICES = [
  { path: "/#services", label: "Personal Training" },
  { path: "/#services", label: "Diet Plans" },
  { path: "/#services", label: "Fat Loss" },
  { path: "/#services", label: "Online Coaching" }
];

// Company Information
export const COMPANY_INFO = {
  name: "Bartek Ciba Personal Training",
  foundedYear: 2020,
  logo: {
    main: "/assets/images/logo.png",
    simple: "/assets/images/logo-simple-white.png"
  },
  tagline: "Professional personal training tailored to your goals. Let's transform your fitness journey together."
};

// Copyright Information
export const COPYRIGHT_INFO = {
  text: "All rights reserved.",
  holder: "Bartek Ciba"
};
