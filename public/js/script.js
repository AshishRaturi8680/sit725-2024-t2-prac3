const clickMe1 = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

const clickMe2 = () => {
    $.ajax({
        url: "/addTwoNumber?n1=10&n2=20",
        success: function(result) {
            alert(result.data);
        }
    });
};

$(document).ready(function () {
    $('#clickMeButton').click(() => {
        clickMe1();
        });
    $('#clickMeButton1').click(() => {
        clickMe2();
    });
});
