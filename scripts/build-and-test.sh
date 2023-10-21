#!/bin/bash

# Specify the GitHub repository URL
REPO_URL="https://api.github.com/repos/LabIdeas/LabTesting/contents/hello.js"  # Use the API endpoint for the file

# Execute the JavaScript script from the GitHub repository directly
curl -sLJO "$REPO_URL"
node hello.js

console.log('hello world')
