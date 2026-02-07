#!/bin/bash
# Deploy AI Daily News to Vercel

echo "🚀 Building AI Daily News..."

cd /home/jeff_brooky/.openclaw/workspace/aidailynews

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build
echo "🔨 Building static site..."
npm run build

# Check if build succeeded
if [ -d "dist" ]; then
  echo "✅ Build successful!"
  echo ""
  echo "Next steps:"
  echo "1. Install Vercel CLI: npm i -g vercel"
  echo "2. Run: vercel --cwd dist"
  echo "3. Or manually upload 'dist' folder to Vercel"
  echo ""
  echo "Files ready in: $(pwd)/dist"
else
  echo "❌ Build failed"
  exit 1
fi
