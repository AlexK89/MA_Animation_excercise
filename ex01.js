var width = window.innerWidth
var height = window.innerHeight
var box = document.querySelector(".box")
var left_val = 0
var top_val = 0
var stop_run_switcher = 1
var flag = 0;
var interval
interval = requestAnimationFrame(move_box)

// function move_box() {
//     box.style.left = left_val + "px"
//     if (left_val < (Number(width)-60) && !flag) {
//         left_val += 5
//         interval = requestAnimationFrame(move_box)
//
//     } else if (left_val > 0 && flag) {
//         left_val -= 5
//         interval = requestAnimationFrame(move_box)
//
//     }
//     check_edge();
// }
// function check_edge() {
//     if(left_val >= (Number(width)-60)) {
//         flag = 1
//     } else if (left_val <= 0) {
//         flag = 0
//     }
// }
function move_box() {
    box.style.left = left_val + "px"
    box.style.top = top_val + "px"

    if (left_val <= 0 && top_val < (height - 60)) {
        left_val = 0
        top_val += 5
        interval = requestAnimationFrame(move_box)
    } else if (top_val >= (height-60) && left_val < (width - 60)) {
        top_val = height - 60
        left_val += 5
        interval = requestAnimationFrame(move_box)
    } else if (top_val >= 0 && left_val >= (width - 60)) {
        left_val = width - 60
        top_val -= 5
        interval = requestAnimationFrame(move_box)

    } else if (top_val <= 0 && left_val <= (width - 60)) {
        top_val = 0
        left_val -= 5
        interval = requestAnimationFrame(move_box)
    }
}

function resize() {
    width = window.innerWidth
    height = window.innerHeight
}
function stop() {

    if (stop_run_switcher) {
        cancelAnimationFrame(interval)
        stop_run_switcher = 0
    } else {
        interval = requestAnimationFrame(move_box)
        stop_run_switcher = 1
    }

}
box.addEventListener("click", stop)
window.addEventListener("resize", resize)