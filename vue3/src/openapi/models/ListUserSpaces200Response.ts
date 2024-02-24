/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserSpace } from './UserSpace';
import {
    UserSpaceFromJSON,
    UserSpaceFromJSONTyped,
    UserSpaceToJSON,
} from './UserSpace';

/**
 * 
 * @export
 * @interface ListUserSpaces200Response
 */
export interface ListUserSpaces200Response {
    /**
     * 
     * @type {number}
     * @memberof ListUserSpaces200Response
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof ListUserSpaces200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListUserSpaces200Response
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<UserSpace>}
     * @memberof ListUserSpaces200Response
     */
    results?: Array<UserSpace>;
}

/**
 * Check if a given object implements the ListUserSpaces200Response interface.
 */
export function instanceOfListUserSpaces200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListUserSpaces200ResponseFromJSON(json: any): ListUserSpaces200Response {
    return ListUserSpaces200ResponseFromJSONTyped(json, false);
}

export function ListUserSpaces200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserSpaces200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(UserSpaceFromJSON)),
    };
}

export function ListUserSpaces200ResponseToJSON(value?: ListUserSpaces200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(UserSpaceToJSON)),
    };
}
