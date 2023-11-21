import axios from 'axios';
import sunnyImg from '@/images/SUNNY.png';
import cloudyImg from '@/images/CLOUDY.png';
import rainyImg from '@/images/RAINY.png';
import snowyImg from '@/images/SNOWY.png';
import Slider from 'react-slick';
import KakaoMap from '../KakaoMap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    ModyfyLink,
    ModyfyBut,
    DeleteContainer,
    DeleteBtn,
    TitleContainer,
    DetailContent,
    Detailsimg,
    ContentContainer,
    DetailsContainer,
    DetailsTitle,
    DetailsTime,
    ImageContainer,
} from './styles';
import http from '@/utils/http';

interface PostDetails {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    files: PostFile[];
    backgroundImage: string;
    latitude: number;
    longitude: number;
}
interface PostFile {
    id: number;
    postId: number;
    contentType: string;
    originalFileName: string;
    uuidFileName: string;
}
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};
function MediaElement({ file }: { file: PostFile }) {
    if (file.contentType.includes('image')) {
        return null;
    } else {
        return (
            <video controls width={300}>
                <source
                    src={`http://localhost:8080/community/files?uuidFilename=${file.uuidFileName}`}
                    type={file.contentType}
                />
            </video>
        );
    }
}
const weatherImages = {
    sunny: sunnyImg,
    cloudy: cloudyImg,
    rainy: rainyImg,
    snowy: snowyImg,
};

const Details = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                if (postId) {
                    const response = await http.get(`http://localhost:8080/community/detail/${postId}`);
                    setPostDetails(response.data);
                }
            } catch (error) {
                console.error('게시물 상세 정보 불러오는데 실패', error);
            }
        };
        fetchPostDetails();
    }, [postId]);
    if (!postDetails) {
        return <div>Loading...</div>;
    }
    const imageFiles = postDetails.files.filter((file) => file.contentType.includes('image'));
    const videoFiles = postDetails.files.filter((file) => file.contentType.includes('video'));
    const handleLocationSelect = (latlng) => {};
    const handleDelete = async () => {
        if (window.confirm('이 게시글을 삭제하시겠습니까?')) {
            try {
                await http.delete(`http://localhost:8080/community/delete/${postId}`);
                alert('게시글이 삭제되었습니다.');
                navigate('/community');
            } catch (error) {
                console.error('게시물 삭제 실패', error);
                alert('게시글 삭제에 실패했습니다.');
            }
        }
    };

    return (
        <>
            <DetailsContainer backgroundImage={weatherImages[postDetails.backgroundImage]}>
                <TitleContainer>
                    <DetailsTitle>{postDetails.title}</DetailsTitle>
                </TitleContainer>
                <DetailsTime>작성날짜: {postDetails.createdDate}</DetailsTime>
                <ImageContainer>
                    {imageFiles.length > 0 && (
                        <Slider {...sliderSettings}>
                            {imageFiles.map((file) => (
                                <div key={file.id}>
                                    <Detailsimg
                                        src={`http://localhost:8080/community/files?uuidFilename=${file.uuidFileName}`}
                                        alt={file.originalFileName}
                                    />
                                </div>
                            ))}
                        </Slider>
                    )}
                    {videoFiles.map((file) => (
                        <MediaElement key={file.id} file={file} />
                    ))}
                </ImageContainer>

                <ContentContainer>
                    <DetailContent>{postDetails.content}</DetailContent>
                </ContentContainer>
                {postDetails.latitude && postDetails.longitude && (
                    <KakaoMap
                        latitude={postDetails.latitude}
                        longitude={postDetails.longitude}
                        onLocationSelect={handleLocationSelect}
                        level={3}
                        mapStyle={{ width: '15vw', height: '12vw', opacity: '0.7' }}
                    />
                )}
                <DeleteContainer>
                    <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
                </DeleteContainer>
                <ModyfyBut>
                    <ModyfyLink to={'/community/details/editPost/${postId}'}>수정</ModyfyLink>
                </ModyfyBut>
            </DetailsContainer>
        </>
    );
};

export default Details;
