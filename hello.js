// hello.js
// console.log("Hello, World!");

const axios = require('axios');

// Replace with the API endpoint URL
const apiUrl = 'https://hub.worldpop.org/rest/data/pop';

// Example test for making a GET request
test('GET request to API endpoint', async () => {
  try {
    const response = await axios.get(apiUrl);
    
    // Replace with your test assertions
    expect(response.status).toBe(200);
    // Add more assertions as needed
  } catch (error) {
    // Handle any errors or failed assertions
    throw error;
  }
});
