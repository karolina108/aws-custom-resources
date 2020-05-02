# Custom resources examples

## Hello World example

The custom resource in this example is a `Greetings` resource with one property: `Greeting` text. The text will later be displayed in the `Outputs` section of your stack.

[Hello World Example](hello-world-example/template.yaml)

The function code is the file `index.js` is for reference only. For simplicity, the code of the function is in the template.

## Deployment

Use `deploy.sh` to deploy your stack. Note that the CLI command has `timeout-in-minutes` option - this is to prevent having to wait ~1h for CloudFormation to start rollback if the custom resource could not be created (for instance: due to lambda errors).
