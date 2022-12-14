import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavBar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons';
import { faStar, faCommentDots, faComputer } from '@fortawesome/free-solid-svg-icons';

const Body = styled.div`
    margin: 0 auto;
    width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 40px;
`;
const BestBox = styled.div`
    border: 3px solid gray;
    border-radius: 30px;
    background-color: white;
    width: 900px;
`;
const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin: 40px;
    padding-bottom: 20px;
`;
const Title = styled.div`
    font-size: 30px;
`;
const Title_text = styled.a`
    margin-left: 10px;
`;
const Plus = styled.a`
    font-size: 20px;
    &:hover {
        cursor: pointer;
    }
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 40px 20px 40px;
`;
const BestList_context = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const BestList_title = styled.a`
    font-size: 20px;
    letter-spacing: 1px;
    &:hover {
        cursor: pointer;
    }
`;
const BestList_like = styled.a`
    font-size: 18px;
    margin-left: 5px;
`;
const BestList_comment = styled.a`
    font-size: 18px;
    margin-left: 5px;
`;
const BestList_plus = styled.div`
    display: flex;
    flex-direction: row;
    width: 120px;
`;
const Like_list = styled.div`
    width: 60px;
`;
const Comment_list = styled.div`
    width: 60px;
`;
const OtherBox = styled.div`
    border: 3px solid gray;
    border-radius: 30px;
    margin-top: 40px;
    background-color: white;
    width: 570px;
