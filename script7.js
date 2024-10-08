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




        //  ============= main ========================

        // ---------- sidebarUp

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
             let brandSearch = document.createElement('div')
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


            // search functionality

            const input = brandSearch.querySelector('#input')

            input.addEventListener('input', ()=>{
                const filter = input.value.toLowerCase()
                const companyNames = checkBoxContent.querySelectorAll('.check-box')

                companyNames.forEach(box => {
                    const phoneName = box.querySelector('.checkText').textContent.toLowerCase()

                    if(phoneName.includes(filter)){
                        box.style.display = 'block'
                    } else{
                        box.style.display = 'none'
                    }
                })
            })
            // --------------

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

        //-------------- sidebarDown
        
        const sidebarDown = document.querySelector('.in-side')
        data.sidebarDown.forEach(item =>{

        //  rating onwards

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
        botmCont.className = ' botm-cont checkbox-content'

        item.checkdatas.forEach(check =>{
            const botmContChecks = document.createElement('div')
            botmContChecks.className = 'botm--each-cont check-pad'
            botmContChecks.innerHTML = `<label>
                <input type = "checkbox" name="ratings" class="check-in" value="${check}">
                <div class="checkText">${check}</div>
                </label>`
                botmCont.append(botmContChecks)
        })

    // --------
        const hideElements = document.querySelectorAll('.hide');

        hideElements.forEach((el) => {
            el.addEventListener('click', () => {
                // Find the .botm-cont inside the clicked .hide element
                const botm = el.querySelector('.check-pad');
                if (botm) {
                    botm.classList.toggle('show');
                }
            });
        });  
    // --------
    
   
        topContent.append(topContName,topContImg)
        ratingName.append(topContent,botmCont)
        sidebarDown.append(ratingName)

        // hide & seek fn
        topContent.addEventListener('click', ()=>{
            if(botmCont.style.display === 'block'){
                botmCont.style.display = 'none'
            } else{
                botmCont.style.display = 'block'
            }

            topContImg.style.transform = topContImg.style.transform === 'rotate(90deg)' ? 'rotate(-90deg)' : 'rotate(90deg)';
        })
            // ---------

        })
        // -------------------------




 // ==================== main body =============================

        //  main-top
        const mainTopBar = document.querySelector('.main-top')
        data.mainTop.forEach(item =>{

            const mainTopOne = document.createElement('div')
            mainTopOne.className = item.class
            mainTopOne.id = item.id

            item.name.forEach(name =>{
               const nameDiv = document.createElement('div')
               nameDiv.innerHTML = `<a>${name}</a> <img src='${item.arrwImg}'>`
               nameDiv.className = item.subclass 

               mainTopOne.append(nameDiv)
            })
            
            const mainTopTwo = document.createElement('div')
            mainTopTwo.className = item.class2
            mainTopTwo.id = item.id2
            mainTopTwo.textContent = item.content
            
            const maintTopThree = document.createElement('div')
            maintTopThree.className = item.class3
            maintTopThree.id = item.id3

            const sortBy = document.createElement('span')
            sortBy.textContent = item.sortBy
            
            maintTopThree.append(sortBy)

            item.sorts.forEach(sort =>{
                const theSorts = document.createElement('div')
                theSorts.className = 'sorts'
                theSorts.textContent = sort

                maintTopThree.append(theSorts)
            })
            
            mainTopBar.append(mainTopOne,mainTopTwo,maintTopThree)
            
                 // click event
            const allSorts = document.querySelectorAll('.sorts')
            allSorts.forEach((sort,idx) =>{

                if(idx === 0){
                    sort.classList.add('blue')
                }
                sort.addEventListener('click',()=>{
                    removeBlueSorts()
                    sort.classList.add('blue')
                })

                if(idx === 1){
                    sort.classList.add('sort1')
                }
                if(idx === 2){
                    sort.classList.add('sort2')
                }if(idx === 3){
                    sort.classList.add('sort3')
                }
            })


            function removeBlueSorts(){
                allSorts.forEach(sort => sort.classList.remove('blue'))
            }
                // -----
                                                                   
        })
        // --------------



        // =================== main phones =============

        const mainPhones = document.querySelector('.main-phones')

        const itemsPerPage = 6;
        let currentPage = 1;


        function renderPage(pageNumber, items){        

            mainPhones.innerHTML = '';

             // Check if items is defined and is an array
                if (!items || !Array.isArray(items)) {
                    console.error('Invalid items array');
                    return;
                }

        // --------------
            if(items.length === 0){
                const noMessage = document.createElement('div')
                noMessage.className = 'no-result'

                const noMessageContent = document.createElement('span')
                noMessageContent.textContent = 'Oops, the result is not found!'
                const noMessageImg = document.createElement('img')
                noMessageImg.src = '/images/error-page-page-not-found-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector-removebg-preview.png'

                noMessage.append(noMessageContent,noMessageImg)
                mainPhones.append(noMessage)

                return;        // exit the fn early
            }
        // --------------

            const startIndex = (pageNumber - 1) * itemsPerPage
            const endIndex = Math.min(startIndex + itemsPerPage, items.length)

            for(let i = startIndex; i < endIndex; i++){
                const item = items[i]

                // phone-sec
                const divOne = document.createElement('div')
                divOne.className = 'phone-sec'

                const ImageSection = document.createElement('div')
                ImageSection.className = 'image-section'
                // 1
                const phoneImg = document.createElement('div')
                phoneImg.className = 'phone-img'
                phoneImg.innerHTML = `<img src='${item.image}'>`
                // 2
                const compare = document.createElement('div')
                compare.className = 'compare'
                compare.innerHTML = `<input type='checkbox'>
                <label>${item.compare}</label>`
                // 3
                const heart = document.createElement('div')
                heart.className = 'heart'
                heart.innerHTML = `<img src='images/www.flipkart.com (12).svg'>`

                heart.addEventListener('click',() =>{
                    heart.classList.toggle('love')
                })

                ImageSection.append(phoneImg,compare,heart)
                // 

                const dataSection = document.createElement('div')
                dataSection.className = 'data-section'

                // 1 
                const dataLeft = document.createElement('div')
                dataLeft.className = 'data-left'
                // 1a
                const leftH1 = document.createElement('h1')
                leftH1.textContent = item.h1 

                // filter datas

                // const phoneSections = brands.querySelectorAll('.phone-sec')


                // 1b
                const leftRates = document.createElement('div')
                leftRates.className = 'left-rates'
                leftRates.innerHTML = `<span>${item.star}</span>
                <a>${item.ratings}</a>`
                // 1c
                const specialities = document.createElement('ul')
                item.specialities.forEach(special =>{
                    const specLi = document.createElement('li')
                    specLi.innerHTML = special.data
                    specLi.id = special.id 

                    specialities.append(specLi)
                })
                dataLeft.append(leftH1,leftRates,specialities)
                // --

                // 2
                const dataRight = document.createElement('div')
                dataRight.className = 'data-right'
                // 2a
                const newPrice = document.createElement('div')
                newPrice.className = 'new-price'
                newPrice.innerHTML = `<span>${item.price}</span>
                <img src='${item.assure}'>`
                // 2b
                const oldPrice = document.createElement('div')
                oldPrice.className = 'old-price'
                oldPrice.innerHTML =  `<span class='strike'>${item.strike}</span>
                <span class='save'>${item.off}`
                // 2c
                const delivery = document.createElement('span')
                delivery.className = 'delivery'
                delivery.innerHTML = item.delivery
                // 2d
                const saver = document.createElement('span')
                saver.className = 'saver'
                saver.innerHTML = item.save
                // 2e
                const exchange = document.createElement('div')
                exchange.className = 'exchange'
                exchange.innerHTML = item.exchange

                dataRight.append(newPrice,oldPrice,delivery,saver,exchange)
                // --

                dataSection.append(dataLeft,dataRight)

                divOne.append(ImageSection,dataSection)

                mainPhones.append(divOne)       
        
            }
        }
    // .............

              
    // Function to create the pagination controls
    function createPaginationControls(totalItems) {
        const paginationContainer = document.querySelector('.pages');
        paginationContainer.innerHTML = '';
        
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        
        const prevValue = document.createElement('div')
        prevValue.innerHTML = data.next.prev.value
        prevValue.className = data.next.prev.class

        paginationContainer.append(prevValue)
    
    
        //  eventlistener
        prevValue.addEventListener('click', () =>{
            if(currentPage > 1){
                currentPage --
                renderPage(currentPage, data.Phones)
                createPaginationControls(totalItems)
            }
        })
        // ---

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerHTML = `<a>${i}</a>`;
            pageButton.id = 'count';
            


            if(i === currentPage){
                pageButton.classList.add('active')
            }
                   

            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPage(currentPage, data.Phones);

            allPages.innerHTML = `page ${currentPage} of 389`

            const allButtons = document.querySelectorAll('.pages button');
            allButtons.forEach(btn => {
                btn.classList.remove('active'); // Remove active class from all buttons
            });
            
            // Add 'active' class to the current button
            pageButton.classList.add('active');

            });
        
            paginationContainer.append(pageButton);



            const allPages = document.querySelector('.pagenumber')
            allPages.innerHTML = `page ${currentPage} of ${totalPages}`
            
         }


         const nextValue = document.createElement('div')
         nextValue.innerHTML = data.next.last.value
         nextValue.className = data.next.last.class
         paginationContainer.append(nextValue)

        //  eventlistener

         nextValue.addEventListener('click', () =>{
            if(currentPage < totalPages){
                currentPage ++
                renderPage(currentPage, data.Phones)
                createPaginationControls(totalItems)
            }
        })
        // ---


        // prev - next values hide or show event

        if(currentPage === 1){
            prevValue.style.display = 'none'
        } else{
            prevValue.style.display = 'block'
        }

        if(currentPage === totalPages){
            nextValue.style.display = 'none'
        } else{
            nextValue.style.display = 'block'
        }


    }          

        // Initial rendering of the first page
    renderPage(currentPage, data.Phones);
    createPaginationControls(data.Phones.length);
        


    // ======================= Filtering functionalities ===========================

    //1. checkbox
        const checkboxes = document.querySelectorAll('.check-in');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {

                const selectedFilters = Array.from(checkboxes)
                    .filter(i => i.checked)
                    .map(i => i.value.toLowerCase().trim());

                    // console.log('selected filters:', selectedFilters)



            // if no filters are selected:
                    if(selectedFilters.length === 0){
                        renderPage(1, data.Phones)
                        createPaginationControls(data.Phones.length)
                        
                        return
                    }
                    // -------



        // Filter phones based on selected filters
                const filteredPhones = data.Phones.filter(phone => {

                    // console.log("Current phone:", phone.h1); 

                    const phoneId = phone.id.toLowerCase().trim()
                    console.log(phoneId,selectedFilters)

                    const isIncluded = selectedFilters.includes(phoneId)
                    // console.log('is Included?', isIncluded)

                    return isIncluded
                 
                });

                console.log('filtered phones:', filteredPhones)

                // Render the first page of the filtered phones

                currentPage = 1;                // Reset to the first page
                renderPage(currentPage, filteredPhones);
                createPaginationControls(filteredPhones.length);
            }); 
        });
    
    //1. -----------------

    // 2. Price low to high

        const lowToHighPrice = document.querySelector('.sort2')
        lowToHighPrice.addEventListener('click', ()=>{

            if (!data || !Array.isArray(data.Phones)) {
                console.error('data or data.Phones is not defined');
                renderPage(1, []); // pass an empty array to renderPage
                return;
            }
            
            const itemPrice = [...data.Phones]

            if(itemPrice.length === 0){
                console.log('no items to sort')
                renderPage(1, [])      //pass an empty array to renderpage
                return
            }

            const sortedPrice = itemPrice.sort((high, low) => {
                const priceA = parseFloat(high.price.replace(/[₹,]/g, '').trim())
                const priceB = parseFloat(low.price.replace(/[₹,]/g, '').trim())

                return priceA - priceB
            })
                // parseFloat is used to convert the price string into numbers

            renderPage(1, sortedPrice)

            console.log('calling renderpage:', sortedPrice)
        })

    //2. -----------------

    // 3. Price high to low
    
    const highToLowPrice = document.querySelector('.sort3')
    highToLowPrice.addEventListener('click', ()=>{

        if(!data || !Array.isArray(data.Phones)){
            console.log('data is not defined')
           
            renderPage(1, [])
            return
        }

        const itemPrice = [...data.Phones]

        if(itemPrice.length === 0){
            console.log('no items to sort')

            renderPage(1,[])
            return
        }

        const sortedPrice = itemPrice.sort((high,low) =>{
            const priceA = parseFloat(high.price.replace(/[₹,]/g, '').trim())
            const priceB = parseFloat(low.price.replace(/[₹,]/g, '').trim())

            return priceB - priceA
        })

        renderPage(1, sortedPrice)
        console.log(sortedPrice)
    })
    //3. -----------------

    // 4. back to home page when clicks on Relevance

    const relevanceButton = document.querySelector('.blue')
    relevanceButton.addEventListener('click', () =>{
        
        renderPage(1, data.Phones)
        createPaginationControls(data.Phones.length)
    })
    //4. -----------------

    //5. search input listener (top)
        // Function to filter and render phones

        const searchInput = document.querySelector('.in-input input'); 
        const checkInputs = document.querySelectorAll('.check-box check-in')


        function filterPhones() {
            const value = searchInput.value.toLowerCase();
            
            const filteredPhones = data.Phones.filter(item =>
                item.h1.toLowerCase().includes(value)
            );

            renderPage(currentPage, filteredPhones); // Render filtered phones
        }


        searchInput.addEventListener('input', () => {
            filterPhones();
        });
    //5. -----------------

    //6. search input listener (sidebar)
        const searchSidebar = document.querySelector('.search-brand input')

        function filterSearchPhones(){
            const theValue = searchSidebar.value.toLowerCase()
            const filteringPhones = data.Phones.filter(phone => phone.h1.toLowerCase().includes(theValue))

            renderPage(currentPage, filteringPhones)
        }

        searchSidebar.addEventListener('input', () => {
            filterSearchPhones()
        })
    //6. -----------------

    //1.0: checkbox
    const ramCheckboxes = document.querySelectorAll('.ram input')

    ramCheckboxes.forEach(checkbox =>{
        checkbox.addEventListener('change', ()=>{

            const selectedRams = Array.from(ramCheckboxes)
                                .filter(i => i.checked)
                                .map(i => i.value.toLowerCase().trim())

            console.log('selectedRams:', selectedRams)

            if(selectedRams.length === 0){
                renderPage(1, data.Phones)
                createPaginationControls(data.Phones.length)

                return
            }
              
            
       
    // Filter phones based on selected RAM filters
    const filteredPhones = data.Phones.filter(phone => {
        const ramValue = extractRAM(phone.specialities);
        console.log(`Extracted RAM from phone ${phone.h1}: ${ramValue}`);
    
        if (ramValue) {
            // Log the parsed value for comparison
            const ramNumericValue = parseInt(ramValue);
            console.log(`Parsed RAM Value for ${phone.h1}: ${ramNumericValue}`);
    
            // Match extracted RAM with selected filters
            if (selectedRams.includes('1gb and below') && ramNumericValue <= 1) {
                console.log(`Phone ${phone.h1} matches '1GB and Below'`);
                return true;
            }
            if (selectedRams.includes('8 gb and above') && ramNumericValue >= 8) {
                console.log(`Phone ${phone.h1} matches '8 GB and Above'`);
                return true;
            }
            if (selectedRams.includes(ramValue)) {
                console.log(`Phone ${phone.h1} matches selected RAM ${ramValue}`);
                return true;
            }
        }
        return false;
    });


        
        console.log(`Phone ${phoneName} matches filter: ${matchesFilter}`);
        

            // console.log('Filtered phones:', filteredPhones);

            // Render the first page of the filtered phones
            currentPage = 1; // Reset to the first page
            renderPage(currentPage, filteredPhones);
            createPaginationControls(filteredPhones.length);
        })
    })
    
                // Initial rendering of the first page
            renderPage(currentPage, data.Phones);
            createPaginationControls(data.Phones.length);

    //1.0 -----------------

    //7. minmax value
