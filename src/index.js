
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import Home from "views/examples/Home.js"
import ChoosePayment from "views/examples/ChoosePayment"
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import AuthState from "components/context/auth/AuthState";
import AlertState from "components/context/alert/AlertState";
import {HelmetProvider} from "react-helmet-async"
import Register from "views/examples/Register";
import Signin from "views/examples/Signin";
import ForgotPassword from "views/examples/ForgotPassword"
import BitcoinPage from "views/examples/BitcoinPage"
import EthereumPage from "views/examples/EthereumPage"
import UsdtPage from "views/examples/UsdtPage"
import BnbPage from "views/examples/BnbPage"
import PaidPage from "views/examples/PaidPage"
import PaidOut from "views/examples/PaidOut"
import About from "views/examples/About"
import FAQ from "views/examples/FAQ"
import Support from "views/examples/Support"
import ResetPassword from "views/examples/ResetPassword"
import ListUsers from "views/examples/ListUsers"
import UserEdit from "views/examples/UserEdit"
import AdminWithdrawalRequests from "views/examples/AdminWithdrawalRequestsList"
import AdminWithdrawalEdit from "views/examples/AdminWithdrawalEdit"
import AllUsersDeposit from "views/examples/AlldepositsList"
import PrivateRoute from "components/routing/PrivateRoute";
import App from "./App"

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <AuthState>
        <App />
        <AlertState>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/forgotpassword' exact component={ForgotPassword} />
            <PrivateRoute
              path='/dashboard/bitcoinpage'
              exact
              component={BitcoinPage}
            />
            <PrivateRoute
              path='/dashboard/ethereumpage'
              exact
              component={EthereumPage}
            />
            <PrivateRoute
              path='/dashboard/usdtpage'
              exact
              component={UsdtPage}
            />
            <PrivateRoute path='/dashboard/bnbpage' exact component={BnbPage} />
            <PrivateRoute
              path='/dashboard/paidpage'
              exact
              component={PaidPage}
            />
            <Route path='/withdrawals' exact component={PaidOut} />
            <Route path='/aboutus' exact component={About} />
            <Route path='/support' exact component={Support} />
            <Route path='/faq' exact component={FAQ} />
            <Route path='/resetpassword' exact component={ResetPassword} />
            <PrivateRoute
              path='/dashboard/admin/listusers'
              exact
              component={ListUsers}
            />
            <PrivateRoute
              path='/dashboard/admin/alldepositlist'
              exact
              component={AllUsersDeposit}
            />
            <PrivateRoute
              path='/dashboard/admin/user/:id/edit'
              exact
              component={UserEdit}
            />
            <PrivateRoute
              path='/dashboard/admin/listwithdrawalrequests'
              exact
              component={AdminWithdrawalRequests}
            />
            <PrivateRoute
              path='/dashboard/withdrawaldetail/edit/:id'
              exact
              component={AdminWithdrawalEdit}
            />

            <PrivateRoute
              path='/dashboard/choosepayment'
              exact
              component={ChoosePayment}
            />
            <PrivateRoute path='/dashboard' component={AdminLayout} />
            <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          </Switch>
        </AlertState>
      </AuthState>
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
);
