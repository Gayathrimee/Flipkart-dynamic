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

        // ..........searchbar event.................

        const searchInput = document.querySelector('.in-input')
        searchInput.addEventListener('input',(e)=>{

            const value = e.target.value.toLowerCase();
            const filter = data.phonesec.filter(item =>
                item.name.toLowerCase().includes(value))

                display(filter);
        })

        // main

        // sidebar

        const sidebarUp = document.querySelector('.in-side')
        data.sidebarUp.forEach(item =>{

            // filter
            const filter = document.querySelector('.sideone ')
            filter.innerHTML = `<div class="filter">${item.filter}</div>`
            sidebarUp.append(filter)

            const categories = document.querySelector('.sidetwo')
            categories.innerHTML = `
            <div class="categ padding">
            <div class="cat-txt">
            <span class"">${item.category}</span></div>
            <div class="m-a pad"> <span><img src = "${item.mobImg}"></span>
            <a href="#">${item.mobile}</a></div>
            <div class="mob pad "><a>${item.mtxt}</a></div>
            </div>`

            sidebarUp.append(categories)

            // price
            const price = document.querySelector('.price')
            price.innerHTML =`
            <div class="price-txt">${item.price}</div>

                <div class="statusbar">
                    <div class="bar">
                    <div class="inbar"></div>
                    </div>
                </div>

            <div class="range">

            <div class="range-bar">
                <div class="circle">
                <div class="circ left"></div>
                </div>
                <div class="circle rit">
                <div class="circ right"></div>
                </div>
                <div class="grey-line"></div>
                <div class="blue-line"></div>
            </div>

            <div class="range-dots">
            <div class="dot">.</div>
            <div class="dot">.</div>
            <div class="dot">.</div>
            <div class="dot">.</div>
            <div class="dot">.</div>
            <div class="dot">.</div>
            </div>

            </div>
            `

            // minmax
            const minMax = document.querySelector('.minmax')
            // min
            const minElement = document.createElement('div')
            minElement.className = 'min'

            const selectOne = document.createElement('select')
            data.sidebarUp[0].min.forEach(minvalue =>{
                
                const optionValuesMin = document.createElement('option')
                optionValuesMin.textContent = minvalue
                optionValuesMin.value = minvalue;
                selectOne.append(optionValuesMin)
            })
            minElement.append(selectOne)
            minMax.append(minElement)

            const toSpan = document.createElement('span')
            toSpan.textContent = data.sidebarUp[0].to;
            minMax.append(toSpan)
 
            // max
            const maxElement = document.createElement('div')
            maxElement.className = 'max'

            const selectTwo = document.createElement('select')
            data.sidebarUp[0].max.forEach(maxvalue =>{

                const optionValuesMax = document.createElement('option')
                optionValuesMax.textContent = maxvalue
                optionValuesMax.value = maxvalue
                selectTwo.append(optionValuesMax)
            })
            maxElement.append(selectTwo)
            minMax.append(maxElement)

            price.append(minMax)
            sidebarUp.append(price)

            // brand
            const brands = document.querySelector('.brands')

            // brand-head
            const brandHead = document.createElement('div')
            brandHead.className = 'brand-head'
            brandHead.innerHTML = `<span>${item.brandTxt}</span>
            <img src = "${item.brandimg}">`
            brands.append(brandHead)

            // brand-content
            const brandContent = document.createElement('div')
            brandContent.className = 'the-brands';

            // brand-search
             const brandSearch = document.createElement('div')
             brandSearch.className = "search-brand"
             brandSearch.innerHTML = `<img src ="${item.searchIcon}">
             <input type = "text" placeholder="Search Brand" id="input"> `
             brandContent.append(brandSearch)
             brands.append(brandSearch)

             const brandMore = document.createElement('div')
             brandMore.innerHTML = data.more
             brands.append(brandMore)

            brandHead.addEventListener('click',()=>{
                if(brandContent.style.display === 'none' || brandContent.style.display === ''){
                    brandContent.style.display = 'block';
                } else{
                    brandContent.style.display = 'none';
                }
            })

            // brand search input
            const brandInput = document.getElementById('input')
            brandInput.addEventListener('input', function(){
                const searchItem = this.value.toLowerCase();

                const filteredItem = data.brands.filter(product => 
                    product.includes(searchItem.toLowerCase())
                );
                console.log(filteredItem)
                products(filteredItem)
            });

            // brand checkbox
            const checkBoxContent = document.createElement('div')
            checkBoxContent.className = 'checkbox-content'

            // brand checkboxes loop
            // data.brands.forEach(item=>{
            //     const checkBox = document.createElement('div')
            //     checkBox.className = 'check-box'
            //     checkBox.innerHTML = `<label>
            //     <input type = "checkbox" name="brand" class="check-in" value="${item}">
            //     <div class="checkText">${item}</div>
            //     </label>`
                
                
            // })

            sidebarUp.append(brands)
        });


    })
})