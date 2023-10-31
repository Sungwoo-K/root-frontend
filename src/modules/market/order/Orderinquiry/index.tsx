import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Button, Container } from "./styles";
import ButtonEvent from "@/components/market/ButtonEvent";

export const Inquiry = () => {
  const [isMenu, setIsMenu] = useState(false);

  const Inquirebutton = (index) => {
    isMenu === true ? setIsMenu(false) : setIsMenu(true);
    console.log(isMenu);
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
                <ButtonEvent />
              </div>
            </div>
            <div className="seconde">문의 내용</div>
            <textarea
              placeholder="문의 내용을 입력하세요"
              maxLength={1000}
              className="content"
            />

            <div className="deatil-content">
              - 배송,결제,교환/반품 문의는 고객센터로 문의 바랍니다. <br />-
              상품과 관련 없거나 부적합한 내용을 기재하시는 경우, 사전 고지 없이
              삭제 또는 차단될 수 있습니다.
            </div>
            <div className="final-div">
              <button className="final-button">완료</button>
            </div>
          </div>
        </div>
        <div className="headerdiv">
          <h1 className="list-title">상품문의</h1>

          <Button onClick={Inquirebutton}>문의하기</Button>
        </div>
        <div className="deatildiv">
          <ul className="list">
            <li className="list-item">
              <em className="marker">
                구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
              </em>
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
      </Container>
    </>
  );
};

export default Inquiry;
