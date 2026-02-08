#!/bin/bash
# Push AI Daily News to GitHub
# Run this after creating the repo on GitHub

cd /home/jeff_brooky/.openclaw/workspace/aidailynews

# Add your GitHub repo (replace YOUR_USERNAME)
# git remote add origin https://github.com/YOUR_USERNAME/aidailynews.git

# OR if you have SSH key set up:
# git remote add origin git@github.com:YOUR_USERNAME/aidailynews.git

echo "Step 1: Create repo at https://github.com/new"
echo "Step 2: Run one of these (replace YOUR_USERNAME):"
echo ""
echo "HTTPS (easiest):"
echo "  git remote add origin https://github.com/YOUR_USERNAME/aidailynews.git"
echo ""
echo "SSH (if you have keys):"
echo "  git remote add origin git@github.com:YOUR_USERNAME/aidailynews.git"
echo ""
echo "Step 3: Push code:"
echo "  git branch -M main"
echo "  git push -u origin main"
