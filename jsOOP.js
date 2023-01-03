var click_submit=function(){
        var student_obj=new StudentClass();
        var validation_info_obj=new ValidationInfo();

        // Take data from user input
        student_obj.student_id=document.querySelector("#maSinhVien").value;
        student_obj.student_name=document.querySelector("#tenSinhVien").value;
        student_obj.student_financial_status=document.querySelector("#loaiSinhVien").value;
        student_obj.math_score=document.querySelector("#diemToan").value;
        student_obj.physics_score=document.querySelector("#diemLy").value;
        student_obj.chemistry_score=document.querySelector("#diemHoa").value;
        student_obj.effort_score=document.querySelector("#diemRenLuyen").value;

        var valid=true;

        // Check if user input is empty:
        valid&=validation_info_obj.check_input_value_not_empty(student_obj.student_id,"Student ID","#error_maSinhVien_required")&validation_info_obj.check_input_value_not_empty(student_obj.student_name,"Student Full Name","#error_tenSinhVien_required")&validation_info_obj.check_input_value_not_empty(student_obj.math_score,"Math score","#error_diemToan_required")&validation_info_obj.check_input_value_not_empty(student_obj.physics_score,"Physics score","#error_diemLy_required")&validation_info_obj.check_input_value_not_empty(student_obj.chemistry_score,"Chemistry score","#error_diemHoa_required")&validation_info_obj.check_input_value_not_empty(student_obj.effort_score,"Effort score","#error_diemRenLuyen_required");

        // Check if student id lenght match the notation
        valid&=validation_info_obj.check_student_id_length(student_obj.student_id,"Student ID","#error_maSinhVien_min_max_length");

        // Check if user input for some fields are all of numberic type
        valid&=validation_info_obj.check_input_value_all_number(student_obj.student_id,"Student ID","#error_maSinhVien_all_number")&validation_info_obj.check_input_value_all_number(student_obj.math_score,"Math score","#error_diemToan_all_number")&validation_info_obj.check_input_value_all_number(student_obj.physics_score,"Physics score","#error_diemLy_all_number")&validation_info_obj.check_input_value_all_number(student_obj.chemistry_score,"Chemistry score","#error_diemHoa_all_number")&validation_info_obj.check_input_value_all_number(student_obj.effort_score,"Effort score","#error_diemRenLuyen_all_number");

        // Check if user input are all of a-z characters
        valid&=validation_info_obj.check_user_input_character(student_obj.student_name,"Student Name","#error_tenSinhVien_all_letter");


        // Check if user input for numercial fields meet the requirement of being witin the plausible range
        valid&=validation_info_obj.check_user_input_within_range(student_obj.math_score,"Math score","#error_diemToan_min_max_value",10,0)&validation_info_obj.check_user_input_within_range(student_obj.physics_score,"Physics score","#error_diemLy_min_max_value",10,0)&validation_info_obj.check_user_input_within_range(student_obj.chemistry_score,"Chemistry score","#error_diemHoa_min_max_value",10,0)&validation_info_obj.check_user_input_within_range(student_obj.effort_score,"Effort score","#error_diemRenLuyen_min_max_value",10,0);

        if(!valid){
                alert("The information provided in the form is not valid, please come back to fill in the form with valid information");
                return;
        }





        document.querySelector("#txtTenSinhVien").innerHTML=student_obj.student_name;
        document.querySelector("#txtMaSinhVien").innerHTML=student_obj.student_id;
        document.querySelector("#txtLoaiSinhVien").innerHTML=student_obj.student_financial_status;
        document.querySelector("#txtDiemTrungBinh").innerHTML=student_obj.calculate_avarage_score();
        document.querySelector("#txtXepLoai").innerHTML=student_obj.find_level();

}

document.querySelector("#btnXacNhan").onclick=click_submit;

