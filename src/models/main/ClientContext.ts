import VueRouter from 'vue-router';
import { MetaInfo } from 'vue-meta';

export interface ClientContext {
  appOptions: any;
  router: VueRouter;
  head: MetaInfo;
  isClient: boolean;
}