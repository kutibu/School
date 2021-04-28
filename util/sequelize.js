const Absent = require('../models/Absent');
const Present = require('../models/Present');
const db = require('./database');
module.exports = {
    init: () => {
        console.log("Mon BOT est Connecté");
        Present.init(db);
        Present.sync();
        Absent.init(db);
        Absent.sync();
        db.authenticate()
            .then(() => {
                console.log('BDD Done');

            }).catch((err) => console.log(err));
    }
}