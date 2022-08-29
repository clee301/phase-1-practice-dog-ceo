console.log('%c HI', 'color: firebrick')



const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', function(){

      fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('dog-image-container')
        const imagesEach = Object.values(data)[0]
        imagesEach.forEach(function(x){
            console.log(x)
            const images = document.createElement('img')
            images.src = x
            container.appendChild(images)
        })
      })
       
       fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const dogBreeds = document.getElementById("dog-breeds");

        const breedList = Object.entries(data)[0][1]
        const breedList2 = Object.keys(breedList)
        
        console.log(breedList2)

          breedList2.forEach(function(x){
            const breedDOM = document.createElement('li')
            breedDOM.textContent = x
            dogBreeds.appendChild(breedDOM)

            

          })

          const theList = document.querySelectorAll('#dog-breeds li')
            
          console.log(theList)
            theList.forEach(z => {
              z.addEventListener('click', function(){
                z.style.color = "blue"
            })          
         

            })

            const dropDown = document.getElementById("breed-dropdown")
            
            
            dropDown.addEventListener('change', function(){
              const option = dropDown.value;
              console.log(option)
              if(option == 'a'){
                theList.filter(function(d){
                  d.startsWith(option)
                  console.log(d)
                })
              }
            })

          })

          

      })

      

    
