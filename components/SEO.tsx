import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Parker Electrical Solutions | NICEIC Approved Electrician Essex & London",
  description = "Professional NICEIC approved electrician serving Essex and London. Domestic & commercial electrical services including rewiring, EICR certificates, emergency repairs, and EV charging installations.",
  keywords = "electrician Essex, NICEIC electrician Essex, emergency electrician Essex, electrician Harlow, domestic electrician Harlow, commercial electrician London, EICR certificate Essex, consumer unit replacement Essex, house rewire Essex, landlord electrical certificate Essex, fault finding electrician Essex, electrician Chelmsford, electrician Basildon, electrician Brentwood, electrician East London",
  canonical,
  ogImage = "/assets/logo/logo.png",
  ogType = "website",
  structuredData,
  noindex = false
}) => {
  const siteUrl = "https://www.parkerelectricalsolutions.uk";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Parker Electrical Solutions" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* Business Specific Meta Tags */}
      <meta name="author" content="Parker Electrical Solutions Ltd" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />

      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="GB-ESX" />
      <meta name="geo.placename" content="Harlow, Essex" />
      <meta name="geo.position" content="51.7765;0.1116" />
      <meta name="ICBM" content="51.7765, 0.1116" />

      {/* Contact Information */}
      <meta name="contact" content="+447737447302" />
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="Parker Electrical Solutions Ltd" />
      <meta name="DC.subject" content="Electrical Services, Electrician, NICEIC Approved" />
      <meta name="DC.description" content={description} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;