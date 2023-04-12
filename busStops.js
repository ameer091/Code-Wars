/* Number of People in the Bus

There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

var number = function(busStops){
  //taking in an array of different arrays
  //want to return 1 number based on how many people get on and off the bus
  // [[6,2], [3,4], [0,0]]
  // 3
  //create a counter for bus stops additions
  //create a counter fro bus stops exits
  //at the end return additions minus subtractions
  let add = 0
  let sub = 0
  for(var i = 0; i < busStops.length; i++){
    if(busStops[i][0]){
      add += busStops[i][0]
    }
    if(busStops[i][1]){
      sub += busStops[i][1]
    }
  }
    return add - sub

  }


  //Other Solutions
  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

  //Other Solutions
  var number = function(busStops){
    var totalPeople = 0;
    for (var i=0; i<busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
  }

  //Other Solutions useful to learn more with reduce
  const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)