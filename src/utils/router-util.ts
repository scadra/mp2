/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";

export class RouteUtil {
  static setParams($route: Route, key: string, params: string[]): void {
    const actualParams = RouteUtil.getQueries($route);

    if (params.length > 0) {
      $route.query[key] = params.join(",");
    } else {
      delete actualParams[key];
    }
    history.pushState(
      {},
      null,
      $route.path + RouteUtil.createParams($route.query)
    );
  }

  static getQueries($route: Route): Dictionary<string | string[]> {
    return $route.query;
  }

  static createParams(queries: Dictionary<string | string[]>): string {
    let params = "?";
    const keys = Object.keys(queries);
    keys.forEach((key) => {
      params += key + "=" + queries[key] + "&";
    });
    params = params.slice(0, -1);
    return params;
  }

  static getParamsByKey($route: Route, key: string): string[] {
    const queries = $route.query[key] as string;
    if (queries) return queries.split(",");
    else return [];
  }
}
