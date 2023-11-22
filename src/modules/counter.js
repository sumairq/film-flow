const counter = (movies) => {
  let movieCount = 0;
  movies.forEach(() => {
    movieCount += 1;
  });
  return movieCount;
};

const displayCount = (count) => {
  const navList = document.querySelector('.nav-list');

  const li = document.createElement('li');

  li.innerHTML = ` <li class="nav-item">(${count})Movies</li>`;

  navList.appendChild(li);
};

const countMovies = (movies) => {
  const num = counter(movies);
  displayCount(num);
};

const truncateTitle = (title) => {
   // Use a regular expression to match all spaces
   const spaceRegex = /\s/g;

   // Use split to get an array of all matches
   const spacesArray = title.split(spaceRegex);
 console.log(title, title.length)
   // Use filter to remove any empty strings (resulting from consecutive spaces)
   const nonEmptySpacesArray = spacesArray.filter(space => space !== '');
 console.log(title, nonEmptySpacesArray.length)
   // Return the count of non-empty spaces
   if(nonEmptySpacesArray.length > 3){
     return title.slice(0,15).concat('...')
   }else if(title.length > 16){
    return title.slice(0,15).concat('...')
   }else{
    return title
   }
}

export { counter, displayCount, countMovies, truncateTitle };
