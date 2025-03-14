const JsxRules = () => {
const myName = "sanjana";
const gunah = (a,b) => a *b;
const date = new Date(); // Show the date on the screen

const productList = {
    productName : "Almira",
    price: 1200,
    productAbility : "In stock"
};

// using lists

const number = [1,2,3,4,5,8]

// more prectice about lists

const userInfo =[

    {
        username : "sanjana",
        emailId : "s@gmail.com",
        password : "2345"
    },
    {
        username : "sanjana22",
        emailId : "s22@gmail.com",
        password : "222345"
    },
    {
        username : "sanjana33",
        emailId : "s33@gmail.com",
        password : "332345"
    }
]


    return(

     

        <div>
            
             {/* using lists  */}
            {number.map(num => (
                 <ul key={num}>
                    <li>{num}</li>
                 </ul>
            ))
            }
         
        {/* more prectice about lists */}

           {userInfo.map(({username, emailId, password}) => (
                <ul key = {Math.random()}>
                    <li>{username}</li>
                    <li>{emailId}</li>
                    <li>{password}</li>
                </ul>

           ))}


            <h3>Name : {productList.productName}</h3>
            <h3>Price : {productList.price}</h3>
            <h3>Product Ability : {productList.productAbility}</h3>

            <p>Date: {date.getDate()}</p>
            <h3>JSX Rules</h3> 
            <p> JSX Must return a single parent element</p>
            <p>JSX element must be properly closed</p>
            <br />
            <h2>Expresion Explanation</h2>
            <p>2+2 is print as  it is </p>
            <p>{2+2} is print as + operator</p>
            <p>{myName}</p>
            <p>My frinds list:{['simme','sadhna', 'sima']}</p>
            
            <p>multiplye value : {gunah(10, 5)}</p>
           
        </div>

    );

};

export default JsxRules ;