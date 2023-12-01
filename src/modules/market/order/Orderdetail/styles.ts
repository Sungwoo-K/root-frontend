import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 90px;
  padding: 30px 0px 0px 10px;
  > video {
    width: 1200px;
    padding-bottom: 150px;
  }
  > video > iframe {
    width: 1200px;
  }
`;
