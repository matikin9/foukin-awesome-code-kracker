$(document).ready(function() {
    $.each(cipher, function(key, value) {
        $('#cipher').append('<div class="pair">' + key + ' : ' + value + '</div>');
    });
});

$('#cipher-min').click(function() {
    $('#cipher').slideToggle(300);
    $('#cipher-dots').toggle();

    if ($('#cipher-min').text() == '(show)') {
        $('#cipher-min').text('(hide)');
    }
    else {
        $('#cipher-min').text('(show)');
    }
});

$('#submit').click(function() {
    decode();
});

$('#entry').keypress(function(e) {
    if (e.which == 13) {
        e.preventDefault();
        decode();
    }

});

$('#delete').click(function() {
    var result = $('#result').text().trim();
    if (result.lastIndexOf(' ') != -1) {
        $('#result').text(result.substring(0, result.lastIndexOf(' ')) + ' ');
    }
    else {
        $('#result').text('');
    }

    $('#entry').focus();
});

function decode() {
    var num = $('#entry').val().trim();
    if (isNaN(num) || !(num in cipher)) {
        $('#notification').text('Please enter a valid number!');
    }
    else {
        $('#result').append(cipher[num] + ' ');
        $('#notification').text('');
    }

    $('#entry').val('');
    $('#entry').focus();
}
