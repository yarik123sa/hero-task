import { RouteLocationNormalizedLoaded, RouteMeta } from 'vue-router'

export interface AppRouteMeta extends RouteMeta {
  layout?: string
}

export interface AppRoute extends RouteLocationNormalizedLoaded {
  meta: AppRouteMeta
}