//7. minmax value

    function parsePrice(priceString) {

        if(priceString === 'min'){
            return 0;           // represents the min price threshold (less than 10000)
                                // i.e 'min' is  represented as 0 here
        }

        // Remove any non-numeric characters (except for the decimal point)
        return parseFloat(priceString.replace(/[^\d.-]+/g, ''));
    }


    function filterAndRender(minValue, maxValue){

        const filteredPhones = data.Phones.filter(phone =>{
            const phonePrice = parsePrice(phone.price)

            if(minValue === 0){
                return phonePrice < 10000       // since min is represented as 0, when clicks on min it will 
                                                //  count as 0 and return phones with price less than 10000
            }

            return phonePrice >= minValue && phonePrice <= maxValue
        })

        renderPage(currentPage, filteredPhones)
    }


    // page navigation

    function nextPage(filteredPhones){
        if((currentPage * itemsPerPage) < filteredPhones.length){
            currentPage++

            renderPage(currentPage,filteredPhones)
        }
    }

    function previousPage(filteredPhones){
        if(currentPage > 1){
            currentPage --

            renderPage(currentPage, filteredPhones)
        }
    }


    // Add event listeners for selection changes
    let selectedMin = null;
    let selectedMax = null;

    const selectOne = document.querySelector('.min select')
    const selectTwo = document.querySelector('.max select')

    selectOne.addEventListener('change', function(){
        selectedMin = this.value? parsePrice(this.value) : null;

        if(selectedMax !== null){
            filterAndRender(selectedMin,selectedMax)
        }
    })

    selectTwo.addEventListener('change', function(){
        selectedMax = this.value? parsePrice(this.value) : null;

        if(selectedMin !== null){
            filterAndRender(selectedMin,selectedMax)
        }
    })

    renderPage(currentPage,data.Phones)

    //7. -----------------

    // -------------------------------------------------

    // =================== body 2 ==========================

