var x,q,w,e,form;
q = 0.1;
w = 0.01;
e = 0.001;

x = prompt('Число',"");
x = parseFloat(x);


form =(x/(Math.pow(x,3)+(q/(Math.pow(x,3)+(w/(Math.pow(x,3)+e))))));

document.write(form);
