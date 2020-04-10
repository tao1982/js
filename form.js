$(document).ready(function(){
    $('#SubmitFormUser').submit(function(){
     
        // show that something is loading
        $('#response').html("<b>Loading response...</b>");
         
        /*
         * 'post_receiver.php' - where you will pass the form data
         * $(this).serialize() - to easily read form data
         * function(data){... - data contains the response from post_receiver.php
         */
		 
		 
		var username = $("#username").val(); 
        var password = $("#password").val();
		var email = $("#email").val(); 
        var tele = $("#tele").val();
        $.post('user.php', 
		
				{
			
			    un: username,
				pw: password,
			    el: email,
				tl: tele
			
				}, function(data){
             
					// show the response
					$('#response').html(data);
             
           }).fail(function() {
         
            // just in case posting your form failed
            alert( "Posting failed." );
             
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
});
