//domain/.netlify/functions/1-hello
//E6 exports

// const person = { name: 'john' };

exports.handler = async (event, context, cb) => {
  // console.log(event);
  // console.log(context);
  return {
    statusCode: 200,
    body: 'Hello People Example',
  };
  // cb(null, {
  //   statusCode: 200,
  //   body: 'Hello People',
  // });
};
