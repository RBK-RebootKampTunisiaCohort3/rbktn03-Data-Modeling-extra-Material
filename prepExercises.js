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

//  Harry Potter and the Sorcerer's Stone (J.K. Rowling)
//  Romeo and Juliet (William Shakespeare)
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson)
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors.
//  Three other books (see this list for ideas)

var book1 = {

	title: "harry Potter and the Sorcerer's Stone",
	Author: "J.K. Rowling",
	MSRP: 150,
	Genre: "science fiction",
	NumberOfPages: 501,
	Description: "tale of a little boy who has a magic power"

};

var book2 = {

	title: "Romeo and Juliet",
	Author: "William Shakespeare",
	MSRP: 220,
	Genre: "romance",
	NumberOfPages: 467,
	Description: "love story"

};

var book3 = {

	title: "Structure and Interpretation of Computer Programs", 
	Author: "Gerald Jay Sussman & Hal Abelson",
	MSRP: 350,
	Genre: "technology",
	NumberOfPages: 315,
	Description: "a book which talks about the development of computer programs"

};

// 3.You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).

function makeBook(ttl, auth, price, gnr, numPages, descr) {

return {

	title: ttl,
	Author: auth,
	MSRP: price,
	Genre: gnr,
	NumberOfPages: numPages,
	Description: descr

	};

}

// 4.Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way, for example:

// var sorcerersStone = { /* ... */ }
//  function displayBook(book) {
//        // ...
//  }
//  displayBook(sorcerersStone);
//  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
// The output string above is only an example. What information is most important to you? How can you make that information easier to read for people?

function displayBook(book) {

	return book.title + ' writen by '+ book.Author + ', is a ' + book.Genre + ' book, its number of pages is ' + book.NumberOfPages + ', it is a ' + book.Description + ', its price is ' + book.MSRP+'$' ;

}

// 5.Create an array called books that holds all of the books that you created above.

var books = [book1, book2, book3];

// 6.Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:

//  // Enter the below line into a console 'Hello /n World!'; // the 'backslash n' character is a newline
//  function displayBooks(books) {
//        // ...
//  }
//  displayBooks(books);
//  // => '1. Harry Potter and the Sorcerer's Stone... /n 2. Snow Crash, ...'

function displayBooks(arr) {

	var result = "";

	for(var i = 0; i < arr.length; i += 1) {

	result += (i + 1) + ". " + displayBook(arr[i]) + "\n"
	
	}

return result;

}

// 7.Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:

//  'Harry Potter'.toLowerCase();    // => 'harry potter'
//  'Harry Potter'.substr(0, 5);     // => 'Harry'
//   var query = 'Harry';
//  'Harry Potter'.substr(0, query.length); // => 'Harry'
//  'Harry Potter'.indexOf('Pot');  // => 6
//  'Harry Potter'.indexOf('dog');  // => -1
//  A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book –
//  and returns true if the book is a match, and false otherwise.

function searchBooks(array, query) {

	var querylower = query.toLowerCase();

	var result = '';

	for(var i = 0; i < array.length; i = i + 1) {

		for(var key in array[i]) {

			var val = array[i][key];
			
			if((val.toString().substr(0, querylower.length)) === querylower) {

				result = result + 'book' + (i + 1) + '\n' ;

			}

		}

	}

return result;

}


// 8.Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.

function removeBook(arr, bookTitle) {

	var bookTitleLwr = bookTitle.toLowerCase();

	for (var i = 0; i < arr.length ; i += 1) {
		
		if(arr[i]["title"].toLowerCase() === bookTitleLwr) {

			arr.splice(i, 1);

		}

	}

return arr;

}

// ~~~~~~~~~~~~~~~~~~~~~~ More Practice ~~~~~~~~~~~~~~~~~~~~~~

// 1.As we did before, think about what kinds of aspects of movies you would like to represent. A few ideas are: Title ,Director ,Duration ,Release Date ,Actors/Actresses ,Studio(s) ,Synopsis ,Rating

//  You can make this as detailed as you want. You also need to decide how you will store or present your data.
//  For example, you can use an array to represent the actors/actresses.
//  But if you want to include their roles, maybe you want to use something else. Did he/she win any awards?
//   Even the rating of a movie is open to interpretation –
//  is the rating from critics? Rotten Tomatoes (a famous American website that rates how good movies are)? Some combination?

// 2.Make five more movie objects using the same format you decided upon.

