document.addEventListener('DOMContentLoaded',()=>{

    fetch('node.json')
    .then(response => response.json())
    .then(data =>{

        const navBar = document.querySelector('.in_nav')
        data.header.forEach(item => {
            
            const logo = document.createElement('div')
            logo.className = 'flip-one'
            logo.innerHTML =  `
            <div class="flip-logo"><img src="${item.flip}"></div>
            <div class="explore"><span>${item.text1}<a>${item.text2}</a><img src = "${item.plusimg}"</span></div>`
            navBar.appendChild(logo)

            const input = document.createElement('div')
            input.className = 'input-div'
            input.innerHTML = `
            <form>
            <input type = "text" placeholder="Search for products,brands and more">
            <img src = "${item.searchImg}" class="search">
            </form>`
            navBar.append(input)

            const login = document.createElement('div')
            login.className = 'login'
            login.innerHTML = `
            <div class = "in-log">
            <a>${item.login}</a>
            </div>`
            navBar.append(login)

        });
    })
})  