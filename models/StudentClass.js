// Define Student Class 
var StudentClass=function(){
    this.student_id="";
    this.student_name="";
    this.student_financial_status="";
    this.math_score=0;
    this.physics_score=0;
    this.chemistry_score=0;
    this.effort_score=0;
    this.calculate_avarage_score=function(){
        return ((Number(this.math_score)+Number(this.physics_score)+Number(this.chemistry_score))/3).toFixed(2);
    }
    this.find_level=function(){
        if(Number(this.effort_score)<5){
            return "Fail";
        }
        var avarage_score=this.calculate_avarage_score();

        if(avarage_score<=10 && avarage_score>=9){
            return "Excellent";
        }
        else if(avarage_score>=8){
            return "Very Good";
        }
        else if(avarage_score>=7){
            return "Good";
        }
        else if(avarage_score>=6){
            return "Satisfactory";
        }
        else if(avarage_score>=5){
            return "Acceptable Performance";
        }
        else if(avarage_score>=0){
            return "Fail";
        }
        else{
            alert("Average Score is not valid");
        }
    }
}