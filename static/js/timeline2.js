var times = [10, 20, 30]
var instructions = ["Chop Onions","Cut Bread", "Boil pasta"]
var labels =["Pasta", "Bruschetta", "Pasta"]

$(document).ready(function() {
    $("#add").click(
        function () {
            $('#add-modal').modal('show')
        })
    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    var t = 8
    for (var i = 0; i < times.length; i++) {
        if (i == 0)
            $("#current").append("<span style='margin-right: 10px' class='label label-info'>" + 
                                labels[i] + "</span><span>" + 
                                instructions[i] + "</span><span style='margin-right: 10px' class='label pull-right label-success'>Now</span>")
        else
            $("#times").append("<div><span style='margin-right: 10px' class='label label-info'>" + 
                                labels[i] + "</span><span><span>" + instructions[i] + "</span></div>")
    }
    i = 1
    $("#resume").click(
        function() {
            $("#resume").html("<i class='icon-pause pull-right'></i>Pause Cooking")
            // $(".icon-play").addClass('.icon-pause')
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
        })
    
    function doInterval() {
        
    }
    
});