const quote_box = document.getElementById("quote_box")
const text = document.getElementById("text")
const author = document.getElementById("author")
const new_quote = document.getElementById("new_quote")
const tweet = document.getElementById("tweet_quote")

 function quote() {
    try {
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log("data", data);
                function getRandomQuote () {
                    var randomNumber = Math.floor(Math.random() * (data.length));
                    var randomQuote = data[randomNumber];
                   
                    // let text = document.createElement("p")
                    text.innerText = randomQuote.text;
                    author.innerText = randomQuote.author;
                    quote_box.append(text,author);

                }	
                getRandomQuote() 
        });
    } catch (error) {
        console.log("error",error);
    }
 }
 quote();




