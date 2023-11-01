import { BsBookmarkStar } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Addinformation, Button, Container, Iconbutton, Information, Price } from './styles';
import { useState } from 'react';

const OrderMain = () => {
    const [plusnum, setPlusnum] = useState<number>(1);

    const handleChange = (e) => {
        setPlusnum(e.target.value);
    };

    console.log(plusnum);
    const handlechange = () => {
        setPlusnum(plusnum + 1);
    };

    const handleDown = () => {
        setPlusnum(plusnum - 1);
    };

    return (
        <>
            <Container>
                <div className="contentdiv">
                    <div className="imgtotal">
                        <div className="imgdiv">
                            <img src={require('../imgae-sample/sample2.jpg')} className="mainimg" />

                            <div className="sideimg">
                                <div className="smalldiv">
                                    <img src={require('../imgae-sample/sample3.jpg')} className="smallimg" />
                                </div>
                                <div className="smalldiv">
                                    <img src={require('../imgae-sample/sample1.jpg')} className="smallimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Information>
                        <Link to="">
                            <h1 style={{ marginLeft: '10px' }}>브랜드명</h1>
                        </Link>
                        <div className="headerdiv">
                            <h1 className="title">코마드 남자 반목폴라 베이직 니트 MNT57433333</h1>
                            <div style={{ marginLeft: '10%' }}>별점자리</div>
                        </div>
                        <div className="pricediv"></div>
                        <div className="productorder">
                            <div className="buttondiv">
                                <div>
                                    <input
                                        type="text"
                                        style={{
                                            width: '60px',
                                            height: '26px',
                                            border: 'none',
                                            paddingTop: '10px',
                                            paddingBottom: '8px',
                                            textAlign: 'center',
                                            fontSize: '18px',
                                        }}
                                        value={plusnum}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="button">
                                    <button className="countbutton" onClick={handlechange}>
                                        <AiOutlinePlus style={{ width: '100%', height: '100%' }} />
                                    </button>

                                    <button className="countbutton" onClick={handleDown}>
                                        <AiOutlineMinus style={{ width: '100%', height: '100%' }} />
                                    </button>
                                </div>
                            </div>
                            <div className="clickmenu">
                                <Button style={{ backgroundColor: 'white', color: '#0f5ca8' }}>장바구니</Button>
                                <Button>바로구매</Button>

                                <BsBookmarkStar
                                    style={{
                                        width: '3vh',
                                        height: '3vh',
                                    }}
                                />
                            </div>
                        </div>
                        <Price>16,900 원</Price>
                    </Information>
                </div>
                <Addinformation>
                    <div className="productoption">
                        <nav className="navigation">
                            <ol className="proudct-list">
                                <li className="product">제품 상세</li>
                                <li className="product">제품 리뷰</li>
                                <li className="product">제품 문의</li>
                            </ol>
                        </nav>
                    </div>
                </Addinformation>
            </Container>
        </>
    );
};

export default OrderMain;
