// /\/\/\/\/\/\/\/\/\/\ Exercises /\/\/\/\/\/\/\/\/\/\

// ~~~~~~~~~~~~~~~~~~~~~~ Basic Requirments ~~~~~~~~~~~~~~~~~~~~~~

// 0.Some Terms to know:

//  Data: Strings, booleans, numbers, arrays and objects.
//  Model: A way of representing something as data.
//  Instance: A single representation of something as using a model. For our purposes, this will be an object.
//  Factory function: A function that outputs instances of a model.

// 1. Think about some different attributes of books – what do all books have? Ideas include:

//  Title
//  Author
//  MSRP
//  Genre
//  Number of Pages
//  Description

// 2.In terms of the properties of books that you thought of, represent the following books as data:
var book1 = {
	title: 'Harry Potter and the Sorcerer\'s Stone',
	author: ['J.K.Rowling'],
	msrp: '6,5 $',
	genre: 'fantasy',
	numberOfPages:  '223',
	description: 'A young wizard that fights a powerful wizard that killed his parents.'
};
var book2 = {
	title: 'Romeo and Juliet',
	author: ['William Shakespeare'],
	msrp: '5,34 $',
	genre: 'Romance',
	numberOfPages:  '480',
	description: 'Two lovers that go through the forbidden love experience'
};
var book3 = {
	title: 'Structure and Interpretation of Computer Programs',
	author: ['Gerald Jay Sussman', 'Hal Abelson'],
	msrp: '51,00 $',
	genre: 'Textbook',
	numberOfPages:  '657',
	description: ' It teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and programming language design and implementation'
};
//  Harry Potter and the Sorcerer's Stone (J.K. Rowling)
//  Romeo and Juliet (William Shakespeare)
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson)
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors.
//  Three other books (see this list for ideas)

// 3.You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
function makeBook(title, author, msrp, genre, numberOfPages, description){
	return {
		title: title,
		authors: author,
		msrp: msrp,
		genre: genre,
		numberOfPages: numberOfPages,
		description: description  
	};
}
// 4.Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way, for example:

// var sorcerersStone = { /* ... */ }
function displayBook(book) {
   return book.title + ', by ' + book.author + ' -- ' + book.genre + ', ' + book.msrp;
}
//  displayBook(sorcerersStone);
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
// The output string above is only an example. What information is most important to you? How can you make that information easier to read for people?

// 5.Create an array called books that holds all of the books that you created above.
var books = [book1, book2, book3];
// 6.Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:

//  // Enter the below line into a console 'Hello /n World!'; // the 'backslash n' character is a newline
function displayBooks(books) {
	var display = "";
	for(var i = 0; i < books.length; i++){
		display += (i + 1) + '. ' + displayBook(books[i]) + '\n';
	}
   return display;
}
//  displayBooks(books);
//  // => '1. Harry Potter and the Sorcerer's Stone... /n 2. Snow Crash, ...'

// 7.Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:
function searchBooks(query, books){
	var matchingBook = "";
	for(var i = 0; i < books.length; i++){
		if(isMatch(query, books[i]) === true){
		matchingBook += 'Match found:  '+(i + 1) + '. ' + displayBook(books[i]) + '\n';
		}
	}
	return matchingBook;
}
//  'Harry Potter'.toLowerCase();    // => 'harry potter'
//  'Harry Potter'.substr(0, 5);     // => 'Harry'
//   var query = 'Harry';
//  'Harry Potter'.substr(0, query.length); // => 'Harry'
//  'Harry Potter'.indexOf('Pot');  // => 6
//  'Harry Potter'.indexOf('dog');  // => -1
//  A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book –
//  and returns true if the book is a match, and false otherwise.
function isMatch(query, book){
	if(book.title.match(query)){
		return true;
	}
		return false;		
}
// 8.Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.
function removeBook(title, books){
	var newBooks = [];
	for(var i = 0; i < books.length; i++){
		if(isMatch(title, books[i]) === false){
			newBooks.push(books[i]);		
		}
	}		  
		return newBooks;
}
// ~~~~~~~~~~~~~~~~~~~~~~ More Practice ~~~~~~~~~~~~~~~~~~~~~~

// 1.As we did before, think about what kinds of aspects of movies you would like to represent. A few ideas are: Title ,Director ,Duration ,Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating
function makeMovies(title, director,duration,releaseDate,actorOrActresses,rating){
	return {
		title: title,
		director: director,
		duration: duration,
		releaseDate: releaseDate,
		actorOrActresses: actorOrActresses,
		rating: rating
	}
}
//  You can make this as detailed as you want. You also need to decide how you will store or present your data.
//  For example, you can use an array to represent the actors/actresses.
//  But if you want to include their roles, maybe you want to use something else. Did he/she win any awards?
//   Even the rating of a movie is open to interpretation –
//  is the rating from critics? Rotten Tomatoes (a famous American website that rates how good movies are)? Some combination?

// 2.Make five more movie objects using the same format you decided upon.

// 3. Write a factory function for movies. HINT: What is a factory function? We explained it above!

// 4.Write a function displayMovie that works like displayBook, but for movies.

// 5.Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name

// 6.Create an array to hold the movies that you created called movies, and add your movies to it.

// 7.As before, write a displayMovies function that works just like displayBooks.

// 8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.

// How about averageRating?

// 9.How about searching your movies array? Write a function that works like searchBooks, but for movies.

// ~~~~~~~~~~~~~~~~~~~~~~ Advanced ~~~~~~~~~~~~~~~~~~~~~~

// 1.Tagging System: Some books have multiple categories, have won awards, are on a best-seller list, or have other special characteristics. Let's incorporate a tagging system that will allow us to represent all of these. Write functions addTag and removeTag that each accept a book and a tag as parameters, and either add tags or remove tags respectively.

//  Considerations:
//  If you included a genre key, replace it with a tag.
//  What if you use addTag on a book that has no tags yet?
//  What if you attempt to use addTag with the same tag (on the same book) multiple times? Should it be possible to have the same tag twice?
//  Add some tags to multiple books, like 'bestseller' or 'pulitzer'.
//  Extend
//  Extend searchBooks to work with tags.

// 2.Let's revisit your removeBooks function: what would happen if you had two books with the same title, but different authors? Would your algorithm remove both books? This is a common problem that we usually solve by providing a unique identifier for each item.

//  Modify all of your books to contain an id key with a unique value. This can be an integer or a unique string (like an ISBN).
//  Change removeBook to use the book's id for lookups instead of its title.

// 3.Can you think of a way to write a more abstract displayItem function that works for books and movies (depending on how you have structured your objects, this may or may not work well)?

// 4.Write a more general searchItems function that accepts as parameters the query, items to search, and an array of keys that should be searched. Refactor searchMovies and searchBooks to use this function.
