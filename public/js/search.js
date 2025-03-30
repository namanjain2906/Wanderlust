// let btn=document.getElementById("search-button")
// btn.addEventListener("click",()=>{
//     let destination=document.getElementById("destination").value;
//     fetch(`/listings/search/${destination}`)
//         .then(response => response.json())
//         .then(data => {
//             // Handle the data received from the backend
//             console.log(data);
//             // Render the page with content for the specified city
//             renderCityContent(data);
//         })
//         .catch(error => console.error('Error:', error));
// })

// let btn = document.getElementById("search-button");
// btn.addEventListener("click", () => {
//     console.log("button clicked")
//     const destination = document.getElementById("destination").value;
//     if (destination) {
//         window.location.href = `/listings/search/${encodeURIComponent(destination)}`;
//     } else {
//         alert('Please enter a city name.');
//     }
// });

let btn = document.getElementById("search-button");
btn.addEventListener("click", () => {
  console.log("button clicked");
  const destination = document.getElementById("destination").value.trim();
  if (destination) {
    const searchUrl = `/listings/search/${encodeURIComponent(destination)}`;
    window.location.href = searchUrl;
  } else {
    alert("Please enter a city name.");
  }
});
