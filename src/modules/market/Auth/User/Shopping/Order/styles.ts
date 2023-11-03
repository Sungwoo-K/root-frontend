import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  border: 1px solid;
  width: 100%;
  height: 100%;
`;

export const Totalimg = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  justify-content: space-evenly;
  border: 1px solid;
  width: 1800px;
`;

export const Detail = styled.div`
  border-radius: 15px;
  /* border: 1px solid; */
  overflow-y: auto;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
  height: 380px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  .brandname {
    display: block;
    justify-content: flex-start;
    align-items: top;
    padding: 10px 0px 10px 15px;
  }
  > img {
    padding: 10px 15px 15px 15px;
    position: relative;
  }
`;
export const BrandName = styled.p`
  display: flex;
  background-color: yellow;
  padding-left: 15px;
  height: 70px;
  justify-content: center;
  align-items: center;
  font-size: x-large;
`;

export const ProductPrice = styled.p`
  padding-right: 15px;
  display: flex;
  justify-content: right;
  padding: 10px 15px 2px 0;
`;
