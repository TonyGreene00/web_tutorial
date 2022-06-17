function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

var x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo01").innerHTML =
"The value of z is " + z + "."; 

document.getElementById("demo").innerHTML = 
"Hello Dolly.";

function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}

document.getElementById("demo0").innerHTML = 10.50;

document.getElementById("demo33").innerHTML = 'John Doe';

var x;
x = 5;
document.getElementById("demo22").innerHTML = x * 10;

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("demo5").innerHTML = lastName;

// Change heading:
document.getElementById("myH").innerHTML = "JavaScript Comments";
// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";

var x = 5;      // Declare x, give it the value of 5
var y = x + 2;  // Declare y, give it the value of x + 2 
// Write y to demo:
document.getElementById("demo55").innerHTML = y;

//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP1").innerHTML = "My first paragraph.";

var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

document.getElementById("test").innerHTML =
pi + "<br>" + person + "<br>" + answer;

var carName = "Volvo";
document.getElementById("test0").innerHTML = carName;

var carName;
document.getElementById("test1").innerHTML = carName;

var x = 5 + 2 + 3;
document.getElementById("test2").innerHTML = x;

var x = 10;
x *= 5;
document.getElementById("test3").innerHTML = x; // when any of the operators are added to =, it will execute with reference to the var declared

var x = 5;
var y = 2;
var z = x % y;
document.getElementById("test4").innerHTML = z;

var x = 5;
x++;
var z = x;
document.getElementById("test5").innerHTML = z;

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.getElementById("test6").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;

var x = 5;
var y = 5;
var z = 6;
document.getElementById("test7").innerHTML =
(x == y) + "<br>" + (x == z);

var cars = ["Saab","Volvo","BMW"];

document.getElementById("test8").innerHTML = cars[0];

var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

document.getElementById("test9").innerHTML =
person.firstName + " is " + person.age + " years old.";

var car = "Volvo";
car = undefined;
document.getElementById("test10").innerHTML =
car + "<br>" + typeof car;

function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("f1").innerHTML = myFunction(4, 3);

var x = myFunction(4, 3);
document.getElementById("f2").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}

function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("f3").innerHTML = toCelsius(77);

document.getElementById("f4").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
} 

myFunction();

function myFunction() {
    var carName = "Volvo";
    document.getElementById("f5").innerHTML =
    typeof carName + " " + carName;
}

document.getElementById("f6").innerHTML =
typeof carName;

// Create an object:
var car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("obj1").innerHTML=car.color;

//Create an object:
var person = {
	firstName: "Greene",
	lastName: "Tony",
	id: 5555
};
//Display some data from the object:
document.getElementById("obj").innerHTML=person["firstName"] +" " + person["lastName"];

// Create an object:
//Create an object:
var person = {
	firstName: "Greene",
	lastName: "Tony",
	id: 5555,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
// Display data from the object:
document.getElementById("obj2").innerHTML = person.fullName();

function displayDate() {
    document.getElementById("event1").innerHTML = Date();
}

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("string").innerHTML = txt.length;

var x = "We are the so-called \"Vikings\" from the north.";
document.getElementById("string1").innerHTML = x; 

document.getElementById("string2").innerHTML = "Hello " +
"Dolly!";

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("string3").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("string4").innerHTML = pos;

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("string5").innerHTML = pos;

function myFunction() {
    var str = document.getElementById("string6").innerHTML; 
    var txt = str.replace("Tony","Greene");
    document.getElementById("string6").innerHTML = txt;
}

function myFunction() {
    var text = document.getElementById("string7").innerHTML;
    document.getElementById("string7").innerHTML = text.toUpperCase();
}

var x = 100 / "Apple";
document.getElementById("num1").innerHTML = isNaN(x);

var x = 123;
document.getElementById("num").innerHTML =
    x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

var x = 9.656;
document.getElementById("num2").innerHTML =
    x.toExponential() + "<br>" + 
    x.toExponential(2) + "<br>" + 
    x.toExponential(4) + "<br>" + 
    x.toExponential(6);

    var x = 9.656;
document.getElementById("num3").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);

    var x = 9.656;
