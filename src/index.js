module.exports = function warmup(temperature) {
  // your implementation here
  var fareng;

  if(temperature !== undefined){
  	fareng = (1.8*temperature)+32; 
  }

  return fareng;
};
