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
                document.getElementById('czek'+$link.data('curr_num')).className = ('fas fa-times');
                document.getElementById('czek'+$link.data('curr_num')).id = 'kros'+$link.data('curr_num');
            } else {
                document.getElementById('kros'+$link.data('curr_num')).className=('fas fa-check');
                document.getElementById('kros'+$link.data('curr_num')).id = 'czek'+$link.data('curr_num');
            }
        });
    });
});