$(document).ready( function () {
    

    //variables
    $avatar = $('#show');
    $header = $('#header');
    $search = $('#search');
    $main = $('main');
    $closeBtn = $('#close');
    $modal = $('#modal');
    $body = $('body');
    $bs = $('#bs');

    //show modal
    $avatar.click( function () {
        $modal.fadeIn();
        $body.addClass('overlay');
        $avatar.addClass('hide');
        $header.addClass('hide');
        $main.addClass('hide');
        $search.addClass('hide');
        $bs.addClass('hide');
    });

    //hide modal
    $closeBtn.click( function () {
        $modal.hide();
        $body.removeClass('overlay');
        $avatar.removeClass('hide');
        $header.removeClass('hide');
        $main.removeClass('hide');
        $search.removeClass('hide');
        $bs.removeClass('hide');
    })


});
