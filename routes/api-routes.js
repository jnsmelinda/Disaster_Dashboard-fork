const db = require("../models");
const getDisasterEvents = require('./api/disaster.js');

module.exports = function (app) {
  app.get('/api/disasters', function (req, res, next) {
    getDisasterEvents(disasters => res.json(disasters));
  });

  app.get('/api/readykit', function (req, res, next) {
    db.ReadyKit.findAll()
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });
}
