'use strict';

/**
 * fitness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fitness.fitness');
