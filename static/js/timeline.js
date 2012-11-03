$(document).ready(function() {
    $("#add").click(
        function () {
            $('#add-modal').modal('show')
        })
    var totalWidth = $("#prog-parent").width()
    var increment = totalWidth/100
    setInterval(function () {
        width = $("#progress").width()
        $("#progress").css({width: (width + increment)/totalWidth*100 + "%"})
        console.log('test')
    }, 1000)
});