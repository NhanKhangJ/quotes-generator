let quotes = [
    `Captain America: the winter solider`,
    `Avenger Endgame`,
    `Iron Man 3`,
    `Loki the serries`,
    `Thor 3`,
    `WandaVision`
  ];
  
document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `${quotes[Math.floor(Math.random() * quotes.length)]}`;
    };
    randomQuote();
  
    // Do all of your work inside the document.addEventListener  
  
    // Part 1 main title
  document.querySelector('#main-title').textContent = 'Marvel Movies Generator'
  
    // Part 2 back ground of your color
  document.querySelector('body').style.backgroundColor = '#FFE1E1';
  
  
    // Part 3 favorite list Items create a list  
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
     // remove item depend on the length function depend on the event
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
    // Part 4 // a special title 
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
    // Part 5 past race Ul list except Chicago or the Jason Staham
  document.querySelectorAll('#past-races > li').forEach((item) => {
    if(item.textContent.trim() === 'Jason Staham'){
      document.querySelector('#past-races').removeChild(item)
    }
  })
  
    // Part 6 create a list item with the content of Laurelton and add it the past race list
  const li = document.createElement('li')
  li.textContent = 'Elizabeth Chase Olsen';
  document.querySelector('#past-races').appendChild(li)
  
    // Part 7 create a div hava a class of (blog-spot) add event listener if you can

  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Elizabeth Chase Olsen'
  const pEl = document.createElement('p')
  pEl.textContent = 'Born in Sherman Oaks, California, Olsen began acting at age four.'
  
  //append the blog spot div to the element has the main class
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  
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

let contribute = document.querySelector('#form-ctrl').lastElementChild;
contribute.addEventListener('click', e => {
   let actorName = document.querySelector('#form-ctrl > input:nth-of-type(1)')
   let history = document.querySelector('#form-ctrl > input:nth-of-type(2)')
   const li = document.createElement('li')
   li.textContent = actorName.value;
   document.querySelector('#past-races').appendChild(li)
     // Part 7 create a div hava a class of (blog-spot) add event listener if you can
   const blogPost = document.createElement('div')
   blogPost.classList.add('blog-post')
   const heading = document.createElement('h2')
   heading.textContent = actorName.value
   const pEl = document.createElement('p')
   pEl.textContent = history.value;
   //append the blog spot div to the element has the main class
   document.querySelector('.main').appendChild(blogPost)
   blogPost.appendChild(heading)
   blogPost.appendChild(pEl)
   actorName.value='';
   history.value= '';
   e.preventDefault();
})