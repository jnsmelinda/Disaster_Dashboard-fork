
const getDisasterEvents = require('./api/disaster.js');

module.exports = function(app) {
  app.get('/api/disasters', function(req, res, next) {
    getDisasterEvents(disasters => res.json(disasters));
  });
}
