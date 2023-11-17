const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey",
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;