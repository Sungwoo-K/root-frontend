import { useState } from 'react';
import { Container, Inquerybox, Title } from './style';

export const Inquery = () => {
    const [products, setProducts] = useState([
        {
            productId: 1,
            brand: 'nike',
            img: 'data:image/jpeg;base64,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',
            productname: '여기는 제품 이름입니다 : 텐트',
            inqueryCategory: '문의 카테고리',
            inqueryContent: '문의 합니다',
            inqueryAnswer: '문의 답변',
            inqueryDate: '2022-00-00',
        },
    ]);
    return (
        <>
            <Container>
                <Title>문의 내역</Title>
                {products.map((item) => (
                    <Inquerybox key={item.productId}>
                        <div className="productname">
                            {item.productname}
                            <div>
                                <a href={`/products/${item.productId}`}>
                                    <button>제품 상세보기</button>
                                </a>
                            </div>
                        </div>

                        <img src={item.img} className="imagename" />
                        <div className="productquestion">
                            <span>Q &nbsp;</span>
                            <p>{item.inqueryContent}</p>
                        </div>
                        <div className="productanswer">
                            <span>A &nbsp;</span>
                            <p>{item.brand}</p>
                        </div>
                        <p className="answercontent">{item.inqueryAnswer}</p>
                    </Inquerybox>
                ))}
            </Container>
        </>
    );
};

export default Inquery;
