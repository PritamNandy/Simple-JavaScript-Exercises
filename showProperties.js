// Will show the string element properties of an object

let movie = {
    Name: 'Forrest Gump',
    Year: 1994,
    Director: 'Robert Zemeckis',
    Rating: 8.8
};

showProperties(movie)

function showProperties(movie) {
    for (let key in movie) {
        if(typeof movie[key] === 'string')
            console.log(key,': ', movie[key]);
    }
}


