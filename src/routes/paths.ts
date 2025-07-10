// ----------------------------------------------------------------------

export const paths = {
  root: "/",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    verify: "/auth/verify",
  },
  dashboard: {
    root: "/dashboard",
    job: {
      root: "/dashboard/job",
      new: "/dashboard/job/new",
      list: "/dashboard/job",
      details: (id: string) => `/dashboard/job/${id}`,
      edit: (id: string) => `/dashboard/job/${id}/edit`,
    },
  },
};
