// document.write('hello');
// var boo = true;
// var num = 1;
// var str ="biến là 1 giá trị được nhớ lại , chiếm 1 phần nhỏ trong ram , càng nhiều biến càng ngốn ram :v";
// var a="Không được đặt số đứng trước , kí tự đặc biệt ... được dùng _ và $";
var kg=60;
var m=1.71;
var result=kg/(m*m);
console.log('Bạn nặng : '+kg+" ki lô gam và cao "+m+" mét nên => "+'Kết quả BMI: '+result);
console.log(
	result<18.5? " Bạn đang thiếu cân, thiếu năng lượng trường diễn":
	result>=18.5&&result<=22.99? " Bạn đạt trạng thái bình thường suy ra bạn rất đẹp trai :)) ":
	result>=23&&result<=24.99? "Bạn đang thừa cân ":
	result>25? "Bạn đang béo phì ":""
);

