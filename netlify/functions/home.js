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
  
    // Handling the actual GET request
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Welcome to my website 👋' }),
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow any origin to access
          'Access-Control-Allow-Methods': 'GET', // Allow only GET requests
          'Access-Control-Allow-Headers': 'Content-Type', // Allow headers for content-type
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to process the request' }),
      };
    }
  };