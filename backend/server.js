/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const conventionRoutes = require('./routes/convention');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/conventions', conventionRoutes);

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/gestion_dettes';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Connection error', err);
    });*/









const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/gestion_dettes', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const conventionRoutes = require('./routes/conventions');
const funderRoutes = require('./routes/funders');
const invoiceRoutes = require('./routes/invoices');

// Use routes
app.use('/api/conventions', conventionRoutes);
app.use('/api/funders', funderRoutes);
app.use('/api/invoices', invoiceRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
