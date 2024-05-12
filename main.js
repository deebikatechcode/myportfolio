

var typed = new Typed('.text', {
    strings: [' Full stack Developer', ' Web Designer','Front End Developer'],
    typeSpeed: 50,
    backSpeed:100,
    backDelay:1000,
    loop:true,
  });


  function displayMessage() {
    // Get the element with class "text"
    var textElement = document.querySelector('.text');
    
    // Set the text content of the element
    var message = "Nice to meet you.Thankyou for hiring me!";
    // Display the message in the separate div with id "demo"
    document.getElementById('demo').innerHTML=message;


  function hideMessage(){
    document.getElementById("demo").style.display="none";}

    setTimeout(hideMessage,4000);
    setTimeout(displayMessage,4000);  
       }
       displayMessage();
//   function handleClick() {
//     // Show message after 1 second
//     setTimeout(displayMessage, 4000);
// }

// // Attach handleClick function to the button click event
// document.getElementById("button").addEventListener("click", handleClick);
       






