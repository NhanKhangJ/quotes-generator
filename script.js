let quotes = [
    `Captain America: the winter solider`,
    `Avenger Endgame`,
    `Iron Man 3`,
    `Loki the serries`,
    `Thor 3`,
    `WandaVision`
];
//when the got loaded this code will run
document.addEventListener("DOMContentLoaded", function (event) {
    // Random quote of the day generator
    const randomQuote = function () {
        document.querySelector('#quote-of-the-day').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
    };
    randomQuote();
    // Part 1 main title
    document.querySelector('#main-title').textContent = 'Marvel Movies Generator';
    // Part 3 favorite list Items create a list  
    const favoriteThings = document.querySelectorAll('#favorite-things > li')

    document.querySelectorAll('.special-title').forEach((item) => {
        item.style.fontSize = '2rem'
    })
    let contribute = document.querySelector('#form-ctrl').lastElementChild;
    contribute.addEventListener('click', e => {
        let actorName = document.querySelector('#form-ctrl > input:nth-of-type(1)')
        let history = document.querySelector('#form-ctrl > input:nth-of-type(2)')
        const li = document.createElement('li')
        li.textContent = actorName.value;
        document.querySelector('#past-races').appendChild(li)
        const blogPost = document.createElement('div')
        blogPost.classList.add('blog-post')
        const heading = document.createElement('h2')
        heading.textContent = actorName.value;
        const pEl = document.createElement('p')
        pEl.textContent = history.value;
        //append the blog spot div to the element has the main class
        document.querySelector('.main').appendChild(blogPost)
        blogPost.appendChild(heading)
        blogPost.appendChild(pEl)
        actorName.value = '';
        history.value = '';
        document.querySelectorAll('.blog-post').forEach((item) => {
            item.addEventListener('mouseout', (evt) => {
                evt.currentTarget.classList.toggle('green')
            })
            item.addEventListener('mouseenter', (evt) => {
                evt.stopPropagation()
                evt.currentTarget.classList.toggle('grey')
            })
        })
        e.preventDefault();
    })
    // Part 8  add qoute of course
    document.querySelector('#quote-title').addEventListener('click', (evt) => {
        randomQuote()
    })
    // Part 9 change the style of the element
    document.querySelectorAll('.blog-post').forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
            evt.currentTarget.classList.toggle('green')
        })
        item.addEventListener('mouseenter', (evt) => {
            evt.stopPropagation()
            evt.currentTarget.classList.toggle('grey')
        })
    })
});
/*Loop through a list and create an element */
let movie = [{
        title: 'Caption America',
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPi3DrWgPswmxGANLu-innAOz8bpEGgwTUOhMnB-czIYyXYPvfgP8Xd0FrVL4wvIf8TA&usqp=CAU"
    },
    {
        title: 'Black Panther',
        imgUrl: "https://images.thedirect.com/media/photos/FeJ0BJtWIAUecOG.jpg"
    },
    {
        title: 'Iron Man 3',
        imgUrl: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg"
    },
    {
        title: 'Avenger Endgame',
        imgUrl: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
    }

]
movie.forEach(e => {
    const favoriteThings = document.querySelector('#favorite-things');
    const li = document.createElement('li');
    const title = document.createElement('p');
    const img = document.createElement('img');
    img.classList = 'movie-image'

    title.textContent = e.title
    img.src = e.imgUrl
    li.append(img, title)

    favoriteThings.appendChild(li);
})