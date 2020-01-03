import cdk = require('@aws-cdk/core');
import staticsite = require('@damc-dev/cdk-static-site');

export interface PipelineStackProps extends cdk.StackProps {
    readonly stackName: string;
}

export class CdkStaticSitePipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: PipelineStackProps) {
      super(scope, id, props);
  
      new staticsite.CdkStaticSitePipeline(this, "StaticSitePipeline", {
        githubOwner: "damc-dev",
        githubRepo: "cdk-example-static-site",
        githubOAuthToken: cdk.SecretValue.secretsManager("my-github-token"),
        stackName: props.stackName,
      });
    }
}