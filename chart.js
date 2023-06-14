var redButton = document.getElementById('red-button');
const ip = document.getElementById('ipAdress');
// var blueButton = document.getElementById('blue-button');
// var greenButton = document.getElementById('green-button');
// redButton.addEventListener('click', function() {
//   document.body.style.backgroundColor = 'red';
// });
// blueButton.addEventListener('click', function() {
//   document.body.style.backgroundColor = 'blue';
// });
// greenButton.addEventListener('click', function() {
//   document.body.style.backgroundColor = 'green';
// });
    // window.location.reload(); 

//     var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]; 

//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     redButton.addEventListener('click', changeBackgroundColor )
// function changeBackgroundColor() { 

//     document.body.style.backgroundColor = randomColor}

// color chnage
    redButton.addEventListener('click', changeBackgroundColor )

function changeBackgroundColor() {
    var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]; 

    var randomColor = colors[Math.floor(Math.random() * colors.length)]; 

    document.body.style.backgroundColor = randomColor; 
  }
// Location
navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  }, function(error) {
    console.log(`Error retrieving geolocation:${error.message}`)
  });
// IP Adress
async function getIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;
      console.log(`IP Address: ${ipAddress}`);
    } catch (error) {
      console.log(`Error retrieving IP address: ${error}`);
    }
  }

  ip.addEventListener('click',getIPAddress)
//   getIPAddress();
  

    // auto complete
    
    // const inputField = document.getElementById('inputField');

    // const Autocomplete = new autocomplete({
    //   data: {
    //     src: async () => {
    //       const inputText = inputField.value.toLowerCase();
    //       const matchedSuggestions = await getSuggestions(inputText);
    //       return matchedSuggestions;
    //     },
    //     key: ["suggestion"],
    //   },
    //   placeHolder: "Type here to search...",
    //   selector: "#inputField",
    //   threshold: 1,
    //   debounce: 300,
    //   searchEngine: "strict",
    //   resultsList: {
    //     render: true,
    //     container: source => {
    //       source.setAttribute("id", "autocompleteContainer");
    //     },
    //     destination: inputField,
    //     position: "afterend",
    //     element: "ul",
    //   },
    //   resultItem: {
    //     content: (data, source) => {
    //       source.innerHTML = data.match;
    //     },
    //     element: "li",
    //   },
    //   onSelection: feedback => {
    //     inputField.value = feedback.selection.value.suggestion;
    //     inputField.blur();
    //   },
    // });
    


