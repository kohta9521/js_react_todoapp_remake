import { useParams } from 'react-router-dom'

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URLParameterです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  )
}