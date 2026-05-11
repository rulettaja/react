import { useLocation, useNavigate } from 'react-router';

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.item;

  if (!item) {
    return (
      <div>
        <p>No media item selected.</p>
        <button onClick={() => navigate('/')}>Back to listing</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Takaisin</button>
      <h2>{item.title}</h2>
      <p>Owner: {item.username}</p>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};
export default Single;
