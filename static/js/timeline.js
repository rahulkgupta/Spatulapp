var times = [0, 10, 20]
var instructions = ["Setup cookware", "Get food items", "Boil pasta"]
var instructions = ["Cook Sausage","Chop Onions", "Boil pasta"]

var labels =["Sausage", "Pasta", "Pasta"]


$(document).ready(function() {

    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    var t = 0
    for (var i = 0; i < times.length; i++) {
        if (i == 0)
            $("#current").append("<span style='margin-right: 10px' class='label label-info'>" + 
                                labels[i] + "</span><span>" + 
                                instructions[i] + "</span><span style='margin-right: 10px' class='label pull-right label-success'>Now</span>")
        else
            $("#times").append("<div> <span style='margin-right: 10px' class='label label-info'>" + 
                                labels[i] + "</span><span><span>" + instructions[i] + "</span></div>")
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
            $("#times").html("") 
            $("#current").html("")
            for (var j = i; j < times.length; j++) {
                if (i == j)
                    $("#current").append("<span style='margin-right: 10px' class='label label-info'>" + 
                        labels[j] + "</span><span>" + 
                        instructions[j] + "</span><span style='margin-right: 10px' class='label pull-right label-success'>Now</span>")
                else
                    $("#times").append("<div><span style='margin-right: 10px' class='label label-info'>" + 
                                labels[j] + "</span><span>" + instructions[j] + "</span></div>")
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