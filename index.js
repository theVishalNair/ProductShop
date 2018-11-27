/**
 * Node Core Modules
 */



/**
 * Third Party Modules
 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

/**
 * Express Modules
 */


/**
 * My Modules
 */


/**
 * My Routes
 */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})


app.listen(3000);