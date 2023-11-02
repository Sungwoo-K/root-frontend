import { Container, Orderlist } from './styles';

export const Shoppinghistory = () => {
    return (
        <>
            <Container>
                <Orderlist>
                    <div className="list">1번</div>
                    <div className="list">2번</div>
                    <div className="list">3번</div>
                </Orderlist>
            </Container>
        </>
    );
};

export default Shoppinghistory;
