function* logger() {
  console.log('Start');
  console.log('End');
}

logger();

/* Output
Nothing. Since when we call a genarator it returns an instance of itself but
doesn't execute.
*/