`;

const freeContent = [
    {
        id: 1,
        title: '?????? ????????? 1',
        contents: ' ?????? ????????? ?????? 1',
        nickname: '????????????1',
        datetime: '2022.06.02',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '?????? ????????? 2',
        contents: ' ?????? ????????? ?????? 2',
        datetime: '2022.06.02',
        nickname: '????????????2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '?????? ????????? 3',
        contents: ' ?????? ????????? ?????? 3',
        datetime: '2022.06.02',
        nickname: '????????????3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '?????? ????????? 4',
        contents: ' ?????? ????????? ?????? 4',
        datetime: '2022.06.02',
        nickname: '????????????4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '?????? ????????? 5',
        contents: ' ?????? ????????? ?????? 5',
        datetime: '2022.06.02',
        nickname: '????????????5',
        like: 5,
        comment: 5,
    },
];
const codingContent = [
    {
        id: 1,
        title: '?????? ????????? 1',
        contents: ' ?????? ????????? ?????? 1',
        datetime: '2022.06.02',
        nickname: '????????????1',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '?????? ????????? 2',
        contents: ' ?????? ????????? ?????? 2',
        datetime: '2022.06.02',
        nickname: '????????????2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '?????? ????????? 3',
        contents: ' ?????? ????????? ?????? 3',
        datetime: '2022.06.02',
        nickname: '????????????3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '?????? ????????? 4',
        contents: ' ?????? ????????? ?????? 4',
        datetime: '2022.06.02',
        nickname: '????????????4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '?????? ????????? 5',
        contents: ' ?????? ????????? ?????? 5',
        datetime: '2022.06.02',
        nickname: '????????????5',
        like: 5,
        comment: 5,
    },
];
const bestContent = [
    {
        id: 1,
        title: '????????? ???????????? 1',
        contents: ' ?????? ????????? ?????? 1',
        datetime: '2022.06.02',
        nickname: '??????1',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '????????? ???????????? 2',
        contents: ' ?????? ????????? ?????? 2',
        datetime: '2022.06.02',
        nickname: '??????2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '????????? ???????????? 3',
        contents: ' ?????? ????????? ?????? 3',
        datetime: '2022.06.02',
        nickname: '??????3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '????????? ???????????? 4',
        contents: ' ?????? ????????? ?????? 4',
        datetime: '2022.06.02',
        nickname: '??????4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '????????? ???????????? 5',
        contents: ' ?????? ????????? ?????? 5',
        datetime: '2022.06.02',
        nickname: '??????5',
        like: 5,
        comment: 5,
    },
    {
        id: 6,
        title: '????????? ???????????? 6',
        contents: ' ?????? ????????? ?????? 6',
        datetime: '2022.06.02',
        nickname: '??????6',
        like: 6,
        comment: 6,
    },
    {
        id: 7,
        title: '????????? ???????????? 7',
        contents: ' ?????? ????????? ?????? 7',
        datetime: '2022.06.02',
        nickname: '??????7',
        like: 7,
        comment: 7,
    },
    {
        id: 8,
        title: '????????? ???????????? 8',
        contents: ' ?????? ????????? ?????? 8',
        datetime: '2022.06.02',
        nickname: '??????8',
        like: 8,
        comment: 8,
    },
    {
        id: 9,
        title: '????????? ???????????? 9',
        contents: ' ?????? ????????? ?????? 9',
        datetime: '2022.06.02',
        nickname: '??????9',
        like: 9,
        comment: 9,
    },
    {
        id: 10,
        title: '????????? ???????????? 10',
        contents: ' ?????? ????????? ?????? 10',
        datetime: '2022.06.02',
        nickname: '??????10',
        like: 10,
        comment: 10,
    },
];
function ListTile({ title, like, comment }) {
    return (
        <BestList_context>
            <BestList_title>{title}</BestList_title>
            <BestList_plus>
                <Like_list>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <BestList_like>{like}</BestList_like>
                </Like_list>
                <Comment_list>
                    <FontAwesomeIcon icon={faComment} />
                    <BestList_comment>{comment}</BestList_comment>
                </Comment_list>
            </BestList_plus>
        </BestList_context>
    );
}
export default function Home() {
    const router = useRouter();
    const onClick = (id, title, contents, datetime, nickname, like, comment) => {
        router.push(
            {
                pathname: `/${id}`,
                query: {
                    title,
                    contents,
                    datetime,
                    nickname,
                    like,
                    comment,
                },
            },
            `/${id}`
        );
    };
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                    letter-spacing: 1px;
                }
            `}</style>
            <Head>
                <title>jinho</title>
                <meta name="comunity" content="???????????? ?????????" />
            </Head>
            <NavBar />
            <Body>
                <BestBox>
                    <TitleBar>
                        <Title>
                            <FontAwesomeIcon icon={faStar} />
                            <Title_text>?????? ?????????</Title_text>
                        </Title>
                        <Plus>????????? &gt;</Plus>
                    </TitleBar>
                    <List>
                        {bestContent.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    onClick(item.id, item.title, item.contents, item.datetime, item.nickname, item.like, item.comment)
                                }
                            >
                                <ListTile key={item.id} id={item.id} title={item.title} like={item.like} comment={item.comment} />
                            </div>
                        ))}
                    </List>
                </BestBox>
                <OtherBox>
                    <TitleBar>
                        <Title>
                            <FontAwesomeIcon icon={faCommentDots} />
                            <Title_text>?????? ?????????</Title_text>
                        </Title>
                        <Plus>????????? &gt;</Plus>
                    </TitleBar>
                    <List>
                        {freeContent.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    onClick(item.id, item.title, item.contents, item.datetime, item.nickname, item.like, item.comment)
                                }
                            >
                                <ListTile key={item.id} id={item.id} title={item.title} like={item.like} comment={item.comment} />
                            </div>
                        ))}
                    </List>
                </OtherBox>
                <OtherBox>
                    <TitleBar>
                        <Title>
                            <FontAwesomeIcon icon={faComputer} />
                            <Title_text>?????? ?????????</Title_text>
                        </Title>
                        <Plus>????????? &gt;</Plus>
                    </TitleBar>
                    <List>
                        {codingContent.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    onClick(item.id, item.title, item.contents, item.datetime, item.nickname, item.like, item.comment)
                                }
                            >
                                <ListTile key={item.id} id={item.id} title={item.title} like={item.like} comment={item.comment} />
                            </div>
                        ))}
                    </List>
                </OtherBox>
            </Body>
        </div>
    );
}
