$("button").click(function(){
    var name = $(".name").val();
    var hours = $(".hours").val();
    var ideal = $(".ideal").val();
    $(".results").append("hello "+name+", How many hours of sleep do you get? so you get "+hours+" that would mean when it turns 2050 you would of have slept "+hours*7*52*31+" hours. Your ideal amount of sleep is "+ideal+" hours so the amount of ideal hours of sleep you would want from now to 2050 would be "+ideal*7*52*31+" hours of sleep so your missing "+(ideal*7*52*31-hours*7*52*31)+" hours. To fix your sleeping schedule you'd have to get "+(ideal-hours)+" more hours from now on.");
    
});
$(".container").mouseenter(function(){
    $(".container").addClass("border-enter");
});
$(".container").mouseleave(function(){
    $(".container").removeClass("border-enter");
});
    