const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));