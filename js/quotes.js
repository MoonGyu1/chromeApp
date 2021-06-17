const quotes = [
    {
        quote: "Whenever you are asked if you can do a job, \ntell 'em, 'Certainly I can!' \nThen get busy and find out how to do it.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Learning without thought is labor lost; \nthought without learning is perilous.",
        author: "Confucius",
    },
    {
        quote: "You always pass failure on the way to success.",
        author: "Mickey Rooney",
    },
    {
        quote: "The moment of victory is much too short to live for that and nothing else.",
        author: "Martina Navratilova",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "We improve ourselves by victories over ourself. \nThere must be contests, and you must win.",
        author: "Edward Gibbon",
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey",
    },
    {
        quote: "We all have big changes in our lives that are more or less a second chance.",
        author: "Harrison Ford",
    },
    {
        quote: "For myself I am an optimist - it does not seem to be much use being anything else.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "To truly laugh, you must be able to take your pain, and play with it!",
        author: "Charlie Chaplin",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;