// ------ navbar
    const NavOne = document.querySelector('.navOne')
    data.navOne.forEach(item =>{

        const inNavOne = document.createElement('div')
        inNavOne.className = 'innav-1 table-display'

        const arrowImg = document.createElement('a')
        arrowImg.innerHTML = `<img src ='${item.arrow}'>`
        arrowImg.className = 'arw'

        const flip = document.createElement('a')
        flip.innerHTML = `<img src ='${item.flip}'>`
        flip.className = 'flip'

        const mobileTxt = document.createElement('div')
        mobileTxt.innerHTML = `<h1>${item.mobileTxt}</h1>`
        mobileTxt.className = 'mob'

        const searchImg = document.createElement('a')
        searchImg.innerHTML = `<img src ='${item.search}'>`
        searchImg.className = 'srch'

        const cartImg = document.createElement('a')
        cartImg.innerHTML = `<img src ='${item.cart}'>`
        cartImg.className = 'cart'

        const loginTxt = document.createElement('a')
        loginTxt.innerHTML = `<span>${item.login}</span>`
        loginTxt.className = 'log'


        inNavOne.append(arrowImg,flip,mobileTxt,searchImg,cartImg,loginTxt)
        NavOne.append(inNavOne)
    })                         

    const NavTwo = document.querySelector('.navTwo')
    
    const inNav = document.createElement('div')
    inNav.className = 'inNavTwo'

    data.navTwo.forEach(item =>{

        const twoTexts = document.createElement('div')
        twoTexts.className = item.class 
        
        const twoText = document.createElement('span')
        twoText.textContent = item.txt 
        const twoImg = document.createElement('img')
        twoImg.src = item.img 

        twoTexts.append(twoText,twoImg)
        inNav.append(twoTexts)
        NavTwo.append(inNav)
    })
    

    const NavThree = document.querySelector('.navThree')
    
    const navThreeFlex = document.createElement('div')
    navThreeFlex.className = 'nav-3-flex'
    
    const inNavThree = document.createElement('div')
    inNavThree.className = 'in-nav-3'

    data.navThree.forEach(item =>{
        const threeDiv = document.createElement('div')
        threeDiv.className = item.class

        const threeDivMarg = document.createElement('div')
        threeDivMarg.className = 'div-3-marg'

        const threePic = document.createElement('div')
        threePic.innerHTML = `<img src='${item.img}'>`
        threePic.className = item.classImg
        const threeTxt = document.createElement('div')
        threeTxt.innerHTML = `<span>${item.txt}`
        threeTxt.className = item.classTxt

        threeDivMarg.append(threePic,threeTxt)
        threeDiv.append(threeDivMarg)
        inNavThree.append(threeDiv)
    })
   
    navThreeFlex.append(inNavThree)
    NavThree.append(navThreeFlex)
