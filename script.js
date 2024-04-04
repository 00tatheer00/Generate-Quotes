function generate() {
    var quotes = {
        "Michelangelo": '"If people knew how hard I worked to get my mastery, it wouldnt seem so wonderful after all."',
        "Pele": '"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."',
        "Margaret Thatcher": '"I do not know anyone who has got to the top without hard work. That is the recipe. It will not always get you to the top, but should get you pretty near."',
        "Stephen Hawking": '"However difficult life may seem, there is always something you can do and succeed at."',
        "Abraham Lincoln": '"Im a success today because I had a friend who believed in me and I didnt have the heart to let him down."'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[authors];

    document.getElementById(quote).innerHTML = quote;
    document.getElementById(author).innerHTML = author;
}