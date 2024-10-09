import React from "react";
// import NoPageFound from "./NoPageFound";

const LOGIN = React.lazy(() => import("./auth/Login"));
const DASHBOARD = React.lazy(() => import("./Dashboard"));
const HOME = React.lazy(() => import("./Home"));
// const REGISTER_STEP_ONE = React.lazy(() => import("./Admin/Register/RegisterStepOne"));
// const REGISTER = React.lazy(() => import("./Admin/Register/Register.jsx"));
// const STATS = React.lazy(() => import("./Admin/Stats.jsx"));
// const SUBMIT_REGISTRATION = React.lazy(() => import("./Admin/SubmitRegistration.jsx"));
// const USERS_LIST = React.lazy(() => import("./Admin/UsersList.jsx"));
// const APPLICANT_DETAILS = React.lazy(() => import("./Admin/ApplicantDetails"));
// const NOC = React.lazy(() => import("./Admin/NOC"));

const WEB_PAGES = {
  // LOGIN PAGES
  LOGIN,
  DASHBOARD,
  HOME
  // STATS,
  // REGISTER_STEP_ONE,
  // REGISTER,
  // SUBMIT_REGISTRATION,
  // USERS_LIST,
  // APPLICANT_DETAILS,
  // NOC,

  // Mo page found
  // NO_PAGE_FOUND: NoPageFound,
};
export default WEB_PAGES;
