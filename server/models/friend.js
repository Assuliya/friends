console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
})
mongoose.model('Friend', FriendSchema);

var Friend = mongoose.model('Friend')
