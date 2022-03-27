var quoteBox = document.querySelector("#quotebox");
var authorBox = document.querySelector("#authorbox");
function callQuote() {
  // Return an inspirational quote from the API and log it to the console.
  var searchCall =
    "https://favqs.com/api/quotes/?filter=inspirational&type=tag";
  console.log(searchCall);
  fetch(searchCall, {
    headers: {
      Authorization: `Token token="64434f7c59af706181286bb959dd3084"`,
    },
  })
    .then(function (response) {
      // console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      console.log(data.quotes);
      const randoNum = Math.floor(Math.random() * data.quotes.length);
      quoteBox.textContent = '"' + data.quotes[randoNum].body + '"';
      authorBox.textContent = "-- " + data.quotes[randoNum].author;
    });
}
callQuote();
