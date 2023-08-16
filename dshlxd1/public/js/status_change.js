import $ from 'jquery';
const oko1 = document.getElementById('oko1');
const oko2 = document.getElementById('oko2');
const usta = document.getElementById('usta');
oko1.style.fill = "url(#linearGradient-1)";
let bool =1;
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
   oko1.addEventListener('click', function(e){
        e.preventDefault();
        console.log("klik");
        if (bool == 1) {
            oko1.style.fill = "url(#linearGradient-2)";
            oko2.style.fill = "url(#linearGradient-2)";
            usta.style.cy = 290;
            bool = 0;
        }
        else{
            oko1.style.fill = "url(#linearGradient-1)";
            oko2.style.fill = "url(#linearGradient-1)";
            usta.style.cy = -150;
            bool = 1;
        }

   });
});