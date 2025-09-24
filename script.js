const myPromise = new Promise((resolve, reject) => {

})

console.log(myPromise);


myPromise
   .then (result => {console.log(result);})
   .catch (error => {console.log(error);})

   setTimeout(() => {
    console.log(myPromise);
   }, 3000);



// async f 
async function getMessage() {
  return "Javascript is fun"; 
}

getMessage()
  .then(message => console.log(message)) 
  .catch(error => console.error("Error:", error));
