import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
const Header = styled.div`
    background-color: #0a1838;
    height: 90px;
    border-color: gray;
`;
const Title = styled.a`
    font-size: 40px;
    font-weight: 900;
    margin-right: 50px;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;
const Nav = styled.div`
    margin: 0 auto;
    width: 1200px;
    background-color: #0a1838;
    line-height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const LoginBar = styled.div`
    font-size: 20px;
`;
const Login = styled.a`
    color: white;
    padding: 10px 25px 10px 13px;
    margin-left: 20px;
    font-size: 18px;
`;
const Stick = styled.a`
    color: white;
`;
const CategoryBar = styled.div`
    width: 800px;
    display: flex;
    flex-direction: row;
`;
const Category = styled.a`
    margin-left: 40px;
    font-weight: 600;
    font-size: 20px;
    color: white;
`;
const Box = styled.div`
    height: 22px;
`;

export default function NavBar() {
    return (
        <Header>
            <Nav>
                <CategoryBar>
                    <Link href="/">
                        <Title>JinHo</Title>
                    </Link>
                    <Category>카테고리</Category>
                    <Category>공지사항</Category>
                    <Category>소개</Category>
                </CategoryBar>
                <LoginBar>
                    <Login>회원가입</Login>
                    <Stick>|</Stick>
                    <Login>로그인</Login>
                </LoginBar>
            </Nav>
        </Header>
    );
}
