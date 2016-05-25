import Users from '../../api/users.js';

Template.adminUsers.onCreated(function adminUsersCreated(){
  Meteor.subscribe('Meteor.users');
});

Template.adminUsers.helpers({
  'users': ()=>{
    return Meteor.users.find({});
  }
});