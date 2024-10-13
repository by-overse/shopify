import { z } from 'zod';
export type Metaobject = {
    id: string;
    fields: {
        key?: string;
        value?: string;
    }[];
};
export type MetaobjectFieldKey = Metaobject['fields'][number]['key'];
export type MetaobjectFieldValue = Metaobject['fields'][number]['value'];
export type MetaobjectFields<T extends string> = {
    [K in T]: MetaobjectFieldValue;
};
/**
 * Generates a Zod schema for a metaobject with typed keys.
 *
 * @param keys - The keys of the metaobject fields.
 * @returns A Zod schema for a typed metaobject.
 *
 * @example
 * ```ts
 * const metaobjectSchema = zodMetaobjectKeys(['name', 'description']);
 *
 * const metaobject = {
 *   id: '123',
 *   fields: [
 *     { key: 'name', value: 'Product 1' },
 *     { key: 'description', value: 'Description of product 1' },
 *   ],
 * };
 *
 * metaobjectSchema.parse(metaobject);
 * // { id: '123', fields: [ { key: 'name', value: 'Product 1' }, { key: 'description', value: 'Description of product 1' } ] }
 * ```
 */
export declare const zodMetaobjectKeys: <T extends readonly [string, ...string[]]>(keys: T) => z.ZodObject<{
    id: z.ZodString;
    fields: z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>]: z.baseObjectInputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>[k_1]; }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    fields: { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>, any>[k]; }[];
}, {
    id: string;
    fields: { [k_1 in keyof z.baseObjectInputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>]: z.baseObjectInputType<{
        key: z.ZodEnum<z.Writeable<T>>;
        value: z.ZodString;
    }>[k_1]; }[];
}>;
//# sourceMappingURL=index.d.ts.map