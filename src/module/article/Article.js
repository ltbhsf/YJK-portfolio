import Container from "../asset/Container";
import Header from "../asset/Header";
import ArticleElement from "./ArticleElement";
import style from "./Article.module.css";

import sc00 from "../../db/sc00.jpeg";
import sc01 from "../../db/sc01.jpeg";
import sc02 from "../../db/sc02.jpeg";
import sc03 from "../../db/sc03.jpeg";
import sc04 from "../../db/sc04.jpeg";
import sc05 from "../../db/sc05.jpeg";
import sc06 from "../../db/sc06.jpeg";
import sc07 from "../../db/sc07.jpeg";
import sc08 from "../../db/sc08.jpeg";
import sc09 from "../../db/sc09.jpeg";
import { useState } from "react";

import Pagination from "./Pagination";

const articles = [
  {
    index: 22,
    type: "Opinion",
    title: "[기자의 눈]삶이 벅찬 당신에게",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102702",
  },
  {
    index: 3,
    type: "Society & culture",
    title: "AI 시대, 우리의 삶은 어떻게 변화하고 있을까?",
    image: sc03,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102855",
  },

  {
    index: 17,
    type: "Brief",
    title: "혁신공유대학 가상환경 기반 자율주행 경진대회 개최",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102847",
  },
  {
    index: 14,
    type: "feature",
    title: "국민대신문을 소개합니다",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102868",
  },
  {
    index: 25,
    type: "Box story",
    title: "희망, 로망, 에너지로 채워진 우리의 가을축제",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102547",
  },
  {
    index: 26,
    type: "Brief",
    title: "데이비드 윌리엄 김 교수 NASA 우주인 연구 프로젝트 선정",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102447",
  },

  {
    index: 1,
    type: "society & culture",
    title: "어린이를 위한 나라는 어디에 있는가",
    image: sc01,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102964",
  },
  {
    index: 11,
    type: "Interview",
    title: '끊임없이 변화하는 가치 속에서 "몸에 맞는" 브랜드 이미지를 포착하다',
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102924",
  },
  {
    index: 4,
    type: "society & culture",
    title: "치솟는 물가, 고통받는 대학생들",
    image: sc04,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102813",
  },

  {
    index: 6,
    type: "Univ.",
    title: "총학 선거 무산... 고전하는 학생자치",
    image: sc07,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102624",
  },
  {
    index: 34,
    type: "Brief",
    title:
      "일반대학원 금융정보보안학과 학생들, 국내 암호 분야 최고 권위 '암호분석경진대회·국가암호공모전' 동시 대상",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102185",
  },

  {
    index: 8,
    type: "Society & culture",
    title: "승자 없는 배달비 인상",
    image: sc09,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102410",
  },

  {
    index: 9,
    type: "Univ.",
    title: "예비군 학생 대상 녹화강의 제공, 적극적 논의 필요해",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102956",
  },
  {
    index: 10,
    type: "Univ.",
    title: "천원의 아침밥 우리학교도 시행",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102951",
  },
  {
    index: 5,
    type: "Univ.",
    title: "이젠 강의실에서도 마스크 벗는다",
    image: sc06,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102776",
  },
  {
    index: 12,
    type: "Brief",
    title: "2023 캠퍼스타운 창업경진대회 개최",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102908",
  },
  {
    index: 13,
    type: "Brief",
    title: "학생생활상담센터, 내맘돌보미 온라인 챌린지 운영",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102905",
  },

  {
    index: 15,
    type: "Interview",
    title: "지금, 우리가 만나는 시간. 총학생회 선거운동본부 '아워'를 만나다",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102857",
  },
  {
    index: 0,
    type: "sc",
    title: "죽음으로 내몰리는 청년들",
    image: sc00,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102989",
  },

  {
    index: 18,
    type: "Box story",
    title: "학령인구 감소에 늘어난 신입생 추가 모집",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102845",
  },
  {
    index: 7,
    type: "Univ.",
    title: "우리의 교내는 이교위가 할만큼 안전한가",
    image: sc08,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102449",
  },
  {
    index: 19,
    type: "Brief",
    title: "대면 총학생회 새내기배움터 개최",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102778",
  },
  {
    index: 20,
    type: "Interview",
    title: "2023 학생회, 계묘년을 부탁해",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102768",
  },
  {
    index: 21,
    type: "Brief",
    title: "동계 취업 멘토링 프로그램 모집",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102748",
  },

  {
    index: 23,
    type: "Brief",
    title: "교내 주차장 주차난 심화",
    image: null,
    link: "http://press.kookmin.ac.kr/news/articleView.html?idxno=102673",
  },
  {
    index: 24,
    type: "Box story",
    title: "강의실 내 칸막이, 대학 사정에 맞는 관리 필요해",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102552'
  },

  {
    index: 27,
    type: "Box story",
    title: "비만 오면 물새는 학교, 시급한 대책 마련이 필요한 때",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102442'
  },
  {
    index: 35,
    type: "Univ.",
    title: "혐오의 장이 돼 버린 '에브리타임'",
    image: sc05,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102267'
  },
  {
    index: 28,
    type: "Brief",
    title: "교육부 3단계 산학협력 선도대학 육성사업 선정",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102407'
  },
  {
    index: 29,
    type: "Brief",
    title: "대면 기조 학사운영에 맞춰 새로운 방역지침 발표",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102340'
  },
  {
    index: 30,
    type: "Brief",
    title: "통일교육선도대학 사업 선정",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102271'
  },
  {
    index: 31,
    type: "Brief",
    title: "AK아이에스와 업무협약 체결",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102270'
  },
  {
    index: 32,
    type: "Brief",
    title: "자동차 동아리, 2021 KSAE 대학생자작자동차대회 석권",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102236'
  },
  {
    index: 2,
    type: "sciety & culture",
    title: "늘어나는 마약 사범, 낮아지는 투약 연령",
    image: sc02,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102914'
  },
  {
    index: 33,
    type: "Brief",
    title: "우리학교 ERiD센터, 서울시교육청과 난독 학생 지원·전문가 양성키로",
    image: null,
    link: 'http://press.kookmin.ac.kr/news/articleView.html?idxno=102187'
  },
];

const Article = (prop) => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(articles.length / 10);

  const paginationHandler = (nowPage) => {
    setPage(nowPage);
  };
  return (
    <Container id={prop.id}>
      <div className={style["article-container"]}>
        {articles.slice(page * 10, page * 10 + 10).map((elem) => (
          <ArticleElement
            key={elem.index}
            type={elem.type}
            title={elem.title}
            image={elem.image}
            link={elem.link}
          ></ArticleElement>
        ))}
      </div>

      <Pagination
        maxPage={maxPage}
        currPage={page}
        onPageChanged={paginationHandler}
      ></Pagination>
    </Container>
  );
};

export default Article;
