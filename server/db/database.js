//  2ee61de9-45c3-4606-b2d0-99b380c7f9df  - API key
const { Pool } = require('pg');
  //'postgres://mppfbtat:QcwbjlxQt8xybk00Z2FucXx68J5MYCVw@batyr.db.elephantsql.com/mppfbtat';
const PG_URI =
   'postgres://dulmbgqe:L0ZqiYkMx2H9ApdNWK-exIK8uPr-fGfu@batyr.db.elephantsql.com/dulmbgqe';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
