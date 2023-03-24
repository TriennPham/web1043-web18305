var hoTen, gioiTinh, tenDem, tenRieng;
hoTen = prompt("Nhap ten:");
gioiTinh = prompt("Nhap gioi tinh(Nam/Nu):");
var manghoten = hoTen.split(" ");
ho = manghoten[0];
tenRieng = manghoten[manghoten.length - 1];
    if (manghoten.length > 2){
        tenDem = "";
        for (var i=1; i<manghoten.length - 1; i++){
            tenDem +=manghoten[i]+ " ";
        }
    }else{
        tenDem =" ";
    }
    document.write("Ho:" + ho);
    document.write("Ten đem:" + tenDem);
    document.write("Ten rieng biet:" + tenRieng);

if(gioiTinh == "nam"){
    tenDem ="Van";
}else if( gioiTinh == "nu"){
    tenDem ="Ve";
}else{
    document.write("Gioi tinh khong hop le");
}
document.write("Ten moi:" + ho + "  " + tenDem + "  " + tenRieng);