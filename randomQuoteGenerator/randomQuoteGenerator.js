async function getNewRandomQuote() {
  try {
     const url = "https://corsproxy.io/?" + encodeURIComponent("https://api.api-ninjas.com/v1/quotes");

    const response = await fetch(url, {
        headers: {
          "X-Api-Key": "YOUR_API_KEY_HERE"
        }
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }

    const data = await response.json();

    const quoteText = data[0].quote;
    const quoteAuthor = data[0].author;

    document.getElementById('random-quote-text').innerText = quoteText;
    document.getElementById('random-quote-author').innerText = `— ${quoteAuthor}`;

  } catch (error) {
    console.error("Error fetching quote:", error);
    alert("Error fetching quote!");
  }
}
