
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reduser = (state, action) =>{
  switch (action.type){
    case "add":
    return action.payload;
    
    case "reset":
    return "";
    
    default:
    return "Ноль";
  }
}

const store = createStore(reduser);

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
