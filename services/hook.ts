import { SNSEvent } from "aws-lambda";

const webHookUrl = <insert webhook link here>;

async function handler(event: SNSEvent) {
  for (const record of event.Records) {
    await fetch(webHookUrl, {
      method: "POST",
      body: JSON.stringify({
        text: `Houston, we have a problem: ${record.Sns}`,
      }),
    });
  }
}

export { handler };
