import type { StrapiApp } from '@strapi/strapi/admin';
import healthpay from "./extensions/healthpay.png"

export default {
  config: {
    head: {
    favicon: [Favicon],
  },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
