console.log("1. Tinh diem trung binh");
console.log("2 Tinh diem trung binh");
console.log("0. Thoat");
function tinhDiemTrungBinh(diemToan, diemLy, diemHoa, diemSinh){
        if (diemToan < 0 || diemToan > 10 || diemLy < 0 || diemLy > 10 || diemHoa < 0 || diemHoa > 10 || diemSinh < 0 || diemSinh > 10){
            return "Diem nhap khong hop le!";
        }
        var diemTrungBinh = (diemToan + diemLy + diemHoa + diemSinh)/4;
         if(diemTrungBinh >= 9 && diemTrungBinh <= 10){
            return "Gioi";
        }else if(diemTrungBinh >= 7 && diemTrungBinh < 9){
            return "Kha";
        }else if(diemTrungBinh >= 5 && diemTrungBinh < 7){
            return "Trung Binh";
        } else if(diemTrungBinh < 5){
            return "Yeu";
        }
    }
  


    function tinhDiemTrungBinhSwitch(diemToan, diemLy, diemHoa, diemSinh){
        if (diemToan < 0 || diemToan > 10 || diemLy < 0 || diemLy > 10 || diemHoa < 0 || diemHoa > 10 || diemSinh < 0 || diemSinh > 10){
            return "Diem nhap khong hop le!";
        }
        var diemTrungBinh = (diemToan + diemLy + diemHoa + diemSinh)/4;
        switch (true){
            case diemTrungBinh >= 9 && diemTrungBinh <= 10:
                return "Gioi";

            case diemTrungBinh >= 9 && diemTrungBinh <= 10:
                return "Gioi";
    
            case diemTrungBinh >= 7 && diemTrungBinh < 9:
                return "Kha";
    
            case diemTrungBinh >= 5 && diemTrungBinh < 7:
                return "Trung Binh";
        
            case diemTrungBinh < 5:
                return "Yeu";
        }
     }

     console.log("1. Tinh diem trung binh");
     console.log("2 Tinh diem trung binh");
     console.log("0. Thoat");

     let diemToan = parseFloat(prompt("Nhap diem toan:"));
     var diemLy = parseFloat(prompt("Nhap diem ly:"));
     var diemHoa = parseFloat(prompt("Nhap diem hoa:"));
     var diemSinh = parseFloat(prompt("Nhap diem sinh:"));

     var chon = parseInt(prompt("Xin moi ban nhap lua chon:"));

     switch (chon){
        case 1:
            document.write("Diem trung binh cua ban la:" + tinhDiemTrungBinhSwitch(diemToan, diemLy, diemHoa, diemSinh));
        break;
        case 2:
            document.write("Diem trung binh cua ban la:" + tinhDiemTrungBinh(diemToan, diemLy, diemHoa, diemSinh));
        break;
        case 0:
            document.write("Cam on ban da su dung chuong trinh!");
        break;
        default:
            document.write("Khong hop le!");
        break;
    }