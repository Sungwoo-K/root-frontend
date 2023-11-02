import { Link } from 'react-router-dom';

import { Container, Forminput, Input, Inputdiv, Inputp } from './style';
import axios from 'axios';
import { MutableRefObject, useRef, useState } from 'react';
import { Button } from '../Login/styles';

const Join = () => {
    const [formData, setFormData] = useState({
        username: '',
        userid: '',
        userpassword: '',
        nickname: '',
        selctSex: '',
        userbirth: '',
    });

    const value = ['남성', '여성'];
    const [selctSex, isSelectSex] = useState('');

    const clickButton = (e) => {
        isSelectSex(() => {
            return e.target.value;
        });
    };

    const postExample = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:8080/auth/sign', {
            userid: formData.userid,
            username: formData.username,
            userpassword: formData.userpassword,
            nickname: formData.nickname,
            usersex: formData.selctSex,
            userbirth: formData.userbirth,
        });

        if (response.status === 201) {
            alert('회원가입이 성공했습니다.');
            window.location.href = '/login';
        } else {
            alert('회원가입에 실패했습니다.');
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <Container>
                <Link
                    to="http://localhost:5000/"
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignContent: 'center',
                    }}
                >
                    <div style={{ marginTop: '10px', marginLeft: '30px' }}>
                        <img
                            src={require('@/components/market/Header/tent.png')}
                            style={{
                                width: '50px',
                                height: '50px',
                                marginRight: '10px',
                            }}
                        />
                        <img
                            src={require('@/components/market/Header/logo.png')}
                            style={{ width: '160px', height: '55px' }}
                        />
                    </div>
                </Link>

                <p style={{ fontSize: '40px', marginTop: '70px' }}> 회원 가입</p>

                <Input
                    name="userid"
                    value={formData.userid}
                    onChange={handleInputChange}
                    placeholder="아이디"
                    style={{ marginTop: '70px' }}
                ></Input>

                <Input
                    type="password"
                    name="userpassword"
                    value={formData.userpassword}
                    onChange={handleInputChange}
                    placeholder="패스워드"
                    style={{ marginBottom: '20px' }}
                ></Input>

                <Input
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="이름"
                ></Input>

                <Input
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    placeholder="닉네임"
                ></Input>

                <Input
                    type="text"
                    placeholder="생년월일 8자리"
                    name="userbirth"
                    value={formData.userbirth}
                    onChange={handleInputChange}
                ></Input>
                <div className="select-sex">
                    {value.map((item, idx) => (
                        <button
                            key={idx}
                            value={item}
                            name="usersex"
                            className={'buttonevent' + (item == selctSex ? idx + 1 : '')}
                            onClick={clickButton}
                            onChange={handleInputChange}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <Button onClick={postExample} style={{ width: '31vh', marginTop: '15vh' }}>
                    회원가입하기
                </Button>
            </Container>
        </>
    );
};
export default Join;
