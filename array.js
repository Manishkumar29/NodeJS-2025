var arr = []

arr.push(function () {
    console.log("Hello Word 1")
})

arr.push(function () {
    console.log("Hello Word 2")
})

arr.push(function () {
    console.log("Hello Word 3")
})

arr.forEach(function (items) {
    items()
})