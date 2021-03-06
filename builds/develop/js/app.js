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
  var app = angular.module('OsraApp', ['OsraRoutes']);
  app.controller('OrphanController', function() {
    this.orphans = orphans;
    this.orphan = {};
    this.genders = ['Male', 'Female'];
    this.statuses = ['Active', 'Inactive'];
    this.priorities = ['Normal', 'High'];
    this.booleans = ['Yes', 'No'];
    this.sponsorships = ['Sponsored', 'Unsponsored'];
    this.addOrphan = function(orphan) {
      orphans.push(orphan);
      this.orphan = {};
    };
  });
})();
