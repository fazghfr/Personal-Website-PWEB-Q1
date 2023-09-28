const express = require('express');
var path = require('path')
const app = express();
const port = 3000; // Example port number

// Serve HTML files from the same directory as server.js
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
