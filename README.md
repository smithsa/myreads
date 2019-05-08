# MyReads Project

MyReads is a React application that tracks and sorts the books you've read and helps you find more books. The shelves are categorized into the following shelves: ‘Currently Reading’, ‘Want to Read’, ‘Read.’ The user can also search a collection of books to find more books to categorize. The application uses an Restful API provided by Udacity.

## Prerequisites

- [Node Package Manager (NPM)](https://www.npmjs.com)

## Installation

1. Clone the repository
	```
	git clone git@github.com:smithsa/myreads.git
	```

2. Navigate into the *scales* directory
	```
	cd myreads
	```

3. Install the dependencies via NPM
	```
	npm install
	``` 
4. Start the development server
	```
	npm start
	``` 

## What’s Included?
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── images
	├── thumbnail.jpg # placeholder image for books that have no thumbnail
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # 
    ├── BookShelf.js # 
    ├── BookShelfChanger.js # 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── ListBooks.js # 
    ├── SearchBooks.js # 
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Usage

With the app users can perform 3 main tasks (1) sort books on bookshelves (2) search for new books, and (3) add new found books to bookshelves.

** 1. Sort Books **

![Sort books demo](src/images/documentation/sort-books?raw=true)

** 2. Search Books **
![Search books demo](src/images/documentation/search-books?raw=true)

** 3. Add Book to Shelf **
![Add book to shelf demo](src/images/documentation/add-from-search?raw=true)


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Built With

- [Create React App](https://github.com/facebook/create-react-app)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Contributing

This repository is the is for a Udacity course. Therefore, I most likely will not accept pull requests.
