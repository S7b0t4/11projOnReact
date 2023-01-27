import React, {useRef, useState} from 'react';

const Cvad_2 = () => {
    const [Ans, setAns] = useState()
    const a = useRef()
    const takeS = () =>{
        setAns((+a.current.value * +a.current.value) / 2 )
    }
    return (
        <div>
            <img className='bigImg' src="https://lh3.googleusercontent.com/syDLRwniO5OdI4yAtvx-tdBXo2wS6t5MyCrMnYblJSJLp12dLqmm_YXRbfcVC7RzFkuafbObDvBagKDkFs7C4JHG7eZSL8rYH1TuYiovmqRmfU4NLP-AtfCgMdW6Gi_ZW1lgn9xF" alt=""/>
            <p>Введите "d" (Диагональ)</p>
            <input ref={a} type="text"/><button onClick={takeS}>Ответ</button>
            <p>{Ans}</p>
        </div>
    );
};

export default Cvad_2;