class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(Movie) {
        return Movie.filter((movie)=> movie.rating === "PG");        
    }
}

let Movie1 = new Movie("Casion Royale","Eon Productions","PG13");
let Movie2 = new Movie("ICE AGE","20TH CENTURY FOX", "PG");
let Movie3 = new Movie("LOGAN", "20TH CENTURY FOX", "R")
let Movie4 = new Movie("THE CHRONICLES OF NARNIA", "WALT DISNEY PICTURES", "PG");
let Movie5 = new Movie("AVENGERS INFINITY WAR", "MARVEL STUDIOS", "PG13");
let Movie6 = new Movie();

console.log(`Movies with rating PG are:`)
console.log((Movie6.getPG([Movie1,Movie2,Movie3,Movie4,Movie5,Movie6])).map((e)=>e.title).join(", "))