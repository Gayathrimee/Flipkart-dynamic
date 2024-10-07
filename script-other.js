
    // =========== pagination ============\\

    function updatepage(totalPages, currentPage) {

        const pagecount = document.querySelector('.pages');

        pagecount.innerHTML = '';

        const prev = document.createElement('div')
        prev.innerHTML = data.next.prev.value
        prev.className = data.next.prev.class
        pagecount.appendChild(prev)



        // Display pagination numbers


        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('div');
            pageButton.innerHTML = `<a>${i}</a>`;
            pageButton.id = 'count';
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => display(data.phonesec, i));
            pagecount.appendChild(pageButton);


            const page = document.querySelector('.pagenumber')
            page.innerHTML = `page ${currentPage} of 389`

        }


        const next = document.createElement('div')
        next.innerHTML = data.next.last.value
        next.className = data.next.last.class
        pagecount.appendChild(next)



        if (currentPage > 1) {
            prev.style.display = 'flex'
        }

        if (currentPage >= totalPages) {
            next.style.display = 'none'
        }


        // Add event listeners for next and prev buttons

        console.log(currentPage)

        prev.addEventListener('click', () => {

            if (currentPage > 1) {

                display(data.phonesec, currentPage - 1)

            }
        });

        next.addEventListener('click', () => {
            if (currentPage < totalPages) {

                display(data.phonesec, currentPage + 1)

            }

        });

    }



     // footer section

     const looks = document.querySelector('.sublook')
     const find = document.createElement('div')
     find.className = 'find'
     find.innerHTML = data.next.looking
     looks.appendChild(find)



     const yes = document.createElement('button')
     yes.className = 'yesbtn'
     yes.innerHTML = data.next.yes


     looks.appendChild(yes)

     const no = document.createElement('button')
     no.className = 'nobtn'
     no.innerHTML = data.next.no
     looks.appendChild(no)




     const footer1 = document.querySelector('.footer1')
     data.footer.foot1.forEach(item => {
         const sec = document.createElement('div')
         sec.className = "footsec"
         sec.id = item.id


         const head = document.createElement('div')
         head.className = "foothead"
         head.innerHTML = item.name
         sec.appendChild(head)

         item.loop.forEach(foot => {
             const list = document.createElement('p')
             list.innerHTML = foot

             sec.appendChild(list)
             // console.log(list)
         })


         footer1.appendChild(sec)

     })

     const bottom = document.querySelector('.bottom')
     data.footer.bottom.forEach(item => {

         const botm = document.createElement('div')
         botm.innerHTML = `${item}`
         bottom.appendChild(botm)

     });






