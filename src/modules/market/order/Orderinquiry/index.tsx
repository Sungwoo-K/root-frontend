import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Button, Container } from "./styles";
import ButtonEvent from "@/components/market/ButtonEvent";
import Inqueryorderqna from "../Orderinquiryqna";
import { useParams } from "react-router-dom";
import http from "@/utils/http";
import { ProductItem } from "../../product/market/data";

export const Inquiryorder = () => {
  const { id } = useParams();
  const [isMenu, setIsMenu] = useState(false);

  const Inquirebutton = (index) => {
    isMenu === true ? setIsMenu(false) : setIsMenu(true);
  };
  const [buttonMenu, setButtonMenu] = useState(0);

  const buttonRef = useRef();
  const [products, setProducsts] = useState([]);

  const [formData, setFormData] = useState({
    userLoginId: "",
    username: "",
    productId: id,
    brandName: "",
    inqueryCategory: "",
    inqueryContent: "",
    productName: "",
  });

  const inqueryPost = async () => {
    try {
      await http.post(`http://192.168.100.109:8080/inquery/menu/${id}`, {
        userLoginId: formData.userLoginId,
        username: formData.username,
        productId: formData.productId,
        brandName: formData.brandName,
        inqueryCategory: formData.inqueryCategory,
        inqueryContent: formData.inqueryContent,
        productName: formData.productName,
      });
      alert("문의가 완료되었습니다");
      location.reload();
    } catch (error) {
      console.error("문의 작성 중 오류 발생:", error);
    }
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<ProductItem>(
        `http://192.168.100.159:8080/product/${id}`
      );

      setFormData((prevState) => ({
        ...prevState,
        brandName: response.data.productBrand,
        productName: response.data.productName,
      }));
    };
    fetch();
  }, [id]);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...formData,
      [name]: value,
      // inqueryCategory:
      //   name === "productName" ? inqueryCategory : prevData.inqueryCategory,
    }));
  };

  const texts = ["상품", "배송", "반품", "교환", "환불", "기타"];

  const [reviewcategory, setReviewcategory] = useState(["상품"]);
  const handleClickButton = (value: number) => {
    console.log(value);
    const categories = ["상품", "배송", "반품", "교환", "환불", "기타"];
    setReviewcategory(() =>
      value === null ? ["상품"] : categories[categories[value]]
    );

    setFormData((prevData) => ({
      ...prevData,
      inqueryCategory: categories[value],
    }));
  };
  const ToggleSidebar = () => {
    isMenu === true ? setIsMenu(false) : setIsMenu(true);
  };

  return (
    <>
      <Container>
        <div className={`headbar ${isMenu === true ? "active" : ""}`}>
          <div className="allheader">
            <div className="closediv" onClick={Inquirebutton}>
              <IoIosClose
                style={{ height: "2rem", width: "2rem" }}
                className="closebutton"
              />
            </div>
            <div className="header">상품 문의하기</div>
            <div className="seconde">문의 유형</div>
            <div className="total-button">
              <div className="first-button">
                <ButtonEvent texts={texts} getButtonValue={handleClickButton} />
              </div>
            </div>
            <div className="seconde">문의 내용</div>
            <textarea
              placeholder="문의 내용을 입력하세요"
              maxLength={1000}
              className="content"
              name="inqueryContent"
              onChange={handleInputChange}
              value={formData.inqueryContent}
            />

            <div className="deatil-content">
              - 배송,결제,교환/반품 문의는 고객센터로 문의 바랍니다. <br />-
              상품과 관련 없거나 부적합한 내용을 기재하시는 경우, 사전 고지 없이
              삭제 또는 차단될 수 있습니다.
            </div>
            <div className="final-div">
              <button className="final-button" onClick={inqueryPost}>
                완료
              </button>
            </div>
          </div>
        </div>
        <div
          className={`headbar-overlay ${isMenu == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
        <div className="headerdiv">
          <h1 className="list-title">상품문의</h1>

          <Button onClick={Inquirebutton}>문의하기</Button>
        </div>
        <div className="deatildiv">
          <ul className="list">
            <li className="list-item">
              <em className="marker">
                상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지
                않습니다.
              </em>
              <em className="marker">
                가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는
                문의는 고객센터 내 1:1 문의하기를 이용해주세요.
              </em>
              <em className="marker">
                해당 상품 자체와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배
                등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
                있습니다.
              </em>
              <em className="marker" style={{ marginBottom: "50px" }}>
                공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한
                개인정보는 절대 남기지 말아주세요
              </em>
            </li>
          </ul>
        </div>
        <Inqueryorderqna />
      </Container>
    </>
  );
};

export default Inquiryorder;
