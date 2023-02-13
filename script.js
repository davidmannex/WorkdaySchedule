$("#currentDay").text(moment().format('dddd MMMM Do'));

var currentTime= moment().hours();

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

function save(){
   
}

$(".saveBtn").on("click",function(){
    var thisHour=$(this).parent().attr("id");
    var thisText=$(this).siblings(":input").val();
    localStorage.setItem(thisHour,thisText);
})

var timestamps=["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
containerEl=document.querySelector("container")

load()