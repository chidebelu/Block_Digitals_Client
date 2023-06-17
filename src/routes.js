import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import DepositList from "views/examples/DepositList";
import Icons from "views/examples/Icons.js";
import Referrer from "views/examples/Referrer.js";
import Security from "views/examples/Security.js";
import Withdrawals from "views/examples/Withdrawals";
import WithdrawalRequest from "views/examples/WithdrawalRequest";
import AdminWithdrawalRequests from 'views/examples/AdminWithdrawalRequestsList';
import UserList from 'views/examples/ListUsers';
import AllDepositsList from 'views/examples/AlldepositsList';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Index,
    layout: '/dashboard',
    type: 'both',
  },
  {
    path: '/makedeposit',
    name: 'Make Deposit',
    icon: 'fa-solid fa-cash-register',
    component: Icons,
    layout: '/dashboard',
    type: 'user',
  },
  {
    path: '/depositlist',
    name: 'Deposit List',
    icon: 'fas fa-money-check',
    component: DepositList,
    layout: '/dashboard',
    type: 'user',
  },
  {
    path: '/withdrawalrequest',
    name: 'Withdrawal Request',
    icon: 'fa fa-bars',
    component: WithdrawalRequest,
    layout: '/dashboard',
    type: 'both',
  },
  {
    path: '/withdrawallist',
    name: 'Withdrawal List',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Withdrawals,
    layout: '/dashboard',
    type: 'admin',
  },
  {
    path: '/user-profile',
    name: 'Edit Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Profile,
    layout: '/dashboard',
    type: 'both',
  },
  {
    path: '/referrals',
    name: 'Referrals',
    icon: 'fas fa-user-plus',
    component: Referrer,
    layout: '/dashboard',
    type: 'both',
  },
  {
    path: '/security',
    name: 'Security',
    icon: 'fas fa-lock',
    component: Security,
    layout: '/dashboard',
    type: 'both',
  },
  {
    path: '/listwithdrawalrequests',
    name: 'List Withdrawal Requests',
    icon: 'fas fa-user',
    component: AdminWithdrawalRequests,
    layout: '/dashboard',
    type: 'admin',
  },
  {
    path: '/listusers',
    name: 'All Users List',
    icon: 'fas fa-user',
    component: UserList,
    layout: '/dashboard',
    type: 'admin',
  },
  {
    path: '/alldepositlist',
    name: 'All Users Deposits',
    icon: 'fas fa-user',
    component: AllDepositsList,
    layout: '/dashboard',
    type: 'admin',
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
