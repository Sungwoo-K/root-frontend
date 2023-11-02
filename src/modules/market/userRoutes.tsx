import { Route } from 'react-router-dom';
import MarketMain from './product/Main';
import { lazy } from 'react';
import Join from './auth/Join';

const Users = lazy(() => import('@/modules/market/auth/User/Profile/useProfile'));
const Follow = lazy(() => import('@/modules/market/auth/User/follow/Scrap'));
const Layout = lazy(() => import('@/modules/market/auth/User/Layout'));
const EditProfile = lazy(() => import('@/modules/market/auth/User/Edit/'));
const Shoppinghistory = lazy(() => import('@/modules/market/auth/User/Shopping'));

export const userRoutes = [
    <Route key="main" element={<MarketMain />} index />,
    <Route path="/user" key="user" element={<Layout />}>
        <Route path="profile" key="profile" element={<Users />}>
            <Route key="follow" element={<Follow />} index />
            <Route path="edits" element={<EditProfile />} />
        </Route>
    </Route>,

    <Route path="/myorder" key="order" element={<Layout />}>
        <Route path="list" key="order-list" element={<Shoppinghistory />} />
    </Route>,
];
