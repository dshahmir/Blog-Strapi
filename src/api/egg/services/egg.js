'use strict';

/**
 * egg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::egg.egg');
