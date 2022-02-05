$(document).ready(function() {
    
// $("th").click(function() {
//     $("th").filter(function() {
//         var content = $(this).css("background-color") == "rgb(238,255,230)";
//         return content
//     });
//     $(content).css("background-color","green");
//     })

$("td").hover(function() {
    var content = $(this).text();
        if (content != "Not Available") {
            $(this).css("cursor","pointer")
            $(this).click(function() {
                $(this).toggleClass("highlight")
            })
}
})

})

