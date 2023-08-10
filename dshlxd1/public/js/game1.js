import $ from "jquery";

const bucket = document.getElementById('bucket');
const kolumna = document.getElementById('kolumna')
const object = document.getElementById('object');
const score = document.getElementById('score');
const score2 = document.getElementById('score2');
const cloud = document.getElementById('cloud');
const root = document.documentElement;
let i = 1;
bucket.style.left = "0px";
cloud.style.left = "0px";
root.style.setProperty('--left_pos', "10px");
// const bucketstyle = getComputedStyle(document.getElementById('bucket'))
function move_right() {
    let pos = bucket.style.left;
    pos.slice(0, -2);
    let pos_int = parseInt(pos) + 20;
    console.log(kolumna.style.right);
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
        // let pos = getComputedStyle(root).getPropertyValue('--left_pos');
        // pos.slice(0, -2);
        // let rnum = Math.random()*400 - 200;
        // let pos_int = parseInt(pos) + rnum;
        // if (pos_int<0 || pos_int > 810)
        //     pos_int = pos_int - 2*rnum;
        setTimeout(()=>{

            }, Math.random()*1900);
        root.style.setProperty('--left_pos', (parseInt(cloud.style.left.slice(0, -2))+20).toString()+"px");
        let pos = parseInt(getComputedStyle(root).getPropertyValue('--left_pos').slice(0,-2));
        object.classList.add('object_fall');
        setTimeout(() => {
            object.classList.remove('object_fall');
             if(pos > parseInt(bucket.style.left.slice(0,-2)) && pos < parseInt(bucket.style.left.slice(0,-2)) + 33) {
                 let scor = parseInt(document.getElementById('score').innerHTML);
                 score.innerHTML = scor + 1;
                 score2.innerHTML = scor + 1;
             }
             else
             {
                 document.getElementById('score').innerHTML = 0;
                 document.getElementById('score2').innerHTML = 0;
             }

        },879);
    }
}

function cloud_fly()
{
    if(parseInt(cloud.style.left.slice(0, -2)) == 810)
    {
        i = -1;
    }
    else if(parseInt(cloud.style.left.slice(0, -2)) == 0)
    {
        i = 1;
    }
        cloud.style.left = (parseInt(cloud.style.left.slice(0, -2))+i).toString() + "px";
        //cloud.style.left = toString(clpos)+"px";
        // console.log(cloud.style.left);

}


$(document).ready(function() {
    setInterval(cloud_fly, 1.5);
    setInterval(obj_move, 50);
    // document.addEventListener('keypress',function(event){
    //     if(event.key == "d")
    //         move_right();
    //     else if(event.key == "a")
    //         move_left();
    // });
    // if(parseInt(object.style.top.slice(0, -2)) > 410)
        //obj_move();
    document.addEventListener('mousemove', function(e) {
        let left = e.offsetX;
        move_it(left);
    });
});