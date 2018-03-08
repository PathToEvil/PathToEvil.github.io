$(document).ready(function () {

    configLeft();
    configRight();


})

function configLeft() {
    /*默认选中第一个*/
    $("#left ul li")[0].className = "selected"
    $("#left ul li").each(function (obj) {
        $(this).click(function () {
            if (this.className == "selected") {
                return
            }else {
                $("#left ul li").each(function () {
                    $(this).removeClass()
                })
                this.className = "selected"
            }
        })
    })
}

/*配置右侧*/
function configRight() {

    $("#cartoon").attr("src", "image/cartoon.jpeg");

    var github = $("#github");
    github.attr("src", "image/github.png");
    github.click(function () {
        window.open("https://github.com/PathToEvil");
    });

    var jianshu = $("#jianshu");
    jianshu.attr("src", "image/jianshu.png");
    jianshu.click(function () {
        alert("简书");
    });
}

