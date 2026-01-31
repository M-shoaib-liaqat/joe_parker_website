
import React from 'react';
import { Shield, Zap, Home, Building2, BatteryCharging, FileCheck, Search, Lightbulb } from 'lucide-react';
import { Service, Review } from './types';

export const BUSINESS_INFO = {
  name: 'Parker Electrical Solutions',
  phone: '07737447302',
  email: 'info@parkerelectricalsolutions.uk',
  areas: ['Brentwood', 'Harlow', 'Chelmsford', 'Basildon', 'Southend', 'Romford', 'Ilford'],
  established: 2014,
  niceic: true
};

export interface GalleryImage {
  url: string;
  title: string;
  category: 'Domestic' | 'Commercial' | 'Lighting';
  description?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { 
    url: 'https://plus.unsplash.com/premium_photo-1729604037995-91aff3add249?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'High-End Kitchen LED Install', 
    category: 'Lighting',
    description: 'Precision under-cabinet LED strip lighting for a modern residential kitchen.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200', 
    title: 'Industrial Fuse Board Upgrade', 
    category: 'Commercial',
    description: 'Full distribution board replacement and labeling for a commercial unit.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', 
    title: 'Smart Home Lighting Controls', 
    category: 'Domestic',
    description: 'Installation of Lutron lighting systems for customized home scenes.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1200', 
    title: 'Accent Brick Wall Lighting', 
    category: 'Lighting',
    description: 'Warm upward lighting highlights original brickwork in a period property.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1600490819734-6311c5c6f517?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    title: 'Rapid EV Charging Point', 
    category: 'Domestic',
    description: 'Certified Easee One home charger installation.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200', 
    title: 'Pendant & Mood Lighting', 
    category: 'Lighting',
    description: 'Architectural pendant install over a central dining island.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200', 
    title: 'Commercial Restaurant Lighting', 
    category: 'Commercial',
    description: 'Full electrical fit-out for a new hospitality venue.'
  },
  { 
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200', 
    title: 'Office LED Panel Refit', 
    category: 'Commercial',
    description: 'Energy-efficient workspace lighting upgrade.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'eicr',
    title: 'EICR Certificates & Testing',
    slug: 'eicr-certificates',
    icon: 'FileCheck',
    description: 'NICEIC approved landlord safety testing and reports.',
    longDescription: 'Ensuring your property meets current safety regulations with thorough EICR inspections. Ideal for landlords and homeowners alike.',
    seoTitle: 'EICR Certificates Essex | Landlord Electrical Safety Testing',
    metaDescription: 'NICEIC approved EICR certificates in Essex. Fast, thorough electrical testing for landlords. Same-day reports.',
    features: ['Fast Turnaround', 'Detailed Reports', 'Remedial Estimates', 'NICEIC Certified']
  },
  {
    id: 'emergency',
    title: 'Emergency Electrician 24/7',
    slug: 'emergency-electrician',
    icon: 'Zap',
    description: 'Fast response electrical repairs when you need them most.',
    longDescription: 'Available 24/7 for all electrical emergencies in Essex and London. We aim to be with you in under 60 minutes.',
    seoTitle: 'Emergency Electrician Essex | 24/7 Call Out Service',
    metaDescription: 'Trusted emergency electrician serving Essex and London. 24/7 rapid response for all power faults and repairs.',
    features: ['24/7 Availability', 'Under 60min Response', 'Fault Finding', 'Safe & Secure Repairs']
  },
  {
    id: 'domestic',
    title: 'Domestic Electrical Work',
    slug: 'domestic-electrician',
    icon: 'Home',
    description: 'From extra sockets to full home automation and lighting.',
    longDescription: 'Quality workmanship for every aspect of your home\'s electrical systems.',
    seoTitle: 'Domestic Electrician Essex | Residential Electrical Services',
    metaDescription: 'Professional home electrician for all residential projects in Essex. Lighting, sockets, and smart home setup.',
    features: ['House Wiring', 'Lighting Design', 'Socket Upgrades', 'Fuse Board Changes']
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    slug: 'commercial-electrician',
    icon: 'Building2',
    description: 'Maintenance and installations for offices, shops, and units.',
    longDescription: 'Bespoke electrical solutions designed to keep your business running safely and efficiently.',
    seoTitle: 'Commercial Electrician Essex | Business Electrical Contractors',
    metaDescription: 'Expert commercial electrical contractors for offices and businesses in Essex. Maintenance, testing, and installs.',
    features: ['Office Fit-outs', 'Maintenance Contracts', 'Emergency Lighting', 'PAT Testing']
  },
  {
    id: 'ev',
    title: 'EV Charger Installation',
    slug: 'ev-charger-installation',
    icon: 'BatteryCharging',
    description: 'Expert installation of home and commercial EV charging points.',
    longDescription: 'Upgrade your home with a fast, safe EV charging point installed by certified professionals.',
    seoTitle: 'EV Charger Installation Essex | Home Electric Car Charging',
    metaDescription: 'OZEV certified EV charger installers in Essex. Home and commercial charging solutions.',
    features: ['Smart Chargers', 'Tethered & Socketed', 'Load Management', 'Grant Support']
  },
  {
    id: 'rewiring',
    title: 'House Rewiring',
    slug: 'house-rewiring',
    icon: 'Shield',
    description: 'Full or partial house rewires with minimal disruption.',
    longDescription: 'Future-proof your home and ensure safety with a professional full or partial rewire.',
    seoTitle: 'House Rewiring Essex | Full & Partial Rewiring Services',
    metaDescription: 'Expert house rewiring services in Essex. Safe, efficient, and compliant with all regulations.',
    features: ['Minimal Disruption', 'Safety Certified', 'Modern Solutions', '10-Year Guarantee']
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'David Pike',
    location: 'Brentwood',
    service: 'Kitchen Rewiring',
    text: 'Joe has now helped me out a few times with a range of jobs. Reliable and high quality work.',
    stars: 5
  },
  {
    id: '2',
    name: 'Matt Gates',
    location: 'Chelmsford',
    service: 'Emergency Repair',
    text: 'Sorted out my power cut in under an hour. Absolute life saver on a Sunday evening.',
    stars: 5
  },
  {
    id: '3',
    name: 'Jess Lees',
    location: 'Basildon',
    service: 'EV Charger Install',
    text: 'Very professional install of my Myenergi Zappi. Clean, tidy and explained everything.',
    stars: 5
  }
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return <Shield className="w-8 h-8" />;
    case 'Zap': return <Zap className="w-8 h-8" />;
    case 'Home': return <Home className="w-8 h-8" />;
    case 'Building2': return <Building2 className="w-8 h-8" />;
    case 'BatteryCharging': return <BatteryCharging className="w-8 h-8" />;
    case 'FileCheck': return <FileCheck className="w-8 h-8" />;
    case 'Search': return <Search className="w-8 h-8" />;
    case 'Lightbulb': return <Lightbulb className="w-8 h-8" />;
    default: return <Zap className="w-8 h-8" />;
  }
};