var movie1 = {

				title: 'black panther',
				director: 'Ryan Coogler',
				type: 'action',
				duration: 134,
				releaseDate: '16 february 2018',
				actors: [
					{name: "Chadwick Boseman",
					sex: "male",
					age: 45},

					{name: "Michael B. Jordan",
					sex: "male",
					age: 48},

					{name: "Letitia Wright",
					sex: "female",
					age: 37},

					{name: "Danai Gurira",
					sex: "male",
					age: 33}
					],

				rating: 97	
};

var movie2 = {

				title: 'unforgotten',
				director: 'Chris Lang',
				type: 'drama',
				duration: 45,
				releaseDate: '20 march 2015',
				actors: [
					{name: "Nicola Walker",
					sex: "female",
					age: 33},

					{name: "Sanjeev Bhaskar",
					sex: "male",
					age: 51},

					{name: "Lewis Reeves",
					sex: "male",
					age: 27},

					{name: "Carolina Main",
					sex: "female",
					age: 30},

					{name: "Trevor Eve",
					sex: "male",
					age: 62}
					],

				rating: 88	
};

var movie3 = {

				title: 'Under the Silver Lake',
				director: 'David Robert Mitchell',
				type: 'mystery',
				duration: 139,
				releaseDate: '19 april 2019',
				actors: [
					{name: "Andrew Garfield",
					sex: "male",
					age: 32},

					{name: "Riley Keough",
					sex: "female",
					age: 42},

					{name: "Riki Lindhome",
					sex: "female",
					age: 26},

					{name: "Tucker Meek",
					sex: "male",
					age: 19},

					{name: "Stephanie Moore",
					sex: "female",
					age: 33},

					{name: "Topher Grace",
					sex: "male",
					age: 43}
					],

				rating: 91	
};

var movie4 = {

				title: 'Sick Note',
				director: 'James Serafinowicz',
				type: 'comedy',
				duration: 78,
				releaseDate: '26 june 2017',
				actors: [
					{name: "Rupert Grint",
					sex: "male",
					age: 39},

					{name: "Nick Frost",
					sex: "male",
					age: 46},

					{name: "Karl Theobald",
					sex: "male",
					age: 34},

					{name: "Lindsay Lohan",
					sex: "female",
					age: 28},

					{name: "Miles Richardson",
					sex: "male",
					age: 40},

					{name: "Wanda Opalinska",
					sex: "female",
					age: 21},

					{name: "Daniel Rigby",
					sex: "male",
					age: 29},

					{name: "Lasco Atkins",
					sex: "male",
					age: 36}
					],

				rating: 78	
};

var movie5 = {

				title: 'The Dunwich Horror',
				director: 'Leigh Scott',
				type: 'thriller',
				duration: 91,
				releaseDate: '13 december 2009',
				actors: [
					{name: "Jeffrey Combs",
					sex: "male",
					age: 44},

					{name: "Sarah Lieving",
					sex: "female",
					age: 41},

					{name: "Dean Stockwell",
					sex: "male",
					age: 57},

					{name: "Richard Zeringue",
					sex: "male",
					age: 38},

					{name: "Lauren Michele",
					sex: "female",
					age: 25},

					{name: "Natacha Itzel",
					sex: "female",
					age: 29}
					],

				rating: 69
};

// 3. Write a factory function for movies. HINT: What is a factory function? We explained it above!

function makeMovie(ttl, direct, typ, dur, relDate, theactors, rat) {

	var act = [];

	for (var i = 0; i < theactors.length; i += 1) {
		
		act.push({name: theactors[i]['name'], sex: theactors[i]['sex'], age: theactors[i]['age']});

	}

	return {

				title: ttl,
				director: direct,
				type:typ,
				duration: dur,
				releaseDate: relDate,
				actors: act,
				rating: rat 

	};

}

// 4.Write a function displayMovie that works like displayBook, but for movies.

var movies = [movie1, movie2, movie3, movie4, movie5];

function displayMovie(movie) {

	var result = movie.actors[0]["name"] + " who is a " + movie.actors[0]["age"] + " old " + movie.actors[0]["sex"] + " actor";

	for(var i = 1; i < movie.actors.length; i += 1) {

		result += ", " + movie.actors[i]["name"] + " who is a " + movie.actors[i]["age"] + " old " + movie.actors[i]["sex"] + " actor"

	}

	return movie.title + ' directed by '+ movie.director + ', is a ' + movie.type + ' movie, its duration is ' + movie.duration + ', it was released in ' + movie.releaseDate + ' and was rated by ' + movie.rating + '. The actors who has participated in that movie are ' + result ;

}



