const SITE_URL = 'https://www.parkerelectricalsolutions.uk';

/** A single crumb in a breadcrumb trail. `path` is site-relative, e.g. "/electrician-harlow". */
export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Builds a schema.org BreadcrumbList node. "Home" is always the first item —
 * callers only need to supply the trail after it.
 */
export function buildBreadcrumbSchema(trail: BreadcrumbItem[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

/**
 * Builds a schema.org Service node for a location/service landing page.
 * `areaServed` accepts a single town or a list for pages covering more than one.
 */
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaServed: string | string[];
}) {
  return {
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      '@type': 'Electrician',
      name: 'Parker Electrical Solutions Ltd',
      telephone: '+447737447302',
    },
    areaServed: Array.isArray(opts.areaServed)
      ? opts.areaServed.map((name) => ({ '@type': 'City', name }))
      : { '@type': 'City', name: opts.areaServed },
  };
}
