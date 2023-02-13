$("#currentDay").text(moment().format('dddd MMMM Do'));

var currentHour= moment().hours();

function load(){
    $("#9am").children(":input").val(localStorage.getItem("9am"));
    $("#10am").children(":input").val(localStorage.getItem("10am"));
    $("#11am").children(":input").val(localStorage.getItem("11am"));
    $("#12pm").children(":input").val(localStorage.getItem("12pm"));
    $("#1pm").children(":input").val(localStorage.getItem("1pm"));
    $("#2pm").children(":input").val(localStorage.getItem("2pm"));
    $("#3pm").children(":input").val(localStorage.getItem("3pm"));
    $("#4pm").children(":input").val(localStorage.getItem("4pm"));
    $("#5pm").children(":input").val(localStorage.getItem("5pm"));

}

$(".row").each(function(){
    var entryHour = parseInt($(this).attr("id"));
    if (entryHour<9)
        entryHour=entryHour+12; //if its the afternoon add 12 because current hour is in military time
    if(entryHour>currentHour)// future event
        $(this).addClass("future");
    if(entryHour<currentHour)// past event
        $(this).addClass("past");
    else
        $(this).addClass("present");
        
})

$(".saveBtn").on("click",function(){
    var thisHour=$(this).parent().attr("id");
    var thisText=$(this).siblings(":input").val();
    localStorage.setItem(thisHour,thisText);
})

load()