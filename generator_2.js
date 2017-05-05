function* createLogger() {
  console.log('Start');
  yield
  console.log('End');
}

const logger = createLogger()
logger.next();
console.log(logger);
console.log(logger.next());

/*
Note :
1. To execute the generator we call logger.next() which executes untill the block is over
2. .next() returns an object, where done is to specify whether it has finished executing the generator
3. To pause the generator we use the `yield` keyword. It tells the generator to stop executing at this point.

Output :

Start
End
{}
{ value: undefined, done: true }

*/