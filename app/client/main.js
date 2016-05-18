import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './attend.html';

Template.attend.events({

  // mobile menu button, toggle sidebar
  'click #menu-toggle': () => {
    $("#wrapper").toggleClass("toggled");
  }
});
