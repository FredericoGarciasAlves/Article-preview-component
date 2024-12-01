const iconShare = document.getElementById("icon-share");
const iconShareClicked = document.getElementById("icon-share-clicked");
const iconShareClickedResponsive = document.getElementById(
    "icon-share-clicked-responsive"
);
const boxShareResponsiveFirst = document.getElementById(
    "box-share-responsive-first"
);
const boxProfile = document.getElementById("box-profile");
const boxShareFirst = document.getElementById("box-share-first");

const mediaQuery = window.matchMedia("(max-width: 375px)");

iconShare.addEventListener("click", function () {
    boxShareFirst.style.display = "block";
    iconShareClicked.style.display = "block";

    if (mediaQuery.matches) {
        boxShareResponsiveFirst.style.display = "flex";
        boxShareFirst.style.display = "none";
        boxProfile.style.display = "none";
        iconShareClicked.style.display = "none";
    }
});

iconShareClicked.addEventListener("click", function () {
    iconShareClicked.style.display = "none";
    boxShareFirst.style.display = "none";
});

iconShareClickedResponsive.addEventListener("click", function () {
    boxShareResponsiveFirst.style.display = "none";
    boxProfile.style.display = "flex";
});
