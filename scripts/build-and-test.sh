#!/bin/bash

# Temporary directory to clone the repository
TEMP_DIR="$(mktemp -d)"

# Define your project's Git repository URL
PROJECT_GIT_URL="https://github.com/yourusername/your-selenium-project.git"

# Clone the project from Git to the temporary directory
git clone "$PROJECT_GIT_URL" "$TEMP_DIR"

# Navigate to the project directory
cd "$TEMP_DIR"

# Fetch project dependencies (e.g., using SBT)
sbt update

# Compile the project
sbt compile

# Run Selenium tests
sbt test

# Clean up the temporary directory
rm -rf "$TEMP_DIR"