function displayMovies(arr) {

	var result = "";

	for(var i = 0; i < arr.length; i += 1) {

	result += (i + 1) + ". " + displayMovie(arr[i]) + "\n"
	
	}

return result;

}

// 5.Write a function displayCast that displays the cast of a movie, including: Role , Actor/Actress name

function displayCasts(movie) {

var casts = '';	

	for(var i = 0; i < movie.actors.length; i = i + 1) {

	casts = casts + movie.actors[i].name + ' is a ' + movie.actors[i].sex + ' person which is ' + movie.actors[i].age + ' years old.\n';

	}

return casts;

}

// 6.Create an array to hold the movies that you created called movies, and add your movies to it.


// Done in question 4


// 7.As before, write a displayMovies function that works just like displayBooks.


// Done in question 4


// 8. Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.

// How about averageRating?

function average(array) {

	var sum = 0;

	for(var i = 0; i < array.length; i += 1) {

		sum += array[i]["duration"];

	}

return sum / array.length;

}

///////


function averageRating(array) {

	var sum = 0;

	for(var i = 0; i < array.length; i += 1) {

		sum += array[i]["rating"];

	}

return sum / array.length;

}

// 9.How about searching your movies array? Write a function that works like searchBooks, but for movies.

function searchMovies(array, query) {

	var querylower = query.toLowerCase();

	var result = '';

	for(var i = 0; i < array.length; i = i + 1) {

		for(var key in array[i]) {

			var val = array[i][key].toString().toLowerCase();


			if((val.substr(0, querylower.length)) === querylower) {

				result = result + 'movie' + (i + 1) + '\n' ;

			}

		}

	}

return result;

}



// ~~~~~~~~~~~~~~~~~~~~~~ Advanced ~~~~~~~~~~~~~~~~~~~~~~

// 1.Tagging System: Some books have multiple categories, have won awards, are on a best-seller list, or have other special characteristics. Let's incorporate a tagging system that will allow us to represent all of these. Write functions addTag and removeTag that each accept a book and a tag as parameters, and either add tags or remove tags respectively.
//  Considerations:
//  If you included a genre key, replace it with a tag.
//  What if you use addTag on a book that has no tags yet?
//  What if you attempt to use addTag with the same tag (on the same book) multiple times? Should it be possible to have the same tag twice?
//  Add some tags to multiple books, like 'bestseller' or 'pulitzer'.
//  Extend
//  Extend searchBooks to work with tags.

var newBook1 = {

	id: "SN1",
	title: "harry Potter and the Sorcerer's Stone",
	Author: "J.K. Rowling",
	MSRP: 150,
	Tag: ["science fiction"],
	NumberOfPages: 400,
	Description: "tale of a little boy who has a magic power"

};

var newBook2 = {

	id: "SN2",
	title: "Romeo and Juliet",
	Author: "William Shakespeare",
	MSRP: 220,
	Tag: ["romance"],
	NumberOfPages: 467,
	Description: "love story"

};

var newBook3 = {

	id: "SN3",
	title: "Structure and Interpretation of Computer Programs", 
	Author: "Gerald Jay Sussman & Hal Abelson",
	MSRP: 350,
	Tag: ["technology"],
	NumberOfPages: 315,
	Description: "a book which talks about the development of computer programs"

};

function addTag(object, tag) {

	result = '';

	for(var i = 0; i < object.Tag.length; i = i + 1) {

		if(object.Tag[i] === tag ) {

			return 'this tag already exists!';

		}

	}	

object.Tag.push(tag);	

return 'the new tag list is: ' + object.Tag;

};

// 2.Let's revisit your removeBooks function: what would happen if you had two books with the same title, but different authors? Would your algorithm remove both books? This is a common problem that we usually solve by providing a unique identifier for each item.

//  Modify all of your books to contain an id key with a unique value. This can be an integer or a unique string (like an ISBN).
//  Change removeBook to use the book's id for lookups instead of its title.

// 3.Can you think of a way to write a more abstract displayItem function that works for books and movies (depending on how you have structured your objects, this may or may not work well)?

// 4.Write a more general searchItems function that accepts as parameters the query, items to search, and an array of keys that should be searched. Refactor searchMovies and searchBooks to use this function.

