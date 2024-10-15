// const mainPhones = document.querySelector('.main-phones')

// const itemsPerPage = 6
// const currentPage = 1

// function renderThePage(pageNumber, items){           // render - provide or give

//     mainPhones.innerHTML = '';

//     const startIndex = (pageNumber - 1) * itemsPerPage
//     const endIndex = Math.min(startIndex + itemsPerPage, items.length)

//     for (let i = startIndex; i < endIndex; i++) {
//         const item = items[i];
        
//     }
// }

// // pagination

// function createPagination(totalItems){
//     const pageContainer = document.querySelector('.pages')
//     pageContainer.innerHTML = ''

//     const totalPages = Math.ceil(totalItems / itemsPerPage)

//     for (let i = 1; i <= totalPages; i++){
//         const pageButton = document.createElement('button')
//         pageButton.textContent = i
        
//         pageButton.addEventListener('click',()=>{
//             currentPage = i
//             renderThePage(currentPage, data.Phones)
//         })

//         pageContainer.append(pageButton)
//     }
// }

// // intial rendering

// renderThePage(currentPage,data.phones)
// createPagination(data.Phones.length) 



const mainPhones = document.querySelector('.main-phones')

const itemsPerPage = 6
const currentPage = 1

function renderPage(pageNumber, items){
    
    const startIndex = (pageNumber - 1 ) * itemsPerPage
    const endIndex = Math.ceil(startIndex + itemsPerPage, items.length)

    for(let i = startIndex; i < endIndex; i++){
        const item = items[i]
    }
}

function pagination(totalItems){
    const thePages = document.querySelector('.pages')
    thePages.innerHTML = ''

    const totalPages = Math.ceil(totalItems / itemsPerPage)

    for(let i = 1; i <= totalPages; i++){
        const pageButton = document.createElement('div')
            pageButton.textContent = i 

            pageButton.addEventListener('click',()=>{
                currentPage = i
                renderPage(currentPage, data.Phones)
            })

            thePages.appendChild(pageButton)
    }
}

renderPage(currentPage, data.Phones)
pagination(data.Phones.length)             