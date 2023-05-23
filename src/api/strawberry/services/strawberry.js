'use strict';

/**
 * strawberry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strawberry.strawberry');
