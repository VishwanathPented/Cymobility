import { useLocation } from 'react-router-dom';
import Seo, { breadcrumbJsonLd } from '../components/Seo.jsx';
import { pageMeta, normalisePath, breadcrumbsFor } from './pageMeta.js';

// Drop-in for Layout. Looks up the current pathname in pageMeta and
// renders <Seo> with title, description, canonical, OG tags, and a
// BreadcrumbList JSON-LD. Falls back to the Home meta if the route
// has no entry (e.g. 404).
export default function RouteSeo() {
  const { pathname } = useLocation();
  const key = normalisePath(pathname);
  const m = pageMeta[key] || pageMeta['/'];
  const crumbs = breadcrumbsFor(pathname);
  const jsonLd = crumbs.length > 1 ? [breadcrumbJsonLd(crumbs)] : undefined;

  return (
    <Seo
      title={m.title}
      description={m.description}
      path={key}
      jsonLd={jsonLd}
      noindex={!pageMeta[key]}
    />
  );
}
