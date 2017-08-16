/*
    Created by Patrice Gerard
*/

var firstname = "Patrice";
var lastName = "Gerard";
var fullName = firstname + " " + lastName;
var age = 12;
var awesomeThoughts = "I am " + firstname + " and I am awesome";
var email = "patrice@udacity.com"
var newEmail = email.replace("udacity", "gmail");
var funThoughts = awesomeThoughts.replace("awesome", "fun");
var role = "Software Engineer";
var formattedName = HTMLheaderName.replace("%data%", fullName);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesome", "programming", "teaching", "js"];



