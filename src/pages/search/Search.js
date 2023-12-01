import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { mainInt, myColor } from "../../style/GlobalStyled";

const Form = styled.form`
  margin-top: 180px;
  margin-bottom: 20px;
  position: relative;
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
  top: 0;
  right: 0px;
  border: unset;
  background-color: ${myColor.mainColor};
  border-radius: 30px;
`;

const SearchWrap = styled.div`
  padding: ${mainInt.sideInt};
  width: 100vw;
  margin: 0 auto;
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
  //api에 검색 요청에 맞게 url연결과 매개변수 작성할것
  //form 사용시 useForm 사용할것
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
    <SearchWrap>
      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화가 있으신가요?"
        />
        <Button>
          <img
            src="https://cdn.discordapp.com/attachments/1071326637540524122/1180062807060914196/searchImg_w.png"
            alt="흰색 돋보기 아이콘"
          />
        </Button>
      </Form>

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
    </SearchWrap>
  );
};
