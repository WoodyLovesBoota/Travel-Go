import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { ref, ...rest } = register("destination");

  const onValid = (data: IForm) => {
    // console.log(data);
    navigate(`/${data.destination}`);
  };

  const handleWidth = () => {
    inputRef &&
      inputRef.current &&
      (inputRef.current.style.width = `${inputRef.current?.value.length * 60 + 150}px`);
  };
  return (
    <Wrapper>
      <Title>Where to Travel?</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...rest}
          name="destination"
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
          onKeyDown={handleWidth}
          onKeyUp={handleWidth}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        ></Input>
      </Form>
    </Wrapper>
  );
};

export default Home;

interface IForm {
  destination: string;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 64px;
  font-weight: 500;
`;

const Form = styled.form`
  margin-top: 40px;
  width: 40vw;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 80px;
  width: 150px;
  border: none;
  border-bottom: 4px solid ${(props) => props.theme.white.normal};
  color: ${(props) => props.theme.blue.lighter};
  text-align: center;
  caret-color: transparent;
  background-color: transparent;
  padding-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
