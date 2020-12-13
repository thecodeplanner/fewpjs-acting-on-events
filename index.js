// Your code here

let dodge = document.getElementById('dodger')

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left = `${left-1}px`
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)

    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }


}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        // console.log(e.key)
        moveDodgerLeft()
    }

    if (e.key === "ArrowRight") {
        // console.log(e.key)
        moveDodgerRight()
    }
})

