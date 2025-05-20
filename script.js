const featuredMovies = [
    {
        title: "Supernatural",
        seasons: "1-15 seasons (2005-2020)",
        cast: "Jensen Ackles (Dean Winchester), Jared Padalecki (Sam Winchester)",
        genre: "Horror, Action, Sci-Fi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        color: "#8e44ad"
    },
    {
        title: "Doctor Strange (2016)",
        seasons: "",
        cast: "Benedict Cumberbatch (Doctor Strange)",
        genre: "Action, Adventure, Fantasy",
        description: "A former neurosurgeon embarks on a journey of healing...",
        color: "#f1c40f"
    },
    {
        title: "Another Movie",
        seasons: "",
        cast: "Actor A, Actor B",
        genre: "Genre",
        description: "Description",
        color: "#3498db"
    }
];

const featuredInfo = document.querySelector('.featured-info');
const featuredImage = document.querySelector('.featured-image .placeholder-image');
const dots = document.querySelectorAll('.dot');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function updateFeaturedMovie(index) {
    const movie = featuredMovies[index];
    featuredInfo.querySelector('h2').textContent = movie.title;
    featuredInfo.querySelector('.seasons').textContent = movie.seasons;
    featuredInfo.querySelector('.cast').textContent = `Cast: ${movie.cast}`;
    featuredInfo.querySelector('.genre').textContent = `Genre: ${movie.genre}`;
    featuredInfo.querySelector('.description').textContent = movie.description;
    featuredImage.style.backgroundColor = movie.color;
    featuredImage.setAttribute('data-image-label', `Zdjęcie ${index + 1} - ${movie.title}`);

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % featuredMovies.length;
    updateFeaturedMovie(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateFeaturedMovie(index);
    });
});

updateFeaturedMovie(0);