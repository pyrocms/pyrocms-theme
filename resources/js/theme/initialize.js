$(function () {

    // Add CSRF ajax requests.
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Initialize Bootstrap tooltips.
    $('[data-toggle="tooltip"]').tooltip();
});
