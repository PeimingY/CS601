
var httpRequest;
var myDegreeArr;

window.onload = function() {
    document.getElementById("btn").onclick = function () {
        makeRequest();
    };
}
    //creates new XMLHTTPRequest obj
    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        if(!httpRequest){
            alert("Something went wrong when creating an XMLHTTP instance");
            return false;
        }
        //handle server response
        httpRequest.onreadystatechange = alertContents;
        //make request
        httpRequest.open("GET", "https://peimingy.github.io/CS601/myDegrees.json");
        httpRequest.send();
    }

    function alertContents(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
               let jsonResponse = JSON.parse(httpRequest.responseText);
               myDegreeArr = jsonResponse.my_degrees;
               //document.getElementById("res").innerHTML = httpRequest.responseText;
                //display(jsonResponse);
               createTable();
            }else {
                alert("There was a problem with the request!");
            }
        }
    }
    /** for debugging
function display(arr){
    var newContent = "";
    for(var i = 0; i < arr.my_degrees.length; i++){
        newContent += ""+arr.my_degrees[i].degree.school;
    }
    document.getElementById("res").innerHTML = newContent;
}

*/

function createTable() {
    var cols = [];
    var i;
    let content = ""
    //for (i = 0; i < myDegreeArr.length; i++){
        for (var key in myDegreeArr[0].degree) {
            if (cols.indexOf(key) === -1) {
                // Push all keys to the array
                cols.push(key);
            }
        }

    //}

    // Create a table element
    var table = document.createElement("table");

    // Create table row tr element of a table
    var tr = table.insertRow(-1);

    for (i = 0; i < cols.length; i++) {

        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];

        // Append columnName to the table row
        tr.appendChild(theader);
    }

    // Adding the data to the table
    for (var i = 0; i < myDegreeArr.length; i++) {
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
            //content +=  myDegreeArr[i].degree[cols[j]] + "<br>";
            // Inserting the cell at particular place
            cell.innerHTML = myDegreeArr[i].degree[cols[j]];
        }
    }
        //document.getElementById("res").innerHTML = content;

    //Add the newely created table containing json data
    var el = document.getElementById("table");
    el.innerHTML = "";
    let htmlTableElement = el.appendChild(table);
}
