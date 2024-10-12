import type { ZodType } from 'zod';
import { z } from 'zod';

// ------------------------------------------------ --------------------------------
// # --- Original Metaobject
export type Metaobject = {
  id: string;
  fields: {
    key?: string;
    value?: string;
  }[];
};
export type MetaobjectFieldKey = Metaobject['fields'][number]['key'];
export type MetaobjectFieldValue = Metaobject['fields'][number]['value'];

// ------------------------------------------------ --------------------------------
// # --- Transformed Metaobject
export type MetaobjectFields<T extends string> = {
  [K in T]: MetaobjectFieldValue;
};

// ------------------------------------------------ --------------------------------
// # --- Utility to generate a typed metaobject schema

/**
 * Generates a Zod schema for a typed metaobject.
 *
 * @param keys - The keys of the metaobject fields.
 * @returns A Zod schema for a typed metaobject.
 *
 * @example
 * ```ts
 * const metaobjectSchema = typedMetaobject(['name', 'description']);
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
export const typedMetaobject = <T extends readonly [string, ...string[]]>(keys: T) =>
  z.object({
    id: z.string(),
    fields: z.array(
      z.object({
        key: z.enum(keys),
        value: z.string(),
      })
    ),
  }) satisfies ZodType<Metaobject>;
