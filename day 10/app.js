const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Render the login form at the root URL
app.get('/', (req, res) => {
  res.render('login');
});

// Handle form submission with POST
app.post('/post-subscribe', (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);
  
  // Respond with a success message or redirect
  res.json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
