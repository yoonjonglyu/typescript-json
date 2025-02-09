import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";

import { Atomic } from "../typings/Atomic";

export type IJsonSchema = IJsonSchema.NotUnknown | IJsonSchema.IUnknown;
export namespace IJsonSchema {
    export type NotUnknown =
        | IEnumeration<"boolean">
        | IEnumeration<"number">
        | IEnumeration<"string">
        | IBoolean
        | INumber
        | IString
        | IArray
        | ITuple
        | IOneOf
        | IReference
        | IRecursiveReference
        | INullOnly;

    /* -----------------------------------------------------------
        ATOMICS
    ----------------------------------------------------------- */
    export interface IEnumeration<
        Literal extends Exclude<Atomic.Literal, "bigint">,
    > extends IAtomic<Literal> {
        enum: Array<Atomic.Mapper[Literal]>;
    }
    export interface IAtomic<Literal extends Exclude<Atomic.Literal, "bigint">>
        extends ISignificant<Literal> {
        default?: Atomic.Mapper[Literal];
    }
    export interface IString extends IAtomic<"string"> {
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        format?: string;
    }
    export interface INumber extends IAtomic<"number" | "integer"> {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
        multipleOf?: number;
    }
    export interface IBoolean extends IAtomic<"boolean"> {}

    /* -----------------------------------------------------------
        OBJECTS
    ----------------------------------------------------------- */
    export interface IArray extends ISignificant<"array"> {
        items: IJsonSchema;
        minItems?: number;
        maxItems?: number;
        "x-typia-tuple"?: ITuple;
    }
    export interface ITuple extends ISignificant<"array"> {
        items: IJsonSchema[];
    }
    export interface IReference extends IAttribute {
        $ref: string;
    }
    export interface IRecursiveReference extends IAttribute {
        $recursiveRef: string;
    }
    export interface INullOnly extends IAttribute {
        type: "null";
    }

    /* -----------------------------------------------------------
        MISCELLANEOUS
    ----------------------------------------------------------- */
    export interface IOneOf extends IAttribute {
        oneOf: IJsonSchema[];
    }
    export interface IUnknown {}

    export interface ISignificant<Literal extends string> extends IAttribute {
        type: Literal;
        nullable: boolean;
    }
    export interface IAttribute {
        deprecated?: boolean;
        title?: string;
        description?: string;
        "x-typia-metaTags"?: IMetadataTag[];
        "x-typia-jsDocTags"?: IJsDocTagInfo[];
        "x-typia-required"?: boolean;
        "x-typia-rest"?: boolean;
    }
}
