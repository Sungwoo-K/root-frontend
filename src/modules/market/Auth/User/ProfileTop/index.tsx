import http from "@/utils/http";
import { Container, Detail, Followdiv, Totalimg } from "./styles";
import { useEffect, useState } from "react";
import ApexChart from "@/components/market/Chart";

export const Follow = () => {
  const [product, setProduct] = useState([{}]);
  const [count, setCount] = useState();
  const [totalamount, setTotalamount] = useState("");
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const response = async () => {
      const fetch = await http.get(`http://192.168.100.109:8080/user/count`);
      const amount = await http.get(`http://192.168.100.109:8080/user/amount`);
      const monthamount = await http.get(
        `http://192.168.100.109:8080/user/amount/month`
      );
      setChartData(monthamount.data.monthAaount);

      setTotalamount(amount.data.totalAmount);
      setCount(fetch.data.totalCount);
    };
    response();
  }, []);
  return (
    <>
      <Container>
        <Followdiv>
          <Totalimg>
            <Detail>
              <div className="Totaldiv">
                <div>
                  <p className="name">총 구매 수</p>
                  <div className="totalcount">
                    <p className="count">{count} 건</p>
                  </div>
                </div>
                <div>
                  <p className="name"> 총 금액</p>
                  <div className="totalcount">
                    <p className="count">{totalamount.toLocaleString()} 원</p>
                  </div>
                </div>
              </div>
            </Detail>
          </Totalimg>
        </Followdiv>
        <Followdiv style={{ marginTop: "4vw", height: "300px" }}>
          <Detail>{<ApexChart data={chartData} />}</Detail>
        </Followdiv>
      </Container>
    </>
  );
};
export default Follow;
