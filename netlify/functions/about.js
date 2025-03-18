import fs from 'fs';
import path from 'path';

// Function to read data from about.json
function readAbout() {
  const aboutPath = path.join(process.cwd(), 'data', 'about.json'); // process.cwd() gets the root folder of the project

  if (!fs.existsSync(aboutPath)) {
    throw new Error(`The file ${aboutPath} does not exist.`);
  }

  const aboutData = fs.readFileSync(aboutPath, 'utf8');
  
  return JSON.parse(aboutData);
}

exports.handler = async (event, context) => {
  // Handling the preflight OPTIONS request for CORS (for browsers)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow any origin to access
        'Access-Control-Allow-Methods': 'GET, OPTIONS', // Allow GET and OPTIONS methods
        'Access-Control-Allow-Headers': 'Content-Type', // Allow content-type headers
      },
    };
  }

  try {
    // Get the data from the JSON file
    const about = readAbout();

    // Return the data as JSON in the response
    return {
      statusCode: 200,
      body: JSON.stringify(about),
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        'Access-Control-Allow-Methods': 'GET', // Allow only GET requests
        'Access-Control-Allow-Headers': 'Content-Type', // Allow headers for content-type
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read about data' }),
    };
  }
};