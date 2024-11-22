//! JS is synchronous language 
// Events are activated when we do any activity on the browser

// don't write events directly on html tag due to scalability issues

//! This approach is good but features are less
// document.getElementById("owl").onclick = function(){
//     alert("Owl clicked")
// }

//! Old functions/methods for events 
// attachEvent()
// jQuery - on

//! We get events such as browser and environment events
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

//! Best approach
// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log(e)
// },false)

//! Event Propagration -> Event Bubbling and Event Capturing 
// By default the value is false (Event Bubbling) and true means Event Capturing in some situations

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//! Event Bubbling - Innermost element runs first then the outermost element runs and this is Event Bubbling (false)

// document.getElementById("images").addEventListener("click", (e) => {
//     console.log("Clicked inside the ul");
// },false)

// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log("Owl clicked");
// },false)


//! Event Capturing - Outermost element runs first then the innermost element runs and this is Event Capturing (false)
// document.getElementById("images").addEventListener("click", (e) => {
//     console.log("Clicked inside the ul");
// },true)

// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log("Owl clicked");
// },true)

//! stopPropagation and preventDefault() 
// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log("Owl clicked");
//     e.stopPropagation() // stops the Event propagation
// },true)

// document.getElementById("google").addEventListener("click", (e) => {
//     e.preventDefault(); // prevents the default action
//     console.log("Google clicked");
// },false)

//! mini project
let images = document.querySelector("#images");
images.addEventListener("click", function(e){
    // console.log(e.target.parentNode);
    // const removeIt = e.target.parentNode;
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt)

    // console.log(e.target.tagName)
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        const removeIt = e.target.parentNode;
    removeIt.remove();
    }
    
}, false)


