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

        // sidebarUp

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
            brandHead.className = 'brand-head spans'
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
             
             const brandMore = document.createElement('div')
             brandMore.className = 'brand-more'
             brandMore.innerHTML = item.more

            brandHead.addEventListener('click',()=>{
                if(brandContent.style.display === 'none' || brandContent.style.display === ''){
                    brandContent.style.display = 'block';
                } else{
                    brandContent.style.display = 'none';
                }
            })

                // brand checkbox
            const checkBoxContent = document.createElement('div')
            checkBoxContent.className = 'checkbox-content'

                // brand checkboxes loop
            item.brands.forEach(phone=>{
                const checkBox = document.createElement('div')
                checkBox.className = 'check-box check-pad'
                checkBox.innerHTML = `<label>
                <input type = "checkbox" name="brand" class="check-in" value="${phone}">
                <div class="checkText">${phone}</div>
                </label>`
                checkBoxContent.append(checkBox)
            })
            const brandContTop = document.createElement('div')
            brandContTop.className = 'brand-cont-top'

            brandContTop.append(brandSearch,checkBoxContent)
            brandContent.append(brandContTop,brandMore)
            brands.append(brandContent)
            
            sidebarUp.append(brands)

        // f assured
        const fAssured = document.querySelector('.f-assured')

        const fAssuredLabel = document.createElement('label')
        const labelInput = document.createElement('input')
        labelInput.type = 'checkbox'
        const labelImg = document.createElement('img')
        labelImg.src = item.assured 
        fAssuredLabel.append(labelInput,labelImg)

        const fAssuredDiv = document.createElement('div')
        const fAsDivSpan = document.createElement('span')
        fAsDivSpan.innerHTML = '?'
        fAssuredDiv.append(fAsDivSpan)

        fAssured.append(fAssuredLabel,fAssuredDiv)

        sidebarUp.append(fAssured)

        });

        // sidebarDown
        
        const sidebarDown = document.querySelector('.in-side')
        data.sidebarDown.forEach(item =>{

        //  rating onwards
2
        const ratingName = document.createElement('div')
        ratingName.id = item.id 
        ratingName.className = item.class 

        const topContent = document.createElement('div')
        topContent.className = 'top-cont spans'

        const topContName = document.createElement('span')
        topContName.innerHTML = item.name
        const topContImg = document.createElement('img')
        topContImg.src = item.arrwImg

        const botmCont = document.createElement('div')
        botmCont.className = 'check-pad botm-cont'
        const contentLabel = document.createElement('label')
        
        item.checkdatas.forEach(check =>{
            const inLabels = document.createElement('div')
            inLabels.className = 'in-labels'
            const botmLabelInput = document.createElement('input')
            botmLabelInput.type = 'checkbox'
            const botmLabelSpan = document.createElement('span')
            botmLabelSpan.innerHTML = check

            inLabels.append(botmLabelInput,botmLabelSpan)
            contentLabel.append(inLabels)
        })
        botmCont.append(contentLabel)

        topContent.append(topContName,topContImg)
        ratingName.append(topContent,botmCont)
        sidebarDown.append(ratingName)
        })
    })
})