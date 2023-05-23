'use strict';

/**
 * strawberry router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::strawberry.strawberry');
