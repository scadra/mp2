/**
 * Api Card model for api-products listing
 * @interface
 */
export class ApiCardModel {
  id: string;
  logo: string;
  name: string;
  description: string;
  version: string;
  environments: string;
  published_date: string;
  provider: string;
  tags: string;

  constructor(
    id: string,
    logo: string,
    name: string,
    description: string,
    version: string,
    environments: string,
    published_date: string,
    provider: string,
    tags: string
  ) {
    this.id = id;
    this.logo = logo;
    this.name = name;
    this.description = description;
    this.version = version;
    this.environments = environments;
    this.published_date = published_date;
    this.provider = provider;
    this.tags = tags;
  }
}
