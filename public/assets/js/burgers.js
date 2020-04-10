$(function() {
    $('.create-form').on('submit', function(event) {
        event.preventDefault()
        const newBurger = { burger_name: $('#burger').val().trim(), devoured: false }

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('New burger added')
            location.reload()
        })
    })
})