/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a ChannelInstance
 */
export interface ChannelListInstanceCreateOptions {
  /** The SID of the Flex Flow. */
  flexFlowSid: string;
  /** The `identity` value that uniquely identifies the new resource\\\'s chat User. */
  identity: string;
  /** The chat participant\\\'s friendly name. */
  chatUserFriendlyName: string;
  /** The chat channel\\\'s friendly name. */
  chatFriendlyName: string;
  /** The Target Contact Identity, for example the phone number of an SMS. */
  target?: string;
  /** The chat channel\\\'s unique name. */
  chatUniqueName?: string;
  /** The pre-engagement data. */
  preEngagementData?: string;
  /** The SID of the TaskRouter Task. Only valid when integration type is `task`. `null` for integration types `studio` & `external` */
  taskSid?: string;
  /** The Task attributes to be added for the TaskRouter Task. */
  taskAttributes?: string;
  /** Whether to create the channel as long-lived. */
  longLived?: boolean;
}
/**
 * Options to pass to each
 */
export interface ChannelListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ChannelInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ChannelListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ChannelListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ChannelContext {
  /**
   * Remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChannelContextSolution {
  sid: string;
}

export class ChannelContextImpl implements ChannelContext {
  protected _solution: ChannelContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Channels/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface ChannelPayload extends TwilioResponsePayload {
  flex_chat_channels: ChannelResource[];
}

interface ChannelResource {
  account_sid: string;
  flex_flow_sid: string;
  sid: string;
  user_sid: string;
  task_sid: string;
  url: string;
  date_created: Date;
  date_updated: Date;
}

export class ChannelInstance {
  protected _solution: ChannelContextSolution;
  protected _context?: ChannelContext;

  constructor(protected _version: V1, payload: ChannelResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.flexFlowSid = payload.flex_flow_sid;
    this.sid = payload.sid;
    this.userSid = payload.user_sid;
    this.taskSid = payload.task_sid;
    this.url = payload.url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource and owns this Workflow
   */
  accountSid: string;
  /**
   * The SID of the Flex Flow
   */
  flexFlowSid: string;
  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the chat user
   */
  userSid: string;
  /**
   * The SID of the TaskRouter Task
   */
  taskSid: string;
  /**
   * The absolute URL of the Flex chat channel resource
   */
  url: string;
  /**
   * The ISO 8601 date and time in GMT when the Flex chat channel was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the Flex chat channel was last updated
   */
  dateUpdated: Date;

  private get _proxy(): ChannelContext {
    this._context =
      this._context ||
      new ChannelContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      flexFlowSid: this.flexFlowSid,
      sid: this.sid,
      userSid: this.userSid,
      taskSid: this.taskSid,
      url: this.url,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChannelSolution {}

export interface ChannelListInstance {
  _version: V1;
  _solution: ChannelSolution;
  _uri: string;

  (sid: string): ChannelContext;
  get(sid: string): ChannelContext;

  /**
   * Create a ChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChannelInstance
   */
  create(
    params: ChannelListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChannelInstance) => any
  ): Promise<ChannelInstance>;

  /**
   * Streams ChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ChannelListInstanceEachOptions,
    callback?: (item: ChannelInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  /**
   * Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  list(
    params: ChannelListInstanceOptions,
    callback?: (error: Error | null, items: ChannelInstance[]) => any
  ): Promise<ChannelInstance[]>;
  /**
   * Retrieve a single page of ChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;
  page(
    params: ChannelListInstancePageOptions,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ChannelListInstance(version: V1): ChannelListInstance {
  const instance = ((sid) => instance.get(sid)) as ChannelListInstance;

  instance.get = function get(sid): ChannelContext {
    return new ChannelContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Channels`;

  instance.create = function create(
    params: ChannelListInstanceCreateOptions,
    callback?: (error: Error | null, items: ChannelInstance) => any
  ): Promise<ChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["flexFlowSid"] === null || params["flexFlowSid"] === undefined) {
      throw new Error("Required parameter \"params['flexFlowSid']\" missing.");
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error("Required parameter \"params['identity']\" missing.");
    }

    if (
      params["chatUserFriendlyName"] === null ||
      params["chatUserFriendlyName"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['chatUserFriendlyName']\" missing."
      );
    }

    if (
      params["chatFriendlyName"] === null ||
      params["chatFriendlyName"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['chatFriendlyName']\" missing."
      );
    }

    let data: any = {};

    data["FlexFlowSid"] = params["flexFlowSid"];

    data["Identity"] = params["identity"];

    data["ChatUserFriendlyName"] = params["chatUserFriendlyName"];

    data["ChatFriendlyName"] = params["chatFriendlyName"];
    if (params["target"] !== undefined) data["Target"] = params["target"];
    if (params["chatUniqueName"] !== undefined)
      data["ChatUniqueName"] = params["chatUniqueName"];
    if (params["preEngagementData"] !== undefined)
      data["PreEngagementData"] = params["preEngagementData"];
    if (params["taskSid"] !== undefined) data["TaskSid"] = params["taskSid"];
    if (params["taskAttributes"] !== undefined)
      data["TaskAttributes"] = params["taskAttributes"];
    if (params["longLived"] !== undefined)
      data["LongLived"] = serialize.bool(params["longLived"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ChannelInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ChannelListInstancePageOptions
      | ((error: Error | null, items: ChannelPage) => any),
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChannelPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChannelPage) => any
  ): Promise<ChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ChannelPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class ChannelPage extends Page<
  V1,
  ChannelPayload,
  ChannelResource,
  ChannelInstance
> {
  /**
   * Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ChannelSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChannelInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChannelResource): ChannelInstance {
    return new ChannelInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}