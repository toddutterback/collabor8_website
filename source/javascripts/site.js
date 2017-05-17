// This is where it all goes :)



$('.brand-button').click(function(){
  $(this).prop('disabled', true);
  $(".brand-path").show();
  $(".influencer-path").hide();
});

$('.influencer-button').click(function(){
  $(this).prop('disabled', true);
  $(".brand-path").hide();
  $(".influencer-path").show();
});


function swap(self) {
  debugger
  $(self).prop('disabled', true);
  $(".brand-path").toggle();
  $(".influencer-path").toggle();
};