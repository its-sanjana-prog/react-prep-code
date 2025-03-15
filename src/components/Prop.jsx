const Props = () => {

    // This is a parent component

return     <Users  
                    Img = "https://github.com/its-sanjana-prog.png"
                    name="sanjana" age = {22} email ="sanjana@gmail.com" marrideStatus={false}
                    hobbies ={["vallyball","football","baskateball","cricket"]} />;


};

const Users = (props) => {

    // This is a child component
console.log(props);
return <section>
    <img src={props.Img} alt={props.name} />
    <h3>Name : {props.name}</h3>
    <h3>Age : {props.age}</h3>
    <h3>Email : {props.email}</h3>
    <h3>Marital Status : {props.marrideStatus}</h3>
    <h3>Hobbies : {props.hobbies}</h3>
</section>;


};

export default Props ;