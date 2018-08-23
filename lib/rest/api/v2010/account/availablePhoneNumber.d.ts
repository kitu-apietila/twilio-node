/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { LocalList } from './availablePhoneNumber/local';
import { LocalListInstance } from './availablePhoneNumber/local';
import { MachineToMachineList } from './availablePhoneNumber/machineToMachine';
import { MachineToMachineListInstance } from './availablePhoneNumber/machineToMachine';
import { MobileList } from './availablePhoneNumber/mobile';
import { MobileListInstance } from './availablePhoneNumber/mobile';
import { NationalList } from './availablePhoneNumber/national';
import { NationalListInstance } from './availablePhoneNumber/national';
import { SerializableClass } from '../../../../interfaces';
import { SharedCostList } from './availablePhoneNumber/sharedCost';
import { SharedCostListInstance } from './availablePhoneNumber/sharedCost';
import { TollFreeList } from './availablePhoneNumber/tollFree';
import { TollFreeListInstance } from './availablePhoneNumber/tollFree';
import { VoipList } from './availablePhoneNumber/voip';
import { VoipListInstance } from './availablePhoneNumber/voip';

/**
 * @description Initialize the AvailablePhoneNumberCountryList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function AvailablePhoneNumberCountryList(version: V2010, accountSid: string): AvailablePhoneNumberCountryListInstance;

interface AvailablePhoneNumberCountryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AvailablePhoneNumberCountryContext;
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AvailablePhoneNumberCountryListInstanceEachOptions, callback?: (item: AvailablePhoneNumberCountryInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a available_phone_number_country
   *
   * @param countryCode - The country_code
   */
  get(countryCode: string): AvailablePhoneNumberCountryContext;
  /**
   * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
  /**
   * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AvailablePhoneNumberCountryListInstanceOptions, callback?: (error: Error | null, items: AvailablePhoneNumberCountryInstance[]) => any): Promise<AvailablePhoneNumberCountryInstance[]>;
  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AvailablePhoneNumberCountryListInstancePageOptions, callback?: (error: Error | null, items: AvailablePhoneNumberCountryPage) => any): Promise<AvailablePhoneNumberCountryPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface AvailablePhoneNumberCountryListInstanceEachOptions {
  callback?: (item: AvailablePhoneNumberCountryInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface AvailablePhoneNumberCountryListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AvailablePhoneNumberCountryListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AvailablePhoneNumberCountryPayload extends AvailablePhoneNumberCountryResource, Page.TwilioResponsePayload {
}

interface AvailablePhoneNumberCountryResource {
  beta: boolean;
  country: string;
  country_code: string;
  subresource_uris: string;
  uri: string;
}

interface AvailablePhoneNumberCountrySolution {
  accountSid?: string;
}


declare class AvailablePhoneNumberCountryContext {
  /**
   * Initialize the AvailablePhoneNumberCountryContext
   *
   * @property local - local resource
   * @property tollFree - tollFree resource
   * @property mobile - mobile resource
   * @property national - national resource
   * @property voip - voip resource
   * @property sharedCost - sharedCost resource
   * @property machineToMachine - machineToMachine resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param countryCode - The country_code
   */
  constructor(version: V2010, accountSid: string, countryCode: string);

  /**
   * fetch a AvailablePhoneNumberCountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailablePhoneNumberCountryInstance) => any): Promise<AvailablePhoneNumberCountryInstance>;
  local: LocalListInstance;
  machineToMachine: MachineToMachineListInstance;
  mobile: MobileListInstance;
  national: NationalListInstance;
  sharedCost: SharedCostListInstance;
  tollFree: TollFreeListInstance;
  voip: VoipListInstance;
}


declare class AvailablePhoneNumberCountryInstance extends SerializableClass {
  /**
   * Initialize the AvailablePhoneNumberCountryContext
   *
   * @property countryCode - The ISO Country code to lookup phone numbers for.
   * @property country - The country
   * @property uri - The uri
   * @property beta - True if new to Twilio platform.
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param countryCode - The country_code
   */
  constructor(version: V2010, payload: AvailablePhoneNumberCountryPayload, accountSid: string, countryCode: string);

  private _proxy: AvailablePhoneNumberCountryContext;
  beta: boolean;
  country: string;
  countryCode: string;
  /**
   * fetch a AvailablePhoneNumberCountryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailablePhoneNumberCountryInstance) => any): void;
  /**
   * Access the local
   */
  local(): LocalListInstance;
  /**
   * Access the machineToMachine
   */
  machineToMachine(): MachineToMachineListInstance;
  /**
   * Access the mobile
   */
  mobile(): MobileListInstance;
  /**
   * Access the national
   */
  national(): NationalListInstance;
  /**
   * Access the sharedCost
   */
  sharedCost(): SharedCostListInstance;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the AvailablePhoneNumberCountryInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * Access the tollFree
   */
  tollFree(): TollFreeListInstance;
  uri: string;
  /**
   * Access the voip
   */
  voip(): VoipListInstance;
}


declare class AvailablePhoneNumberCountryPage extends Page<V2010, AvailablePhoneNumberCountryPayload, AvailablePhoneNumberCountryResource, AvailablePhoneNumberCountryInstance> {
  /**
   * Initialize the AvailablePhoneNumberCountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AvailablePhoneNumberCountrySolution);

  /**
   * Build an instance of AvailablePhoneNumberCountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailablePhoneNumberCountryPayload): AvailablePhoneNumberCountryInstance;
}

export { AvailablePhoneNumberCountryContext, AvailablePhoneNumberCountryInstance, AvailablePhoneNumberCountryList, AvailablePhoneNumberCountryListInstance, AvailablePhoneNumberCountryListInstanceEachOptions, AvailablePhoneNumberCountryListInstanceOptions, AvailablePhoneNumberCountryListInstancePageOptions, AvailablePhoneNumberCountryPage, AvailablePhoneNumberCountryPayload, AvailablePhoneNumberCountryResource, AvailablePhoneNumberCountrySolution }