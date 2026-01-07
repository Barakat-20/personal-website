const colors = [
  ["#FF8080", "#3d2202ff"],
  ["#FFF3DA", "#2f55d1ff"],
  ["#1b6653ff", "#82A0D8"],
  ["#28190cff", "#90de3eff"],
  ["#e7eff6ff", "#7e4b0bff"],
  ["#b7b7b7ff", "#522005ff"],
  ["#FFDEB4", "#953c3cff"],
  ["#FFAACF", "#B9F3E4"],
  ["#173221ff", "#4e792bff"],
  ["#F7ECDE", "#54BAB9"],
  ["#7897AB", "#2f111cff"],
  ["#B97A95", "#1299ceff"]
];

const apiKey = "oyD7uKaqU9VsDvCbXk7HjruDVBdx4HM9Tm5Abnhl";

function randomNumber(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

async function getNewRandomQuote() {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: { "X-Api-Key": apiKey }
    });

    if (!response.ok) throw new Error("Network response was not ok " + response.status);

    const data = await response.json();

   
    const quoteText = data[0].quote;
    const quoteAuthor = data[0].author;
    document.getElementById("random-quote-text").innerHTML = quoteText;
    document.getElementById("random-quote-author").innerHTML = quoteAuthor;
  
    const colorCombo = randomNumber(colors);
    const container = document.getElementById("random-quote-generator");
    container.style.background = `linear-gradient(45deg, ${colorCombo[0]}, ${colorCombo[1]})`;
 
}
