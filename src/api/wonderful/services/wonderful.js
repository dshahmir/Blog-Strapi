'use strict';

/**
 * wonderful service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wonderful.wonderful');
