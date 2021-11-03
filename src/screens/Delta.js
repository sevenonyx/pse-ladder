import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import routes from "../routes";
import DeltaData from "./DeltaLadder";

const RepetList = styled.ul`
  list-style: none;
  padding-left: 10px;
  display: inline;
  li {
    float: left;
    font-size: 25px;
    margin-left: 15px;
    padding: 5px;
  }
`;

let ladderList = [];
let currentIdx = 0;
function Delta() {
  const { day, number } = useParams();
  const [ladderIdx, setLadderIdx] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [isLast, setLast] = useState(false);
  const [isLastNumber, setLastNumber] = useState(false);

  useEffect(() => {
    setLast(false);
    setLastNumber(false);
    if (ladderList.length === 0) {
      ladderList = initLadderList();
    }
    if (number !== "home") {
      currentIdx = 0;
      ladderList = initLadderList();
      setLadderIdx(0);
      setCurrentCount(0);
      // 마지막 사다리의 경우 다음 사다리 이동 버튼을 제외하기 위해 상태값을 관리
      if (day !== "home" && parseInt(number) === DeltaData[day].length - 1) {
        setLastNumber(true);
      }
    }
  }, [number, day]);

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
      const idx = ladderIdx + 1;
      currentIdx = 0;

      setLadderIdx(idx);
      setCurrentCount(ladderList[idx][currentIdx]);
    } else {
      currentIdx = currentIdx + 1;
      setCurrentCount(ladderList[ladderIdx][currentIdx]);
      // 8번째 반복 사다리에 도달하고 마지막 반복이면 다음은 종료이다.
      if (ladderIdx >= 7 && currentIdx === ladderList[ladderIdx].length - 1)
        setLast(true);
    }
  };
  const repetExp = () => {
    ladderList[ladderIdx + 1].push(currentCount);
    nextExp();
  };

  const deltaList = () => {
    const range = [...Array(DeltaData.length)].map((v, i) => i);
    if (day === "home") {
      const dayList = range.map((prop) => (
        <Link key={prop} to={`${routes.home}/delta/${prop}/home`}>
          <Button>Day {prop + 3}</Button>
        </Link>
      ));
      return (
        <div>
          <h1>PSE Delta</h1>
          {dayList}
        </div>
      );
    } else if (number === "home") {
      const expList = DeltaData[day].map((prop, index) => (
        <Link key={index} to={`${routes.home}/delta/${day}/${index}`}>
          <Button>{index + 1}</Button>
        </Link>
      ));
      return (
        <div>
          <h1>PSE Delta Day {parseInt(day) + 3}</h1>
          {expList}
        </div>
      );
    }
  };

  return (
    <div>
      {number === "home" ? (
        deltaList()
      ) : (
        <div>
          <h2>
            Day {parseInt(day) + 3} - {parseInt(number) + 1}
          </h2>
          <h2>STEP {ladderIdx + 1} / 8</h2>
          <RepetList>
            {ladderList[ladderIdx]?.map((prop, idx) => (
              <li
                style={{
                  color: currentIdx === idx ? "blue" : "black",
                  fontWeight: currentIdx === idx ? "bold" : "normal",
                }}
                key={idx}
              >
                {prop + 1}
              </li>
            ))}
          </RepetList>
          <h1>{DeltaData[day][number][currentCount].kor}</h1>
          <h1>{DeltaData[day][number][currentCount].eng}</h1>
          {isLast ? (
            <>
              {isLastNumber ? null : (
                <>
                  <Link to={`${routes.home}/delta/0/${parseInt(number) + 1}`}>
                    <Button onClick={undefined}>다음 사다리</Button>
                  </Link>
                </>
              )}
              <Link to={`${routes.home}/delta/0/home`}>
                <Button>사다리 종료</Button>
              </Link>
            </>
          ) : (
            <>
              {ladderIdx >= 7 ? null : (
                <>
                  <Button onClick={repetExp}>반복</Button>
                </>
              )}

              <Button onClick={nextExp}>다음</Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Delta;
