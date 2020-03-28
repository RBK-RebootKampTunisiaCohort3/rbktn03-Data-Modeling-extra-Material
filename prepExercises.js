// /\/\/\/\/\/\/\/\/\/\ Exercises /\/\/\/\/\/\/\/\/\/\

// ~~~~~~~~~~~~~~~~~~~~~~ Basic Requirments ~~~~~~~~~~~~~~~~~~~~~~

// 0.Some Terms to know:

//  Data: Strings, booleans, numbers, arrays and objects.
//  Model: A way of representing something as data.
//  Instance: A single representation of something as using a model. For our purposes, this will be an object.
//  Factory function: A function that outputs instances of a model.

// 1. Think about some different attributes of books – what do all books have? Ideas include:
//
//  Title
//  Author
//  MSRP
//  Genre
//  Number of Pages
//  Description

// 2.In terms of the properties of books that you thought of, represent the following books as data:
//  Harry Potter and the Sorcerer's Stone (J.K. Rowling)
//  Romeo and Juliet (William Shakespeare)
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson)
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors.
//  Three other books (see this list for ideas)
var book1 = {
	name: "Harry Potter and the Sorcerer's Stone";,
	author: "J.K. Rowling",
	genre: "Fantasy",
	"number of pages": 223,
	price:  "$11.99"
}

var book2 = {
	name: "Romeo and Juliet",
	author: "William Shakespeare",
	genre: 	"Shakespearean tragedy",
	"number of pages": "480",
	price: 	"$14.99"
}

var book3 = {
	name: "Structure and Interpretation of Computer Programs",
	author: {author1: "Gerald Jay Sussman", author2: "Hal Abelson"},
	genre: "Textbook",
	"number of pages": 657,
	price: "$54"
}
// 3.You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). 
//Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure 
//(we call this a factory function).
function makeBook(name, auth1, auth2, genre, nofPages, price) {
	var auth;
	if (auth1 === " ")
		auth = auth2;
	else if (auth2 === " ")
		auth = auth1;
	else auth = {author1: auth1, author2: auth2};
	return {
		name: name,
		author: auth,
		genre: genre,
		"number of pages": nofPages,
		price: price
	}
}
// 4.Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have,
// but it will be easier to have a function to display the more important information easily.
// Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way, for example:
// var sorcerersStone = { /* ... */ }
//  function displayBook(book) {
//        // ...
//  }
//  displayBook(sorcerersStone);
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
// The output string above is only an example. What information is most important to you? How can you make that information easier to read for people?
function displayBook(book){
	let author;
	if (typeof book.author === "object")
		author = book.author.author1 + " and " + book.author.author1;
	else author = book.author;
	return book.name + ", " + "by " + author + ' --' + book.genre + ", " + book.price + '.'
}
// 5.Create an array called books that holds all of the books that you created above.
books = [book1, book2, book3]
// 6.Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books,
// returns a single string consisting of all of the books. Use the function displayBook to format all of the books. 
//Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in 
//the console. The newline character is specified with a special escaped character in a string:

//  // Enter the below line into a console 'Hello /n World!'; // the 'backslash n' character is a newline
//  function displayBooks(books) {
//        // ...
//  }
//  displayBooks(books);
//  // => '1. Harry Potter and the Sorcerer's Stone... /n 2. Snow Crash, ...'
function displayBooks(array){
	let author;
    let result = "";
    for(let i = 0; i < array.length; i++) {
	if (typeof array[i].author === "object")
		author = array[i].author.author1 + " and " + array[i].author.author2;
	else author = array[i].author;
	result += array[i].name + ", " + "by " + author + ' --' + array[i].genre + ", " + array[i].price + '.\n'}
return result
}
// 7.Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. 
//You will decide what way you want to write your search algorithm. 
//Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously 
//(it might be best to start with one field, e.g.title)? 
//Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:

