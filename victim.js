
var numberofvictims = prompt("How many victims?");
var numberofvolunteers = prompt("How many Volunteers?");



 var Victims2 = function (fullname, phone, street) {
	this.fullname = fullname;
	this.phone = phone;
	this.street = street;
}

var Volunteers2 = function (fullname, phone, street){
	this.fullname = fullname;
	this.phone = phone;
	this.street = street;
}

// var Victims = {};
var victimsArray = [];
// var Volunteers = {};
var volunteersArray =[];




for (var i=0; i < numberofvictims.length; i++) {

var fullname1 = prompt("What is the name of the first victim, Victim " + i);
 
var phone1 = prompt("What is the phone number of victim " + i);

var street1 = prompt("what is the street address of victim " + i);
victimsArray[i] = new Victims2(fullname1, phone1, street1);

}

for (var x=0; x < numberofvolunteers.length; x++) {
	var fullname2 = prompt("What is the name of  Volunteer " + x);

	var phone2 = prompt("What is the Phone Number of Volunteer " + x);

	var street2 = prompt("What is the Street addres of Vulunteer " + x);
	
	volunteersArray[x] = new Volunteers2(fullname2, phone2, street2);
}


for (var x = 0; x < victimsArray.length; x++) {
    console.log(victimsArray[x].fullname);
    console.log(victimsArray[x].phone);
    console.log(victimsArray[x].street);
}

for (var x = 0; x < volunteersArray.length; x++) {
    console.log(volunteersArray[x].fullname);
    console.log(volunteersArray[x].phone);
    console.log(volunteersArray[x].street);
}


console.log ("Here are all the victims listed ");
 var victimsall = victimsArray.map(function (list) { return list;} );
     

 console.log(victimsall);

console.log ("Here are all the volunteers Listed");

var volunteersall = volunteersArray.map(function (list){ return list;} );
       
 
 console.log(volunteersall);