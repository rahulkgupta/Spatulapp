var times = [0, 10, 20]
var instructions = ["Setup cookware", "Get food items", "Boil pasta"]

$(document).ready(function() {
    $("#add").click(
        function () {
            $('#add-modal').modal('show')
        })
    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    var t = 0
    for (var i = 0; i < times.length; i++) {
        $("#times").append("<div>" + times[i] + " " + instructions[i] + "</div>")
    }
    i = 0
    setInterval(function () {
        width = $("#progress").width()
        $("#progress").css({width: (width + increment)/totalWidth*100 + "%"})
        console.log(t)
        if (t == times[i]) {
            console.log('worked')
            $("#times").html("") 
            for (var j = i; j < times.length; j++) {
                $("#times").append("<div>" + times[j] + " " + instructions[j] + "</div>")
            }
            i++
        }
        t+=1
    }, 1000)
});