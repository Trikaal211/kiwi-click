import ReactGA from 'react-ga4';

let isInitialized = false;

/**
 * Initializes Google Analytics 4 if it hasn't been initialized yet.
 */
export function initGA() {
  if (isInitialized) return;

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (measurementId) {
    ReactGA.initialize(measurementId);
    isInitialized = true;
    console.log('[Analytics] GA4 initialized successfully with Measurement ID:', measurementId);
  } else {
    console.warn('[Analytics] VITE_GA_MEASUREMENT_ID is not configured in the environment. Analytics tracking is disabled.');
  }
}

/**
 * Automatically tracks page views on routing changes.
 * @param {string} currentPath
 * @param {string} currentTitle
 */
export function trackPageView(currentPath, currentTitle) {
  if (!isInitialized) {
    initGA();
  }

  if (isInitialized) {
    ReactGA.send({
      hitType: 'pageview',
      page: currentPath,
      title: currentTitle || document.title
    });
    console.log(`[Analytics] Page View Tracked: Path="${currentPath}", Title="${currentTitle}"`);
  }
}

/**
 * Tracks custom events to Google Analytics.
 * @param {string} eventName
 * @param {object} [params]
 */
export function trackEvent(eventName, params = {}) {
  if (!isInitialized) {
    initGA();
  }

  if (isInitialized) {
    ReactGA.event(eventName, params);
    console.log(`[Analytics] Event Tracked: Name="${eventName}"`, params);
  }
}

// Custom interactive tracking helpers
export function trackButtonClick(buttonLabel, location = '') {
  trackEvent('button_click', { button_label: buttonLabel, location });
}

export function trackPricingClick(budgetRange) {
  trackEvent('pricing_selection', { budget_range: budgetRange });
}

export function trackFormSubmit(formName, status = 'success') {
  trackEvent('form_submission', { form_name: formName, status });
}

export function trackWhatsAppClick(location = '') {
  trackEvent('whatsapp_click', { location });
}

export function trackPhoneClick(phoneNumber, location = '') {
  trackEvent('phone_click', { phone_number: phoneNumber, location });
}

export function trackEmailClick(emailAddress, location = '') {
  trackEvent('email_click', { email_address: emailAddress, location });
}
