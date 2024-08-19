// const btnEl = document.getElementById("btn");
// const errorMessageEl = document.getElementById("errorMessage");

// function fetchImage(){
//     const inputValue = document.getElementById("input").value

//     if(inputValue > 10 || inputValue < 1){
//         errorMessageEl.style.display = "block";
//     }

//     fetch(`https://api.unsplash.com/photos?
//     per_page=${inputValue}&page=1&client_id=DnIqTwt6eDrJKsdVirYXgEC_NICiw0uxYYvXldk7W2c`).then((res)=>res.
//     json().then((data) =>{
//        console.log(data);
//     })
    
// );
// }

// btnEl.addEventListener("click", fetchImage)

// two

const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const inputEl = document.getElementById("input");
const galleryEl = document.getElementById("gallery")

async function fetchImage() {
  const inputValue = parseInt(inputEl.value);

  if (isNaN(inputValue) || inputValue > 10 || inputValue < 1) {
    errorMessageEl.style.display = "block";
    errorMessageEl.innerText = "number should not be above 10"
    return;
  }  

  
  
  else {
    imgs = "";
    btnEl.style.display = "none"
    errorMessageEl.style.display = "none";
   await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=DnIqTwt6eDrJKsdVirYXgEC_NICiw0uxYYvXldk7W2c`)
      .then((res) => res.json())
      .then((data) => {
        if (data){
            data.forEach((pic)=>{
                imgs += `<img src=${pic.urls.small}
                alt="image"/>
                `;
                galleryEl.style.display = "block"
                galleryEl.innerHTML = imgs;
                btnEl.style.display = "block";
            })
        }
      })

     
      .catch((error) => {
        console.error("Error fetching images:", error);
      });

      errorMessageEl.style.display = "none"

      
  }
}

btnEl.addEventListener("click", fetchImage);