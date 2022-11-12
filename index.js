
const text = document.getElementById("text")
const author = document.getElementById("author")

const tweet = document.getElementById("tweet-quote")


    try {
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // console.log("data", data);
                function getRandomQuote () {
                    var randomNumber = Math.floor(Math.random() * (data.length));
                    var randomQuote = data[randomNumber];
                
                    text.innerText = randomQuote.text;
                    author.innerText = "-"+randomQuote.author;
                    
                    var newbutton = document.createElement("button")
                    button.setattribute("id", "new-quote")
                    button.text = "textContent"
                    document.getElementById("quote-box").append(text,author,newbutton);
                
                }	
                document.getElementById("new-quote").addEventListener("click", getRandomQuote())
        });
    } catch (error) {
        console.log("error",error);
    }


 





