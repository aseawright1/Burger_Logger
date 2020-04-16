$(function() {
    $('#createburger').on('click', function(event) {
        const newBurger = { burger_name: $('#newburger').val().trim(), devoured: 0 }
        console.log(newBurger)

        //POST
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            //reload to update page
            location.reload()
        })
    })

    $('.change-burger').on('click', function(event) {
        const id = $(this).data('id')
        const devouredBurger = $(this).data('newdevoured')
        const newDevCond = { devoured: devouredBurger}

        //PUT
        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: newDevCond
        }).then(location.reload())
    })

    $('.delete-burger').on('click', function(event) {
        var id = $(this).data('id')

        //DELETE
        $.ajax(`/api/burgers/${id}`, {
            type: 'DELETE'
        }).then(location.reload())
    })
})