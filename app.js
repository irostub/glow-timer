var times = document.getElementsByClassName("time")

function dateClassifier(array) {
    var h = [];
    var m = [];
    var s = [];

    Array.from(times).forEach((t) => {
        if (t.classList.contains("hour")) {
            h.push(t);
        }
        else if (t.classList.contains("min")) {
            m.push(t);
        }
        else if (t.classList.contains("sec")) {
            s.push(t);
        }
        else {

        }
    })
    return [h, m, s]
}

function insertHtml(array = [], func) {
    array[0][0].innerHTML = func[0]
    array[0][1].innerHTML = func[1]
    array[1][0].innerHTML = func[2]
    array[1][1].innerHTML = func[3]
    array[2][0].innerHTML = func[4]
    array[2][1].innerHTML = func[5]
}

var updateDuration = function () {
    var random = Math.random()
    Array.from(document.getElementsByClassName("flicker-r")).forEach(attr => {
        attr.style.setProperty("--animation-time", (random * 3) + 2 + 's')
    })
}

var updateTime = function () {
    let today = new Date()
    let hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours()
    let min = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    let sec = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()

    return String(hour) + String(min) + String(sec)
}

var start = function () {
    insertHtml(dateClassifier(times), updateTime())
}

function loop() {
    insertHtml(dateClassifier(times), updateTime())
    setInterval(start, 1000)
    setInterval(updateDuration, 1000)
}

loop()