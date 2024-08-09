console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)
let button = document.querySelectorAll("button")
console.log(button)
// Extra credit: Select the navbar
let body= document.querySelector("body")

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
button[0].addEventListener("click", function(event){
  for(let i=0;i<button.length;i++){
    body.style.color ="black"
    body.style.backgroundColor ="white"
  }
  })

// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar



// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
button[1].addEventListener("click", function(event){
  for(let i=0;i<button.length;i++){
  body.style.color ="white"
    body.style.backgroundColor ="black"
  }
  })

//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar



// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards
let image = document.getElementsByClassName("card-img-top rounded")

// Console log the length of the array to confirm you have all 4 images
console.log(image.length)

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg

for(let i = 0; i < image.length; i++) {
image[i].addEventListener("mouseover", function(event){
image[i].src = image[i].src.replace("jpg", "gif");
})
}
for(let i = 0; i < image.length; i++) {
image[i].addEventListener("mouseout", function(event){
image[i].src = image[i].src.replace("gif", "jpg");
})
}

// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


