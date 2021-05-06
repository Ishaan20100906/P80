name_of_guests_array = [];
function submit() {
    var Guestname = document.getElementById("textinput1").value;
    name_of_guests_array.push(Guestname);
    document.getElementById("list").innerHTML = name_of_guests_array;
}
function sorting() {
    name_of_guests_array.sort();
    document.getElementById("sortlist").innerHTML = name_of_guests_array.join("<br>");
}
function show() {
    document.getElementById("showlist").innerHTML = name_of_guests_array.join("<br>");
}
function searching() {
    var s = document.getElementById("searchinput").value;
    var found = 0;
    var j;
    for(j=0; j<name_of_guests_array.length; j++)
    {
        if(s==name_of_guests_array[j]){
            found=found+1;
        }
    }
    document.getElementById("output").innerHTML = "name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}