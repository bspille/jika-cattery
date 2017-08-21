const Site = require("../models/site");

module.exports = {
    fetchSite(req, res, next){
        Site.findOne({name: "Jika Cats"})
            .then((site) =>{
            res.json(site);
            })
            .catch(next);
    }
};