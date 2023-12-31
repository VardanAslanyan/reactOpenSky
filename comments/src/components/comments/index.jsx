import { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios'
import Loading from './../../assets/animation/Infinity.svg'

function Comment() {


    const [commentData, setCommentData] = useState([])
    const [toggle, setToggle] = useState(false)

    const getData = async () => {
        setToggle(false)
        let result = await axios.get('https://jsonplaceholder.typicode.com/comments')
        let data = result.data
        setCommentData(data)
        setToggle(true)
    }


    useEffect(()=> {
        getData()
    }, [])



  return (
    <div className="comment">
        <ul>
        {toggle? commentData.filter((item, index) => {
            return index <= 100
        }).map((item, index)=>{
            return <li key={index}>
                <p className='com-name'>{item.name}</p>
                <p className='com-email'>{item.email}</p>
                <p className='com-body'>{item.body}</p>
                </li>
        })
    :<img className='loading' src={Loading} alt=''/>} 
        </ul>
    </div>
  );
}

export default Comment;
