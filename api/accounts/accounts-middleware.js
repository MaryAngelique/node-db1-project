const Account = require("./accounts-model");
const database = require("../../data/db-config");

exports.checkAccountPayload = (req, res, next) => {
  const errorMessage = {status: 400}
  const {name, budget} = req.body;

  if ( name === undefined || budget === undefined ) {
    errorMessage.message = "name and budget are required"
  
  } else if ( typeof name !== "string" ) {
    errorMessage.message = "name of account must be a string"

  } else if ( name.trim().length < 3 || name.trim().length > 100 ) {
    errorMessage.message = "name of account must be between 3 and 100"

  } else if ( typeof budget !== 'number' || isNaN(budget) ) {
    errorMessage.message = "/budget of account must be a number/i"

  } else if ( budget < 0 || budget > 1000000 ) {
    errorMessage.message = "budget of account is too large or too small"
  }

  if ( errorMessage.message ){
    next( errorMessage );

  }else{
    next();
  }
}



exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
