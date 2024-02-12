import {z} from 'zod';

type cliType = z.infer<typeof cliSchema>;

const cliSchema = z
  .object({
    output: z.coerce.string({
      required_error: 'Output is required',
      invalid_type_error: 'Output must be a path',
    }),
    font: z.coerce.string().optional().default('./src/Roboto-Regular.ttf'),
    help: z.coerce.boolean().optional(),
    '--': z.array(z.unknown()).nullish(),
  })
  .extend({type: z.string()})
  .strict();

export {cliSchema, cliType};
