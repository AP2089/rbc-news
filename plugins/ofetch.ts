import { ofetch } from 'ofetch';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const baseURL = config.public.APP_URL as string;

  globalThis.$fetch = ofetch.create({
    baseURL,
  });
});
