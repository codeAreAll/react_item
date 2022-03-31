import React from 'react'
// import { ReactDOM } from 'react-dom'

class App extends React.Component {
    // myRef=React.createRef()
    state={
        mytest:'收藏',
        condition:true,
    }
    render() {
        return (
            <div> 
                <button onClick={()=>{
                    console.log('jajaj')
                }}>哈哈</button>
                <button onClick={this.handClick}>呵呵</button>
                <button onClick={()=>{
                    console.log(this.myRef.current.value);
                }}>点击</button>
                {/* <input ref={this.myRef}/>  */}
                <button onClick={()=>{
                    this.setState({
                        mytest:'收藏',
                        condition:!this.state.condition,
                    })
                }}>{this.state.condition ? '收藏':'取消收藏'}</button>

            </div>  
               
           
        )
    }
    handClick(){
        console.log('click2');
    }
}
export default App