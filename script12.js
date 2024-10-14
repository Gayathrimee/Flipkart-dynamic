document.addEventListener('DOMContentLoaded', () => {

    fetch('node.json')
        .then(response => response.json())
        .then(data => {

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
            data.header2.forEach(item => {
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
            data.sidebarUp.forEach(item => {

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
                price.innerHTML = `
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
                data.sidebarUp[0].min.forEach(minvalue => {

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
                data.sidebarUp[0].max.forEach(maxvalue => {

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

                brandHead.addEventListener('click', () => {
                    if (brandContent.style.display === 'none' || brandContent.style.display === '') {
                        brandContent.style.display = 'block';
                    } else {
                        brandContent.style.display = 'none';
                    }
                })

                // brand checkbox
                const checkBoxContent = document.createElement('div')
                checkBoxContent.className = 'checkbox-content'

                // brand checkboxes loop
                item.brands.forEach(phone => {
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

                brandContTop.append(brandSearch, checkBoxContent)
                brandContent.append(brandContTop, brandMore)
                brands.append(brandContent)

                sidebarUp.append(brands)


                // search functionality

                const input = brandSearch.querySelector('#input')

                input.addEventListener('input', () => {
                    const filter = input.value.toLowerCase()
                    const companyNames = checkBoxContent.querySelectorAll('.check-box')

                    companyNames.forEach(box => {
                        const phoneName = box.querySelector('.checkText').textContent.toLowerCase()

                        if (phoneName.includes(filter)) {
                            box.style.display = 'block'
                        } else {
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
                fAssuredLabel.append(labelInput, labelImg)

                const fAssuredDiv = document.createElement('div')
                const fAsDivSpan = document.createElement('span')
                fAsDivSpan.innerHTML = '?'
                fAssuredDiv.append(fAsDivSpan)

                fAssured.append(fAssuredLabel, fAssuredDiv)

                sidebarUp.append(fAssured)

            });

            //-------------- sidebarDown

            const sidebarDown = document.querySelector('.in-side')
            data.sidebarDown.forEach(item => {

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

                item.checkdatas.forEach(check => {
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


                topContent.append(topContName, topContImg)
                ratingName.append(topContent, botmCont)
                sidebarDown.append(ratingName)

                // hide & seek fn
                topContent.addEventListener('click', () => {
                    if (botmCont.style.display === 'block') {
                        botmCont.style.display = 'none'
                    } else {
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
            data.mainTop.forEach(item => {

                const mainTopOne = document.createElement('div')
                mainTopOne.className = item.class
                mainTopOne.id = item.id

                item.name.forEach(name => {
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

                item.sorts.forEach(sort => {
                    const theSorts = document.createElement('div')
                    theSorts.className = 'sorts'
                    theSorts.textContent = sort

                    maintTopThree.append(theSorts)
                })

                mainTopBar.append(mainTopOne, mainTopTwo, maintTopThree)

                // click event
                const allSorts = document.querySelectorAll('.sorts')
                allSorts.forEach((sort, idx) => {

                    if (idx === 0) {
                        sort.classList.add('blue')
                    }
                    sort.addEventListener('click', () => {
                        removeBlueSorts()
                        sort.classList.add('blue')
                    })

                    if (idx === 1) {
                        sort.classList.add('sort1')
                    }
                    if (idx === 2) {
                        sort.classList.add('sort2')
                    } if (idx === 3) {
                        sort.classList.add('sort3')
                    }
                })


                function removeBlueSorts() {
                    allSorts.forEach(sort => sort.classList.remove('blue'))
                }
                // -----

            })
            // --------------



            // =================== main phones =============

            const mainPhones = document.querySelector('.main-phones')

            const itemsPerPage = 6;
            let currentPage = 1;


            function renderPage(pageNumber, items) {

                mainPhones.innerHTML = '';

                // Check if items is defined and is an array
                if (!items || !Array.isArray(items)) {
                    console.error('Invalid items array');
                    return;
                }

                // --------------
                if (items.length === 0) {
                    const noMessage = document.createElement('div')
                    noMessage.className = 'no-result'

                    const noMessageContent = document.createElement('span')
                    noMessageContent.textContent = 'Oops, the result is not found!'
                    const noMessageImg = document.createElement('img')
                    noMessageImg.src = '/images/error-page-page-not-found-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector-removebg-preview.png'

                    noMessage.append(noMessageContent, noMessageImg)
                    mainPhones.append(noMessage)

                    return;        // exit the fn early
                }
                // --------------

                const startIndex = (pageNumber - 1) * itemsPerPage
                const endIndex = Math.min(startIndex + itemsPerPage, items.length)

                for (let i = startIndex; i < endIndex; i++) {
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

                    heart.addEventListener('click', () => {
                        heart.classList.toggle('love')
                    })

                    ImageSection.append(phoneImg, compare, heart)
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
                    item.specialities.forEach(special => {
                        const specLi = document.createElement('li')
                        specLi.innerHTML = special.data
                        specLi.id = special.id

                        specialities.append(specLi)
                    })
                    dataLeft.append(leftH1, leftRates, specialities)
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
                    oldPrice.innerHTML = `<span class='strike'>${item.strike}</span>
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

                    dataRight.append(newPrice, oldPrice, delivery, saver, exchange)
                    // --

                    dataSection.append(dataLeft, dataRight)

                    divOne.append(ImageSection, dataSection)

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
                prevValue.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--
                        renderPage(currentPage, data.Phones)
                        createPaginationControls(totalItems)
                    }
                })
                // ---

                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.innerHTML = `<a>${i}</a>`;
                    pageButton.id = 'count';



                    if (i === currentPage) {
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

                nextValue.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        currentPage++
                        renderPage(currentPage, data.Phones)
                        createPaginationControls(totalItems)
                    }
                })
                // ---


                // prev - next values hide or show event

                if (currentPage === 1) {
                    prevValue.style.display = 'none'
                } else {
                    prevValue.style.display = 'block'
                }

                if (currentPage === totalPages) {
                    nextValue.style.display = 'none'
                } else {
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
                    if (selectedFilters.length === 0) {
                        renderPage(1, data.Phones)
                        createPaginationControls(data.Phones.length)

                        return
                    }
                    // -------



                    // Filter phones based on selected filters
                    const filteredPhones = data.Phones.filter(phone => {

                        // console.log("Current phone:", phone.h1); 

                        const phoneId = phone.id.toLowerCase().trim()
                        console.log(phoneId, selectedFilters)

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
            lowToHighPrice.addEventListener('click', () => {

                if (!data || !Array.isArray(data.Phones)) {
                    console.error('data or data.Phones is not defined');
                    renderPage(1, []); // pass an empty array to renderPage
                    return;
                }

                const itemPrice = [...data.Phones]

                if (itemPrice.length === 0) {
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
            highToLowPrice.addEventListener('click', () => {

                if (!data || !Array.isArray(data.Phones)) {
                    console.log('data is not defined')

                    renderPage(1, [])
                    return
                }

                const itemPrice = [...data.Phones]

                if (itemPrice.length === 0) {
                    console.log('no items to sort')

                    renderPage(1, [])
                    return
                }

                const sortedPrice = itemPrice.sort((high, low) => {
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
            relevanceButton.addEventListener('click', () => {

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

            function filterSearchPhones() {
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

            ramCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {

                    const selectedRams = Array.from(ramCheckboxes)
                        .filter(i => i.checked)
                        .map(i => i.value.toLowerCase().trim())

                    console.log('selectedRams:', selectedRams)

                    if (selectedRams.length === 0) {
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

                if (priceString === 'min') {
                    return 0;           // represents the min price threshold (less than 10000)
                    // i.e 'min' is  represented as 0 here
                }

                // Remove any non-numeric characters (except for the decimal point)
                return parseFloat(priceString.replace(/[^\d.-]+/g, ''));
            }


            function filterAndRender(minValue, maxValue) {

                const filteredPhones = data.Phones.filter(phone => {
                    const phonePrice = parsePrice(phone.price)

                    if (minValue === 0) {
                        return phonePrice < 10000       // since min is represented as 0, when clicks on min it will 
                        //  count as 0 and return phones with price less than 10000
                    }

                    return phonePrice >= minValue && phonePrice <= maxValue
                })

                renderPage(currentPage, filteredPhones)
            }


            // page navigation

            function nextPage(filteredPhones) {
                if ((currentPage * itemsPerPage) < filteredPhones.length) {
                    currentPage++

                    renderPage(currentPage, filteredPhones)
                }
            }

            function previousPage(filteredPhones) {
                if (currentPage > 1) {
                    currentPage--

                    renderPage(currentPage, filteredPhones)
                }
            }


            // Add event listeners for selection changes
            let selectedMin = null;
            let selectedMax = null;

            const selectOne = document.querySelector('.min select')
            const selectTwo = document.querySelector('.max select')

            selectOne.addEventListener('change', function () {
                selectedMin = this.value ? parsePrice(this.value) : null;

                if (selectedMax !== null) {
                    filterAndRender(selectedMin, selectedMax)
                }
            })

            selectTwo.addEventListener('change', function () {
                selectedMax = this.value ? parsePrice(this.value) : null;

                if (selectedMin !== null) {
                    filterAndRender(selectedMin, selectedMax)
                }
            })

            renderPage(currentPage, data.Phones)

            //7. -----------------


            // -------------------------------------------------


            // =================== body 2 ==========================

            // ------ navbar
            const NavOne = document.querySelector('.navOne')
            data.navOne.forEach(item => {

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


                inNavOne.append(arrowImg, flip, mobileTxt, searchImg, cartImg, loginTxt)
                NavOne.append(inNavOne)
            })

            const NavTwo = document.querySelector('.navTwo')

            const inNav = document.createElement('div')
            inNav.className = 'inNavTwo'

            data.navTwo.forEach(item => {

                const twoTexts = document.createElement('div')
                twoTexts.className = item.class

                const twoText = document.createElement('span')
                twoText.textContent = item.txt
                const twoImg = document.createElement('img')
                twoImg.src = item.img

                twoTexts.append(twoText, twoImg)
                inNav.append(twoTexts)
                NavTwo.append(inNav)
            })


            const NavThree = document.querySelector('.navThree')

            const navThreeFlex = document.createElement('div')
            navThreeFlex.className = 'nav-3-flex'

            const inNavThree = document.createElement('div')
            inNavThree.className = 'in-nav-3'

            data.navThree.forEach(item => {
                const threeDiv = document.createElement('div')
                threeDiv.className = item.class

                threeDiv.addEventListener('click', () => {
                    threeDiv.classList.toggle('active')
                })

                const threeDivMarg = document.createElement('div')
                threeDivMarg.className = 'div-3-marg'

                const threePic = document.createElement('div')
                threePic.innerHTML = `<img src='${item.img}'>`
                threePic.className = item.classImg
                const threeTxt = document.createElement('div')
                threeTxt.innerHTML = `<span>${item.txt}`
                threeTxt.className = item.classTxt

                threeDivMarg.append(threePic, threeTxt)
                threeDiv.append(threeDivMarg)
                inNavThree.append(threeDiv)
            })

            navThreeFlex.append(inNavThree)
            NavThree.append(navThreeFlex)
            // ------ -----


            // login-page




            // --------------- phones

            const mainBody = document.querySelector('.main-body')

            const phonesPerPage = data.Phones.length
            let existPage = 1

            function thePhones(pageNumber, items) {
                mainBody.innerHTML = ''

                const startIndex = (pageNumber - 1) * phonesPerPage
                const endIndex = Math.min(startIndex + phonesPerPage)

                if(!Array.isArray(items)){
                    console.error('the phones argument is not an array', items)
                    return
                }

                if (items.length === 0) {
                    const noMessage = document.createElement('div')
                    noMessage.className = 'no-result'

                    const noMessageContent = document.createElement('span')
                    noMessageContent.textContent = 'Oops, the result is not found!'
                    const noMessageImg = document.createElement('img')
                    noMessageImg.src = '/images/error-page-page-not-found-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector-removebg-preview.png'

                    noMessage.append(noMessageContent, noMessageImg)
                    mainBody.append(noMessage)

                    return;        // exit the fn early
                }

                for (i = startIndex; i < endIndex; i++) {
                    const item = items[i]

                    if (!item) {
                        // console.error('Item is undefined at index:', i); // Debug log to catch issues
                        continue;
                    }



                    // phone-sec
                    const divOne = document.createElement('div')
                    divOne.className = 'phone-sec'

                    const inDivOne = document.createElement('div')
                    inDivOne.className = 'in-div-1'

                    const inDivTwo = document.createElement('div')
                    inDivTwo.className = 'in-div-2'
                    inDivTwo.innerHTML = `<span> View all Variants </span>`

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

                    ImageSection.append(phoneImg, compare)
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
                    // const specialities = document.createElement('ul')
                    // item.specialities.forEach(special => {
                    //     const specLi = document.createElement('li')
                    //     specLi.innerHTML = special.data
                    //     specLi.id = special.id

                    //     specialities.append(specLi)
                    // })
                    dataLeft.append(leftH1, leftRates)
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
                    oldPrice.innerHTML = `<span class='strike'>${item.strike}</span>
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

                    dataRight.append(newPrice, oldPrice, delivery, saver, exchange)
                    // --

                    dataSection.append(dataLeft, dataRight)

                    inDivOne.append(ImageSection, dataSection)
                    divOne.append(inDivOne, inDivTwo)

                    mainBody.append(divOne)
                }
            }

            thePhones(existPage, data.Phones)

            // ----------------



            // ---------- FILTER

            const filterNav = document.querySelector('.filter-nav ')
            const filterBody = document.querySelector('.filter-body')
            const filterBotm = document.querySelector('.filter-bottom')

            const filtersContainer = document.createElement('div');
            filtersContainer.className = 'filters-container';

            data.filterDiv.forEach(item => {
                // nav
                const arrow = document.createElement('a')
                arrow.innerHTML = `<img src ='${item.arrow}'>`
                arrow.className = 'arw'

                const filterTxt = document.createElement('a')
                filterTxt.innerHTML = `<span>${item.fltr}`
                filterTxt.className = 'fltr-text'

                const filterTxtTwo = document.createElement('a')
                filterTxtTwo.innerHTML = `<span>${item.clear}`
                filterTxtTwo.className = 'fltr-clear'

                filterNav.append(arrow, filterTxt, filterTxtTwo)

                // body1
                const filters = document.createElement('div')
                filters.className = 'filters'

                item.filters.forEach(fltr => {
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
                filtersContainer.append(filters);
            })
            filterBody.append(filtersContainer);


            // body2
            const allFilter = document.querySelectorAll('.filter-div');

            // Function to create and append filters for the specified index
            function createFiltersForIndex(idx) {
                const theFilters = document.createElement('div');
                theFilters.className = 'the-filters';

                const inTheFilters = document.createElement('div');
                inTheFilters.className = 'inthe-filters';

                const selectedFiltr = data.filterDivfilters[idx];

                const filterItems = document.createElement('div');
                filterItems.className = selectedFiltr.class;

                // Loop through each item in the selected filter and create the checkboxes
                selectedFiltr.items.forEach((one) => {
                    const bothSpanFilter = document.createElement('div');
                    bothSpanFilter.className = 'check-span';
                    const spanLabel = document.createElement('label')

                    const filterSpan = document.createElement('span');
                    filterSpan.className = 'fd';
                    filterSpan.textContent = one;

                    const filterInput = document.createElement('input');
                    filterInput.type = 'checkbox';
                    // filterInput.className = 'check-in';
                    filterInput.className = selectedFiltr.inputClass;
                    filterInput.classList.add('check-in')
                    filterInput.value = one

                    spanLabel.append(filterInput, filterSpan);
                    bothSpanFilter.append(spanLabel);
                    filterItems.append(bothSpanFilter);


                    filterInput.addEventListener('change', applyFilters)
                });
                                                                        
                inTheFilters.append(filterItems);
                theFilters.append(inTheFilters);
                filterBody.append(theFilters);
            }

            createFiltersForIndex(0);               // Create default filters for the first index (idx === 0)


            allFilter.forEach((div, idx) => {

                if (idx === 0) {
                    div.classList.add('clicked')
                }

                div.addEventListener('click', () => {


                    clickFilters();
                    div.classList.add('clicked');

                    // Clear the filter body and ensure the previous '.the-filters' is removed
                    const existingTheFilters = document.querySelector('.the-filters');
                    if (existingTheFilters) {
                        existingTheFilters.remove();
                    }

                    // Create filters for the clicked index
                    createFiltersForIndex(idx);
                });
            });

            function clickFilters() {
                allFilter.forEach(filterDiv => {
                    filterDiv.classList.remove('clicked');
                });
            }

            // ------------


            // footer
            const filterFooter = document.createElement('div')
            filterFooter.className = 'filter-foot'

            data.filterFoot.forEach(footer => {
                const number = document.createElement('span')
                number.className = footer.classOne
                number.innerHTML = footer.number

                const apply = document.createElement('span')
                apply.className = footer.classTwo
                apply.textContent = footer.apply

                filterFooter.append(number, apply)
            })

            filterBotm.append(filterFooter)


            // sort
            const sortDiv = document.querySelector('.body-2 .sort-filters')

            const insort = document.createElement('div')
            insort.className = 'in-sort'

            let prevSelected = null

            data.sort.forEach(sort => {
                const sortby = document.createElement('div')
                sortby.className = 'sort-by'
                sortby.textContent = sort.txt

                const sortUls = document.createElement('div')
                sortUls.className = 'sort-uls'

                sort.ul.forEach((ul, idx) => {

                    const sortLis = document.createElement('div')
                    const sortLiFlex = document.createElement('div')
                    sortLiFlex.className = 'sort-li-flex'


                    const liLeft = document.createElement('span')
                    liLeft.className = 'li-write'
                    liLeft.textContent = ul

                    if (idx === 2) {
                        liLeft.classList.add('low-price')
                    }

                    if (idx === 3) {
                        liLeft.classList.add('high-price')
                    }

                    // console.log(liLeft.className)

                    const liRight = document.createElement('div')
                    liRight.className = 'li-image'
                    const selectImg = document.createElement('img')
                    selectImg.src = sort.deselect

                    liRight.append(selectImg)
                    sortLiFlex.append(liLeft, liRight)


                    // click event

                    // deslect previous one
                    liLeft.addEventListener('click', () => {

                        if (prevSelected) {
                            const prevImg = prevSelected.querySelector('.li-image img')

                            if (prevImg) {
                                prevImg.src = sort.deselect
                            }

                            // console.log(prevImg)
                        }


                        if (selectImg.src.includes('deselectbtn')) {
                            selectImg.src = sort.select
                        } else {
                            selectImg.src = sort.deselect
                        }


                        prevSelected = liLeft.parentElement
                        // console.log(prevSelected)
                    })

                    sortLis.append(sortLiFlex)
                    sortUls.append(sortLis)
                })

                insort.append(sortby, sortUls)
            })

            sortDiv.append(insort)
            // ----------


            // ================================  functions =======================


            //      filter - event listener
            const clickFilter = document.querySelector('.filtr')
            const withFilter = document.querySelector('.with-filter')
            const noFilter = document.querySelector('.no-filter')
            const filterArrw = document.querySelector('.filter-nav .arw')

            clickFilter.addEventListener('click', () => {
                noFilter.style.display = 'none'
                withFilter.style.display = 'block'
            })

            filterArrw.addEventListener('click', () => {
                withFilter.style.display = 'none'
                noFilter.style.display = 'block'
            })
            //------------



            //  filter - phones

            function filterPhonesByBrands(phones) {


                if(!Array.isArray(phones)){
                    // console.error('Expected an array of phones but got:', phones);
                    return []
                }
 
                const checkedBrands = Array.from(document.querySelectorAll('.check-span .brand-range:checked'))
                    .map(input => {
                        const spanLabel = input.nextElementSibling
                        return spanLabel.textContent.trim().toLowerCase(); 
                    })
                    .filter(Boolean)

                console.log('checkedbrands', checkedBrands)
                console.log('Phone IDs:', phones.map(phone => phone.id.toLowerCase())); // Log all phone IDs for comparison


                const phoneFilter = phones.filter(phone => {
 
                    const phoneId = phone.id.toLowerCase()
                    console.log('phoneid:', phone.id)


                    if (checkedBrands.length === 0) return true      // if no brands are selected, show all phones
                    
                    // check if the phone's brand is in the checkedbrands array
                    const isIncluded = checkedBrands.includes(phoneId)
                    console.log(`is ${phoneId} included?`, isIncluded)

                    return isIncluded

                })

                console.log('filtered phones', phoneFilter)
                return phoneFilter

                // thePhones(existPage, phoneFilter)
            }
            
            // -------------

            // filter - price

            function filterPhonesByPrices(phones) {


                if(!Array.isArray(phones)){
                    // console.error('Expected an array of phones but got:', phones);
                    return []
                }


                const selectedPriceRanges = Array.from(document.querySelectorAll('.check-span .price-range:checked'))
                    .filter(input => input.checked)
                    .map(input => input.value);
            
                let phonesFiltered = [];
            
                selectedPriceRanges.forEach(range => {
                    let minPrice = 0, maxPrice = Infinity;
            
                    switch (range) {
                        case "Rs.10000 and Below":
                            maxPrice = 10000;
                            break;
                        case "Rs. 10000 - Rs. 15000":
                            minPrice = 10000;
                            maxPrice = 15000;
                            break;
                        case "Rs. 15000 - Rs. 20000":
                            minPrice = 15000;
                            maxPrice = 20000;
                            break;
                        case "Rs. 20000 - Rs. 30000":
                            minPrice = 20000;
                            maxPrice = 30000;
                            break;
                        case "Rs. 30000 and Above":
                            minPrice = 30000;
                            maxPrice = Infinity
                            break;
                    }
            
                    console.log(`Filtering for range: ${range}, minPrice: ${minPrice}, maxPrice: ${maxPrice}`);
            
                    // Filtering phones based on the price range
                    const rangeFilter = phones.filter(phone => {
                        if (!phone.price || typeof phone.price !== 'string') {
                            console.log(`Skipping phone with missing or invalid price: ${phone.id}`);
                            return false; // Skip if price is missing or not a string
                        }
            
                        const pricePhone = parseFloat(phone.price.replace(/[₹,]/g, '').trim());
                        console.log(`Phone: ${phone.id}, Price: ${pricePhone}`);

                        return (pricePhone >= minPrice && pricePhone < maxPrice)
                    });
            
                    console.log(`Filtered phones for range ${range}:`, rangeFilter);
            
                    // Combine the filtered phones
                    phonesFiltered = [...phonesFiltered, ...rangeFilter];
                });
            
                if (phonesFiltered.length === 0) {
                    console.log('No phones matched the selected price range.');
                    return [];
                }
            
                // Use Set to remove duplicates and map back to phone objects
                const uniquePhones = [...new Set(phonesFiltered.map(phone => phone.id))]
                    .map(id => phonesFiltered.find(phone => phone.id === id));
            
                console.log('Unique phones:', uniquePhones);
                return uniquePhones
            }

 
            // -------------


            //  apply button

            function applyFilters(){

            const applyButton = document.querySelector('.filter-foot .apply')
            applyButton.addEventListener('click', () => {

                mainBody.innerHTML = ''

                let allFilteredPhones = [...data.Phones]

                if (!Array.isArray(allFilteredPhones)) {
                    console.error('Expected data.Phones to be an array but got:', allFilteredPhones);
                    return;
                }

                console.log('orginal data:',allFilteredPhones)
                      
                allFilteredPhones = filterPhonesByBrands(allFilteredPhones)
                // console.log('phones after brand filter:',allFilteredPhones)

                if(allFilteredPhones.length === 0){
                    console.log('no phones match the selected brands')
                    return 
                }  

                allFilteredPhones = filterPhonesByPrices(allFilteredPhones)
                // console.log('phones after price filter',allFilteredPhones)


                if(allFilteredPhones.length === 0){
                    console.log('no phones match the selected prices')
                }
                
                  
                thePhones(existPage, allFilteredPhones)

                withFilter.style.display = 'none'
                noFilter.style.display = 'block'
            })
        }
            // -------------


            // filter 5g

            let isFiveGFiltered = false

            document.querySelector('.div-1').addEventListener('click', () => {
                if (isFiveGFiltered) {

                    thePhones(existPage, data.Phones)
                    isFiveGFiltered = false

                } else {

                    filter5gPhones()
                    isFiveGFiltered = true
                }
                console.log(isFiveGFiltered)


            })

            function filter5gPhones() {
                const fiveGPhones = data.Phones.filter(phone => phone.image.toLowerCase().trim().includes('5g'))

                thePhones(existPage, fiveGPhones)

                console.log('Original Data:', data.Phones);  // Before filtering
                console.log('Filtered 5G Phones:', fiveGPhones);  // After filtering
                console.log('Current Page:', existPage);  // Ensure page number is correct
            }


            // clear Filters

            const clearFilter = document.querySelector('.filter-nav .fltr-clear')

            clearFilter.style.display = 'none'

            const checkBoxes = document.querySelectorAll('.check-span .check-in')

            function updateClearBtnVisibility() {

                const anyChecked = Array.from(checkBoxes).some(checkbox => checkbox.checked)
                clearFilter.style.display = anyChecked ? 'table-cell' : 'none'

                // console.log(anyChecked)
            }

            checkBoxes.forEach(box => {
                box.addEventListener('change', updateClearBtnVisibility)


            })

            clearFilter.addEventListener('click', () => {

                checkBoxes.forEach(box => {
                    box.checked = false
                })

                clearFilter.style.display = 'none'

                thePhones(existPage, data.Phones)

                updateClearBtnVisibility()
            })

            updateClearBtnVisibility()

            // ----------


            // ======== sort click event ==============

            const clickSort = document.querySelector('.inNavTwo .sort')

            const sortOverlay = document.createElement('div')
            sortOverlay.className = 'sort-overlay'
            document.body.append(sortOverlay)

            const sortInsort = document.querySelector('.sort-filters .in-sort')

            clickSort.addEventListener('click', () => {

                sortInsort.classList.add('active')
                sortOverlay.classList.add('active')
                document.body.classList.add('no-scroll')

                console.log(sortInsort)
            })

            sortOverlay.addEventListener('click', () => {
                sortOverlay.classList.remove('active')
                sortInsort.classList.remove('active')
                document.body.classList.remove('no-scroll')
            })
            // ----------

            // ----------------- price-filter ------------------

            // low to high

            const lowPrice = document.querySelector('.sort-li-flex .low-price')
            lowPrice.addEventListener('click', () => {

                if (!data || !Array.isArray(data.Phones)) {
                    thePhones(1, [])
                    return
                }

                const lowItem = [...data.Phones]

                if (lowItem.length === 0) {
                    thePhones(1, [])
                    return
                }

                sortOverlay.classList.remove('active')
                sortInsort.classList.remove('active')
                document.body.classList.remove('no-scroll')


                const sortingPrice = lowItem.sort((high, low) => {
                    const priceA = parseFloat(high.price.replace(/[₹,]/g, '').trim())
                    const priceB = parseFloat(low.price.replace(/[₹,]/g, '').trim())

                    return priceA - priceB

                })
                console.log('sortingPrice:', sortingPrice)

                thePhones(1, sortingPrice)

            })


            // high to low

            const highPrice = document.querySelector('.sort-li-flex .high-price')
            highPrice.addEventListener('click', () => {

                if (!Array || !Array.isArray(data.Phones)) {
                    thePhones(1, [])
                    return
                }

                const highItems = [...data.Phones]

                if (highItems.length === 0) {
                    thePhones(1, [])
                    return
                }

                sortOverlay.classList.remove('active')
                sortInsort.classList.remove('active')
                document.body.classList.remove('no-scroll')

                const sortingHighPrice = highItems.sort((high, low) => {
                    const priceA = parseFloat(high.price.replace(/[₹,]/g, '').trim())
                    const priceB = parseFloat(low.price.replace(/[₹,]/g, ''.trim()))

                    return priceB - priceA
                })

                thePhones(1, sortingHighPrice)
            })


            //  relevance btn

            const allLiWrites = document.querySelectorAll('.li-write')

            allLiWrites.forEach((li, idx) => {

                if (idx === 0) {
                    li.addEventListener('click', () => {

                        sortOverlay.classList.remove('active')
                        sortInsort.classList.remove('active')
                        document.body.classList.remove('no-scroll')


                        thePhones(1, data.Phones)

                    })
                }
            })


            // sort phones from 10000 - 20000 

            let isPriceFiltered = false
            const priceDivThree = document.querySelector('.in-nav-3 .div-2')
            priceDivThree.addEventListener('click', () => {

                if (isPriceFiltered) {
                    thePhones(existPage, data.Phones)
                    isPriceFiltered = false

                } else {
                    priceSort()
                    isPriceFiltered = true
                }

                function priceSort() {
                    const priceThree = [...data.Phones]

                    if (priceThree.length === 0) {
                        thePhones(1, [])
                        return
                    }

                    const priceFilter = priceThree.filter(phone => {

                        if (!phone.price || typeof phone.price != 'string') {
                            return false
                        }

                        const prices = parseFloat(phone.price.replace(/[₹,]/g, '').trim())
                        return prices >= 10000 && prices <= 20000
                    })

                    const sortAmount = priceFilter.sort((a, b) => {
                        const priceA = parseFloat(a.price.replace(/[₹,]/g, '').trim())
                        const priceB = parseFloat(b.price.replace(/[₹,]/g, '').trim())

                        return priceA - priceB
                    })

                    thePhones(1, sortAmount)
                    console.log('sortamount:', sortAmount)
                }
            })

            // -------------------------------------------------

            //  ===============================
        })
})
