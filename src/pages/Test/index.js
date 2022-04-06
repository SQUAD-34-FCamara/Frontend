import { useNavigate } from 'react-router-dom';

export default function Test() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Test</h1>
      <button onClick={() => navigate('/')}>Voltar para Home</button>
    </>
  );
}
