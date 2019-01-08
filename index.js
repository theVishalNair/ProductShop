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
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user')

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

app.use((req, res, next) => {
    User.findById('5c2f06ad419dd82130f1b00d')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => console.log(err))
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

mongoConnect(() => {
    app.listen(3000);
});