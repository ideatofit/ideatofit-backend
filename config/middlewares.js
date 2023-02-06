module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          'connect-src': ["'self'", 'https:', "*.tinymce.com", "*.tiny.cloud", "blob:"],
          // 'img-src': ["'self'", 'data:', 'blob:', ],
          "img-src": [
            "'self'",
            "*.tinymce.com",
            "*.tiny.cloud",
            "data:",
            "blob:",
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
            'res.cloudinary.com'
          ],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];