'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var FieldTypeList = require('./assistant/fieldType').FieldTypeList;
var IntentList = require('./assistant/intent').IntentList;
var ModelBuildList = require('./assistant/modelBuild').ModelBuildList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var QueryList = require('./assistant/query').QueryList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var AssistantList;
var AssistantPage;
var AssistantInstance;
var AssistantContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.AssistantList
 * @description Initialize the AssistantList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 */
/* jshint ignore:end */
AssistantList = function AssistantList(version) {
  /* jshint ignore:start */
  /**
   * @function assistants
   * @memberof Twilio.Preview.Understand
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Understand.AssistantContext}
   */
  /* jshint ignore:end */
  function AssistantListInstance(sid) {
    return AssistantListInstance.get(sid);
  }

  AssistantListInstance._version = version;
  // Path Solution
  AssistantListInstance._solution = {};
  AssistantListInstance._uri = _.template(
    '/Assistants' // jshint ignore:line
  )(AssistantListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams AssistantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  AssistantListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AssistantListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AssistantListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AssistantPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AssistantListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AssistantPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * create a AssistantInstance
   *
   * @function create
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] -
   *          A text description for the Assistant. It is non-unique and can up to 255 characters long.
   * @param {boolean} [opts.logQueries] -
   *          A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
   * @param {number} [opts.ttl] - The ttl
   * @param {string} [opts.uniqueName] -
   *          A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
   * @param {string} [opts.responseUrl] -
   *          The webhook URL called to fetch the response to an incoming communication expressed in Assistant TwiML.
   * @param {string} [opts.callbackUrl] - The callback_url
   * @param {string} [opts.callbackEvents] - The callback_events
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed AssistantInstance
   */
  /* jshint ignore:end */
  AssistantListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'LogQueries': serialize.bool(_.get(opts, 'logQueries')),
      'Ttl': _.get(opts, 'ttl'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'ResponseUrl': _.get(opts, 'responseUrl'),
      'CallbackUrl': _.get(opts, 'callbackUrl'),
      'CallbackEvents': _.get(opts, 'callbackEvents')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AssistantInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a assistant
   *
   * @function get
   * @memberof Twilio.Preview.Understand.AssistantList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Preview.Understand.AssistantContext}
   */
  /* jshint ignore:end */
  AssistantListInstance.get = function get(sid) {
    return new AssistantContext(this._version, sid);
  };

  return AssistantListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.AssistantPage
 * @augments Page
 * @description Initialize the AssistantPage
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AssistantPage
 */
/* jshint ignore:end */
AssistantPage = function AssistantPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AssistantPage.prototype, Page.prototype);
AssistantPage.prototype.constructor = AssistantPage;

/* jshint ignore:start */
/**
 * Build an instance of AssistantInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Understand.AssistantPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AssistantInstance
 */
/* jshint ignore:end */
AssistantPage.prototype.getInstance = function getInstance(payload) {
  return new AssistantInstance(this._version, payload);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.AssistantInstance
 * @description Initialize the AssistantContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} accountSid -
 *          The unique ID of the Account that created this Assistant.
 * @property {Date} dateCreated - The date that this resource was created
 * @property {Date} dateUpdated - The date that this resource was last updated
 * @property {string} friendlyName -
 *          A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @property {string} latestModelBuildSid -
 *          The unique ID (Sid) of the latest model build. Null if no model has been built.
 * @property {string} links - The links
 * @property {boolean} logQueries -
 *          A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter.
 * @property {string} sid -
 *          A 34 character string that uniquely identifies this resource.
 * @property {number} ttl - The ttl
 * @property {string} uniqueName -
 *          A user-provided string that uniquely identifies this resource as an alternative to the sid. You can use the unique name in the URL path. Unique up to 64 characters long.
 * @property {string} url - The url
 * @property {string} responseUrl -
 *          The webhook URL called to fetch the response to an incoming communication expressed in Assistant TwiML.
 * @property {string} callbackUrl - The callback_url
 * @property {string} callbackEvents - The callback_events
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
AssistantInstance = function AssistantInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.latestModelBuildSid = payload.latest_model_build_sid; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line
  this.logQueries = payload.log_queries; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.ttl = deserialize.integer(payload.ttl); // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.responseUrl = payload.response_url; // jshint ignore:line
  this.callbackUrl = payload.callback_url; // jshint ignore:line
  this.callbackEvents = payload.callback_events; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(AssistantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AssistantContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a AssistantInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a AssistantInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @param {boolean} [opts.logQueries] -
 *          A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @param {number} [opts.ttl] - The ttl
 * @param {string} [opts.uniqueName] -
 *          A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @param {string} [opts.responseUrl] -
 *          The webhook URL called to fetch the response to an incoming communication expressed in Assistant TwiML.
 * @param {string} [opts.callbackUrl] - The callback_url
 * @param {string} [opts.callbackEvents] - The callback_events
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a AssistantInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the fieldTypes
 *
 * @function fieldTypes
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.AssistantContext.FieldTypeList}
 */
