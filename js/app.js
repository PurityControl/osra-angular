(function() {
  'use strict';
  var orphans = [
  {
    osra_number: 190003,
    full_name: "Ray Smith",
    gender: "Male",
    status: "Active",
    priority: "Normal",
    mother_alive: "Yes",
    sponsorship: "Sponsored"
  },
  {
    osra_number: 160002,
    full_name: "Mrs Peacock",
    gender: "Female",
    status: "Active",
    priority: "High",
    mother_alive: "No",
    sponsorship: "Sponsored"
  },
  {
    osra_number: 130001,
    full_name: "Fred Bloggs",
    gender: "Male",
    status: "Inactive",
    priority: "Normal",
    mother_alive: "Yes",
    sponsorship: "Unsponsored"
  }
  ];
  var app = angular.module('OsraApp', []);
  app.controller('OrphanController', function() {
    this.orphans = orphans;
  });
})();
