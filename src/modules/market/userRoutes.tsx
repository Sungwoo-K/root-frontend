import { Route } from 'react-router-dom';
import MarketMain from './product/Main';
import { lazy } from 'react';
import Join from './auth/Join';

const Users = lazy(() => import('@/modules/market/auth/User/Profile'));
const Follow = lazy(() => import('@/modules/market/auth/User/ProfileTop'));
const Layout = lazy(() => import('@/modules/market/auth/User/Shopping/Layout'));
const EditProfile = lazy(() => import('@/modules/market/auth/User/Edit/'));
const Shoppinghistory = lazy(() => import('@/modules/market/auth/User/Shopping'));
const Orderdetail = lazy(() => import('@/modules/market/auth/User/Shopping/Order'));
const Reviewdetail = lazy(() => import('@/modules/market/auth/User/Shopping/Review'));
const MyReview = lazy(() => import('@/modules/market/auth/User/Shopping/My-review'));
const Inquery = lazy(() => import('@/modules/market/auth/User/Inquery'));

const Favorite = lazy(() => import('@/modules/market/auth/User/Favorite'));
const Scrap = lazy(() => import('@/modules/market/auth/User/Favorite/Scrap'));

export const userRoutes = [
    <Route key="main" element={<MarketMain />} index />,
    <Route path="/user" key="user" element={<Layout />}>
        <Route path="profile" key="profile" element={<Users />}>
            <Route key="follow" element={<Follow />} index />
            <Route path="edits" element={<EditProfile />} />
        </Route>
    </Route>,

    <Route path="/myorder" key="order" element={<Layout />}>
        <Route path="list" key="order-list" element={<Shoppinghistory />}>
            <Route path="detail" key="order-detail" element={<Orderdetail />} />
            <Route path="review" key="review-detail" element={<Reviewdetail />} />
            <Route path="my-review" key="my-review" element={<MyReview />} />
            <Route path="inquery" key="my-inquery" element={<Inquery />} />
        </Route>
    </Route>,

    <Route path="/myfavorite" key="favorite" element={<Layout />}>
        <Route path="list" key="favorite-list" element={<Favorite />}>
            <Route path="scrap" key="scrap-list" element={<Scrap />} />
        </Route>
    </Route>,
];
