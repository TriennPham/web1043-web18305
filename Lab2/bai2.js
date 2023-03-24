let a = prompt("Nhap gia tri a");
let b = prompt("Nhap gia tri b");
let c = prompt("Nhap gia tri c");

let a1 = parseInt(a);
let b1 = parseInt(b);
let c1 = parseInt(c);

if (a+b>c && a+c>b && b+c>a) {
    if (a ==b || a ==c || b ==c) {
        document.writeln("Đây là 1 hình tam giác cân");
    } else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
        document.writeln("Đây là hình tam giác vuông");
    } else {
        document.writeln("Đây là tam giác thường");
    }  
}
else {
        document.writeln("a, b, c không phải là 3 cạnh của tam giác");
} 