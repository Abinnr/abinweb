$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                requiered:true,
                minlength:4
            }
        }
        
    })
})