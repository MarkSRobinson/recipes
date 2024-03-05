/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedCustomFilter
 */
export interface PatchedCustomFilter {
    /**
     * 
     * @type {number}
     * @memberof PatchedCustomFilter
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomFilter
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedCustomFilter
     */
    search?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof PatchedCustomFilter
     */
    shared?: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof PatchedCustomFilter
     */
    readonly createdBy?: number;
}

/**
 * Check if a given object implements the PatchedCustomFilter interface.
 */
export function instanceOfPatchedCustomFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedCustomFilterFromJSON(json: any): PatchedCustomFilter {
    return PatchedCustomFilterFromJSONTyped(json, false);
}

export function PatchedCustomFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCustomFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'search': !exists(json, 'search') ? undefined : json['search'],
        'shared': !exists(json, 'shared') ? undefined : ((json['shared'] as Array<any>).map(UserFromJSON)),
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function PatchedCustomFilterToJSON(value?: PatchedCustomFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'search': value.search,
        'shared': value.shared === undefined ? undefined : ((value.shared as Array<any>).map(UserToJSON)),
    };
}
