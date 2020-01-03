#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkExampleStaticSiteStack } from '../lib/cdk-example-static-site-stack';

const env = {
    region: 'us-east-1',
    account: '342431730723'
}

const app = new cdk.App();
new CdkExampleStaticSiteStack(app, 'CdkExampleStaticSiteStack', { env: env });
