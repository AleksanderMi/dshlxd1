import $ from 'jquery';
$(document).ready(function() {
    let $container = $('.tutaj');
    $container.find('i').on('click', function(e) {
        e.preventDefault();
        let $link = $(e.currentTarget);
        $.ajax({
            url: '/list/status_edit/'+$link.data('curr_num'),
            method: 'POST',
            dataType: 'json',
        }).then(function(data){
            if(!data.state){
                location.reload();
            } else {

            }
        });
    });
});