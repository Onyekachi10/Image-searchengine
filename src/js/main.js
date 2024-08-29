 "use strict"
 let keyword = ""
 let  page = 1
 const sreachBar = document.querySelector("#search")
 const resultsBtn = document.querySelector("#result")
 const results = document.querySelector("#search-results")
 const moreBtn = document.querySelector("#show_more")

function query() {

    resultsBtn.addEventListener("click", () => {

    page = 1

        
        const searchError = document.querySelector("#err")
        let reName = /^[a-zA-Z]+(([\'\- ][a-zA-Z])?[a-zA-Z]*)*$/
        let counter = 0
        searchError.innerHTML = ""

        if (!reName.test(sreachBar.value)) {
            searchError.innerHTML = "This field is required/search not found!"
            counter++
        }

        if (counter > 0) {

            return false
        }

        else {
            ResultDisplay()
            return true
        }
    })
}
query()


// fetching the data

function ResultDisplay () {
    const apiKey = "h1CrxqHGFwPS2_InS1xbeg-6gkqDJp6xVZtUB2d1FZM"

  

keyword = sreachBar.value
const baseUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12` 

fetch(baseUrl).then(async response=>{
    const data = await response.json()
    

    if (page === 1) {
       results.innerHTML = "" 
    }
    const viewResults = data.results
viewResults.map((res)=>{
    const createImage = document.createElement("img")
    createImage.src = res.urls.small

    const imageLink = document.createElement("a")
    imageLink.href = res.links.html
    imageLink.target = "_blank"

    imageLink.appendChild(createImage)

   results.appendChild(imageLink)
})
  moreBtn.style.display = "block" 
}).catch(console.error("this page is unable to load")
)

}


moreBtn.addEventListener("click", ()=>{
    page++
    ResultDisplay()
})