function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(xmlhttp.responseText, "text/xml");
      $("#new-button").empty();
      document.getElementById("quote").innerHTML =
        "\"" + xmlDoc.getElementsByTagName("quote")[0].childNodes[0].nodeValue + "\"</br></br>" + "by " + "<span style='color:#26A65B;text-shadow: 1px 1px 1px #000;'>" + xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue + "</span>";
  twttr.ready( function() {
    twttr.widgets.createShareButton(
    'http://bit.ly/1lWL0Tj',
  document.getElementById('new-button'),
  {
    count: 'none',
    text: xmlDoc.getElementsByTagName("quote")[0].childNodes[0].nodeValue
  }).then(function (el) {
    console.log("Button created.")
  })});
    }
  };
  xmlhttp.open("GET", "http://www.stands4.com/services/v2/quotes.php?uid=4641&tokenid=TbSluXmnO1aFDnbS", true);
  xmlhttp.send();
}