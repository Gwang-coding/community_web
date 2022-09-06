import styled from 'styled-components';
import NavBar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';

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
const Box = styled.div`
    border: 3px solid gray;
    border-radius: 30px;
    background-color: white;
    width: 900px;
`;
const TopBar = styled.div`
    border-bottom: 1px solid black;
    margin: 40px;
    padding-bottom: 30px;
`;
const BottomBar = styled.div`
    margin: 40px;
    padding-bottom: 30px;
`;
const Title = styled.div`
    font-size: 30px;
    margin-top: 20px;
`;
const Nickname = styled.div`
    margin-top: 20px;
`;
const Infor = styled.div`
    font-size: 17px;
    color: gray;
    margin-top: 20px;
`;
const Infor_text = styled.span`
    margin: 0px 20px 0px 7px;
`;
const Content = styled.div`
    font-size: 20px;
`;
const Expression = styled.div`
    font-size: 22px;
    margin-top: 40px;
    padding-bottom: 35px;
    border-bottom: 1px solid black;
`;
export default function Commu() {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                    background-color: #eaedf2;
                    letter-spacing: 1px;
                }
            `}</style>
            <NavBar />
            <Body>
                <Box>
                    <TopBar>
                        <Title>{router.query.title}</Title>
                        <Nickname>
                            <FontAwesomeIcon icon={faUser} />
                            <Infor_text>{router.query.nickname}</Infor_text>
                        </Nickname>
                        <Infor>
                            <FontAwesomeIcon icon={faClock} />
                            <Infor_text>{router.query.datetime}</Infor_text>
                            <FontAwesomeIcon icon={faComment} />
                            <Infor_text>{router.query.comment}</Infor_text>
                        </Infor>
                    </TopBar>
                    <BottomBar>
                        <Content>{router.query.contents}</Content>
                        <Expression>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <Infor_text>좋아요</Infor_text>
                            <FontAwesomeIcon icon={faComment} />
                            <Infor_text>{router.query.comment}</Infor_text>
                        </Expression>
                    </BottomBar>
                </Box>
                <div></div>
            </Body>
        </div>
    );
}
