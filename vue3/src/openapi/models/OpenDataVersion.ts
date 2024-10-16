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
 * @interface OpenDataVersion
 */
export interface OpenDataVersion {
    /**
     * 
     * @type {number}
     * @memberof OpenDataVersion
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof OpenDataVersion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataVersion
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataVersion
     */
    comment?: string;
}

/**
 * Check if a given object implements the OpenDataVersion interface.
 */
export function instanceOfOpenDataVersion(value: object): value is OpenDataVersion {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    return true;
}

export function OpenDataVersionFromJSON(json: any): OpenDataVersion {
    return OpenDataVersionFromJSONTyped(json, false);
}

export function OpenDataVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'code': json['code'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function OpenDataVersionToJSON(value?: OpenDataVersion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'code': value['code'],
        'comment': value['comment'],
    };
}
