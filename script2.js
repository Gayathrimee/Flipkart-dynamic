document.addEventListener('DOMContentLoaded',()=>{

    fetch('node.json')
    .then(response => response.json())
    .then(data =>{

        const navBar = document.querySelector(".nav_one")
        data.header.forEach(item => {

            const inNav = document.createElement('div')
            inNav.className = 'in-nav'
            inNav.innerHTML = `
            <div class = "flip-one">
            <div class = "in-flip">
            <div class="flip-logo"><img src="${item.flip}"></div>
            <div class="explore">${item.text1}<span>${item.text2}</span><img src = "${item.plusimg}"></div>
            </div>
            </div>

            <div class="input-div">
            <form>
            <div class ="in-input">
            <input type = "text" placeholder="Search for products,brands and more">
            <button><img src = "${item.searchImg}"></button>
            </div>
            </form>
            </div>
            
            <div class="login">
             <div class = "in-log"><a>${item.login}</a></div>
            </div>
            
            <div class = "login seller"><a>${item.seller}</a> </div>
            
            <div class = "login">
            <div class = "in-more more-in">
            <a>${item.more}</a>
            <img src="${item.downArrow}" class="arrow">
            </div> </div>

            <div class="login">
            <div class ="in-more cart-in">
            <a> <img src="${item.cartImg}"> <span>${item.cart}</span>
            `
            navBar.append(inNav)

        });

        const secondNav = document.querySelector('.nav_two')
        data.header2.forEach(item =>{
            const secondInNav = document.createElement('div')
            secondInNav.className = 'second-nav'

            const arrow = item.arrow[0]; // Assuming arrow is an array and we want the first item
                
                // Generate HTML content for each text item with the arrow image
                const textItems = item.Texts.map(text => `
                    <div class="text-item">
                        ${text}
                        <img src="${arrow}" alt="Arrow Icon" class="arrow">
                    </div>
                `).join('');
                
                // Create anchor tags for anchors array
                const anchors = item.anchors.map(anchor => `
                    <a href="#" class="anchors">${anchor}</a>
                `).join(' ');
                
                // Set inner HTML with the processed content
                secondInNav.innerHTML = `
                    <div class="nav-marg">
                        ${textItems}
                            ${anchors}
                    </div>`;

            secondNav.append(secondInNav)
        });
    })
})