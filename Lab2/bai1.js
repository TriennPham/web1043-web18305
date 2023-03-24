let a = prompt("Nhap a:");
let b = prompt("Nhap b:");
let c = prompt("Nhap c");

let a1 = parseInt(a);
let b1 = parseInt(b);
let c1 = parseInt(c);

delta = b * b - (4*a*c);
if(delta > 0){
    alert("Phuong trinh co 2 nghiem phan biet:");
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    document.writeln("Nghiem x1 =" +(x1));
    document.writeln("Nghiem x2 =" +(x2));
}else if(delta == 0){
    alert("Phuong trinh co nghiem kep x1 = x2 =" + (-b)/(2*a));
}else{
    alert("Phuong trinh vo nghiem");
}