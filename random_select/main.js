
$(document).ready(function(){
    $("#input1").click(function(){
        let numberoflistitem = $("#choices li").length;
        let randomchildnumber = Math.floor(Math.random()*numberoflistitem);
        $("h1").text($("#choices li").eq(randomchildnumber).text()); 
        $("#random-pic").attr("src",images[randomchildnumber]);   
        $("#money_text").text(money_text[randomchildnumber]);  //星座說明用      
    });    
});

$(document).ready(function(){
    $("#input2").click(function(){
        let numberoflistitem = $("#choices li").length;
        let randomchildnumber = Math.floor(Math.random()*numberoflistitem);
        $("h1").text($("#choices li").eq(randomchildnumber).text()); 
        $("#random-pic").attr("src",images[randomchildnumber]);   
        $("#jobs_text").text(jobs_text[randomchildnumber]);  //星座說明用      
    });
});

