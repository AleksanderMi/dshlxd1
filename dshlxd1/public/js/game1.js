const bucket = document.getElementById('bucket');
const object = document.getElementById('object');
const score = document.getElementById('score');
const score2 = document.getElementById('score2');
const cloud = document.getElementById('cloud');
const root = document.documentElement;
let i = 1;
bucket.style.left = "0px";
cloud.style.left = "1px";
root.style.setProperty('--left_pos', "11px");
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function move_right() {
    let pos = bucket.style.left;
    pos.slice(0, -2);
    let pos_int = parseInt(pos) + 20;
    if (pos_int< 840)
        bucket.style.left = pos_int.toString()+'px';
}
function move_left() {
    let pos = bucket.style.left;
    pos.slice(0, -2);
    let pos_int = parseInt(pos) - 20;
    if (pos_int>-30)
        bucket.style.left = pos_int.toString()+'px';
}
function move_it(left)
{
    bucket.style.left = left.toString()+"px";
}

function obj_move(){
    if(!object.classList.contains('object_fall'))
    {
        let pos = (parseInt(window.getComputedStyle(cloud).getPropertyValue("left"))+24).toString()+"px"
        root.style.setProperty('--left_pos', pos);
        object.style.backgroundImage = "url('../images/los_diamentos.png')";
        object.classList.add('object_fall');
        let pos_num = parseInt(pos.slice(0,-2));
        setTimeout(() => {
            object.style.background = "none";
            object.classList.remove('object_fall');
             if(pos_num > parseInt(bucket.style.left.slice(0,-2)-5) && pos_num < parseInt(bucket.style.left.slice(0,-2)) + 33) {
                 let scor = parseInt(document.getElementById('score').innerHTML);
                 score.innerHTML = scor + 1;
                 score2.innerHTML = scor + 1;
             }
             else
             {
                 document.getElementById('score').innerHTML = 0;
                 document.getElementById('score2').innerHTML = 0;
             }

        },1480);
    }
}

// function cloud_fly()
// {
//     if(parseInt(cloud.style.left.slice(0, -2)) == 800)
//     {
//         i = -1;
//     }
//     else if(parseInt(cloud.style.left.slice(0, -2)) == 0)
//     {
//         i = 1;
//     }
//         cloud.style.left = (parseInt(cloud.style.left.slice(0, -2))+i).toString() + "px";
//         //cloud.style.left = toString(clpos)+"px";
//         // console.log(cloud.style.left);
//
// }


$(document).ready(function() {
    sleep(100);
    setInterval(obj_move, 100);
    document.addEventListener('keypress',function(event){
        if(event.key == "d")
            move_right();
        else if(event.key == "a")
            move_left();
    });
    document.addEventListener('mousemove', function(e) {
        let left = e.offsetX;
        move_it(left);

    });
});