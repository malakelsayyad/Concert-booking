$('.closeBtn').on('click',function () {
    $('.sideBar').animate({width:'toggle'},500)
})
$('.openNav').on('click',function () {
    $('.sideBar').animate({width:'show'},500)
})

$(".sideBar a").on('click',function(e){
    
    var secId= $(e.target).attr("href");
    
    var secOff= $(secId).offset().top;
    
    $('body').animate({scrollTop:secOff},1000)
    
})




$('#sliderDown .toggle').on('click',function(){
    $('#sliderDown div').not($(this).next('.inner')).slideUp(500);
    $(this).next('.inner').slideToggle(500);
  

});

  function countDown(countTo) {
  
        let ConcertDate = new Date(countTo);
        ConcertDate = (ConcertDate.getTime()/1000);

    let current = new Date();
    current = (current.getTime()/1000);

    diffOfTime = (ConcertDate- current);
        
   let days = Math.floor( diffOfTime / (24*60*60));
   let hours = Math.floor((diffOfTime - (days * (24*60*60))) / 3600);
   let mins = Math.floor((diffOfTime - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((diffOfTime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} Days`);
    $(".hours").html(`${hours} hours`);
    $(".minutes").html(`${ mins } minutes`);
    $('.seconds').html(`${ secs} seconds`)

  
  }

  countDown("7 august 2024 7:00:00");


$('textarea').on('keyup',function(e){
     let max_length =100;
     let length = $(e.target).val().length;
     let leftAmount= max_length-length;
     if(leftAmount<=0){
        $('#chars').text('no available chars')
     }
     else{
        $('#chars').text(leftAmount)

     }
     
});