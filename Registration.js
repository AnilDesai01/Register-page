$(document).ready(function() {
    $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var mob = $("#mob").val();
    var usr = $("#usr").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    var add = $("#add").val();
    if (name == '' || email == '' || mob == '' || usr == '' || password == '' || cpassword == '' || add == '') {
    alert("Please fill all fields...!!!!!!");
    }
    else if ((mob.length) <= 10) {
        alert("mobile number  should atleast 10 numbers in length...!!!!!!");
        }
        else if ((usr.length) == 6) {
            alert("USERname  should atleast 6 character in length...!!!!!!");
            }
    
    else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
    alert("Your passwords don't match. Try again?");
    } 
     else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length...!!!!!!");
    }
    
    else {
    $.post("regi.html", {
    name1: name,
    email1: email,
    password1: password
    }, function(data) {
    if (data == 'You have Successfully Registered.....') {
    $("form")[0].reset();
    }
    alert(data);
    });
    } 
    });
    });