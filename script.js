const input = document.querySelector('.form-control')
const list = document.querySelectorAll('.list-group-item')


input.addEventListener('input' ,() => {
    const club = input.value.toLowerCase()

    list.forEach(li => {
        const value = li.textContent.toLowerCase()
        if (value.indexOf(club) == -1) {
            li.classList.add('hide')

        }else {
            li.classList.remove('hide')


        }
    })
})

