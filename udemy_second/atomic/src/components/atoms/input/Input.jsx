import styled from 'styled-components';

export const Input = (props) => {
  const { placeholder = "" } = props;
  return (
    <SInput type="text" placeholder={placeholder} />
  )
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 2px;
  border-radius: 9999px;
  outline: none;
  margin-top: 10px;
  margin-right: 10px;
`;