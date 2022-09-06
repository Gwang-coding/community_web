import styled from 'styled-components';
import NavBar from '../components/Navbar';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

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
const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    align-items: center;
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 3px solid gray;
`;
const Title = styled.p`
    margin: 0;
    font-size: 40px;
    font-weight: 900;
    color: #0a1838;
`;
const Button = styled.button`
    font-size: 22px;
    height: 65px;
    width: 150px;
    border: 1px solid #eaedf2;
    border-radius: 20px;
    background-color: #0a1838;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
`;

const ListTile = styled.div`
    width: 1200px;
    border-radius: 10px;
    border: 3px solid gray;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const List = styled.div`
    width: 596px;
    &:hover {
        cursor: pointer;
    }
    border-bottom: 2px solid gray;
`;
const ListTop = styled.div`
    width: 555px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px 0px 20px;
`;
const ListBottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 555px;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
    padding: 0px 10px 0px 20px;
    color: gray;
`;
const List_title = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 10px 0px;
    height: 22px;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;
const List_content = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: gray;
    margin: 20px 0px 0px 0px;
    height: 44px;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
const ListPlus = styled.div`
    display: flex;
    flex-direction: row;
    width: 120px;
`;
const ButtonText = styled.a`
    margin: 0px 10px 0px 10px;
`;
const CategoryText = styled.p``;
const Comment = styled.a`
    font-size: 18px;
    margin-left: 5px;
`;
const Like = styled.a`
    font-size: 18px;
    margin-left: 5px;
`;
const Like_list = styled.div`
    width: 60px;
`;
const Comment_list = styled.div`
    width: 60px;
`;
const ListDate = styled.div`
    width: 90px;
`;

const freeContent = [
    {
        id: 1,
        title: '자유 게시판 1',
        contents: ' 자유 게시판 내용 1',
        img: 'img/baek.jpg',
        nickname: '자유이름1',
        datetime: '2022.06.02',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '자유 게시판 2',
        contents: ' 자유 게시판 내용 2',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '자유이름2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '자유 게시판 3',
        contents: ' 자유 게시판 내용 3',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '자유이름3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '자유 게시판 4',
        contents: ' 자유 게시판 내용 4',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '자유이름4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '자유 게시판 5',
        contents: ' 자유 게시판 내용 5',
        img: 'img/baek.jpg',
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
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '코딩이름1',
        like: 1,
        comment: 1,
    },
    {
        id: 2,
        title: '코딩 게시판 2',
        contents: ' 자유 게시판 내용 2',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '코딩이름2',
        like: 2,
        comment: 2,
    },
    {
        id: 3,
        title: '코딩 게시판 3',
        contents: ' 자유 게시판 내용 3',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '코딩이름3',
        like: 3,
        comment: 3,
    },
    {
        id: 4,
        title: '코딩 게시판 4',
        contents: ' 자유 게시판 내용 4',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '코딩이름4',
        like: 4,
        comment: 4,
    },
    {
        id: 5,
        title: '코딩 게시판 5',
        contents: ' 자유 게시판 내용 5',
        img: 'img/baek.jpg',
        datetime: '2022.06.02',
        nickname: '코딩이름5',
        like: 5,
        comment: 5,
    },
];
export default function Commu() {
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
            <NavBar />
            <Body>
                <Bar>
                    <Title>커뮤니티</Title>
                    <Button>
                        <ButtonText>글쓰기</ButtonText>
                        <FontAwesomeIcon icon={faPencil} />
                    </Button>
                </Bar>

                <ListTile>
                    {freeContent.map((item) => (
                        <List
                            key={item.id}
                            onClick={() =>
                                onClick(item.id, item.title, item.contents, item.datetime, item.nickname, item.like, item.comment)
                            }
                            style={item.id % 2 == 1 ? { borderRight: '2px solid gray' } : {}} //홀수 게시물에만 오른쪽 테두리 주기
                        >
                            <ListTop>
                                <div>
                                    <List_title>{item.title}</List_title>
                                    <List_content>{item.contents}</List_content>
                                </div>
                                <div>{item.img !== '' ? <img width={80} height={80} src={item.img} /> : null}</div>{' '}
                                {/*이미지가 없을땐 공간차지 X */}
                            </ListTop>
                            <ListBottom>
                                <ListPlus>
                                    <Like_list>
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                        <Like>{item.like}</Like>
                                    </Like_list>
                                    <Comment_list>
                                        <FontAwesomeIcon icon={faComment} />
                                        <Comment>{item.comment}</Comment>
                                    </Comment_list>
                                </ListPlus>
                                <ListDate>{item.datetime}</ListDate>
                            </ListBottom>
                        </List>
                    ))}
                </ListTile>
            </Body>
        </div>
    );
}
