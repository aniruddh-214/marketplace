import z from 'zod';

const env = process.env;

const serverConfigSchema = z.object({
  APPLICATION_NAME: z.string(),
});

export type TServerConfig = z.infer<typeof serverConfigSchema>;

const serverConfigValues: TServerConfig = {
  APPLICATION_NAME: env.APPLICATION_NAME!,
};
export const ENV: TServerConfig = serverConfigSchema.parse(serverConfigValues);
