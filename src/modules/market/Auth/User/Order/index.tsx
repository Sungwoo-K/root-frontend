import { BsBookmarkStar } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlineMinusSquare, AiOutlinePlus, AiOutlinePlusSquare } from 'react-icons/ai';
import { Addinformation, Button, Container, Iconbutton, Information } from './styles';

const Order = () => {
    return (
        <>
            <Container>
                <div className="contentdiv">
                    <div className="imgdiv">
                        <img src={require('./imgae-sample/sample2.jpg')} className="mainimg" />
                        <div className="sideimg">
                            <img src={require('./imgae-sample/sample3.jpg')} className="smallimg" />
                            <img src={require('./imgae-sample/sample1.jpg')} className="smallimg" />
                        </div>
                    </div>
                    <Information>
                        <Link to="">
                            <h1 style={{ marginLeft: '10px' }}>브랜드명</h1>
                        </Link>
                        <div className="headerdiv">
                            <h1 className="title">코마드 남자 반목폴라 베이직 니트 MNT574</h1>
                            <Iconbutton>
                                <BsBookmarkStar style={{ width: '3vh', height: '3vh' }} />
                            </Iconbutton>
                        </div>
                        <div className="pricediv">
                            <span>별점</span>
                            <span>리뷰개수</span>
                            <br />
                            <span>16,900</span>
                            <span> : 원</span>
                        </div>
                        <div className="productorder">
                            <div className="buttondiv">
                                <input
                                    type="text"
                                    style={{
                                        width: '60px',
                                        height: '23px',
                                        border: 'none',
                                        paddingTop: '10px',
                                        paddingBottom: '8px',
                                    }}
                                />
                                <div className="button">
                                    <button className="countbutton">
                                        <AiOutlinePlus style={{ width: '100%', height: '100%' }} />
                                    </button>

                                    <button className="countbutton">
                                        <AiOutlineMinus style={{ width: '100%', height: '100%' }} />
                                    </button>
                                </div>
                            </div>
                            <div className="clickmenu">
                                <Button style={{ backgroundColor: 'white', color: '#0f5ca8' }}>장바구니</Button>
                                <Button>바로구매</Button>
                            </div>
                        </div>
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

export default Order;
