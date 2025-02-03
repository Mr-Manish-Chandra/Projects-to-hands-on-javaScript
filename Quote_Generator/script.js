const api_Url = "https://random-quotes-freeapi.vercel.app/api/random";
const quoteContent = document.getElementById("quote-content");
const authorName = document.getElementById("author-name");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quoteContent.innerHTML = data.quote;
    authorName.innerHTML = data.author;
}
getQuote(api_Url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteContent.innerHTML + "---- by" + authorName.innerHTML, "Tweet Window","width=600, height=300")
    //this height and width is the size of that tweeter window
}