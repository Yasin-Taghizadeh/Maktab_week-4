//What is the output of this code ?! why ?!

let zero = new Number(0);
if (zero) {
alert( "zero is truthy!?!" );
}

/*مقدار نمایش داده می شود زیرا 

typeof  typeof Number (0) === Number and typeof new Number (0) === object
Zero in every numeric type ,None and False*/