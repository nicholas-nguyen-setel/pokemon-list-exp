/*
 * This module export same routing api as found in web-admin.
 * IMPORTANT: do NOT use <Link> nor hooks from react-router/react-router-dom
 * because they will NOT work when plugging into `web-admin`,
 * instead use these below hooks & Link component.
 */

export {
  useAdminRouter as useRouter,
  useParams,
  useQueryParams,
  useSetQueryParams,
  Link,
} from '@setel/web-common/exposes/admin-routing';
export type { LinkProps } from '@setel/web-common/exposes/admin-routing';
