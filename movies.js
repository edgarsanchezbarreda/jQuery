// let $removeBtn = $('<button class = "btn">Delete</button>');

$('.submitBtn').on('click', function(event){
    event.preventDefault();
    console.log('Hello World');
    let $title = $('.titleBox').val();
    let $rating = $('.ratingBox').val();
    $('.openDiv').append(`${$title} <br> ${$rating} <br> <button class = "btn">Delete</button>`);
    
    $('.titleBox').val('');
    $('.ratingBox').val('');
});


