import React, {useState} from 'react';
import Cvad_1 from "./Cvad_1";
import Cvad_2 from "./Cvad_2";
import "./Cvad.css"

const Cvad = () => {
    const [decision, setDecision] = useState(null)

    const decision1 = () => {
        setDecision(<Cvad_1 />)
    }
    const decision2 = () => {
        setDecision(<Cvad_2 />)
    }
    return (
        <div>
            <h4>Квадрат</h4>
            <div className="row_btn">
                <div className="row">
                    <button onClick={decision1}>
                        <img src="https://lh6.googleusercontent.com/kEDlzvf1zRLGCnKvjOzd9rErJAWIxWYuprhwqOjMdcOyGY0sFzA3UIBuweFzX9ABpWEW9JBMdHzZucv-iobmUQLr7EXlQAsf49ngs2kkTMrwwP57A_Fy_holLOyPagyWKLlI7Vga" alt=""/>
                    </button>
                    <button onClick={decision2}>
                        <img src="https://lh3.googleusercontent.com/syDLRwniO5OdI4yAtvx-tdBXo2wS6t5MyCrMnYblJSJLp12dLqmm_YXRbfcVC7RzFkuafbObDvBagKDkFs7C4JHG7eZSL8rYH1TuYiovmqRmfU4NLP-AtfCgMdW6Gi_ZW1lgn9xF" alt=""/>
                    </button>
                </div>
            </div>
            {decision}
        </div>
    );
};

export default Cvad;