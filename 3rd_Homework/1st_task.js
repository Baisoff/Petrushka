
//data
var name = prompt("Check Name", "Petruska");
var flag = false;
var ares;
var res;
var newName = '';
//_______

//check different types (numbers)
for (var i = 0; i < (String(name)).length; i++) {
    if (String(parseInt(name.charAt(i), 10)) != "NaN") {
        flag = true;

        break;
    }
}

//if name contains numbers then camel
if (flag == true) {
    res = (String(name)).length;
    for (var z = 0; z < res; z++) {
        var a = name[z];

        if (z % 2 == 0) {
           ares = a.toLowerCase();
        } else {
           ares = a.toUpperCase();
        }
        
        newName += ares;
    }
    res = newName;

} else {
    res = (String(name)).split("").reverse().join("");
}
alert(res);

