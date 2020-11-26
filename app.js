// Book constructor
function Book(title, author, isn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  console.log('test');

  e.preventDefault();
});
