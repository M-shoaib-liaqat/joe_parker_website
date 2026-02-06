
import React from 'react';
import { Shield, Zap, Home, Building2, BatteryCharging, FileCheck, Search, Lightbulb } from 'lucide-react';
import { Service, Review } from './types';

export const BUSINESS_INFO = {
  name: 'Parker Electrical Solutions',
  phone: '+447737447302',
  email: 'pesolutionsltd@hotmail.com',
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
  // DOMESTIC INSTALLATIONS
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (20).jpeg', 
    title: 'Professional Domestic Electrical Installation', 
    category: 'Domestic',
    description: 'Professional domestic electrical installation with attention to detail.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (21).jpeg', 
    title: 'Quality Residential Electrical Work', 
    category: 'Domestic',
    description: 'Quality residential electrical work completed to standard.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (22).jpeg', 
    title: 'Expert Home Electrical Solutions', 
    category: 'Domestic',
    description: 'Expert electrical solutions for your home.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (26).jpeg', 
    title: 'Professional Home Electrical Work', 
    category: 'Domestic',
    description: 'Professional domestic electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (29).jpeg', 
    title: 'Quality Home Electrical Installation', 
    category: 'Domestic',
    description: 'Quality home electrical installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (32).jpeg', 
    title: 'Reliable Residential Electrical Services', 
    category: 'Domestic',
    description: 'Reliable residential electrical services.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.01.33 PM (8).jpeg', 
    title: 'Expert Home Electrical Services', 
    category: 'Domestic',
    description: 'Expert home electrical solutions.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.04.18 PM (1).jpeg', 
    title: 'Professional Residential Electrical Work', 
    category: 'Domestic',
    description: 'Professional residential electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.04.18 PM (2).jpeg', 
    title: 'Quality Domestic Electrical Installation', 
    category: 'Domestic',
    description: 'Quality domestic electrical installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-01 at 2.04.18 PM (4).jpeg', 
    title: 'Professional Home Electrical Services', 
    category: 'Domestic',
    description: 'Professional home electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.24 AM (7).jpeg', 
    title: 'Expert Residential Electrical Services', 
    category: 'Domestic',
    description: 'Expert residential electrical services.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.24 AM (8).jpeg', 
    title: 'Quality Home Electrical Work', 
    category: 'Domestic',
    description: 'Quality home electrical installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.24 AM (9).jpeg', 
    title: 'Professional Domestic Electrical Work', 
    category: 'Domestic',
    description: 'Professional domestic electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.25 AM (12).jpeg', 
    title: 'Reliable Residential Electrical Installing', 
    category: 'Domestic',
    description: 'Reliable residential electrical services.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.26 AM (5).jpeg', 
    title: 'Expert Home Electrical Installation', 
    category: 'Domestic',
    description: 'Expert home electrical solutions.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.26 AM (8).jpeg', 
    title: 'Quality Domestic Electrical Work', 
    category: 'Domestic',
    description: 'Quality domestic electrical installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.26 AM (9).jpeg', 
    title: 'Professional Residential Electrical Services', 
    category: 'Domestic',
    description: 'Professional residential electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM (1).jpeg', 
    title: 'Expert Domestic Electrical Services', 
    category: 'Domestic',
    description: 'Expert domestic electrical services.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM (2).jpeg', 
    title: 'Quality Home Electrical Services', 
    category: 'Domestic',
    description: 'Quality home electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM (3).jpeg', 
    title: 'Professional Residential Installation', 
    category: 'Domestic',
    description: 'Professional residential installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM (4).jpeg', 
    title: 'Reliable Home Electrical Solutions', 
    category: 'Domestic',
    description: 'Reliable home electrical solutions.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM (5).jpeg', 
    title: 'Expert Domestic Electrical Installation', 
    category: 'Domestic',
    description: 'Expert domestic electrical installation.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.55 AM.jpeg', 
    title: 'Quality Residential Electrical Installation', 
    category: 'Domestic',
    description: 'Quality residential electrical work.'
  },
  { 
    url: '/assets/domestic/WhatsApp Image 2026-02-02 at 2.03.56 AM.jpeg', 
    title: 'Professional Home Electrical Installation', 
    category: 'Domestic',
    description: 'Professional home electrical installation.'
  },

  // KITCHEN LIGHTING INSTALLATIONS
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.32 PM.jpeg', 
    title: 'Kitchen LED Strip Lighting', 
    category: 'Lighting',
    description: 'Under-cabinet LED lighting for modern kitchens.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (1).jpeg', 
    title: 'Kitchen Task Lighting', 
    category: 'Lighting',
    description: 'Bright task lighting over kitchen work areas.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (10).jpeg', 
    title: 'Kitchen Pendant Lights', 
    category: 'Lighting',
    description: 'Stylish pendant lighting for kitchen islands.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (12).jpeg', 
    title: 'Kitchen Accent Lighting', 
    category: 'Lighting',
    description: 'Accent lighting for kitchen display areas.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (14).jpeg', 
    title: 'Kitchen Ceiling Lights', 
    category: 'Lighting',
    description: 'Recessed ceiling lighting for kitchens.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (15).jpeg', 
    title: 'Kitchen Efficiency Lighting', 
    category: 'Lighting',
    description: 'Energy-efficient kitchen lighting solutions.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (16).jpeg', 
    title: 'Kitchen Ambient Lighting', 
    category: 'Lighting',
    description: 'Ambient lighting for warm kitchen atmosphere.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (2).jpeg', 
    title: 'Professional Kitchen Lighting Design', 
    category: 'Lighting',
    description: 'Professional kitchen lighting design.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (24).jpeg', 
    title: 'Modern Kitchen Lighting Solutions', 
    category: 'Lighting',
    description: 'Modern kitchen lighting solutions.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (25).jpeg', 
    title: 'Premium Kitchen Lighting', 
    category: 'Lighting',
    description: 'Premium kitchen lighting installation.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (27).jpeg', 
    title: 'Residential Kitchen Lighting', 
    category: 'Lighting',
    description: 'Kitchen lighting for residential use.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (28).jpeg', 
    title: 'Expert Kitchen Electrical Work', 
    category: 'Lighting',
    description: 'Expert kitchen electrical installation.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (3).jpeg', 
    title: 'Quality Kitchen Lighting Fixtures', 
    category: 'Lighting',
    description: 'Quality kitchen lighting fixtures.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (30).jpeg', 
    title: 'Professional Kitchen Setup', 
    category: 'Lighting',
    description: 'Professional kitchen lighting setup.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (31).jpeg', 
    title: 'Modern Kitchen Electrical Upgrade', 
    category: 'Lighting',
    description: 'Modern kitchen electrical work.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (5).jpeg', 
    title: 'Quality Kitchen Lighting', 
    category: 'Lighting',
    description: 'Quality kitchen lighting solutions.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (7).jpeg', 
    title: 'Expert Kitchen Lighting Installation', 
    category: 'Lighting',
    description: 'Expert kitchen lighting installation.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-01 at 2.01.33 PM (9).jpeg', 
    title: 'Professional Kitchen Lighting Fixtures', 
    category: 'Lighting',
    description: 'Professional kitchen lighting design.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.24 AM (5).jpeg', 
    title: 'Modern Kitchen Lighting Systems', 
    category: 'Lighting',
    description: 'Modern kitchen lighting systems.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (2).jpeg', 
    title: 'Quality Residential Kitchen Lighting', 
    category: 'Lighting',
    description: 'Quality residential kitchen lighting.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (3).jpeg', 
    title: 'Professional Kitchen Electrical Services', 
    category: 'Lighting',
    description: 'Professional kitchen electrical services.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (4).jpeg', 
    title: 'Expert Kitchen Lighting Design', 
    category: 'Lighting',
    description: 'Expert kitchen lighting solutions.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (5).jpeg', 
    title: 'Premium Kitchen Lighting Design', 
    category: 'Lighting',
    description: 'Premium kitchen lighting installation.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (6).jpeg', 
    title: 'Modern Residential Kitchen Lighting', 
    category: 'Lighting',
    description: 'Modern residential kitchen lighting.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (8).jpeg', 
    title: 'Quality Kitchen Electrical Work', 
    category: 'Lighting',
    description: 'Quality kitchen electrical installation.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.25 AM (9).jpeg', 
    title: 'Professional Kitchen Lighting Fixtures', 
    category: 'Lighting',
    description: 'Professional kitchen lighting fixtures.'
  },
  { 
    url: '/assets/kitchen/WhatsApp Image 2026-02-02 at 2.03.26 AM (6).jpeg', 
    title: 'Expert Kitchen Installation', 
    category: 'Lighting',
    description: 'Expert residential kitchen installation.'
  },

  // INDUSTRIAL INSTALLATIONS
  { 
    url: '/assets/industrial/WhatsApp Image 2026-02-01 at 2.01.33 PM (18).jpeg', 
    title: 'Industrial Distribution Board', 
    category: 'Commercial',
    description: 'Heavy-duty industrial electrical distribution system.'
  },
  { 
    url: '/assets/industrial/WhatsApp Image 2026-02-01 at 2.01.33 PM (19).jpeg', 
    title: 'Industrial Three-Phase Installation', 
    category: 'Commercial',
    description: 'Professional three-phase electrical system installation.'
  },
  { 
    url: '/assets/industrial/WhatsApp Image 2026-02-01 at 2.07.39 PM (1).jpeg', 
    title: 'Industrial Control Panel', 
    category: 'Commercial',
    description: 'Precision industrial control panel installation.'
  },
  { 
    url: '/assets/industrial/WhatsApp Image 2026-02-01 at 2.07.39 PM (2).jpeg', 
    title: 'Industrial Cable Management', 
    category: 'Commercial',
    description: 'Professional cable management and organization.'
  },
  { 
    url: '/assets/industrial/WhatsApp Image 2026-02-02 at 2.03.25 AM (1).jpeg', 
    title: 'Industrial Installation 5', 
    category: 'Commercial',
    description: 'Commercial-grade electrical installation.'
  },

  // RESTAURANT/HOSPITALITY INSTALLATIONS
  { 
    url: '/assets/resturents/WhatsApp Image 2026-02-02 at 2.03.24 AM (2).jpeg', 
    title: 'Restaurant Kitchen Electrical', 
    category: 'Commercial',
    description: 'Professional electrical installation for commercial kitchens.'
  },
  { 
    url: '/assets/resturents/WhatsApp Image 2026-02-02 at 2.03.24 AM (3).jpeg', 
    title: 'Restaurant Ambient Lighting', 
    category: 'Commercial',
    description: 'Custom lighting design for hospitality venues.'
  },
  { 
    url: '/assets/resturents/WhatsApp Image 2026-02-02 at 2.03.24 AM.jpeg', 
    title: 'Restaurant Installation Complete', 
    category: 'Commercial',
    description: 'Full electrical fit-out for hospitality establishments.'
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
