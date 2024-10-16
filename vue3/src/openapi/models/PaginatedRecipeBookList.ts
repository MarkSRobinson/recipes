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
import type { RecipeBook } from './RecipeBook';
import {
    RecipeBookFromJSON,
    RecipeBookFromJSONTyped,
    RecipeBookToJSON,
} from './RecipeBook';

/**
 * 
 * @export
 * @interface PaginatedRecipeBookList
 */
export interface PaginatedRecipeBookList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedRecipeBookList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipeBookList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRecipeBookList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RecipeBook>}
     * @memberof PaginatedRecipeBookList
     */
    results: Array<RecipeBook>;
}

/**
 * Check if a given object implements the PaginatedRecipeBookList interface.
 */
export function instanceOfPaginatedRecipeBookList(value: object): value is PaginatedRecipeBookList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedRecipeBookListFromJSON(json: any): PaginatedRecipeBookList {
    return PaginatedRecipeBookListFromJSONTyped(json, false);
}

export function PaginatedRecipeBookListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedRecipeBookList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(RecipeBookFromJSON)),
    };
}

export function PaginatedRecipeBookListToJSON(value?: PaginatedRecipeBookList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(RecipeBookToJSON)),
    };
}
