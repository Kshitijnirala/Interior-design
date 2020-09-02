/*Contact Form Validation*/
function validateform()
{  
    var name =document.ContactForm.Name.value;;  
    var email =document.ContactForm.Email.value;  
    var phone =document.getElementById("phone").value;
    /*Name Validation*/
    if (name==null || name=="")
    {  
        alert("Name can't be blank");
            document.ContactForm.Name.focus();  
        return false;  
    }
    /*Email Validation*/
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
            document.ContactForm.Email.focus();
        return false;  
    }
    /*Comment Box Validation*/
    if(document.ContactForm.Message.value == '') 
    {      
        alert("Please Provide Details!");
            document.ContactForm.Message.focus();
        return false;       
    }
}