import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'antd';
import './index.scss'

export default class Fixed extends Component {
    //组件销毁前  ，将未更新完的状态停止
	componentWillUnmount(){
		this.setState=(state,callback)=>{
			return;
		}
    }
    render(){
        return(
            <div className='fixed' style={{'height':this.props.height}}>
                <Link to='/'>
                    <div className='fixedHome'>
                        <img src='https://image.watsons.com.cn//upload/4fde61f2.png' alt='' />
                    </div>
                </Link>
                <Link to='/discount' style={{'display':this.props.display}}>
                    <div className='fixedDiscount'>
                        <img src='https://image.watsons.com.cn//upload/5ee3d06a.png' alt='' />
                    </div>
                </Link>
                <Link to='/shoppingCart'>
                    <Badge count={this.props.totalCount}>
                        <div className='fixedShoppingCart'>
                            <img src='data:image/png;base64,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' alt='' />
                        </div> 
                    </Badge>
                </Link>
                <div className='addSuccess' style={{'display':this.props.show}}>添加成功</div>
            </div>
        )
    }
}