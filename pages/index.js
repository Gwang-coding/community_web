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
        title: '자유 게시판 1',
        contents: ' 자유 게시판 내용 1',
        nickname: '자유이름1',
        datetime: '2022.06.02',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '자유 게시판 2',
        contents: ' 자유 게시판 내용 2',
        datetime: '2022.06.02',
        nickname: '자유이름2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '자유 게시판 3',
        contents: ' 자유 게시판 내용 3',
        datetime: '2022.06.02',
        nickname: '자유이름3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '자유 게시판 4',
        contents: ' 자유 게시판 내용 4',
        datetime: '2022.06.02',
        nickname: '자유이름4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '자유 게시판 5',
        contents: ' 자유 게시판 내용 5',
        datetime: '2022.06.02',
        nickname: '자유이름5',
        like: 5,
        comment: 5,
    },
];
const codingContent = [
    {
        id: 1,
        title: '코딩 게시판 1',
        contents: ' 자유 게시판 내용 1',
        datetime: '2022.06.02',
        nickname: '코딩이름1',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '코딩 게시판 2',
        contents: ' 자유 게시판 내용 2',
        datetime: '2022.06.02',
        nickname: '코딩이름2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '코딩 게시판 3',
        contents: ' 자유 게시판 내용 3',
        datetime: '2022.06.02',
        nickname: '코딩이름3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '코딩 게시판 4',
        contents: ' 자유 게시판 내용 4',
        datetime: '2022.06.02',
        nickname: '코딩이름4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '코딩 게시판 5',
        contents: ' 자유 게시판 내용 5',
        datetime: '2022.06.02',
        nickname: '코딩이름5',
        like: 5,
        comment: 5,
    },
];
const bestContent = [
    {
        id: 1,
        title: '게시글 작성하기 1',
        contents: ' 자유 게시판 내용 1',
        datetime: '2022.06.02',
        nickname: '이름1',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '게시글 작성하기 2',
        contents: ' 자유 게시판 내용 2',
        datetime: '2022.06.02',
        nickname: '이름2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '게시글 작성하기 3',
        contents: ' 자유 게시판 내용 3',
        datetime: '2022.06.02',
        nickname: '이름3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '게시글 작성하기 4',
        contents: ' 자유 게시판 내용 4',
        datetime: '2022.06.02',
        nickname: '이름4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '게시글 작성하기 5',
        contents: ' 자유 게시판 내용 5',
        datetime: '2022.06.02',
        nickname: '이름5',
        like: 5,
        comment: 5,
    },
    {
        id: 6,
        title: '게시글 작성하기 6',
        contents: ' 자유 게시판 내용 6',
        datetime: '2022.06.02',
        nickname: '이름6',
        like: 6,
        comment: 6,
    },
    {
        id: 7,
        title: '게시글 작성하기 7',
        contents: ' 자유 게시판 내용 7',
        datetime: '2022.06.02',
        nickname: '이름7',
        like: 7,
        comment: 7,
    },
    {
        id: 8,
        title: '게시글 작성하기 8',
        contents: ' 자유 게시판 내용 8',
        datetime: '2022.06.02',
        nickname: '이름8',
        like: 8,
        comment: 8,
    },
    {
        id: 9,
        title: '게시글 작성하기 9',
        contents: ' 자유 게시판 내용 9',
        datetime: '2022.06.02',
        nickname: '이름9',
        like: 9,
        comment: 9,
    },
    {
        id: 10,
        title: '게시글 작성하기 10',
        contents: ' 자유 게시판 내용 10',
        datetime: '2022.06.02',
        nickname: '이름10',
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
                <meta name="comunity" content="커뮤니티 사이트" />
            </Head>
            <NavBar />
            <Body>
                <BestBox>
                    <TitleBar>
                        <Title>
                            <FontAwesomeIcon icon={faStar} />
                            <Title_text>인기 게시글</Title_text>
                        </Title>
                        <Plus>더보기 &gt;</Plus>
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
                            <Title_text>자유 게시판</Title_text>
                        </Title>
                        <Plus>더보기 &gt;</Plus>
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
                            <Title_text>코딩 게시판</Title_text>
                        </Title>
                        <Plus>더보기 &gt;</Plus>
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
