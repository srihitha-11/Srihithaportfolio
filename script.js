document.addEventListener("DOMContentLoaded", function () {

    /* Profile page animation */

    const profilePage = document.querySelector(".profile-page");

    if (profilePage) {

        profilePage.style.opacity = "0";
        profilePage.style.transform = "translateY(20px)";

        setTimeout(function () {

            profilePage.style.transition = "all 0.8s ease";
            profilePage.style.opacity = "1";
            profilePage.style.transform = "translateY(0)";

        }, 100);
    }


    /* Skills accordion */

   const skillButtons = document.querySelectorAll(".skill-title");

    skillButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const card = button.parentElement;

            card.classList.toggle("active");

        });

    });

})
document.addEventListener("DOMContentLoaded", function () {

    const certificationItems =
        document.querySelectorAll(".certification-item");

    certificationItems.forEach(function (item) {

        item.addEventListener("click", function () {

            item.classList.add("clicked");

            setTimeout(function () {
                item.classList.remove("clicked");
            }, 200);

        });

    });

});

