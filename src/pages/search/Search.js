import { Swiper, SwiperSlide } from "swiper/react";
import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { mainInt, myColor } from "../../style/GlobalStyled";
import { Link } from "react-router-dom";

const Form = styled.form`
  position: relative;
`;

const FormText = styled.h3`
  text-align: center;
  font-size: 24px;
  color: ${myColor.mainColor};
  font-weight: 700;
  margin-bottom: -12vh;

  @media screen and (max-width: 450px) {
    font-size: 20px;
    margin-bottom: -15vh;
  }
`;

const Input = styled.input`
  margin: 0 auto;
  width: 100%;
  border: 3px solid ${myColor.mainColor};
  background-color: #fff;
  line-height: 50px;
  border-radius: 30px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 100px;

  position: absolute;
  top: 22vh;
  right: 0;
  border: unset;
  background-color: ${myColor.mainColor};
  border-radius: 30px;
  cursor: pointer;
`;

const SearchWrap = styled.div`
  padding: ${mainInt.sideInt};
  width: 100%;
  margin: 0 auto;
  /* height: 68vh; */
`;
const WhiteSpace = styled.div`
  height: 27vh;
`;

const InWhiteSpace = styled.div`
  height: 5vh;
`;

const SearchWhiteSpace = styled.div`
  height: 22vh;
`;

const CoverBg = styled.div`
  height: 500px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 20px;

  /* @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  } */
`;

const MovieTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5,
  breakpoints: {
    1024: {
      spaceBetween: 15,
      slidesPerView: 4.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    320: {
      spaceBetween: 5,
      slidesPerView: 2.2,
    },
  },
};

export const Search = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });
  const [term, setTerm] = useState();

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {term ? (
        <>
          <SearchWrap>
            <Form onSubmit={handleSubmit(searchHandler)}>
              <SearchWhiteSpace />
              <Input
                {...register("search", {
                  required: "검색할 영화 이름을 입력해주세요.",
                })}
                type="text"
                placeholder="영화 이름을 알려주세요!"
              />
              <Button>
                <img
                  src="https://cdn.discordapp.com/attachments/1071326637540524122/1180062807060914196/searchImg_w.png"
                  alt="흰색 돋보기 아이콘"
                />
              </Button>
            </Form>
            <InWhiteSpace />
          </SearchWrap>

          {term && (
            <Swiper {...params}>
              {term.map((data) => (
                <SwiperSlide key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <CoverBg $bgUrl={data.poster_path} />
                    <MovieTitle>{data.title}</MovieTitle>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <InWhiteSpace />
        </>
      ) : (
        <>
          <WhiteSpace />
          <SearchWrap>
            <FormText>찾으시는 영화가 있으신가요?</FormText>
            <Form onSubmit={handleSubmit(searchHandler)}>
              <SearchWhiteSpace />
              <Input
                {...register("search", {
                  required: "검색할 영화 이름을 입력해주세요.",
                })}
                type="text"
                placeholder="영화 이름을 알려주세요!"
              />
              <Button>
                <img
                  src="https://cdn.discordapp.com/attachments/1071326637540524122/1180062807060914196/searchImg_w.png"
                  alt="흰색 돋보기 아이콘"
                />
              </Button>
            </Form>
            <InWhiteSpace />
          </SearchWrap>
          <WhiteSpace />
        </>
      )}
    </>
  );
};
