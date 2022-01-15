$('.submitBtn').on('click', function(event){
    event.preventDefault();

    let $title = $('.titleBox').val();
    let $rating = $('.ratingBox').val();

    $('.openDiv').append(`${$title} <br> ${$rating} <br> <button class = "btn">Delete</button>`);
    
    $('.btn').on('click', function(event){
        $('.openDiv').empty();
    })

    $('.titleBox').val('');
    $('.ratingBox').val('');
});


