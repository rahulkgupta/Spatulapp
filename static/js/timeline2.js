var times = [10, 20, 30]
var instructions = ["Get food items", "Boil pasta", "Cut Bread"]

$(document).ready(function() {
    $("#add").click(
        function () {
            $('#add-modal').modal('show')
        })
    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    var t = 8
    for (var i = 0; i < times.length; i++) {
        $("#times").append("<div>" + instructions[i] + "</div>")
    }
    i = 1
    $("#resume").click(
        function() {
            $("#prog-parent").removeClass("progress-danger")
            $("#prog-parent").addClass("progress-success progress-striped active")

            var interval = setInterval(function () {
                width = $("#progress").width()
                $("#progress").css({width: (width + increment)/totalWidth*100 + "%"})
                if ((width + increment)/totalWidth*100 > 100) {
                    clearInterval(interval)
                    $("#times").html("Done!")
                }
                console.log(t)
                if (t == times[i-1]) {
                    console.log('worked')
                    $("#times").html("") 
                    for (var j = i; j < times.length; j++) {
                        $("#times").append("<div>" + instructions[j] + "</div>")
                    }
                    i++
                }
                t+=1
            }, 1000) 
        })
    
    function doInterval() {
        
    }
    
});