#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkExampleStaticSiteStack } from '../lib/cdk-example-static-site-stack';

const app = new cdk.App();
new CdkExampleStaticSiteStack(app, 'CdkExampleStaticSiteStack');
