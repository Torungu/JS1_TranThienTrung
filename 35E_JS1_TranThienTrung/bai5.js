/*
Tính tổng của 2 ký số
-Input:
+n: số tự nhiên có 2 chữ số
-Process:
+soHangchuc=Math.floor(n/10)
+soDonvi=n%10
+tongHaiso=soHangchuc+soDonvi
-Output:
tongHaiso
*/
var n=96;
var soHangchuc=Math.floor(n/10);
var soDonvi=n%10;
var tongHaiso=soHangchuc+soDonvi;
console.log('Tổng của 2 chữ số của số '+n+' là '+tongHaiso);