/* jshint ignore:end */
AssistantInstance.prototype.fieldTypes = function fieldTypes() {
  return this._proxy.fieldTypes;
};

/* jshint ignore:start */
/**
 * Access the intents
 *
 * @function intents
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.AssistantContext.IntentList}
 */
/* jshint ignore:end */
AssistantInstance.prototype.intents = function intents() {
  return this._proxy.intents;
};

/* jshint ignore:start */
/**
 * Access the modelBuilds
 *
 * @function modelBuilds
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.AssistantContext.ModelBuildList}
 */
/* jshint ignore:end */
AssistantInstance.prototype.modelBuilds = function modelBuilds() {
  return this._proxy.modelBuilds;
};

/* jshint ignore:start */
/**
 * Access the queries
 *
 * @function queries
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @returns {Twilio.Preview.Understand.AssistantContext.QueryList}
 */
/* jshint ignore:end */
AssistantInstance.prototype.queries = function queries() {
  return this._proxy.queries;
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the AssistantInstance for serialization.
 * Removes any circular references in the object.
 *
 * @function toJSON
 * @memberof Twilio.Preview.Understand.AssistantInstance
 * @instance
 *
 * @returns Object
 */
/* jshint ignore:end */
AssistantInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Understand.AssistantContext
 * @description Initialize the AssistantContext
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {Twilio.Preview.Understand.AssistantContext.FieldTypeList} fieldTypes -
 *          fieldTypes resource
 * @property {Twilio.Preview.Understand.AssistantContext.IntentList} intents -
 *          intents resource
 * @property {Twilio.Preview.Understand.AssistantContext.ModelBuildList} modelBuilds -
 *          modelBuilds resource
 * @property {Twilio.Preview.Understand.AssistantContext.QueryList} queries -
 *          queries resource
 *
 * @param {Twilio.Preview.Understand} version - Version of the resource
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
AssistantContext = function AssistantContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = _.template(
    '/Assistants/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._fieldTypes = undefined;
  this._intents = undefined;
  this._modelBuilds = undefined;
  this._queries = undefined;
};

/* jshint ignore:start */
/**
 * fetch a AssistantInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Understand.AssistantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AssistantInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a AssistantInstance
 *
 * @function update
 * @memberof Twilio.Preview.Understand.AssistantContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] -
 *          A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @param {boolean} [opts.logQueries] -
 *          A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @param {number} [opts.ttl] - The ttl
 * @param {string} [opts.uniqueName] -
 *          A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 * @param {string} [opts.responseUrl] -
 *          The webhook URL called to fetch the response to an incoming communication expressed in Assistant TwiML.
 * @param {string} [opts.callbackUrl] - The callback_url
 * @param {string} [opts.callbackEvents] - The callback_events
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'LogQueries': serialize.bool(_.get(opts, 'logQueries')),
    'Ttl': _.get(opts, 'ttl'),
    'UniqueName': _.get(opts, 'uniqueName'),
    'ResponseUrl': _.get(opts, 'responseUrl'),
    'CallbackUrl': _.get(opts, 'callbackUrl'),
    'CallbackEvents': _.get(opts, 'callbackEvents')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new AssistantInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a AssistantInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Understand.AssistantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AssistantInstance
 */
/* jshint ignore:end */
AssistantContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(AssistantContext.prototype,
  'fieldTypes', {
  get: function() {
    if (!this._fieldTypes) {
      this._fieldTypes = new FieldTypeList(this._version, this._solution.sid);
    }
    return this._fieldTypes;
  }
});

Object.defineProperty(AssistantContext.prototype,
  'intents', {
  get: function() {
    if (!this._intents) {
      this._intents = new IntentList(this._version, this._solution.sid);
    }
    return this._intents;
  }
});

Object.defineProperty(AssistantContext.prototype,
  'modelBuilds', {
  get: function() {
    if (!this._modelBuilds) {
      this._modelBuilds = new ModelBuildList(this._version, this._solution.sid);
    }
    return this._modelBuilds;
  }
});

Object.defineProperty(AssistantContext.prototype,
  'queries', {
  get: function() {
    if (!this._queries) {
      this._queries = new QueryList(this._version, this._solution.sid);
    }
    return this._queries;
  }
});

module.exports = {
  AssistantList: AssistantList,
  AssistantPage: AssistantPage,
  AssistantInstance: AssistantInstance,
  AssistantContext: AssistantContext
};