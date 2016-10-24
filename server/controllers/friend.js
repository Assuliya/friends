console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend')


function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends) {
      if(err) {
        console.log('error');
      } else {
        console.log('successfully found!');
        console.log(friends)
        // res.render("index", {friends: friends});
        res.json(friends)
      }
    })
  };
  this.create = function(req,res){
    console.log("new", req.body);
    var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birth_date: req.body.birth_date});
    friend.save(function(err) {
      if(err) {
        console.log('error');
      } else {
        console.log('successfully added an owl!');
        // res.redirect('/');
        res.json(friend)
      }
    })
  };
  this.update = function(req,res){
    console.log("edit", req.body);
    Friend.update({_id: req.params.id}, req.body, function(err, friend) {
          if(err) {
            console.log('error');
          } else {
            console.log('successfully edited!');
            console.log(friend)
            res.json(friend)

            // res.render("edit", {friend: friend});
          }
        })
        // res.redirect("/friends/"+req.params.id);
  };
  this.delete = function(req,res){
    console.log("delete", req.params.id);
    Friend.remove({_id: req.params.id}, function(err, friend) {
      if(err) {
        console.log('error');
      } else {
        console.log('successfully deleted!');
        res.json(true)
      }
    })
  };
  this.show = function(req,res){
    console.log(req.params.id)
    Friend.findById(req.params.id, function(err, friend) {
      if(err) {
        console.log('error');

      } else {
        console.log('successfully found!');
        console.log(friend)
        res.json(friend)
      }
    })
  };
}
module.exports = new FriendsController(); // what does this export?
