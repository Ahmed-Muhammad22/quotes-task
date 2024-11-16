arrayQuotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
];

var newIndex;
var lastIndex;
var displayedQuotes = [];

function getRandomQuotes() {

  if (displayedQuotes.length == arrayQuotes.length) {
    displayedQuotes = [];
  }
  do {
    newIndex = Math.floor(Math.random() * arrayQuotes.length);
  } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));
    
  
  lastIndex = newIndex;
  
  displayedQuotes.push(newIndex);
  
  console.log(newIndex)
  
  
    document.getElementById("quoteId").innerHTML = arrayQuotes[newIndex].quote;
    document.getElementById("authorId").innerHTML = arrayQuotes[newIndex].author;
}
