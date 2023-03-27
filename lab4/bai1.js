class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) 
    {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return this.first_name + " " + this.middle_name + " " + this.last_name;
    }
  
    getTheoNam() {
      let today = new Date();
      let tuoi = today.getFullYear() - this.dob.getFullYear();
      let m = today.getMonth() - this.dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.dob.getDate())) {
        tuoi--;
      }
      return tuoi;
    }
  
    getTheoNgay() {
        const today = new Date();
        let tuoi = today.getFullYear() - this.dob.getFullYear();
        return tuoi * 12 * 30 + 82; 
    }
  }
  
  let studentsList = [
  new Student(1, 'Pham','Van','Trien','phamvantrien@gmail.com','0365718888','02-09-2004'),
  new Student(2, 'Nguyen','Tam','Hiep','tamhiep@gmail.com','0945037122','03-03-2004'),
  new Student(3, 'Nguyen','Huu','Tung','tung@gmail.com','0905020444','22-10-2004'),
  new Student(4, 'Phan','Thanh','Trung','thanhtrung123@gmail.com','0364045367','18-05-2004'),
  new Student(5, 'Nguyen','Quoc','Thang','quocthangqn@gmail.com','0982123446','12-07-2004'),
  ];
  
  studentsList.sort((a,b) => a.getTheoNgay()-b.getTheoNgay());
  
  console.log(studentsList);
  
  console.log(`Screen width: ${screen.width}, Screen height: ${screen.height}`);
