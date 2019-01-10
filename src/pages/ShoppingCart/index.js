import React,{Component} from 'react';
import './index.scss'
import ShoppingCartContainer from '../../components/ShoppingCart-Nav/ShoppingCartContainer'
 export default class ShoppingCart extends Component {
     render(){
         return (
             <div id='shoppingCart'>
                 <ShoppingCartContainer history={this.props.history}/>
             </div>
         )
     }
 }
