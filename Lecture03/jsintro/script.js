/**
 * Created by championswimmer on 11/06/17.
 */

window.onload = function () {

    var num = document.getElementById('num')
    var run = document.getElementById('run')
    var list = document.getElementById('list')

    run.onclick = function () {
        var start = (new Date()).getTime();
        list.innerHTML = "";
        var listString = "";
        var N = parseInt(num.value);

        for (var i = 1; i <= N; i++) {
            // var li = document.createElement('li');
            // li.innerText = i
            // list.append(li);
            listString += "<li>" + i + "</li>"
        }
        list.innerHTML = listString;

        console.log((new Date()).getTime() - start)
    }

};