import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import DepositList from "views/examples/DepositList";
import Icons from "views/examples/Icons.js";
import Referrer from "views/examples/Referrer.js";
import Security from "views/examples/Security.js";
import Withdrawals from "views/examples/Withdrawals";
import WithdrawalRequest from "views/examples/WithdrawalRequest";

var routes = [
    {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/dashboard",
  },
  {
    path: "/makedeposit",
    name: "Make Deposit",
    icon: "fa-solid fa-cash-register",
    component: Icons,
    layout: "/dashboard",
  },
  {
    path: "/depositlist",
    name: "Deposit List",
    icon: "fas fa-money-check",
    component: DepositList,
    layout: "/dashboard",
  },
  {
    path: "/withdrawalrequest",
    name: "Withdrawal Request",
    icon: "fa fa-bars",
    component: WithdrawalRequest,
    layout: "/dashboard",
  },
  {
    path: "/withdrawallist",
    name: "Withdrawal List",
    icon: "ni ni-bullet-list-67 text-red",
    component: Withdrawals,
    layout: "/dashboard",
  },
  {
    path: "/user-profile",
    name: "Edit Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/dashboard",
  },
  {
    path: "/referrals",
    name: "Referrals",
    icon: "fas fa-user-plus",
    component: Referrer,
    layout: "/dashboard",
  },
  {
    path: "/security",
    name: "Security",
    icon: "fas fa-lock",
    component: Security,
    layout: "/dashboard",
  },
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   icon: "ni ni-user-run",
  //   component: Logout,
  //   layout: "/dashboard",
  // },

  
];
export default routes;