//  'Harry Potter'.toLowerCase();    // => 'harry potter'
//  'Harry Potter'.substr(0, 5);     // => 'Harry'
//   var query = 'Harry';
//  'Harry Potter'.substr(0, query.length); // => 'Harry'
//  'Harry Potter'.indexOf('Pot');  // => 6
//  'Harry Potter'.indexOf('dog');  // => -1
//  A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book –
//  and returns true if the book is a match, and false otherwise.
function isMatch(books, name) {					// this function searches for any query, that matches the name of book, author, genre
	let values;														// It could be a part of the name like pot or part of the author name like Jay	
	if (typeof name === "string") {
		name = name.toLowerCase();
		for (let j = 0; j < books.length; j++) {
			values = Object.values(books[j]);
			for (let i = 0; i < values.length; i++) {
				if (typeof values[i] === "object") {
					values[i] = Object.values(values[i]);
					for (let n = 0; n < values[j][i].length; n++) {
						if (values[i][n].toLowerCase().indexOf(name) !== -1)
						return true;
					}
				}	
				else if (typeof values[i] === "string") {
					if (values[i].toLowerCase().indexOf(name) !== -1)
						return true;
				}
			}
		}	
	}	
	return false
}

// 8.Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with 
//the provided title.
function removeBook(array, book) {
	let check = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i].name.toLowerCase() === book.toLowerCase()) {
			array.splice(i,1);
			check++;
		}
	}
	if(check === 0)
		return "Name doesn't exist";
	 return array;
}
// ~~~~~~~~~~~~~~~~~~~~~~ More Practice ~~~~~~~~~~~~~~~~~~~~~~

// 1.As we did before, think about what kinds of aspects of movies you would like to represent. 
//A few ideas are: Title ,Director ,Duration ,Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating
//  You can make this as detailed as you want. You also need to decide how you will store or present your data.
//  For example, you can use an array to represent the actors/actresses.
//  But if you want to include their roles, maybe you want to use something else. Did he/she win any awards?
//   Even the rating of a movie is open to interpretation –
//  is the rating from critics? Rotten Tomatoes (a famous American website that rates how good movies are)? Some combination?
var movie1 = {
	title: "Mirage"
	genre: ["Drama", "Mystery", "Romance" ],
	"release date": 2018,
	rating: 0.75,
	cast: {actor1: {name: "Mario Casas", role: "Vera Roy" }, actor2: {name: "Bárbara Lennie", role: "Inspector Leyra"}},
	duration: 128
}
var movie2 = {
	title: "The invisible guest",
	genre: ["Crime", "Mystery", "Thriller" ],
	"release date": 2016,
	rating: 0.67,
	cast: {actor1: {name: "Mario Casas", role: "Adrián Doria, successful businessman, husband and father"}, 
					actor2: {name: "Bárbara Lennie", role: "Laura Vidal, Adrián's lover" }},
	duration: 106
}

var movie3 = {
	title: "The platform",
	genre: ["Horror", "Sci-Fi", "Thriller"],
	"release date": 2019,
	rating: 0.83,
	cast: {actor1 : {name:"Iván Massagué", role: "Goreng"}, actor2: { name: "Zorion Eguileor", role: "Trimagasi" }}
	duration: 94
}
// 2.Make five more movie objects using the same format you decided upon.
// 3. Write a factory function for movies. HINT: What is a factory function? We explained it above!
function makeMovie (title, [g1, g2, g3], releasedate, rating, [name1, role1, name2, role2],duration) {
	return {
		title: title,
		genre: [g1, g2, g3],
		"release date": releasedate,
		rating: rating,
		cast: {actor1 : {name: name1, role: role1}, actor2: { name: name2, role: role2 }},
		duration: duration
	}
}

// 4.Write a function displayMovie that works like displayBook, but for movies.
function displayMovie(movie){
	return movie.title + " - " +  movie["release date"] + ", Genre: " + movie.genre[0] + "."
}
// 5.Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name
function displayCast(movie){
	return movie.cast.actor1.name + " as " + movie.cast.actor1.role + " and " + 
	movie.cast.actor2.name + " as " + movie.cast.actor2.role + ".";
}
// 6.Create an array to hold the movies that you created called movies, and add your movies to it.

// 7.As before, write a displayMovies function that works just like displayBooks.

// 8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and 
// output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.

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
