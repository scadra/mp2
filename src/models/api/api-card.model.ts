/**
 * Api Card model for api-products listing
 * @interface
 */
export class ApiCardModel {
  id: string;
  logo: string;
  provider: string;
  name: string;
  title: string;
  description: string;
  status: string;
  version: string;
  publish_date: Date;

  constructor(
    id: string,
    logo: string,
    provider: string,
    name: string,
    title: string,
    description: string,
    status: string,
    version: string,
    publish_date: Date
  ) {
    this.id = id;
    this.logo = logo;
    this.provider = provider;
    this.name = name;
    this.title = title;
    this.description = description;
    this.status = status;
    this.version = version;
    this.publish_date = publish_date;
  }
}
