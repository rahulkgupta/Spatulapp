var times = [0, 10, 20]
var instructions = ["Setup cookware", "Get food items", "Boil pasta"]

$(document).ready(function() {

    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    var t = 0
    for (var i = 0; i < times.length; i++) {
        $("#times").append("<div>" + instructions[i] + "</div>")
    }
    i = 0
    var interval = setInterval(function () {
        width = $("#progress").width()
        $("#progress").css({width: (width + increment)/totalWidth*100 + "%"})
        if ((width + increment)/totalWidth*100 > 100) {
            clearInterval(interval)
            $("#times").html("Done!")
        }
        console.log(t)
        if (t == times[i]) {
            console.log('worked')
            $("#times").html("") 
            for (var j = i; j < times.length; j++) {
                $("#times").append("<div>" + instructions[j] + "</div>")
            }
            i++
        }
        t+=1
    }, 1000)
    $("#add").click(
        function () {
            $('#add-modal').modal('show')
            clearInterval(interval)
        })
});