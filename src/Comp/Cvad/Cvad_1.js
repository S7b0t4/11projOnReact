import React, {useRef, useState} from 'react';

const Cvad_1 = () => {
    const [Ans, setAns] = useState()
    const a = useRef()
    const takeS = () =>{
        setAns(+a.current.value * +a.current.value)
    }
    return (
        <div>
            <img className='bigImg' src="https://lh6.googleusercontent.com/kEDlzvf1zRLGCnKvjOzd9rErJAWIxWYuprhwqOjMdcOyGY0sFzA3UIBuweFzX9ABpWEW9JBMdHzZucv-iobmUQLr7EXlQAsf49ngs2kkTMrwwP57A_Fy_holLOyPagyWKLlI7Vga" alt=""/>
            <p>Введите "a" (Сторону)</p>
            <input ref={a} type="text"/><button onClick={takeS}>Ответ</button>
            <p>{Ans}</p>
        </div>
    );
};

export default Cvad_1;