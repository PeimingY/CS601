//an self-invoking function that sets and event handler on button
(function() {
    var httpRequest;
    document.getElementById("btn").onclick = function(){makeRequest("https://peimingy.github.io/CS601/myDegrees.json");
    };
    //creates new XMLHTTPRequest obj
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        if(!httpRequest){
            alert("Something went wrong when creating an XMLHTTP instance");
            return false;
        }
        //handle server response
        httpRequest.onreadystatechange = alertContents;
        //make request
        httpRequest.open("GET", url);
        httpRequest.send();
    }
    function alertContents(){
        if(httpRequest.readyState ===XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                document.write(httpRequest.responseText);
            }
        }else {
            alert("There was a problem with the request!");

        }
    }
    /**
    function displayRes(degreeArr) {
        var output = "";
        var i;
        for (i = 0; i < degreeArr.length; i++) {
            output += " " + degreeArr[i] + " ";
        }
        alert(output);
    }
             */
})();
