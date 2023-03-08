import { FC, Suspense, lazy, useState } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import AuthLayout from "../components/authentication/auth-layout/AuthLayout";
import MainLayout from "../components/common/main-layout/MainLayout";
import Error401 from "../components/error-pages/error-401/Error401";
import Error403 from "../components/error-pages/error-403/Error403";
import Error404 from "../components/error-pages/error-404/Error404";
import Error500 from "../components/error-pages/error-500/Error500";
import Spinner from "../components/spinner/Spinner";
import { isLoggedIn } from "../services/auth.service";
import PrivateRoute from "./PrivateRoute";
import { ROLE } from "./roles";

const SignIn = lazy(
  () => import("../components/authentication/sign-in/signin")
);
const Runway = lazy(() => import("../components/authentication/runway/runway"));

const ClientManagement = lazy(() => {
  return Promise.all([
    import("../components/management/client-management/ClientManagement"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const UserManagement = lazy(() => {
  return Promise.all([
    import("../components/management/user-managment/UserManagement"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const ProjectManagement = lazy(() => {
  return Promise.all([
    import("../components/management/project-management/ProjectManagement"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const ActivityManagement = lazy(() => {
  return Promise.all([
    import("../components/management/activity-management/ActivityManagement"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const ReviseActivity = lazy(() => {
  return Promise.all([
    import("../components/activity/revise-activity/ReviseActivity"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const ApproveReject = lazy(() => {
  return Promise.all([
    import("../components/activity/approve-reject/ApproveReject"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const Dashboard = lazy(() => {
  return Promise.all([
    import("../components/dashboard/Dashboard"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const FallBackDesign: FC = (): JSX.Element => {
  const [isAuthenticated] = useState(isLoggedIn());
  return (
    <>
      {!isAuthenticated ? (
        <></>
      ) : (
        <>
          <MainLayout />
          <Spinner />
        </>
      )}
    </>
  );
};

const AppRoutes: FC = (): JSX.Element => {
  const authRoutes: RouteObject = {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "", element: <Navigate to={"/signin"} /> },
      { path: "*", element: <Error404 /> },
      { path: "/auth/redirect", element: <Runway /> },
    ],
  };

  const errorRoutes: RouteObject = {
    path: "/error",
    element: <AuthLayout />,
    children: [
      { path: "*", element: <Error404 /> },
      { path: "401", element: <Error401 /> },
      { path: "403", element: <Error403 /> },
      { path: "404", element: <Error404 /> },
      { path: "500", element: <Error500 /> },
    ],
  };

  const managementRoute: RouteObject = {
    path: "/management",
    element: <MainLayout />,
    children: [
      { path: "", element: <Navigate to={"/error/404"} /> },
      {
        path: "user",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin]}>
            <UserManagement />
          </PrivateRoute>
        ),
      },
      {
        path: "project",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin]}>
            <ProjectManagement />
          </PrivateRoute>
        ),
      },
      {
        path: "activity",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin, ROLE.oemMember]}>
            <ActivityManagement />
          </PrivateRoute>
        ),
      },
      {
        path: "client",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin]}>
            <ClientManagement />
          </PrivateRoute>
        ),
      },
    ],
  };

  const dashboardRoute: RouteObject = {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute
            roles={[ROLE.oemAdmin, ROLE.clientAdmin, ROLE.oemMember]}
          >
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  };

  const activityRoute: RouteObject = {
    path: "/activity",
    element: <MainLayout />,
    children: [
      { path: "", element: <Navigate to={"/error/404"} /> },
      {
        path: "approvereject",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin, ROLE.clientAdmin]}>
            <ApproveReject />
          </PrivateRoute>
        ),
      },
      {
        path: "revise",
        element: (
          <PrivateRoute roles={[ROLE.oemAdmin, ROLE.oemMember]}>
            <ReviseActivity />
          </PrivateRoute>
        ),
      },
    ],
  };

  // const mainRoutesWithClientAdmin: RouteObject = {
  //   path: "/clientadmin",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "approvereject",
  //       element: (
  //         <PrivateRoute roles={ROLE.clientAdmin}>
  //           <ApproveReject />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "dashboard",
  //       element: (
  //         <PrivateRoute roles={ROLE.clientAdmin}>
  //           <ClientDashboard />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // };

  // const mainRoutesWithOemMember: RouteObject = {
  //   path: "/oemmember",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "activity",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemMember}>
  //           <OemMemberActivity />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "dashboard",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemMember}>
  //           <OemMemberDashboard />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // };
  // const mainRoutesWithOemAdmin: RouteObject = {
  //   path: "/oemadmin",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "client",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <ClientManagement />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "user",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <UserManagement />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "project",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <ProjectManagement />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "activity",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <ActivityManagement />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "approvereject",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <OemApproveReject />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "reviseactivity",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <ReviseActivity />
  //         </PrivateRoute>
  //       ),
  //     },
  //     {
  //       path: "dashboard",
  //       element: (
  //         <PrivateRoute roles={ROLE.oemAdmin}>
  //           <OemAdminDashboard />
  //         </PrivateRoute>
  //       ),
  //     },
  //   ],
  // };

  // const router = useRoutes([
  //   authRoutes,
  //   mainRoutesWithClientAdmin,
  //   mainRoutesWithOemMember,
  //   mainRoutesWithOemAdmin,
  //   errorRoutes,
  // ]);

  const router = useRoutes([
    authRoutes,
    errorRoutes,
    managementRoute,
    dashboardRoute,
    activityRoute,
  ]);
  return <Suspense fallback={<FallBackDesign />}>{router}</Suspense>;
};

export default AppRoutes;
