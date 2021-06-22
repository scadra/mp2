/**
 * Api Card model for api-products listing
 * @interface
 */
export interface Api {
  id: string;
  logo: string;
  name: string;
  description: string;
  version: string;
  environments: string;
  published_date: string;
  provider: string;
  tags: string;
}
