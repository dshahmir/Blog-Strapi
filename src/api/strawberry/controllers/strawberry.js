'use strict';

/**
 * strawberry controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::strawberry.strawberry');
