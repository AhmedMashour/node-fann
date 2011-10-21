
var fann = require('../build/Release/fann');
var net = new fann.standard(1,10,1);

console.log(net.get_activation_functions());

console.log(net.activation_function(1, 0));
console.log(net.activation_function(1, 0, 'sin'));
console.log(net.activation_function(1, 1, 'cos'));
console.log(net.activation_function(1, 0));
console.log(net.activation_function(1, 1));

console.log(net.activation_function_hidden('sigmoid'));
console.log(net.activation_function_output('elliot'));
console.log(net.activation_function(1, 0));
console.log(net.activation_function(2, 0));
