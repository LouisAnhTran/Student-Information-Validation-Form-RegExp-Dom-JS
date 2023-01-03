// Define validation information class 
var ValidationInfo=function(){
  this.default_student_id_length=7;

  // check if user input is empty:
  this.check_input_value_not_empty=function(value,field_name,error_id){
    if(value.trim()==""){
      document.querySelector(error_id).innerHTML=field_name + " can not be empty";
      document.querySelector(error_id).style.display="block";
      return false;
    }
    document.querySelector(error_id).innerHTML="";
    document.querySelector(error_id).style.display="none";
    return true;
  }

  // check if student ID length is exactly 7 characters
  this.check_student_id_length=function(value,field_name,error_id){
    if(value.trim().length!=this.default_student_id_length){
      document.querySelector(error_id).innerHTML=field_name + " length must strictly be "+this.default_student_id_length;
      document.querySelector(error_id).style.display="block";
      return false;
    }
    document.querySelector(error_id).innerHTML="";
    document.querySelector(error_id).style.display="none";
    return true;
  }

  //Check if user input are all of numberic type
  this.check_input_value_all_number=function(value,field_name,error_id){
    var reg_exp=/^[0-9]+$/;
    if(!reg_exp.test(value.trim())){
      document.querySelector(error_id).innerHTML=field_name + " must be of numeric type";
      document.querySelector(error_id).style.display="block";
      return false;
    }
    document.querySelector(error_id).innerHTML="";
    document.querySelector(error_id).style.display="none";
    return true;
  }

  // Check if user input are all of a-z characters
  this.check_user_input_character=function(value,field_name,error_id){
    var reg_exp=/^[A-Za-z ]+$/;
    if(!reg_exp.test(value.trim())){
      document.querySelector(error_id).innerHTML=field_name + " must contain a-z characters";
      document.querySelector(error_id).style.display="block";
      return false;
    }
    document.querySelector(error_id).innerHTML="";
    document.querySelector(error_id).style.display="none";
    return true;
  }

  // Check if user input value is within the acceptable range 
  this.check_user_input_within_range=function(value,field_name,error_id,max_value,min_value){
    if(value=="" || Number(value)<min_value || Number(value)>max_value){
      document.querySelector(error_id).innerHTML=field_name + " must within the range [" + min_value+","+max_value+"]";
      document.querySelector(error_id).style.display="block";
      return false;
    }
    document.querySelector(error_id).innerHTML="";
    document.querySelector(error_id).style.display="none";
    return true;
  }



}