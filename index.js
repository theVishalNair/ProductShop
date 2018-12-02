/**
 * Node Core Modules
 */
const path = require('path');


/**
 * Third Party Modules
 */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');


/**
 * Express Modules
 */


/**
 * My Modules
 */
const errorController = require('./controllers/error')

app.set('view engine', 'ejs');

// app.engine('hbs', expressHbs({
//     layoutDir: 'views/layouts',
//     defaultLayout: 'main-layout.hbs',
//     ectname: 'hbs'
// }));
// app.set('view engine', 'hbs');
//  app.set('view engine', 'pug');
app.set('views', 'views');


/**
 * My Routes
 */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)


app.listen(3000);