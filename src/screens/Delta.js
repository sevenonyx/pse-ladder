import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Badge, CloseButton } from "react-bootstrap";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import routes from "../routes";
import DeltaData from "../data/delta-data";
import { numberFormat } from "../util/strings";

const Header = styled.div`
  margin-bottom: 25px;
`;
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 45px;
  padding: 15px 25px;
  text-align: right;
  background-color: snow;
`;
const ButtonFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 15px 25px;
  text-align: center;
  background-color: snow;
`;

const KorText = styled.h1`
  font-weight: bold;
  font-size: xx-large;
  margin-top: 35px;
  margin-bottom: 50px;
`;
const EngText = styled.h2`
  font-size: xx-large;
`;

let currentIdx = 0;
function Delta() {
  const history = useHistory();
  const { day, number } = useParams();
  const [ladderIdx, setLadderIdx] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [isLast, setLast] = useState(false);
  const [isLastNumber, setLastNumber] = useState(false);
  const [ladderList, setLadderList] = useState([]);
  const [repetLimit, setRepetLimit] = useState(0);

  useEffect(() => {
    setLast(false);
    setLastNumber(false);
    if (ladderList.length === 0) {
      setLadderList(initLadderList());
    }
    if (number !== "home") {
      currentIdx = 0;
      setLadderIdx(0);
      setCurrentCount(0);
      // 마지막 사다리의 경우 다음 사다리 이동 버튼을 제외하기 위해 상태값을 관리
      if (day !== "home" && parseInt(number) === DeltaData[day].length - 1) {
        setLastNumber(true);
      }
    }
  }, [number, day, ladderList]);

  const handleClick = (path) => {
    history.push(path);
  };

  const initLadderList = () => {
    let resultList = Array(8);
    resultList[0] = [0];
    resultList[1] = [0, 1];
    resultList[2] = [0, 1, 2];
    resultList[3] = [0, 1, 2, 3];
    resultList[4] = [3];
    resultList[5] = [3, 2];
    resultList[6] = [3, 2, 1];
    resultList[7] = [3, 2, 1, 0];
    return resultList;
  };
  const nextExp = () => {
    const currentLadder = ladderList[ladderIdx];
    if (currentIdx === currentLadder.length - 1) {
      goNextLadder();
    } else {
      currentIdx = currentIdx + 1;
      setCurrentCount(ladderList[ladderIdx][currentIdx]);
      // 8번째 반복 사다리에 도달하고 마지막 반복이면 다음은 종료이다.
      if (ladderIdx >= 7 && currentIdx === ladderList[ladderIdx].length - 1)
        setLast(true);
    }
  };
  const goNextLadder = () => {
    const idx = ladderIdx + 1;
    currentIdx = 0;
    setLadderIdx(idx);
    setRepetLimit(0);
    setCurrentCount(ladderList[idx][currentIdx]);
  };
  const repetExp = () => {
    //반복은 최대 2회
    if (repetLimit >= 2) {
      return;
    }
    setRepetLimit(repetLimit + 1);
    ladderList[ladderIdx + 1].push(currentCount);
    nextExp();
  };

  const deltaList = () => {
    const range = [...Array(DeltaData.length)].map((v, i) => i);
    if (day === "home") {
      const dayList = range.map((prop) => (
        <Button
          key={prop}
          onClick={() => handleClick(`/delta/${prop}/home`)}
          // href={`${routes.home}/delta/${prop}/home`}
          variant="outline-primary"
          size="lg"
        >
          Day {numberFormat(prop + 3)}
        </Button>
      ));
      return (
        <Container>
          <Header>
            <h1>PSE Delta 🥰</h1>
          </Header>
          <Link to={`${routes.home}`}>
            <CloseButton style={{ position: "absolute", right: 25, top: 25 }} />
          </Link>
          <div className="d-grid gap-2">{dayList}</div>
          <Footer>
            <p>학습진도에 따라 계속 추가됩니다 😉</p>
          </Footer>
        </Container>
      );
    } else if (number === "home") {
      const expList = DeltaData[day].map((prop, index) => (
        <Button
          key={`key${index}`}
          onClick={() => handleClick(`/delta/${day}/${index}`)}
          variant="outline-primary"
          size="lg"
        >
          {numberFormat(index + 1)}
        </Button>
      ));
      return (
        <Container>
          <Header>
            <h1>🇺🇸 PSE Delta Day {numberFormat(parseInt(day) + 3)}</h1>
            <h5>같이 열심히 공부해요!</h5>
          </Header>
          <Link to={`/delta/home/home`}>
            <CloseButton style={{ position: "absolute", right: 25, top: 25 }} />
          </Link>
          <div className="d-grid gap-2" style={{ marginBottom: 70 }}>
            {expList}
          </div>
          <Footer>
            <p>오타나 버그를 알려주시면 정말 감사해요 😘</p>
          </Footer>
        </Container>
      );
    }
  };

  return (
    <div>
      {number === "home" ? (
        deltaList()
      ) : (
        <Container>
          <Header>
            <h1>
              <Badge bg="primary">Day {parseInt(day) + 3}</Badge> {"  "}
              <Badge bg="primary">{parseInt(number) + 1}번</Badge> {"  "}
              <Badge bg={ladderIdx >= 4 ? "warning" : "primary"}>
                STEP {ladderIdx + 1} / 8
              </Badge>{" "}
            </h1>
          </Header>
          <Link to={`/delta/${day}/home`}>
            <CloseButton style={{ position: "absolute", right: 25, top: 25 }} />
          </Link>
          <h3>
            {ladderList[ladderIdx]?.map((prop, idx) => (
              <Badge
                pill
                key={idx}
                bg={currentIdx === idx ? "primary" : "secondary"}
                style={{ marginRight: 10 }}
              >
                {prop + 1}
              </Badge>
            ))}
          </h3>

          <KorText>{DeltaData[day][number][currentCount].kor}</KorText>
          <EngText>{DeltaData[day][number][currentCount].eng}</EngText>

          <ButtonFooter>
            <div className="d-grid gap-2">
              {isLast ? (
                <>
                  <Button
                    onClick={() => history.go(0)}
                    variant="success"
                    size="lg"
                  >
                    다시하기
                  </Button>
                  {isLastNumber ? null : (
                    <Button
                      onClick={() =>
                        handleClick(`/delta/${day}/${parseInt(number) + 1}`)
                      }
                      variant="primary"
                      size="lg"
                    >
                      다음 사다리
                    </Button>
                  )}
                  <Button
                    onClick={() => handleClick(`/delta/${day}/home`)}
                    variant="danger"
                    size="lg"
                  >
                    사다리 종료
                  </Button>
                </>
              ) : (
                <>
                  {ladderIdx >= 7 ? null : (
                    <div className="d-flex bd-highlight">
                      <Button
                        className="m-1 flex-grow-1"
                        variant="danger"
                        size="lg"
                        onClick={() => goNextLadder()}
                      >
                        넘기기
                      </Button>
                      <Button
                        className="m-1 flex-grow-1"
                        variant={repetLimit >= 2 ? "secondary" : "warning"}
                        size="lg"
                        onClick={() => repetExp()}
                      >
                        반복
                      </Button>
                    </div>
                  )}
                  <Button variant="success" size="lg" onClick={() => nextExp()}>
                    다음
                  </Button>
                </>
              )}
            </div>
          </ButtonFooter>
        </Container>
      )}
    </div>
  );
}

export default Delta;
