const JsxRules = () => {
const myName = "sanjana";
const gunah = (a,b) => a *b;
    return(
        <div>
            <h1>JSX Rules</h1> 
            <p> JSX Must return a single parent element</p>
            <p>JSX element must be properly closed</p>
            <br />
            <h2>Expresion Explanation</h2>
            <p>2+2 is print as  it is </p>
            <p>{2+2} is print as + operator</p>
            <p>{myName}</p>
            <p>My frinds list:{['simme','sadhna', 'sima']}</p>
            
            <p>multiplye value : {gunah(10, 5)}</p>
            i aam the best and i can do whatever i wanted to do !
        </div>
    );
};

export default JsxRules ;