import { useButtonContext } from './ButtonContext';
import { useButtonIDContext } from './ExperienceIDContext';

const ButtonComp = ({ id }) => {
  const { setIsClicked, isClicked } = useButtonContext();
  const { isID, setID } = useButtonIDContext();

  const setHandler = () => {
    setIsClicked(!isClicked);
    setID(+id);
  };

  return (
    <div>
      <button id={id} onClick={setHandler}>
        View {isID === id && !isClicked ? 'more...' : 'less'}
      </button>
    </div>
  );
};
export default ButtonComp;