document.getElementById("num4").innerHTML = 
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6);

    var x = 123;

document.getElementById("num5").innerHTML = 
    x.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();

    document.getElementById("num6").innerHTML = 
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number("10 6") + "<br>" + 
    Number("John");

    var x = new Date("2017-09-30");
document.getElementById("num7").innerHTML = Number(x);

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("arrays").innerHTML = cars;

var cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("arrays1").innerHTML = cars;

var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("arrays2").innerHTML = cars[0];

var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("arrays3").innerHTML = text;

var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
document.getElementById("arrays4").innerHTML =
person[0] + " " + person.length;

var d = new Date();
document.getElementById("date").innerHTML = d;

var d = new Date(2018, 10, 24, 10, 33, 30, 0);
document.getElementById("date1").innerHTML = d;

var d = new Date(99, 11, 24);
document.getElementById("date2").innerHTML = d;

var d = new Date();
document.getElementById("date3").innerHTML = d.toString();

var d = new Date();
document.getElementById("date4").innerHTML = d.toDateString();

var d = new Date("2015-03-25");
document.getElementById("iso").innerHTML = d;

var d = new Date();
document.getElementById("get").innerHTML = d.getTime();

var d = new Date();
document.getElementById("get1").innerHTML = d.getFullYear();

var d = new Date();
document.getElementById("get2").innerHTML = d.getMonth();

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("get3").innerHTML = months[d.getMonth()];

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("get4").innerHTML = days[d.getDay()];

var d = new Date();
d.setFullYear(2021);
document.getElementById("set").innerHTML = d;

document.getElementById("math").innerHTML = Math.PI;

document.getElementById("math1").innerHTML = Math.round(4.4);

document.getElementById("math2").innerHTML = Math.pow(8,2);

document.getElementById("math2").innerHTML = Math.sqrt(64);

document.getElementById("math3").innerHTML = 
"The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);

document.getElementById("random").innerHTML = Math.random();

document.getElementById("random1").innerHTML =
Math.floor(Math.random() * 10);

document.getElementById("random2").innerHTML =
Math.floor(Math.random() * 10) + 1;

function getRndInter(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function myFunction() {
	document.getElementById("greene1").innerHTML = Boolean(10 > 9)
}

function myFunction() {
	var x = 0;
	document.getElementById("greene2").innerHTML = Boolean(x);
}

var x = false;               // x is a boolean
var y = new Boolean(false);  // y is an object
document.getElementById("boolean").innerHTML =
typeof x + "<br>" + typeof y;

function myFunction() {
	var age, voteable;
	age = Number(document.getElementById("age").value);
	if (isNaN(age)) {
		voteable = "Input is not a number";
	} else {
		voteable = (age < 18) ? "Too young" :  "Old enough";
	}
	document.getElementById("iyke").innerHTML = voteable;
}

if (new Date().getHours() < 18) {
    document.getElementById("if").innerHTML = "Good day!";
}

function myFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("if1").innerHTML = greeting;
}

function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("if3").innerHTML = greeting;
}

var day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("switch").innerHTML = 
"Today is " + day;

var text;
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.getElementById("switch1").innerHTML = text;

var text;
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.getElementById("switch2").innerHTML = text;

var x = "0";

switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
document.getElementById("switch3").innerHTML = text;

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i< cars.length; i++) {
	text += cars[i] + "<br>";
}
document.getElementById("loop").innerHTML = text;

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars.length;
var text = "";

for (; i < len; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("loop1").innerHTML = text;

var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("loop3").innerHTML = txt;

var text = "";
var i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("while").innerHTML = text;

var text = ""
var i = 0;

do {
    text += "<br>The number is " + i;
    i++;
}
while (i < 10);  

document.getElementById("while1").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("con").innerHTML = text;

document.getElementById("dec").innerHTML = dec2bin(-5);
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

try {
    addalert("Welcome guest!");
}
catch(err) {
    document.getElementById("error").innerHTML = err.message;
}

function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("error1").value;
    try {
        if(x=="") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x<5) throw "too low";
        if(x>10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "input is " + err;
    }
    finally {
        document.getElementById("error1").value = "";
    }
}

