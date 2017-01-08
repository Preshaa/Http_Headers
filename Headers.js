$(document).ready( function() {
  $("#click").click( function() {
    var xhttp = new XMLHttpRequest();
    var url = $("#url").val();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("get_headers").innerHTML = this.getAllResponseHeaders();
      }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
  });
});

//This is another script to get HTTP Headers.

/*$(document).ready( function() {
  $("#click").click( function() {
    $.ajax({
      type: "GET",
      url: $("#url").val(),
      complete: function(resp) {   
        document.getElementById("get_headers").innerHTML = resp.getAllResponseHeaders();
      }
    });
  });
});*/