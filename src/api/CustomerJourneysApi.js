/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.39
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * CustomerJourneys service.
 * @module api/CustomerJourneysApi
 */

/**
 * Constructs a new CustomerJourneysApi. 
 * @alias module:api/CustomerJourneysApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Customer Journeys API trigger for a contact
   * A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
   * @param {Number} journeyId The id for the Journey.
   * @param {Number} stepId The id for the Step.
   * @param {module:model/SubscriberInCustomerJourneysAudience} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */
  this.triggerWithHttpInfo = function(journeyId, stepId, body) {
    var postBody = body;

    // verify the required parameter 'journeyId' is set
    if (journeyId === undefined || journeyId === null) {
      throw new Error("Missing the required parameter 'journeyId' when calling ");
    }

    // verify the required parameter 'stepId' is set
    if (stepId === undefined || stepId === null) {
      throw new Error("Missing the required parameter 'stepId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'journey_id': journeyId,
      'step_id': stepId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/customer-journeys/journeys/{journey_id}/steps/{step_id}/actions/trigger', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Customer Journeys API trigger for a contact
   * A step trigger in a Customer Journey. To use it, create a starting point or step from the Customer Journey builder in the app using the Customer Journeys API condition. We’ll provide a url during the process that includes the {journey_id} and {step_id}. You’ll then be able to use this endpoint to trigger the condition for the posted contact.
   * @param {Number} journeyId The id for the Journey.
   * @param {Number} stepId The id for the Step.
   * @param {module:model/SubscriberInCustomerJourneysAudience} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
   */
  this.trigger = function(journeyId, stepId, body) {
    return this.triggerWithHttpInfo(journeyId, stepId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
