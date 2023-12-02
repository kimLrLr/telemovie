import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { mainInt, myColor } from "../../style/GlobalStyled";

const Form = styled.form`
  /* margin-top: 180px;
  margin-bottom: 20px; */
  position: relative;
`;

const FormText = styled.h3`
  line-height: 200px;
  text-align: center;
  font-size: 24px;
  color: ${myColor.mainColor};
  font-weight: 700;
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
`;

const Button = styled.button`
  width: 100px;

  position: absolute;
  top: 200px;
  right: 0;
  border: unset;
  background-color: ${myColor.mainColor};
  border-radius: 30px;
  cursor: pointer;
`;

const SearchWrap = styled.div`
  padding: ${mainInt.sideInt};
  width: 100vw;
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
  height: 21.5vh;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const MovieTitle = styled.div``;

export const Search = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
  });
  const [term, setTerm] = useState();
  const [loading, setLoading] = useState(true);

  const searchHandler = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await movieSearch(keyword);
      setTerm(results);
      setLoading(false);
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
            <ConWrap>
              {term.map((data) => (
                <Con key={data.id}>
                  <Bg $bgUrl={data.backdrop_path} />
                  <MovieTitle>{data.title}</MovieTitle>
                </Con>
              ))}
            </ConWrap>
          )}
          <InWhiteSpace />
        </>
      ) : (
        <>
          <WhiteSpace />
          <SearchWrap>
            <Form onSubmit={handleSubmit(searchHandler)}>
              <FormText>찾으시는 영화가 있으신가요?</FormText>
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
          </SearchWrap>
          <WhiteSpace />
        </>
      )}
    </>
  );
};
