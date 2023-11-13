import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 10px;
  width: 1400px;
  margin-bottom: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  align-items: center;
  padding: 50px 0px 30px 0px;
`;

export const Button = styled.button`
  background-color: white;
  font-weight: bold;
  color: #35c5f0;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #35c5f0;
  height: 30px;
`;

export const Reviewbox = styled.article`
  width: 1260px;

  display: block;

  flex-direction: column;
  margin-top: 30px;
  user-select: none;
  margin-bottom: 90px;

  .productname {
    padding: 10px;
    font-family: DNFBitBitv2;
    font-size: x-large;
    display: flex;
    justify-content: space-between;
    .productdetail {
      height: 30px;
    }
  }
  .reviewnickname {
    padding: 10px;
    display: flex;
    font-family: TTWanjudaedunsancheB;
  }
  .reviewcount {
    padding: 10px 10px 10px 0px;
    display: flex;
    > span {
      padding: 5px;
    }
    > div {
      padding: 5px;
      margin-left: 20px;
    }
    .star {
      color: gold;
      font-size: 18px;
    }
  }
  .reviewcontent {
    padding: 10px;
    font-family: SUITE-Regular;
    font-size: large;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: large;
  padding-left: 5px;
  margin-bottom: 20px;
`;
