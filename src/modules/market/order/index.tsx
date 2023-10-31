import { Container } from './styles';
import OrderMain from './OrderMain';
import { Inquiry } from './Orderinquiry';

export const Order = () => {
    return (
        <>
            <Container>
                <OrderMain />
                <Inquiry />
            </Container>
        </>
    );
};
