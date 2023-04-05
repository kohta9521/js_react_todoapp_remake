import styled from  'styled-components';

export const Card = (props) => {
  const { Children } = props;
  return (
    <SCard>
      {Children}
    </SCard>
  )
}

const SCard = styled.div`
  background-color: #fff;
`;