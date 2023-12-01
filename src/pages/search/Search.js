import { useForm } from "react-hook-form";
import { movieSearch } from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";

const Title = styled.h3``;

const Form = styled.form``;

const Input = styled.input``;

const ConWrap = styled.div`
  display: grid;
  /* =>gird가 적용될 부모에게 사용 플랙스와 동일 */
  grid-template-columns: repeat(5, 1fr);
  /* =>그리드 레이아웃을 규칙에 맞게 반복 시킴 */
  /* =>repeat(가로 개수, 크기값) */
  /* =>1fr 컨텐츠끼리 1배율씩 똑같은 값으로 크기를 나눠가짐 */
  column-gap: 30px;
  /* =>가로 컨텐츠 간격 */
  row-gap: 50px;
  /* =>세로 컨텐츠 간격 */
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
    <div>
      <Title style={{ marginTop: "200px", marginBottom: "20px" }}>
        찾으시는 영화가 있으신가요?
      </Title>

      <Form onSubmit={handleSubmit(searchHandler)}>
        <Input
          {...register("search", {
            required: "검색 내용을 입력해주세요.",
          })}
          type="text"
          placeholder="검색내용"
        />
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
    </div>
  );
};
