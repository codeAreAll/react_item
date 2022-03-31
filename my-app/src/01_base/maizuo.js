import React,{Component} from "react"
import './css/maizuo.css'
import Movies from './maizuocomponents/movies'
import Cinema from './maizuocomponents/cinema'
import Center from "./maizuocomponents/center"
export default class App extends Component{
    state={
        list:[
            {id:1,text:'电影'},
            {id:2,text:'影院'},
            {id:3,text:'中心'},
        ],
        status:0
    }
    render(){
        return(
            <div> 
                {/* {this.state.status===1 && <Movies></Movies>}  
                {this.state.status===2 && <Cinema></Cinema>}
                {this.state.status===3 && <Center></Center>} */
                this.which()
                }
                
                
                
                <ul className="foot">
                {
                    this.state.list.map((item,index) => {return <li onClick={()=>{this.indexClick(index)}} key={item.id} className={this.state.status===index ? 'active' : ''}>{item.text}</li>}
                    )
                }
                  
                </ul>
            </div>
            
        )
    }
    which(){
        switch(this.state.status){
            case 0:
                return <Movies></Movies>
                
            case 1:
                return <Cinema></Cinema>
                
            case 2:
                return <Center></Center>
            default:
                return null    

        }
    }
    indexClick(index){
        // alert('3434')
        this.setState({
            status:index
        })
        

    }
   
}