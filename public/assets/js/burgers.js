$(function() {
    $('.create-form').on('submit', function(event) {
        event.preventDefault()
        const newBurger = { burger_name: $('#burger').val().trim(), devoured: false }

        //POST
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('New burger added')
            location.reload()
        })
    })

    $('.change-burger').on('submit', function(event) {
        const id = $(this).data('id')
        const devouredBurger = $(this).data('newDevoured')
        const newDevCond = { devoured: devouredBurger}

        //PUT
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevCond
        }).then(function() {
            console.log('Devoured is now ', devouredBurger)
            location.reload
        })
    })
})