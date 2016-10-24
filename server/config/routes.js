 console.log('future routes')

 var friends = require('../controllers/friend.js');

 module.exports = function(app) {
     app.get('/', function(req, res){
       res.sendFile(__dirname + '../../client/index.html');
     });

     app.get('/friends', friends.index);
     app.get('/friends/:id', friends.show);
     app.post('/friends', friends.create);
     app.put('/friends/:id', friends.update);
     app.delete('/friends/:id', friends.delete);
   }
