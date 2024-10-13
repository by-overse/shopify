import { ZodSchema } from 'zod';
/**
 * Converts a metaobject to an object, where the fields are typed and flattened.
 *
 * @param keys - The keys of the metaobject fields.
 * @param objSchema - The schema of the object.
 * @returns A Zod schema that converts a typed metaobject to an object.
 *
 * @example
 * ```ts
 * const metaobjectToObject = metaobjectToObject(['name', 'description'], z.object({
 *   name: z.string(),
 *   description: z.string(),
 * ));
 *
 * const metaobject = {
 *   id: '123',
 *   fields: [
 *     { key: 'name', value: 'Product 1' },
 *     { key: 'description', value: 'Description of product 1' },
 *   ],
 * };
 *
 * const object = metaobjectToObject.parse(metaobject);
 * // object = { id: '123', fields: { name: 'Product 1', description: 'Description of product 1' } }
 * ```
 */
export declare function metaobjectToObject<T extends readonly [string, ...string[]], U extends object>(keys: T, objSchema: ZodSchema<U>): import("zod").ZodEffects<import("zod").ZodObject<{
    id: import("zod").ZodString;
    fields: import("zod").ZodArray<import("zod").ZodObject<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, { [k in keyof import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>, any>]: import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>, any>[k]; }, { [k_1 in keyof import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>]: import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>[k_1]; }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
    id: string;
    fields: { [k in keyof import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>, any>]: import("zod").objectUtil.addQuestionMarks<import("zod").baseObjectOutputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>, any>[k]; }[];
}, {
    id: string;
    fields: { [k_1 in keyof import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>]: import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>[k_1]; }[];
}>, {
    id: string;
    fields: U;
}, {
    id: string;
    fields: { [k_1 in keyof import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>]: import("zod").baseObjectInputType<{
        key: import("zod").ZodEnum<import("zod").Writeable<T>>;
        value: import("zod").ZodString;
    }>[k_1]; }[];
}>;
//# sourceMappingURL=index.d.ts.map