import fs from 'fs';
import path from 'path';

// Function to read data from about.json
function readAbout() {
  // The path to the about.json file
  const aboutPath = path.join(__dirname, 'data', 'about.json');

  // Read the file synchronously
  const aboutData = fs.readFileSync(aboutPath, 'utf8');
  
  // Parse the data and return it
  return JSON.parse(aboutData);
}

exports.handler = async (event, context) => {
  try {
    // Get the data from the JSON file
    const about = readAbout();

    // Return the data as JSON in the response
    return {
      statusCode: 200,
      body: JSON.stringify(about),
    };
  } catch (error) {
    // If an error occurs, return a 500 error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read about data' }),
    };
  }
};