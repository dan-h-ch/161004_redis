var redis = require('redis');
var redisDB = redis.createClient(); //creates a new client

// Or set your port
// var client = redis.createClient(1234, 127.0.0.1);

redisDB.on('connect', function() {
  console.log('1. connected');

  redisDB.set('cylon', 'boomer', function(err, res) {
    console.log('2. wrote some stuff >> cylon >>', res);
  });

  console.log('3. trying to get stuff back >> cylon >>', redisDB.get('cylon'))

  redisDB.get('cylon', function(err, res) {
    console.log('4. turns out it\'s asynch >> cylon >>', res)
  })

  console.log('5a. differnet methods for differnet data stypes')
  redisDB.rpush('list', 'one')
  redisDB.rpush('list', 'two')
  redisDB.rpush('list', 'three')

  console.log('5b. get entire list back')
  redisDB.lrange('list', 0, -1, function(err, res) {
    console.log('5b.', res)
  })

  console.log('5c. or just pop?')
  redisDB.rpop('list', function(err, res) {
    console.log('5c.',res)
  })

});


