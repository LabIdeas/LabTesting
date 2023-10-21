# #!/bin/bash

# # Temporary directory to clone the repository
# TEMP_DIR="$(mktemp -d)"

# # Define your project's Git repository URL
# PROJECT_GIT_URL="https://github.com/yourusername/your-selenium-project.git"

# # Clone the project from Git to the temporary directory
# git clone "$PROJECT_GIT_URL" "$TEMP_DIR"

# # Navigate to the project directory
# cd "$TEMP_DIR"

# # Fetch project dependencies (e.g., using SBT)
# sbt update

# # Compile the project
# sbt compile

# # Run Selenium tests
# sbt test

# # Clean up the temporary directory
# rm -rf "$TEMP_DIR"




#!/bin/bash

# Define the URL of the JavaScript file in your Git repository
JAVASCRIPT_FILE_URL="https://raw.githubusercontent.com/LabIdeas/LabTesting/main/path/to/your/helloworld.javascript"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Installing it now..."
  
  # Install Node.js (adjust the version as needed)
  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
  
  # Verify the installation
  if ! command -v node &> /dev/null; then
    echo "Failed to install Node.js. Exiting..."
    exit 1
  fi
fi

# Download the JavaScript file from the Git repository
curl -o helloworld.javascript "$JAVASCRIPT_FILE_URL"

# Run the downloaded JavaScript file with Node.js
node helloworld.javascript

# Clean up the downloaded file
rm -f helloworld.javascript

