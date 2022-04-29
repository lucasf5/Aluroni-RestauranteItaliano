import React from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface maiorOuMenor{
    setMaiorOuMenor: React.Dispatch<React.SetStateAction<string>>
}

const MaiorOuMenor = ({setMaiorOuMenor}: maiorOuMenor) => {
  return (
    <div>
      <button onClick={()=>setMaiorOuMenor('maior')}>{<MdKeyboardArrowUp size={20}/>}</button>
      <button onClick={()=>setMaiorOuMenor('menor')}>{<MdKeyboardArrowDown size={20}/>}</button>
    </div>
  );
};

export default MaiorOuMenor;