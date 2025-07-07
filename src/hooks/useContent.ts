// Content management hook for easy YAML content loading
// This would typically fetch from a CMS or YAML files in a real setup

export const useContent = () => {
  // For now, we'll return the content directly
  // In a real app, this would fetch from your YAML files or CMS API
  
  const content = {
    hero: {
      headline: "Automation that works while you don't.",
      subhead: "Haleo builds simple, scalable systems for solopreneurs — so you can ditch the chaos and get back to what you do best.",
      cta_primary: {
        text: "Browse Templates",
        url: "https://onehaleo.gumroad.com"
      },
      cta_secondary: {
        text: "Book Free Consult", 
        url: "#"
      }
    },
    
    services: {
      title: "What We Offer",
      description: "From automation to AI agents, we build systems that work while you focus on what matters."
    },
    
    // Add more content sections as needed
  };

  return content;
};

// Utility to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};