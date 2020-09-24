$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault()

        let name = $('#name').val()
        let location = $('#location').val()
        let ranking = $('#ranking').val()

        $.ajax('http://localhost:6754/api/park/create',
            {
                data: JSON.stringify({ "name": name, "location": location, "ranking": ranking }),
                processData: false,
                type: 'POST',
                contentType: 'application/json',
                success: function (data) {
                    console.log(data);
                }
            })
    })
    $('#checklist').click(function () {
        $.ajax('http://localhost:6754/api/park/retrieve',
            {
                dataType: 'json',
                timeout: 500,
                success: function (data, status, xhr) {
                    $.each(data, function (i, park) {
                        $('#list').append('<li> Name: ' + park.name + ', Location: ' + park.location + ', Ranking: ' + park.ranking + '</li>' + '<br>')
                    })
                }
            })
    })
})