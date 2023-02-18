// Import express.js
const express = require('express');
// Create an express app
const app = express();
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set public folder
app.use(express.static('public'))
// Set renders
app.get('/', (req, res) => {
    res.render('main');
});
// Set 404 redirect
app.get('*', (req, res) => {
    res.redirect('/');
});
// Start the server
app.listen(3003, () => {
    console.log('Server started on port 3003');
});