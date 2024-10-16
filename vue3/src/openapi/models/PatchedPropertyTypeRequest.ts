/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Adds nested create feature
 * @export
 * @interface PatchedPropertyTypeRequest
 */
export interface PatchedPropertyTypeRequest {
    /**
     * 
     * @type {number}
     * @memberof PatchedPropertyTypeRequest
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedPropertyTypeRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedPropertyTypeRequest
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedPropertyTypeRequest
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedPropertyTypeRequest
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedPropertyTypeRequest
     */
    openDataSlug?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedPropertyTypeRequest
     */
    fdcId?: number;
}

/**
 * Check if a given object implements the PatchedPropertyTypeRequest interface.
 */
export function instanceOfPatchedPropertyTypeRequest(value: object): boolean {
    return true;
}

export function PatchedPropertyTypeRequestFromJSON(json: any): PatchedPropertyTypeRequest {
    return PatchedPropertyTypeRequestFromJSONTyped(json, false);
}

export function PatchedPropertyTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPropertyTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'description': json['description'] == null ? undefined : json['description'],
        'order': json['order'] == null ? undefined : json['order'],
        'openDataSlug': json['open_data_slug'] == null ? undefined : json['open_data_slug'],
        'fdcId': json['fdc_id'] == null ? undefined : json['fdc_id'],
    };
}

export function PatchedPropertyTypeRequestToJSON(value?: PatchedPropertyTypeRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'unit': value['unit'],
        'description': value['description'],
        'order': value['order'],
        'open_data_slug': value['openDataSlug'],
        'fdc_id': value['fdcId'],
    };
}
