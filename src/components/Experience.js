import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useButtonIDContext } from './ExperienceIDContext';
import { useButtonContext } from './ButtonContext';

const Experience = ({ data, id }) => {
  const { isID } = useButtonIDContext();
  const { isClicked } = useButtonContext();

  return (
    <div id={id}>
      {id === isID && !isClicked
        ? data.slice(0, 4).map((el, idx) => (
            <p key={idx}>
              <AiOutlinePlusCircle />
              {el}
            </p>
          ))
        : data.map((el, idx) => (
            <p key={idx}>
              <AiOutlinePlusCircle />
              {el}
            </p>
          ))}
    </div>
  );
};

export default Experience;
