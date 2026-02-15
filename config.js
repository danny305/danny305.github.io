// Google Analytics Configuration
const GA_MEASUREMENT_ID = 'G-WRTZ23XVZB';

// Event tracking functions
function trackLinkClick(linkText, linkUrl, linkType) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'link_click', {
      'event_category': 'engagement',
      'event_label': linkText,
      'link_url': linkUrl,
      'link_type': linkType
    });
  }
}

function trackEmailClick(emailAddress) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'email_click', {
      'event_category': 'engagement',
      'event_label': emailAddress
    });
  }
}

function trackSocialClick(platform) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'social_click', {
      'event_category': 'social_media',
      'event_label': platform
    });
  }
}

function trackMediaClick(linkText, linkUrl) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'media_click', {
      'event_category': 'media',
      'event_label': linkText,
      'link_url': linkUrl
    });
  }
}

function trackPublicationView(publicationTitle) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'publication_view', {
      'event_category': 'content',
      'event_label': publicationTitle
    });
  }
}