var num = 1;
try {
    num.toPrecision(500);
}
catch(err) {
    document.getElementById("error2").innerHTML = err.name;
}

try {
    eval("alert('Hello)");
}
catch(err) {
    document.getElementById("error3").innerHTML = err.name;
}

myFunction();

function myFunction() {
    var carName = "Volvo";
    document.getElementById("scope").innerHTML =
    typeof carName + " " +carName;
}

document.getElementById("scope1").innerHTML =
typeof carName;

var carName = "Volvo";
myFunction();

function myFunction() {
    document.getElementById("scope2").innerHTML = 
    "i can display " + carName;
}

myFunction();

//code here can use carName as a global variable
document.getElementById("scope3").innerHTML = "I can display " + carName;

function myFunction() {
    carName = "Volvo";
}

var carName = "Volvo";

//code here can use window.carName
document.getElementById("scope4").innerHTML = "I can display " + window.carName;

x = 5; //Assign 5 to x

elem = document.getElementById("hoist"); //Find an element
elem.innerHTML = x; // Display x in the element

var x; //Declare x

var x = 5;  // Initialize x
elem = document.getElementById("hoist1");            // Find an element 
elem.innerHTML = "x is " + x + " and y is " + y;    // Display x and y
var y = 7;  // Initialize y

var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("hoist2"); // Find an element 
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;     // Assign 7 to y

// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("this").innerHTML = person.fullName();

var x = this;
document.getElementById("this1").innerHTML = x;

"use strict";
document.getElementById("this2").innerHTML = myFunction();
function myFunction() {
    return this;
}

// Create an object:
var person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
       return this;
    }
};

// Display data from the object:
document.getElementById("this3").innerHTML = person.myFunction();

var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("this4").innerHTML = x;

var x = 10;
//Here x is 10
{
    let x = 2;
    //Here x is 2
}
//Here x is 2
document.getElementById("var").innerHTML = x;

var i = 5;
for (var i = 0; i<10; i++) {
    //some statement
}
document.getElementById("let").innerHTML = i;

a = 5;
b = 6;
c = a + b;
console.log(c);

function validateForm() {
	var x = document.forms["myForm"]["fname"].value;
	if (x == "") {
		alert ("Name must be filled out");
		return false;
	}
}

function myFunction() {
	var x, text;

    //Get the value of the input field with id="validte"
    x = document.getElementById("numb").value;

    //If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
    	text = "input not valid";
    } else {
    	text = "Input OK";
    }
    document.getElementById("validate").innerHTML = text;
}

function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("validate1").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("validate1").innerHTML = "Input OK";
    } 
} 

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

document.getElementById("object").innerHTML =
person.firstName + " is " + person.age + " years old.";

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person;
x.age = 10;

document.getElementById("object1").innerHTML =
person.firstName + " is " + person.age + " years old.";

var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
delete person.age;
document.getElementById("del").innerHTML =
person.firstname + " is " + person.age + " years old.";

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("cons").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + ".";  

function findMax() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
} 
document.getElementById("max").innerHTML = findMax(4, 5, 6);

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
    counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
document.getElementById("add").innerHTML = "The counter is: " + counter;

var myElement = document.getElementById("intro");
document.getElementById("ele").innerHTML = 
"The text from the intro paragraph is " + myElement.innerHTML;

var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
document.getElementById("tag").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

document.getElementById("image").src = "assets/images/landscape.jpg";

document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
function changeText(id) {
	id.innerHTML = "Ooops!";
}

document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
    document.getElementById("sce").innerHTML = Date();
}

function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}
document.getElementById("myBtn").addEventListener("click", myFunction);

document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div2");
element.appendChild(para);

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div3");
var child = document.getElementById("p1");
element.insertBefore(para,child);

var parent = document.getElementById("div4");
var child = document.getElementById("p1");
parent.removeChild(child);

function myFunction() {
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("bom");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";