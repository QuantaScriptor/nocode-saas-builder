
#!/bin/bash

# deployment/deploy.sh

# Title: Deployment Script
# Description: Automates the deployment process for the platform.
# Status: Finalized
# Author: Reece Dixon
# Date Created: 2024-08-05
# Path: /deployment/deploy.sh
# Proprietary: YES - **NOT FOR PUBLIC ACCESS**

echo "Starting deployment..."

# Set environment variables
export NODE_ENV=production
export APP_SECRET=$(openssl rand -hex 32)

# Build the frontend
cd frontend
npm install
npm run build

# Deploy backend
cd ../backend
npm install
pm2 restart ecosystem.config.js

echo "Deployment completed successfully!"
            