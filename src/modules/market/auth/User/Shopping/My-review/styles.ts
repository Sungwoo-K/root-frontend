import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  width: 1420px;
  padding-left: 80px;
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
  width: 1400px;
  height: 100px;
  margin-left: 200px;

  display: block;
  flex-direction: column;
  margin-top: 100px;
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
  .reviewcount {
    padding: 20px 10px 10px 0px;

    display: flex;
    > span {
      padding: 5px;
    }
    > div {
      padding: 5px;
      margin-left: 10px;
      display: flex;
      align-items: flex-end;
    }
    .star {
      color: gold;
      font-size: medium;
    }
  }
  .reviewcontent {
    padding: 10px 0px 0px 10px;
      font-family: TheJamsil5Bold;
      font-size: large;
      .answercontent{
        margin-top: 10px;
        font-family: answercontent;
      }
      >span{
        margin-bottom: 10px;
        color: skyblue;
      }
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: large;
  padding-left: 5px;
  margin-bottom: 20px;
`;
