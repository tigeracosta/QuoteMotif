/****************************************************
 * 1. Define 100 Quotes in an Array
 *    Each quote has a 'text' and a 'category'
 ****************************************************/
const quotes = [
  // -- Success (25 unique) --
  { text: "Success is not final; failure is not fatal.", category: "success" },
  { text: "The road to success is always under construction.", category: "success" },
  { text: "Success usually comes to those who are too busy to look for it.", category: "success" },
  { text: "Opportunities don't happen. You create them.", category: "success" },
  { text: "Don't be afraid to give up the good to go for the great.", category: "success" },
  { text: "I find that the harder I work, the more luck I seem to have.", category: "success" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", category: "success" },
  { text: "The only place where success comes before work is in the dictionary.", category: "success" },
  { text: "Success isn't about the end result, it's about what you learn along the way.", category: "success" },
  { text: "Fall seven times and stand up eight.", category: "success" },
  { text: "Small daily improvements over time lead to stunning results.", category: "success" },
  { text: "The way to get started is to quit talking and begin doing.", category: "success" },
  { text: "If you really look closely, most overnight successes took a long time.", category: "success" },
  { text: "In the middle of difficulty lies opportunity.", category: "success" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", category: "success" },
  { text: "Some people dream of success while others wake up and work.", category: "success" },
  { text: "Action is the foundational key to all success.", category: "success" },
  { text: "Success seems to be connected with action. Successful people keep moving.", category: "success" },
  { text: "Belief in oneself is one of the most important bricks in building any successful venture.", category: "success" },
  { text: "Don't watch the clock; do what it does. Keep going.", category: "success" },
  { text: "A goal is a dream with a deadline.", category: "success" },
  { text: "The secret of your success is determined by your daily agenda.", category: "success" },
  { text: "Failures are finger posts on the road to achievement.", category: "success" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", category: "success" },
  { text: "It always seems impossible until it’s done.", category: "success" },

  // -- Happiness (25 unique) --
  { text: "Happiness depends upon ourselves.", category: "happiness" },
  { text: "Happiness is a direction, not a place.", category: "happiness" },
  { text: "The purpose of our lives is to be happy.", category: "happiness" },
  { text: "Happiness is not something ready made. It comes from your own actions.", category: "happiness" },
  { text: "The secret of happiness is freedom, the secret of freedom is courage.", category: "happiness" },
  { text: "For every minute you are angry you lose sixty seconds of happiness.", category: "happiness" },
  { text: "Happiness is where we find it, but very rarely where we seek it.", category: "happiness" },
  { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", category: "happiness" },
  { text: "True happiness is to enjoy the present, without anxious dependence upon the future.", category: "happiness" },
  { text: "Happiness is not by chance, but by choice.", category: "happiness" },
  { text: "Count your age by friends, not years. Count your life by smiles, not tears.", category: "happiness" },
  { text: "Happiness is the interval between periods of unhappiness.", category: "happiness" },
  { text: "Happiness grows at our own firesides, and is not to be picked in strangers’ gardens.", category: "happiness" },
  { text: "Happiness is when what you think, what you say, and what you do are in harmony.", category: "happiness" },
  { text: "If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.", category: "happiness" },
  { text: "Happiness is a journey, not a destination.", category: "happiness" },
  { text: "There is only one happiness in this life, to love and be loved.", category: "happiness" },
  { text: "Happiness can exist only in acceptance.", category: "happiness" },
  { text: "The biggest adventure you can ever take is to live the life of your dreams.", category: "happiness" },
  { text: "Doing what you like is freedom. Liking what you do is happiness.", category: "happiness" },
  { text: "To be happy, we must not be too concerned with others.", category: "happiness" },
  { text: "Most folks are as happy as they make up their minds to be.", category: "happiness" },
  { text: "Think of all the beauty still left around you and be happy.", category: "happiness" },
  { text: "The secret of happiness is to admire without desiring.", category: "happiness" },

  // -- Motivation (25 unique) --
  { text: "Believe you can and you're halfway there.", category: "motivation" },
  { text: "Your limitation—it’s only your imagination.", category: "motivation" },
  { text: "Push yourself, because no one else is going to do it for you.", category: "motivation" },
  { text: "Sometimes later becomes never. Do it now.", category: "motivation" },
  { text: "Great things never come from comfort zones.", category: "motivation" },
  { text: "Dream it. Wish it. Do it.", category: "motivation" },
  { text: "Success doesn’t just find you. You have to go out and get it.", category: "motivation" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", category: "motivation" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", category: "motivation" },
  { text: "Wake up with determination. Go to bed with satisfaction.", category: "motivation" },
  { text: "Do something today that your future self will thank you for.", category: "motivation" },
  { text: "Little things make big days.", category: "motivation" },
  { text: "It’s going to be hard, but hard does not mean impossible.", category: "motivation" },
  { text: "Don’t wait for opportunity. Create it.", category: "motivation" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", category: "motivation" },
  { text: "The key to success is to focus on goals, not obstacles.", category: "motivation" },
  { text: "Keep going. Everything you need will come to you at the perfect time.", category: "motivation" },
  { text: "Challenges are what make life interesting; overcoming them is what makes life meaningful.", category: "motivation" },
  { text: "Be stronger than your excuses.", category: "motivation" },
  { text: "It always seems impossible until it’s done.", category: "motivation" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", category: "motivation" },
  { text: "If you can dream it, you can do it.", category: "motivation" },
  { text: "No pressure, no diamonds.", category: "motivation" },
  { text: "Small progress is still progress.", category: "motivation" },

];

/****************************************************
 * Global Variables
 ****************************************************/
let filteredQuotes = [...quotes]; // Will be updated based on category
const quoteTextElement = document.getElementById("quote-text");
const categorySelect = document.getElementById("categorySelect");
const getQuoteButton = document.getElementById("get-quote");
const saveButton = document.getElementById("save-quote");
const shareButton = document.getElementById("share-quote");
const savedQuotesList = document.getElementById("saved-quotes");

/****************************************************
 * 2. Filtering Quotes by Category
 ****************************************************/
function filterQuotes() {
  const selectedCategory = categorySelect.value;
  if (selectedCategory === "all") {
    filteredQuotes = [...quotes];
  } else {
    filteredQuotes = quotes.filter((quote) => quote.category === selectedCategory);
  }
}

/****************************************************
 * 3. Display a Random Quote with Fade-in
 ****************************************************/
function displayRandomQuote() {
  if (filteredQuotes.length === 0) {
    quoteTextElement.textContent = "No quotes available for this category.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex].text;

  // Remove fade-in class to reset the animation
  quoteTextElement.classList.remove("fade-in");

  // Trigger reflow (hack to restart the animation)
  void quoteTextElement.offsetWidth;

  // Set new quote text
  quoteTextElement.textContent = randomQuote;

  // Add fade-in class to start the animation
  quoteTextElement.classList.add("fade-in");
}

/****************************************************
 * 4. Save and Display Saved Quotes
 ****************************************************/
function saveQuote() {
  const currentQuote = quoteTextElement.textContent.trim();
  if (!currentQuote || currentQuote === "No quotes available for this category.") return;

  const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  // Avoid duplicating the same quote
  if (!savedQuotes.includes(currentQuote)) {
    savedQuotes.push(currentQuote);
    localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
    displaySavedQuotes();
  }
}

function displaySavedQuotes() {
  const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  savedQuotesList.innerHTML = savedQuotes
    .map((quote, index) => {
      return `
        <li>
          <span>${quote}</span>
          <button class="delete-quote" onclick="deleteQuote(${index})">Delete</button>
        </li>
      `;
    })
    .join("");
}

function deleteQuote(index) {
  const savedQuotes = JSON.parse(localStorage.getItem("savedQuotes")) || [];
  savedQuotes.splice(index, 1);
  localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
  displaySavedQuotes();
}

/****************************************************
 * 5. Share the Current Quote (Web Share API)
 ****************************************************/
function shareQuote() {
  const currentQuote = quoteTextElement.textContent.trim();
  if (!currentQuote || currentQuote === "No quotes available for this category.") return;

  if (navigator.share) {
    navigator
      .share({
        title: "Inspiration Generator",
        text: currentQuote,
        url: window.location.href, // Optional: link back to your site
      })
      .then(() => console.log("Quote shared successfully!"))
      .catch((err) => console.error("Error sharing quote:", err));
  } else {
    alert("Sharing is not supported on this browser.");
  }
}

/****************************************************
 * 6. Event Listeners
 ****************************************************/
// Update filter whenever user changes the dropdown
categorySelect.addEventListener("change", () => {
  filterQuotes();
  displayRandomQuote();
});

// Get a new quote on button click
getQuoteButton.addEventListener("click", displayRandomQuote);

// Save the current quote
saveButton.addEventListener("click", saveQuote);

// Share the current quote
shareButton.addEventListener("click", shareQuote);

// Load saved quotes from localStorage at startup
displaySavedQuotes();

// Initial filter & quote display
filterQuotes();
displayRandomQuote();
