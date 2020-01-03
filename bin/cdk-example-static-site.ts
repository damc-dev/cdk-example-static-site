#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkStaticSiteStack } from '../lib/static-site-stack';
import { CdkStaticSitePipelineStack } from '../lib/pipeline-stack';

const env = {
    region: 'us-east-1',
    account: '342431730723'
}

const app = new cdk.App();
const staticSiteStack = new CdkStaticSiteStack(app, 'CdkStaticSiteStack', { env: env });
new CdkStaticSitePipelineStack(app, 'CdkStaticSitePipelineStack', { 
    env: env
    stackName: staticSiteStack.stackName
});
