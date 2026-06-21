import { useEffect } from 'react';

const SEO = ({ title, description, path = "" }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title || "Sri Sai Manjunadha Enterprises | Solar, Water & Appliances in Eluru";

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "Sri Sai Manjunadha Enterprises (Est. 2010) offers high-quality Solar Rooftop Systems, Water Purifiers, Water Softeners, and Authorized Appliance Services in Eluru and West Godavari.";

    // 3. Update Keywords (optional but good for reference)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = "Solar Installation Eluru, Solar Rooftop Services Eluru, Water Purifier Service Eluru, Water Softener Service Eluru, Home Appliance Service Eluru, Solar Company West Godavari, Renewable Energy Solutions Andhra Pradesh";

    // 4. Update Open Graph Tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateOGTag('og:title', document.title);
    updateOGTag('og:description', metaDescription.content);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', `https://srisaimanjunadha.com${path}`);
    updateOGTag('og:image', 'https://srisaimanjunadha.com/og-image.jpg');

    // 5. Inject Local Business Schema Markup
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'ld-json-schema';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sri Sai Manjunadha Enterprises",
      "image": "https://srisaimanjunadha.com/logo.png",
      "@id": "https://srisaimanjunadha.com/#localbusiness",
      "url": "https://srisaimanjunadha.com",
      "telephone": "+919949144551",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Door No: 22B-5-7, Kanukolanu Vari Street, Powerpeta, Station Road, opp. K S Towers",
        "addressLocality": "Eluru",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "534002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.7107,
        "longitude": 81.1018
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
        "https://www.facebook.com/SriSaiManjunadha",
        "https://www.instagram.com/SriSaiManjunadha"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Eluru District"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Godavari District"
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData, null, 2);

    return () => {
      // Clean up if component unmounts
    };
  }, [title, description, path]);

  return null;
};

export default SEO;
