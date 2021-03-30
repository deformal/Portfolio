 var contactform = "<form action='/contact' method='POST'>" +
     "<input type='email' name='email' id='emailId' placeholder='email' />" +
     "<br>" +
     "<br>" +
     "<input type='text' name='phone' id='emailId' placeholder='phone' value='+91' />" +
     "<br>" +
     "<br>" +
     "<textarea name='message' id='messagearea' cols='30' rows='10'></textarea>" +
     "<br>" +
     "<br>" +
     "<button type='submit' class='btn btn-sm btn-outline-warning submitbtn'>Submit</button>" +
     "</form>";

   
 var err = "<h3 class='text-danger'>Sorry! some problem occured</h3>";
 var success = "<h3 class='text-success'>THANK YOU</h3>";
 var duplicate = "<h3 class='text-primary'>You Already Reached out to me. </h3>"

 module.exports = {
     contactform,
     err,
     success,
     duplicate
 }