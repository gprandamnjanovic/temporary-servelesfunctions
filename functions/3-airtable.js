require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appZovVDy15vXMMVh')
  .table('products');

exports.handler = async (event, context, cb) => {
  // console.log(event);
  // console.log(context);
  //hey
  //
  //hey
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return { id, name, url, price };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 501,
      body: 'Server Error',
    };
  }

  // cb(null, {
  //   statusCode: 200,
  //   body: 'Hello People',
  // });
};
