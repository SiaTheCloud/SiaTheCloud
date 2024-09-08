$("#con_submit").on("click", function () {

    let email = $("#email").val();
    $("#errorDiv").hide();
    $("#successDiv").hide();

    if (email == "") {
        $("#errorDiv").show();
        $("#successDiv").hide();
    }
    else {
        $("#con_submit").prop("disabled", true);
        $.ajax({
            url: "/Home/SendMailForMarketing",
            data: {
                email: email,
            },
            success: function (data) {

                if (data == "success") {
                    $("#errorDiv").hide();
                    $("#successDiv").show();

                    $("#email").val('');
                }
                else {
                    $("#errorDiv").show();
                    $("#successDiv").hide();
                }

                $("#con_submit").prop("disabled", false);
                console.log("response = ", data)
            },
            error: function (error) {
                $("#errorDiv").show();
                $("#successDiv").hide();
                $("#con_submit").prop("disabled", false);
                console.log("error = ", error)
            }
        });
    }
});

$("#sendMessage").on("click", function () {

    let name = $("#cname").val();
    let email = $("#cemail").val();
    let phone = $("#cphone").val();
    let comments = $("#ccomments").val();

    $("#errorDiv1").hide();
    $("#successDiv1").hide();

    if (email == "" || comments == "") {
        $("#errorDiv1").show();
        $("#successDiv1").hide();
    }
    else {
        $("#sendMessage").prop("disabled", true);
        $.ajax({
            url: "/Home/SendMailForContact",
            data: {
                name: name,
                email: email,
                phone: phone,
                comments: comments,
            },
            success: function (data) {

                if (data == "success") {
                    $("#errorDiv1").hide();
                    $("#successDiv1").show();

                    $("#cname").val('');
                    $("#cemail").val('');
                    $("#cphone").val('');
                    $("#ccomments").val('');
                }
                else {
                    $("#errorDiv1").show();
                    $("#successDiv1").hide();
                }

                $("#sendMessage").prop("disabled", false);
                console.log("response = ", data)
            },
            error: function (error) {
                $("#errorDiv1").show();
                $("#successDiv1").hide();
                $("#sendMessage").prop("disabled", false);
                console.log("error = ", error)
            }
        });
    }
});