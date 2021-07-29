// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
FULL_HEART.class = `.activated-heart`
console.log(FULL_HEART)

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll('span.like-glyph')
  console.log(hearts)
  
  hearts.forEach(hearts => hearts.addEventListener('click', likeCallback))
  modal.classList.add('hidden')
  function likeCallback(hearts){
    console.log(hearts.target)
    mimicServerCall()
    .then(() => {
      if(hearts.target.innerHTML === EMPTY_HEART){
        hearts.target.innerHTML = FULL_HEART
      }
      else if (hearts.target.innerHTML = FULL_HEART){
        hearts.target.innerHTML === EMPTY_HEART
        }
      })
      .catch(er => {
        const erMsg = document.getElementById('modal-message')
      //   console.log(erMsg)
      //  erMsg.className = 'show'
       modal.classList.remove('hidden')
       erMsg.innerHTML = err

       setTimeout(() => { erMsg.innerHTML = ""}, 3000)
      })
  }



})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