// ------ -----



// --------------- phones

const mainBody = document.querySelector('.main-body')

const phonesPerPage = 6
let existPage = 1

function thePhones(pageNumber, items){
    mainBody.innerHTML = ''

    const startIndex = (pageNumber - 1) * phonesPerPage
    const endIndex = Math.min(startIndex + phonesPerPage)

    for (i = startIndex ; i < endIndex; i++){
        const item = items[i]

         // phone-sec
         const divOne = document.createElement('div')
         divOne.className = 'phone-sec'

         const inDivOne = document.createElement('div')
         inDivOne.className = 'in-div-1'

         const inDivTwo = document.createElement('div')
         inDivTwo.className = 'in-div-2'
         inDivTwo.innerHTML = `<span>${item.variant}`

         const ImageSection = document.createElement('div')
         ImageSection.className = 'image-section'
         // 1
         const phoneImg = document.createElement('div')
         phoneImg.className = 'phone-img'
         phoneImg.innerHTML = `<img src='${item.image}'>`
         // 2
         const compare = document.createElement('div')
         compare.className = 'compare'
         compare.innerHTML = `<input type='checkbox'>
         <label>${item.compare}</label>`

         ImageSection.append(phoneImg,compare)
         // 

         const dataSection = document.createElement('div')
         dataSection.className = 'data-section'

         // 1 
         const dataLeft = document.createElement('div')
         dataLeft.className = 'data-left'
         // 1a
         const leftH1 = document.createElement('h1')
         leftH1.textContent = item.h1 

         // filter datas

         // const phoneSections = brands.querySelectorAll('.phone-sec')


         // 1b
         const leftRates = document.createElement('div')
         leftRates.className = 'left-rates'
         leftRates.innerHTML = `<span>${item.star}</span>
         <a>${item.ratings}</a>`
         // 1c
         const specialities = document.createElement('ul')
         item.specialities.forEach(special =>{
             const specLi = document.createElement('li')
             specLi.innerHTML = special.data
             specLi.id = special.id 

             specialities.append(specLi)
         })
         dataLeft.append(leftH1,leftRates,specialities)
         // --

         // 2
         const dataRight = document.createElement('div')
         dataRight.className = 'data-right'
         // 2a
         const newPrice = document.createElement('div')
         newPrice.className = 'new-price'
         newPrice.innerHTML = `<span>${item.price}</span>
         <img src='${item.assure}'>`
         // 2b
         const oldPrice = document.createElement('div')
         oldPrice.className = 'old-price'
         oldPrice.innerHTML =  `<span class='strike'>${item.strike}</span>
         <span class='save'>${item.off}`
         // 2c
         const delivery = document.createElement('span')
         delivery.className = 'delivery'
         delivery.innerHTML = item.delivery
         // 2d
         const saver = document.createElement('span')
         saver.className = 'saver'
         saver.innerHTML = item.save
         // 2e
         const exchange = document.createElement('div')
         exchange.className = 'exchange'
         exchange.innerHTML = item.exchange

         dataRight.append(newPrice,oldPrice,delivery,saver,exchange)
         // --

         dataSection.append(dataLeft,dataRight)

         inDivOne.append(ImageSection,dataSection)
         divOne.append(inDivOne,inDivTwo)

         mainBody.append(divOne)
    }
}

