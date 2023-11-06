import { Link, Outlet } from 'react-router-dom';
import { Container, Orderlist } from './styles';
import { Suspense } from 'react';

export const Favorite = () => {
    return (
        <>
            <Container>
                <Orderlist>
                    <Link to="scrap">
                        <div className="list">장바구니</div>
                    </Link>
                    <Link to="follow">
                        <div className="list">구독</div>
                    </Link>
                </Orderlist>
            </Container>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Favorite;
