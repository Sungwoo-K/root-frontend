import { Link, Outlet } from 'react-router-dom';
import { Container } from './styles';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <>
            <Container>
                <div className="Home">
                    <Link to="/user/profile" className="LinkHeader">
                        프로필
                    </Link>
                </div>
                <div className="Shopping">
                    <Link to="/myorder/list/detail" className="LinkHeader">
                        나의 쇼핑
                    </Link>
                </div>
                <div className="Great">
                    <Link to="/myfavorite/list/scrap" className="LinkHeader">
                        좋아요
                    </Link>
                </div>
                <div className="Setting">
                    <Link to="/user/profile/edit" className="LinkHeader">
                        설정
                    </Link>
                </div>
            </Container>

            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Layout;
