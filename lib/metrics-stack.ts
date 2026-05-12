import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { join } from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Key } from "aws-cdk-lib/aws-kms";
import { Topic } from "aws-cdk-lib/aws-sns";
import { LambdaSubscription } from "aws-cdk-lib/aws-sns-subscriptions";
import { Metric } from "aws-cdk-lib/aws-cloudwatch";
import { Alarm } from "aws-cdk-lib/aws-cloudwatch";
import { SnsAction } from "aws-cdk-lib/aws-cloudwatch-actions";

export class MetricsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const webHookLambda = new NodejsFunction(this, "webHookLambda", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: join(__dirname, "..", "services", "hook.ts"),
    });

    const alarmTopic = new Topic(this, "alarmTopic", {
      displayName: "AlarmTopic",
      topicName: "AlarmTopic",
    });

    alarmTopic.addSubscription(new LambdaSubscription(webHookLambda));

    const sampleAlarm = new Alarm(this, "sampleAlarm", {
      metric: new Metric({
        metricName: "custom-error",
        namespace: "Custom",
        period: cdk.Duration.minutes(1),
        statistic: "Sum",
      }),
      evaluationPeriods: 1,
      threshold: 100,
    });

    const topicAction = new SnsAction(alarmTopic);
    sampleAlarm.addAlarmAction(topicAction);
    sampleAlarm.addOkAction(topicAction);

     const apiAlarm = new Alarm(this, "api4XXAlarm", {
      metric: new Metric({
        metricName: "4XXError",
        namespace: "AWS/ApiGateway",
        period: cdk.Duration.minutes(1),
        statistic: "Sum",
        dimensionsMap:{
          "ApiName": "empApi"
        }
      }),
      evaluationPeriods: 1,
      threshold: 1,
    });

    apiAlarm.addAlarmAction(topicAction);
    apiAlarm.addOkAction(topicAction);
  }
}

  }
}
