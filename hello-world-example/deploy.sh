#!/bin/bash

REGION=eu-west-1
PROJECT=devops
STAGE=dev
STACK_NAME=${PROJECT}-${STAGE}-hello-custom-resource
TEMPLATE=template.yaml

aws cloudformation create-stack \
    --stack-name ${STACK_NAME} \
    --template-body file://${TEMPLATE} \
    --capabilities CAPABILITY_IAM \
    --timeout-in-minutes 3 \
    --region ${REGION}
