const response = require("cfn-response");

exports.handler = async (event, context) => {
  console.log("Event: " + JSON.stringify(event));

  try {
    const greeting = event.ResourceProperties.Greeting;
    let responseData = {};

    if (event.RequestType === "Create") {
      responseData = { Greeting: greeting, Message: "Resource created" };
      await response.send(event, context, response.SUCCESS, responseData);
      return;
    } else if (event.RequestType === "Update") {
      responseData = { Greeting: greeting, Message: "Resource updated" };
      await response.send(event, context, response.SUCCESS, responseData);
      return;
    } else if (event.RequestType === "Delete") {
      responseData = { Greeting: greeting, Message: "Resource deleted" };
      await response.send(event, context, response.SUCCESS);
      return;
    } else {
      await response.send(event, context, response.FAILED);
      return;
    }
  } catch (err) {
    console.log(err);
    response.send(event, context, response.FAILED);
    return err;
  }
};
