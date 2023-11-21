import http from '@/utils/http';
import axios from 'axios';
import sunnyImg from '@/images/SUNNY.png';
import cloudyImg from '@/images/CLOUDY.png';
import rainyImg from '@/images/RAINY.png';
import snowyImg from '@/images/SNOWY.png';
import KakaoMap from '@/components/community/KakaoMap';
import {
    StyleSelect,
    AddBtn,
    WriteContainer,
    AddBtncontainer,
    ContentContainer,
    WriteInput,
    WriteTextarea,
    DropArea,
    DropFont,
    WriteForm,
    PreviewContent,
    KakaoContainer,
} from './styles';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface LatLng {
    getLat: () => number;
    getLng: () => number;
}
interface PostItem {
    id: number;
    title: string[];
    content: string[];
    files: PostFile[];
}
interface PostFile {
    contentType: string;
    originalFileName: string;
    uuidFileName: string;
}
function MediaElement({ contentType, uuidFileName }: { contentType: string; uuidFileName: string }) {
    if (contentType.includes('image')) {
        return <img width={300} src={`http://localhost:8080/post/files/${uuidFileName}`} />;
    } else {
        return (
            <video>
                <source src={`http://localhost:8080/post/files/${uuidFileName}`} type={contentType}></source>
            </video>
        );
    }
}
const backgroundImageUrls = {
    sunny: sunnyImg,
    cloudy: cloudyImg,
    rainy: rainyImg,
    snowy: snowyImg,
};

const Write = () => {
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [filePreviews, setFilePreviews] = useState<string[]>([]);
    const [weather, setWeather] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);
    const [address, setAddress] = useState('');
    const [searchedLocation, setSearchedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState({
        lat: 33.450701,
        lng: 126.570667,
    });
    const [markerPosition, setMarkerPosition] = useState(null);

    const fileRef = useRef() as MutableRefObject<HTMLInputElement>;
    const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
    const contentRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
    const formRef = useRef<HTMLFormElement>();

    useEffect(() => {}, []);
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleAddressSearch = async () => {
        const REST_API_KEY = '32a0368bed126bcd2cb86b165033bff4';
        try {
            const response = await http.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            });
            const data = response.data.documents[0];
            if (data) {
                const newLocation = {
                    lat: parseFloat(data.y),
                    lng: parseFloat(data.x),
                };
                setMapCenter(newLocation);
                setMarkerPosition(newLocation);
                setSelectedLocation({
                    getLat: () => newLocation.lat,
                    getLng: () => newLocation.lng,
                });
            }
        } catch (error) {
            console.error('주소 검색 에러', error);
        }
    };
    const handleWeatherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWeather(e.target.value);
        setBackgroundImage(backgroundImageUrls[e.target.value]);
    };
    const handlePost = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        Array.from(fileRef.current.files).forEach((file) => {
            formData.append('files', file);
        });
        formData.append('backgroundImage', weather);
        formData.append('content', contentRef.current.value);
        formData.append('title', titleRef.current.value);
        formData.append('userid', ' ');
        formData.append('nickname', ' ');
        if (selectedLocation) {
            formData.append('latitude', selectedLocation.getLat().toString());
            formData.append('longitude', selectedLocation.getLng().toString());
        }

        (async () => {
            try {
                const response = await http.post<PostItem>('http://localhost:8080/community/with-file', formData);
                console.log(response);
                if (response.status === 201) {
                    formRef.current.reset();
                    setPosts([{ ...response.data }, ...posts]);
                }
            } catch (error) {
                console.error('Error posting data:', error);
            }
        })();
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        fileRef.current.files = files;
        createFilePreviews(files);
        console.log(files);
    };
    const createFilePreviews = (files: FileList) => {
        const fileArray = Array.from(files);
        const newFilePreviews = fileArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setFilePreviews(newFilePreviews);
    };
    const handleFilesSelected = (e) => {
        const files = e.target.files;
        createFilePreviews(files);
    };

    return (
        <>
            <WriteContainer>
                <WriteForm ref={formRef} onSubmit={handlePost}>
                    <DropArea onDragOver={handleDragOver} onDrop={handleDrop} isFilled={filePreviews.length > 0}>
                        {filePreviews.length === 0 && <DropFont>이미지를 끌어다 놓으세요.</DropFont>}
                        {filePreviews.map((previewUrl, index) => (
                            <PreviewContent key={index}>
                                <img
                                    src={previewUrl}
                                    alt={`Preview ${index}`}
                                    style={{
                                        display: 'block',
                                        width: index === 0 ? '400px' : '200px',
                                        marginBottom: '7vw',
                                    }}
                                />
                            </PreviewContent>
                        ))}
                    </DropArea>
                    <ContentContainer>
                        <WriteInput ref={titleRef} type="text" placeholder="제목을입력해주세요." required></WriteInput>

                        <WriteTextarea ref={contentRef} placeholder="내용을입력해주세요." required></WriteTextarea>
                    </ContentContainer>
                    <AddBtncontainer>
                        <input
                            ref={fileRef}
                            type="file"
                            multiple
                            accept="image/* video/*"
                            onChange={handleFilesSelected}
                        />
                        <AddBtn type="submit">올리기</AddBtn>
                    </AddBtncontainer>
                    <StyleSelect value={weather} onChange={handleWeatherChange}>
                        <option value={''}>날씨를 선택해주세요.</option>
                        <option value="sunny">맑음 🌞</option>
                        <option value="cloudy">흐림 🌫</option>
                        <option value="rainy">비 ☔</option>
                        <option value="snowy">눈 ⛄</option>
                    </StyleSelect>
                    <KakaoContainer>
                        <button type="button" onClick={handleAddressSearch}>
                            주소 검색
                        </button>
                        <input
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                            placeholder="주소를 입력하세요"
                        />
                        <KakaoMap
                            onLocationSelect={setSelectedLocation}
                            latitude={mapCenter.lat}
                            longitude={mapCenter.lng}
                            markerLatitude={markerPosition?.lat}
                            markerLongitude={markerPosition?.lng}
                            level={3}
                            mapStyle={{ width: '25vw', height: '20vw' }}
                        />
                    </KakaoContainer>
                </WriteForm>
            </WriteContainer>
        </>
    );
};

export default Write;
