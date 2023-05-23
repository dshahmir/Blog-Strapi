'use strict';

/**
 * egg router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::egg.egg');
