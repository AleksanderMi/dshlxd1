// $(document).ready(function()
// {
//     $('#tutaj').trigger("click")
//     {
//         location.reload()
//     }
// });

let $container = $('.tutaj');
$container.find('i').on('click', function(e) {
    e.preventDefault();
    let $link = $(e.currentTarget);
    $.ajax({
        url: '/list/status_edit/1',
        method: 'POST',
        dataType: 'json',
    }).then(function(data)
    {
        location.reload()
    });
});