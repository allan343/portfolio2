function menuToggle() {

    $('.navigation').on('click', '.navbar-toggle', function (event) {
        $('.hiddenNav').toggle();
    });
}

function myPortfolio() {
    menuToggle();

}

$(myPortfolio);