$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('.footer').removeClass('opacity-75');
    } else {
        $('.footer').addClass('opacity-75');
    }
});

// function swapBurgerMenuIconToCross(){
//     $(".crossBurgerIcon").removeClass("d-none")
//     $(".barsBurgerIcon").addClass("d-none")
//     $(".burgerMenu").removeClass("d-none")
// }

// function swapCrossMenuIconToBurger(){
//     $(".crossBurgerIcon").addClass("d-none")
//     $(".barsBurgerIcon").removeClass("d-none")
//     $(".burgerMenu").addClass("d-none")
// }

// function openAndCloseBurger(){
//     $(".burgerMenu").removeClass("d-none");
// }
