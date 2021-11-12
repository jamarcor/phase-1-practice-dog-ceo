console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",() => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderImages(json.message))

    function renderImages(imgUrls) {
        const dogImageList = document.querySelector("#dog-image-container")
        imgUrls.forEach(element => {
            const dogItem =document.createElement('li');
            const img = document.createElement('img');
            img.src = element;
            dogItem.append(img)
            dogImageList.append(dogItem)
            console.log(dogItem)
        });
        

    }

    fetch(breedUrl)
    .then(res => res.json())
    .then(json => renderList(json.message))

    function renderList(breedObj) {
        // console.log(breedObj)
        const dogBreedList = document.querySelector('#dog-breeds');
        for (const breed in breedObj) {
            const breedItem = document.createElement('li')
            breedItem.textContent = breed
            dogBreedList.append(breedItem);
            breedItem.addEventListener('click', () => breedItem.style.backgroundColor = "yellow")
        }
    }

    const dropDown = document.querySelector("#breed-dropdown")
    dropDown.addEventListener('click', () => sortBreeds(dropDown.value))

    let getDropDownVal = false

    function sortBreeds(sortValue) {
        if (getDropDownVal) {

        }
        getDropDownVal = !getDropDownVal;
    }
})



const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function onPageLoad() {
    fetch(url)
    .then(res => res.json())
    .then()
}
