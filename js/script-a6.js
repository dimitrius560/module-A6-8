//начальное значение progressBar
let Progress = 10;

$("#my-progress-bar").css('width', Progress + '%').attr('aria-valuenow', Progress);

$('#but1').click(function() {
    let  newProgress = Progress + 1;
    console.log(newProgress);
    $("#my-progress-bar").css('width', newProgress + '%').attr('aria-valuenow', newProgress);
});


$('#but2').click(function() {
    let  newProgress = Progress + 3 + "%";
    console.log(newProgress);
    $("#my-progress-bar").css('width', newProgress).attr('aria-valuenow', newProgress);
});


$('#but3').click(function() {
    let  newProgress = Progress + 7 + "%";
    console.log(newProgress);
    $("#my-progress-bar").css('width', newProgress).attr('aria-valuenow', newProgress);
});