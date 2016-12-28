 $(document).ready(function(){
 $(".display").on("click",showName);
 var fname;
 function showName()
 {
 
  fname=$("#IDname").val();
 $("#IDfullname").text(fname);
 
 $("#IDfullname4").text(count);
 $(".showTab").find('#val1').text(fname);
 
 //document.write("Hello, World!");


 }
 
$("#tablemap1").hide();  
 $("#IdClass").on("click",showClass);
 
 function showClass()
 {
 
 var checkValue=$("#IdClass").val();
 $("#IDfullname2").text(checkValue);
 }
 var count=0

 $(".div2").on("click",countSeat);
 
 function countSeat()
 {
 

 var buttNum=$("#button").val();
  $("#IDfullname5").text(buttNum);
  
 var limit=21;
 count++;
 
 if(count == limit)
 {
 noSeat();
 }
 
 }
 
function hidebut()
{

}
 function noSeat()
 {
  $("#IDfullname3").text("No Seat Available");
 }
 
 


 $('.button').on('click', function() 
 {
  $(this).css({'background-color': '#252b30',
'border-color': '1px solid #967'});

var first;
$(".showTab").on("click",function(){
//$(this).find("#1")=$(".IDfullname").text(fname);
//$(this).find("#2")=$(".f1").find("#IDfullname4").text(count);
element=$("<tr><td>"+fname+"</td></tr>");
$("#tablemap1").append(element);
});


$('.print').click(function(){
$("#tablemap1").show();

});

$(".reload").on("click",function(){

location.reload();
});





 });
 });