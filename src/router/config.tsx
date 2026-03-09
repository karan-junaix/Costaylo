import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const PGsPage = lazy(() => import('../pages/pgs/page'));
const PGDetailPage = lazy(() => import('../pages/pg-detail/page'));
const AuthPage = lazy(() => import('../pages/auth/page'));
const OwnerAuthPage = lazy(() => import('../pages/owner-auth/page'));
const DashboardPage = lazy(() => import('../pages/dashboard/page'));
const DashboardBookingsPage = lazy(() => import('../pages/dashboard/bookings/page'));
const DashboardSavedPage = lazy(() => import('../pages/dashboard/saved/page'));
const DashboardRecentPage = lazy(() => import('../pages/dashboard/recent/page'));
const DashboardProfilePage = lazy(() => import('../pages/dashboard/profile/page'));
const OwnerDashboardPage = lazy(() => import('../pages/owner-dashboard/page'));
const OwnerPropertiesPage = lazy(() => import('../pages/owner-dashboard/properties/page'));
const OwnerAddPropertyPage = lazy(() => import('../pages/owner-dashboard/add-property/page'));
const OwnerBookingsPage = lazy(() => import('../pages/owner-dashboard/bookings/page'));
const OwnerInquiriesPage = lazy(() => import('../pages/owner-dashboard/inquiries/page'));
const OwnerRevenuePage = lazy(() => import('../pages/owner-dashboard/revenue/page'));
const OwnerSettingsPage = lazy(() => import('../pages/owner-dashboard/settings/page'));
const AdminAuthPage = lazy(() => import('../pages/admin-auth/page'));
const AdminDashboardPage = lazy(() => import('../pages/admin-dashboard/page'));
const AdminUsersPage = lazy(() => import('../pages/admin-dashboard/users/page'));
const AdminOwnersPage = lazy(() => import('../pages/admin-dashboard/owners/page'));
const AdminPropertiesPage = lazy(() => import('../pages/admin-dashboard/properties/page'));
const AdminBookingsPage = lazy(() => import('../pages/admin-dashboard/bookings/page'));
const AdminHomeContentPage = lazy(() => import('../pages/admin-dashboard/home-content/page'));
const AdminAnalyticsPage = lazy(() => import('../pages/admin-dashboard/analytics/page'));
const AdminSettingsPage = lazy(() => import('../pages/admin-dashboard/settings/page'));
const HelpPage = lazy(() => import('../pages/help/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const HostelsPage = lazy(() => import('../pages/hostels/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const LocalityPage = lazy(() => import('../pages/locality/page'));
const CityPage = lazy(() => import('../pages/city/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pgs',
    element: <PGsPage />,
  },
  {
    path: '/pg/:id',
    element: <PGDetailPage />,
  },
  {
    path: '/login',
    element: <AuthPage />,
  },
  {
    path: '/list-property',
    element: <OwnerAuthPage />,
  },
  {
    path: '/owner-login',
    element: <OwnerAuthPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/dashboard/bookings',
    element: <DashboardBookingsPage />,
  },
  {
    path: '/dashboard/saved',
    element: <DashboardSavedPage />,
  },
  {
    path: '/dashboard/recent',
    element: <DashboardRecentPage />,
  },
  {
    path: '/dashboard/profile',
    element: <DashboardProfilePage />,
  },
  {
    path: '/owner-dashboard',
    element: <OwnerDashboardPage />,
  },
  {
    path: '/owner-dashboard/properties',
    element: <OwnerPropertiesPage />,
  },
  {
    path: '/owner-dashboard/add-property',
    element: <OwnerAddPropertyPage />,
  },
  {
    path: '/owner-dashboard/bookings',
    element: <OwnerBookingsPage />,
  },
  {
    path: '/owner-dashboard/inquiries',
    element: <OwnerInquiriesPage />,
  },
  {
    path: '/owner-dashboard/revenue',
    element: <OwnerRevenuePage />,
  },
  {
    path: '/owner-dashboard/settings',
    element: <OwnerSettingsPage />,
  },
  {
    path: '/admin-login',
    element: <AdminAuthPage />,
  },
  {
    path: '/admin-dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: '/admin-dashboard/users',
    element: <AdminUsersPage />,
  },
  {
    path: '/admin-dashboard/owners',
    element: <AdminOwnersPage />,
  },
  {
    path: '/admin-dashboard/properties',
    element: <AdminPropertiesPage />,
  },
  {
    path: '/admin-dashboard/bookings',
    element: <AdminBookingsPage />,
  },
  {
    path: '/admin-dashboard/home-content',
    element: <AdminHomeContentPage />,
  },
  {
    path: '/admin-dashboard/analytics',
    element: <AdminAnalyticsPage />,
  },
  {
    path: '/admin-dashboard/settings',
    element: <AdminSettingsPage />,
  },
  {
    path: '/help',
    element: <HelpPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/hostels',
    element: <HostelsPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/locality/:slug',
    element: <LocalityPage />,
  },
  {
    path: '/:city',
    element: <CityPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
