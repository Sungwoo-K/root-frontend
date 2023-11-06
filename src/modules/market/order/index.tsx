import { Container } from './styles';
import OrderMain from './OrderMain';
import { Inquiryorder } from './Orderinquiry';

export const Order = () => {
    return (
        <>
            <Container>
                <OrderMain />
                <Inquiryorder />
            </Container>
        </>
    );
};
