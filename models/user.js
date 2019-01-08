const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');


class User {
    constructor(username, email, cart) {
        this.name = username;
        this.email = email;
        this.cart = cart;
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    addToCart(product) {
        // if(this.cart && this.cart.items){
        //     const carProduct = this.cart.items.findIndex(cp => {
        //         return cp._id  === product.id;
        //     });
        const updatedCart = {
            items: [{ ...product,
                quantity: 1
            }]
        };
        const db = getDb();
        return db.collections('users').updateOne({
            _id: new mongodb.ObjectId(userId)
        }, {
            $set: {
                cart: updatedCart
            }
        })
        // }
    }

    static findById(userId) {
        const db = getDb();
        return db.collection('users').findOne({
            _id: new mongodb.ObjectId(userId)
        });
    }
}

module.exports = User;