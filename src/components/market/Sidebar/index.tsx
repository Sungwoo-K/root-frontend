import { Button, Icon, Iconbutton, SideMenu, Sidebar } from './styles';
import { BsPerson, BsBell, BsBookmarkStar } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { SlUserFollow } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const main = () => {
    return (
        <>
            <Sidebar>
                <Link to="/user/profile">
                    <Button>
                        <Iconbutton>
                            <Icon>
                                <BsPerson style={{ width: '35px', height: '60px' }} />
                            </Icon>
                        </Iconbutton>

                        <Link to="/user/profile">
                            <SideMenu>프로필</SideMenu>
                        </Link>
                    </Button>
                </Link>

                <Button>
                    <Iconbutton>
                        <Icon>
                            <TiShoppingCart style={{ width: '35px', height: '60px' }} />
                        </Icon>
                    </Iconbutton>
                    <SideMenu>장바구니</SideMenu>
                </Button>

                <Button>
                    <Iconbutton>
                        <Icon>
                            <SlUserFollow style={{ width: '30px', height: '60px' }} />
                        </Icon>
                    </Iconbutton>
                    <SideMenu>구독</SideMenu>
                </Button>

                <Button>
                    <Iconbutton className="listbutton">
                        <Icon>
                            <BsBookmarkStar style={{ width: '35px', height: '30px' }} />
                        </Icon>
                    </Iconbutton>
                    <SideMenu>찜한 상품</SideMenu>
                </Button>

                <Button>
                    <Iconbutton>
                        <Icon>
                            <BsBell style={{ width: '35px', height: '60px' }} />
                        </Icon>
                    </Iconbutton>
                    <SideMenu>알림</SideMenu>
                </Button>
            </Sidebar>
        </>
    );
};

export default main;
