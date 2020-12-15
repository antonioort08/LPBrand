var onSuccess = function(data) {
        if (data[data.length - 1].source != 'agent') {
            var q = data[data.length - 1].text;
            var e = document.getElementById('info')
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   document.getElementById("info").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("GET", `https://www.omdbapi.com/?t=${q}&apikey=8b20a637`, true);
            xhttp.send();
        }
        console.log(data);
    };

var onError = function(err){
	//do something
};

var pathToData = "chatTranscript.lines";

lpTag.agentSDK.get(pathToData, onSuccess, onError);
