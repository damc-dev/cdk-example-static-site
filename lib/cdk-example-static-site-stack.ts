import cdk = require('@aws-cdk/core');
import staticsite = require('@damc-dev/cdk-static-site');
import s3deploy = require('@aws-cdk/aws-s3-deployment')

export class CdkExampleStaticSiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new staticsite.CdkStaticSite(this, "StaticSite", {
      domainName: "damc-dev.com",
      siteSubDomain: "www",
      staticSiteFiles: s3deploy.Source.asset('site-contents'),
      staticSiteBucketRemovalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    new staticsite.CdkStaticSitePipeline(this, "StaticSitePipeline". {
      githubProject: "damc-dev",
      githubRepo: "test-cdk-static-site",
      githubOAuthToken: cdk.SecretValue.secretsManager("my-github-token")
    });
    // The code that defines your stack goes here
  }
}
