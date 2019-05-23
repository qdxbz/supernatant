let n=1;
$(clickMe).on('click',function(e){
  n+=1;
  if(n%2==1){
    $(popover).hide();
  }else{
    $(popover).show();
  }
  $(document).one('click',function(){
    $(popover).hide();
    n=1;
  })
})
$(wrapper).on('click',function(e){
  e.stopPropagation();
})