thePhones(currentPage, data.Phones)

// ----------------



// ---------- FILTER

const theFilter = document.querySelector('.fltr')

const filterNav = document.querySelector('.filter-nav ')
const filterBody = document.querySelector('.filter-body')
const filterBotm = document.querySelector('.filter-bottom')

data.filterDiv.forEach(item =>{
    // nav
    const arrow = document.createElement('a')
    arrow.innerHTML = `<img src ='${item.arrow}'>`
    arrow.className = 'arw'

    const filterTxt = document.createElement('a')
    filterTxt.innerHTML = `<span>${item.fltr}`
    filterTxt.className = 'fltr-text'

    filterNav.append(arrow,filterTxt)

    // body1
    const filters = document.createElement('div')
    filters.className = 'filters'

    item.filters.forEach(fltr =>{
        const filterDivs = document.createElement('div')
        filterDivs.className = 'filter-div'

        const filterPad = document.createElement('div')
        filterPad.className = 'filter-pad'

        const filterSpan = document.createElement('span')
        filterSpan.className = 'filter-span'
        filterSpan.textContent = fltr

        filterPad.append(filterSpan)
        filterDivs.append(filterPad)
        filters.append(filterDivs)
    })
    filterBody.append(filters)

})

    // body2
    const theFilters = document.createElement('div')
    theFilters.className = 'the-filters'

    const inTheFilters = document.createElement('div')
    inTheFilters.className = 'inthe-filters'

    data.filterDivfilters.forEach(item =>{
        const filterItems = document.createElement('div')
        filterItems.className = item.class

        item.items.forEach(one =>{

            const bothSpanFilter = document.createElement('div')
            bothSpanFilter.className = 'check-span'

            const filterSpan = document.createElement('span')
            filterSpan.className = 'fd'
            filterSpan.textContent = one
    
            const filterInput = document.createElement('input')
            filterInput.type = 'checkbox'
            
            bothSpanFilter.append(filterInput,filterSpan)
            filterItems.append(bothSpanFilter)
        })

        inTheFilters.append(filterItems)
        theFilters.append(inTheFilters)
    })

    filterBody.append(theFilters)
    
    // footer
    const filterFooter = document.createElement('div')
    filterFooter.className = 'filter-foot'

    data.filterFoot.forEach(footer =>{
        const number = document.createElement('span')
        number.className = footer.classOne
        number.innerHTML = footer.number

        const apply = document.createElement('span')
        apply.className = footer.classTwo
        apply.textContent = footer.apply

        filterFooter.append(number,apply)
    })

    filterBotm.append(filterFooter)

    // -------------------------------------------------

        //  ===============================
    })
})
