import cdk = require('@aws-cdk/core');
import staticsite = require('@damc-dev/cdk-static-site');

export class CdkStaticSitePipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      new staticsite.CdkStaticSitePipeline(this, "StaticSitePipeline", {
        githubProject: "damc-dev",
        githubRepo: "test-cdk-static-site",
        githubOAuthToken: cdk.SecretValue.secretsManager("my-github-token")
      });
    }
}