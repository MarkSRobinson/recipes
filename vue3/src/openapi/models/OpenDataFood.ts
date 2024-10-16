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
import type { OpenDataFoodProperty } from './OpenDataFoodProperty';
import {
    OpenDataFoodPropertyFromJSON,
    OpenDataFoodPropertyFromJSONTyped,
    OpenDataFoodPropertyToJSON,
} from './OpenDataFoodProperty';
import type { OpenDataUnit } from './OpenDataUnit';
import {
    OpenDataUnitFromJSON,
    OpenDataUnitFromJSONTyped,
    OpenDataUnitToJSON,
} from './OpenDataUnit';
import type { OpenDataCategory } from './OpenDataCategory';
import {
    OpenDataCategoryFromJSON,
    OpenDataCategoryFromJSONTyped,
    OpenDataCategoryToJSON,
} from './OpenDataCategory';
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface OpenDataFood
 */
export interface OpenDataFood {
    /**
     * 
     * @type {number}
     * @memberof OpenDataFood
     */
    id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof OpenDataFood
     */
    version: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    pluralName: string;
    /**
     * 
     * @type {OpenDataCategory}
     * @memberof OpenDataFood
     */
    storeCategory: OpenDataCategory;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataFood
     */
    preferredUnitMetric?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataFood
     */
    preferredShoppingUnitMetric?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataFood
     */
    preferredUnitImperial?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataFood
     */
    preferredShoppingUnitImperial?: OpenDataUnit | null;
    /**
     * 
     * @type {Array<OpenDataFoodProperty>}
     * @memberof OpenDataFood
     */
    properties: Array<OpenDataFoodProperty> | null;
    /**
     * 
     * @type {number}
     * @memberof OpenDataFood
     */
    propertiesFoodAmount?: number;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataFood
     */
    propertiesFoodUnit: OpenDataUnit;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    propertiesSource?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    fdcId: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataFood
     */
    readonly createdBy: string;
}

/**
 * Check if a given object implements the OpenDataFood interface.
 */
export function instanceOfOpenDataFood(value: object): value is OpenDataFood {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('pluralName' in value) || value['pluralName'] === undefined) return false;
    if (!('storeCategory' in value) || value['storeCategory'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    if (!('propertiesFoodUnit' in value) || value['propertiesFoodUnit'] === undefined) return false;
    if (!('fdcId' in value) || value['fdcId'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    return true;
}

export function OpenDataFoodFromJSON(json: any): OpenDataFood {
    return OpenDataFoodFromJSONTyped(json, false);
}

export function OpenDataFoodFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataFood {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'version': OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'pluralName': json['plural_name'],
        'storeCategory': OpenDataCategoryFromJSON(json['store_category']),
        'preferredUnitMetric': json['preferred_unit_metric'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_unit_metric']),
        'preferredShoppingUnitMetric': json['preferred_shopping_unit_metric'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_metric']),
        'preferredUnitImperial': json['preferred_unit_imperial'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_unit_imperial']),
        'preferredShoppingUnitImperial': json['preferred_shopping_unit_imperial'] == null ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_imperial']),
        'properties': (json['properties'] == null ? null : (json['properties'] as Array<any>).map(OpenDataFoodPropertyFromJSON)),
        'propertiesFoodAmount': json['properties_food_amount'] == null ? undefined : json['properties_food_amount'],
        'propertiesFoodUnit': OpenDataUnitFromJSON(json['properties_food_unit']),
        'propertiesSource': json['properties_source'] == null ? undefined : json['properties_source'],
        'fdcId': json['fdc_id'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'],
    };
}

export function OpenDataFoodToJSON(value?: Omit<OpenDataFood, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'plural_name': value['pluralName'],
        'store_category': OpenDataCategoryToJSON(value['storeCategory']),
        'preferred_unit_metric': OpenDataUnitToJSON(value['preferredUnitMetric']),
        'preferred_shopping_unit_metric': OpenDataUnitToJSON(value['preferredShoppingUnitMetric']),
        'preferred_unit_imperial': OpenDataUnitToJSON(value['preferredUnitImperial']),
        'preferred_shopping_unit_imperial': OpenDataUnitToJSON(value['preferredShoppingUnitImperial']),
        'properties': (value['properties'] == null ? null : (value['properties'] as Array<any>).map(OpenDataFoodPropertyToJSON)),
        'properties_food_amount': value['propertiesFoodAmount'],
        'properties_food_unit': OpenDataUnitToJSON(value['propertiesFoodUnit']),
        'properties_source': value['propertiesSource'],
        'fdc_id': value['fdcId'],
        'comment': value['comment'],
    };
}
