import { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios'

function Comment() {


    const [commentData, setCommentData] = useState([])
    const [toogle, setToggle] = useState(false)

    const getData = async () => {
        let result = await axios.get('https://jsonplaceholder.typicode.com/comments')
        let data = result.data
        setCommentData(data)
    }


    useEffect(()=> {
        setToggle(false)
        let result = getData()
        if(result){
            setToggle(true)
        }
    }, [])



  return (
    <div className="comment">
        <ul>
        {toogle? commentData.filter((item, index) => {
            return index <= 100
        }).map((item, index)=>{
            return <li key={index}>
                <p className='com-name'>{item.name}</p>
                <p className='com-email'>{item.email}</p>
                <p className='com-body'>{item.body}</p>
                </li>
        })
    :<p>Loaging...</p>} 
        </ul>
    </div>
  );
}

export default Comment;
