// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
  //alert('t')
});

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
  
  $(document).on('blur', '#t-size', chkSize);
  
  function chkSize() {
    
      var t_size = $('#t-size').val();

    //alert('test');
  }
  
  
});