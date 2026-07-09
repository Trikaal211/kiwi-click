import ReactGA from 'react-ga4';

// Flag to verify that GA4 is initialized only once
let isInitialized = false;

/**
 * Initializes Google Analytics 4 if it hasn't been initialized yet.
 * Reads the Measurement ID dynamically from Vite's environment variables.
 */
export const initGA = () => {
  if (isInitialized) return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (measurementId) {
    ReactGA.initialize(measurementId);
    isInitialized = true;
    console.log('[Analytics] GA4 initialized successfully with Measurement ID:', measurementId);
  } else {
    console.warn('[Analytics] VITE_GA_MEASUREMENT_ID is not configured in the environment. Analytics tracking is disabled.');
  }
};

/**
 * Tracks a page_view event.
 * @param {string} title - The title of the page being viewed.
 * @param {string} path - The relative URL path (including search query parameters).
 */
export const trackPageView = (title, path) => {
  initGA();
  const currentPath = path || window.location.pathname + window.location.search;
  const currentTitle = title || document.title;
  
  ReactGA.send({
    hitType: 'pageview',
    page: currentPath,
    title: currentTitle,
  });
  console.log(`[Analytics] Page View Tracked: Path="${currentPath}", Title="${currentTitle}"`);
};

/**
 * Generic event tracker for custom events.
 * @param {string} eventName - The name of the event in GA4.
 * @param {object} params - Custom key-value parameters.
 */
export const trackEvent = (eventName, params = {}) => {
  initGA();
  ReactGA.event({
    action: eventName,
    ...params,
  });
  console.log(`[Analytics] Event Tracked: Name="${eventName}"`, params);
};

/**
 * Helper function to track generic button clicks.
 * @param {string} buttonLabel - Text or descriptor of the clicked button.
 * @param {string} location - Name of the section or page where the button sits.
 */
export const trackButtonClick = (buttonLabel, location = 'general') => {
  trackEvent('Button Click', {
    button_label: buttonLabel,
    location: location,
  });
};

/**
 * Helper function to track form submissions.
 * @param {string} formName - The name/id of the form.
 * @param {string} status - 'success' or 'fail'.
 */
export const trackFormSubmit = (formName, status = 'success') => {
  trackEvent('Contact Form Submitted', {
    form_name: formName,
    status: status,
  });
};

/**
 * Helper function to track WhatsApp link/widget clicks.
 * @param {string} location - Context or area where WhatsApp was clicked.
 */
export const trackWhatsAppClick = (location = 'general') => {
  trackEvent('WhatsApp Click', {
    location: location,
  });
};

/**
 * Helper function to track phone link clicks.
 * @param {string} phoneNumber - The telephone number that was clicked.
 * @param {string} location - Context or area where the link is placed.
 */
export const trackPhoneClick = (phoneNumber, location = 'general') => {
  trackEvent('Phone Click', {
    phone_number: phoneNumber,
    location: location,
  });
};

/**
 * Helper function to track email link clicks.
 * @param {string} emailAddress - The destination email address clicked.
 * @param {string} location - Context or area where the link is placed.
 */
export const trackEmailClick = (emailAddress, location = 'general') => {
  trackEvent('Email Click', {
    email_address: emailAddress,
    location: location,
  });
};

/**
 * Reusable helper to track "Get Started" button clicks.
 * @param {string} location - Section where button was clicked.
 */
export const trackGetStartedClick = (location = 'general') => {
  trackEvent('Get Started Button Click', {
    location: location,
  });
};

/**
 * Reusable helper to track "Contact Us" button clicks.
 * @param {string} location - Section where button was clicked.
 */
export const trackContactUsClick = (location = 'general') => {
  trackEvent('Contact Us Button Click', {
    location: location,
  });
};

/**
 * Reusable helper to track when a portfolio project/case study is opened.
 * @param {string} projectName - Name of the project/client.
 */
export const trackPortfolioOpened = (projectName) => {
  trackEvent('Portfolio Project Opened', {
    project_name: projectName,
  });
};

/**
 * Reusable helper to track when a blog article is opened and read.
 * @param {string} blogTitle - Title of the blog post.
 */
export const trackBlogOpened = (blogTitle) => {
  trackEvent('Blog Opened', {
    blog_title: blogTitle,
  });
};

/**
 * Reusable helper to track when a service capability card is clicked.
 * @param {string} serviceName - Title of the service card.
 */
export const trackServiceCardClick = (serviceName) => {
  trackEvent('Service Card Click', {
    service_name: serviceName,
  });
};

/**
 * Reusable helper to track when a pricing range or budget option is selected/clicked.
 * @param {string} planName - Plan details or budget range selected.
 */
export const trackPricingClick = (planName) => {
  trackEvent('Pricing Button Click', {
    plan_name: planName,
  });
};
