/*
Tính điện tích và chu vi hình chữ nhật
-Input:
+a:chiều dài
+b:chiều rộng
-Process:
+Chu vi: cV=(a+b)*2
+Diện tích: dT=a*b
-Output:
+cV,dT
*/
var a=6;
var b=5;
var cV=0;
var dT=0;
cV=(a+b)*2;
dT=a*b;
console.log('Chu vi và diện tích của HCN có chiều dài '+a+ ', chiều rộng '+b+' là ' + cV+' và '+dT);