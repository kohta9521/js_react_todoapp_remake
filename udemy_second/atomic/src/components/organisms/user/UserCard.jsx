import styled from "styled-components"
import { Card } from "../../atoms/card/Card";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <img height={160} width={160} src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>company</dt>
        <dd>{user.company.name}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
      </SDl>  
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;