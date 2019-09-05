/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


// Solution 

function gitHubCardMaker(user){

  const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  const userImage = document.createElement('img');
  const cardInfoDiv = document.createElement('div');
    cardInfoDiv.classList.add('card-info');
  const newHeader = document.createElement('h3');
    newHeader.classList.add = 'name'
  const paragraphOne = document.createElement('p');
    paragraphOne.classList.add('username');
  const paragraphTwo = document.createElement('p');
  const paragraphThree = document.createElement('p');
  const newLink = document.createElement('a');
  const paragraphFour = document.createElement('p');
  const paragraphFive = document.createElement('p');
  const paragraphSix = document.createElement('p');
  const button = document.createElement('button')

  userImage.setAttribute('src', 'data[avatar-url');
  newHeader.textContent = 'data.name';
  paragraphOne.textContent = 'data.login';
  paragraphTwo.textContent = '`Location: ${data.location}`'
  paragraphThree.textContent = '`Profile: ${data[html-url]}'
  newLink.href = 'data[html-url'
  paragraphFour.textContent = '`Followers: ${data.followers}`'
  paragraphFive.textContent = '`Following: ${data.following}`'
  paragraphSix.textContent = '`Bio: ${data.following}'
  button.textContent = 'click';

  //Append

  cardDiv.appendChild(userImage);
  cardDiv.appendChild(cardInfoDiv);

  cardInfoDiv.appendChild(newHeader);
  cardInfoDiv.appendChild(paragraphOne);
  cardInfoDiv.appendChild(paragraphTwo);
  cardInfoDiv.appendChild(paragraphThree);
  cardInfoDiv.appendChild(paragraphFour);
  cardInfoDiv.appendChild(paragraphFive);
  cardInfoDiv.appendChild(paragraphSix);

  paragraphThree.appendChild(newLink);

  button.addEventListener('click', ()=>{
    cardDiv.classList.toggle('expand');
  })

  console.log(cardDiv)
  return cardDiv

}


// function newCard(user){
//   axios.get('https://api.github.com/users/amxra')
// }


function newCard(user) {
  axios({
    method: 'get',
    url: `https://api.github.com/users/${user}`
  })
    .then(user => {
      let userCard = githubCardMaker(user);
      document.querySelector('.cards').appendChild(userCard)
    })
    .catch(err => {
      return err
    })
}

newCard('amxra');

//Manually add followers 

// Add Followers Manual
// followersArray.forEach(user => {
//   newCard(user)
// })


//Programmatically add followers 

axios.get('https://api.github.com/users/amxra/followers')
.then(response => {
  let followers = response.data
  followers.forEach(follower => {
    newCard(follower.login)
  })
})
.catch(err => {
  return err
})
