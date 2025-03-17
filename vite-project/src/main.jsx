import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

 


function MyApp() {
  
  return(
    <>
    <p>This is my app ka custom app</p>
    </>
  );
}
// This is not working because there is not right syntax for this
// const ReactElement = {  
//   type : 'a', 
//   props : {
//     href : 'https://www.google.com',
//     target : '_blank'
//   } ,
//   children : 'Click here'
// };

const text = 'chai or code';
const anotherReactElement = (
     <a href="https://www.google.com/" target='_blank'>Visit google </a>
);

// const ReactElement = React.createElement('a', {href: 'https://www.google.com', target: '_blank'},
//                             'Search on google',{text}
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {/* {ReactElement}
    {anotherReactElement} */}
  </StrictMode>
);
