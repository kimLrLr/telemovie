import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { mainInt } from "../../style/GlobalStyled";

const Title = styled.h3``;

const Form = styled.form``;

const Input = styled.input``;

const SearchWrap = styled.div`
  padding: ${mainInt.sideInt};
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
      {/* <Title style={{ marginTop: "180px", marginBottom: "20px" }}></Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화가 있으신가요?"
        />
      </Form> */}

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
