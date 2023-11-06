import { Link, Outlet } from 'react-router-dom';
import { Container, Orderlist } from './styles';
import { Suspense } from 'react';

export const Shoppinghistory = () => {
    return (
        <>
            <Container>
                <Orderlist>
                    <Link to="detail">
                        <div className="list">구매 내역</div>
                    </Link>
                    <Link to="review">
                        <div className="list">리뷰 내역</div>
                    </Link>
                    <Link to="my-review">
                        <div className="list">작성한 리뷰</div>
                    </Link>
                    <Link to="inquery">
                        <div className="list">문의 내역</div>
                    </Link>
                </Orderlist>
            </Container>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Shoppinghistory;
