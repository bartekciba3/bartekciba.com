#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

// ANSI color codes for prettier output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m'
};

console.log(`${colors.bright}${colors.blue}🚀 Starting deployment process for bartekciba.com${colors.reset}\n`);

try {
  // Step 1: Build the project
  console.log(`${colors.cyan}📦 Building project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Build completed successfully!${colors.reset}\n`);

  // Step 2: Deploy to Cloudflare Pages
  console.log(`${colors.cyan}☁️ Deploying to Cloudflare Pages...${colors.reset}`);
  execSync('npx wrangler deploy', { stdio: 'inherit' });
  console.log(`${colors.green}✅ Deployment completed successfully!${colors.reset}\n`);

  console.log(`${colors.bright}${colors.green}🎉 Your site is now live on Cloudflare Pages!${colors.reset}`);
} catch (error) {
  console.error(`${colors.bright}\x1b[31m❌ Deployment failed:${colors.reset}`, error.message);
  process.exit(1);
}
