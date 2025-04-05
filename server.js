const serve = require('serve');
const path = require('path');

const app = serve(path.resolve(__dirname, 'build'), {
  port: process.env.PORT || 3005, // Use environment variable or default
  // ... other serve options if needed
});

// Optional: Handle server close (for PM2 restarts)
process.on('SIGINT', () => {
  app.close();
  process.exit();
});
process.on('SIGTERM', () => {
  app.close();
  process.exit();
});