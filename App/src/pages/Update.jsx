// import React, { useEffect, useState } from 'react'
// import {useLocation, useParams} from 'react-router-dom'
// import axios from 'axios'
// import './Usercard.css'

// const Updateuser = () => {
//     let [name,setName] = useState()
//     const [email,setEmail] = useState("")
//     const [comments, setComments] = useState()
//     // let [data,setData] = useState([])
//     const location = useLocation()
//     const item = location.state.item
//     console.log(item)



//     const Submit = (e) =>{
//       e.preventDefault()
//       axios.post("http://localhost:4000/users",{name,email,comments})
//       .then(result=> console.log(result))
//       .catch(err=> console.log(err))  
//     }

//     const Update = (e)=>{
//         e.preventDefault()
//         axios.put('http://localhost:4000/updateUser/'+id,{
//             name,
//             email,
//             comments
//         })
//         .then(res=>{
//             console.log(res)
//             navigate('/')
//         })
//         .catch(err=>console.log(err))
//     }


//     useEffect(()=>{
//         axios.get('http://localhost:4000/getUser/')
//         .then(result=>{console.log(result)
//             setName(result.data.name)
//             setEmail(result.data.email)
//             setComments(result.data.comments)
//         })
//         .catch(err=>console.log(err))
//     },[])


//     return (
//         <div>
//              <form onSubmit={Submit}>
//                 <h2>Write Feedback</h2>
//                 <div>
//                     <label>Name: </label>
//                     <input type="text" placeholder='eg: Hitman' value={item.name}
//                     onChange={(e)=>setName(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input type="email"
//                      placeholder='eg: pB8p1@example.com' value={item.email}
//                     onChange={(e)=>setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Comments:</label>
//                     <input type="text" 
//                     defaultValue={comments} 
//                     placeholder='Bak dalo ' value={item.comments}
//                     onChange={(e)=>setComments(e.target.value)} />
//                 </div>
//                 <button type='submit' onClick={Update}>
//                     update
//                 </button>
//              </form>
    
             
//         </div>
//       )
//     }
    
//     export default Updateuser





// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './Usercard.css';

// const Updateuser = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [comments, setComments] = useState('');
//     const location = useLocation();
//     const item = location.state.item;

//     useEffect(() => {
//         setName(item.name);
//         setEmail(item.email);
//         setComments(item.comments);
//     }, [item]);

//     const Submit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:4000/users", { name, email, comments })
//             .then(result => console.log(result))
//             .catch(err => console.log(err));
//     };

//     const Update = (e) => {
//         e.preventDefault();
//         axios.put('http://localhost:4000/updateUser/' + item._id, {
//             name,
//             email,
//             comments
//         })
//             .then(res => {
//                 console.log(res);
//                 // Redirect or do something else after update
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <div>
//             <form onSubmit={Submit}>
//                 <h2>Write Feedback</h2>
//                 <div>
//                     <label>Name: </label>
//                     <input type="text" placeholder='eg: Hitman' value={name}
//                         onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Email: </label>
//                     <input type="email" placeholder='eg: pB8p1@example.com' value={email}
//                         onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Comments:</label>
//                     <input type="text" placeholder='Bak dalo ' value={comments}
//                         onChange={(e) => setComments(e.target.value)} />
//                 </div>
//                 <button type='submit' onClick={Update}>
//                     Update
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Updateuser;


import React, { useEffect, useState } from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Usercard.css';

const Updateuser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const location = useLocation();
    const item = location.state.item;
    const navigate = useNavigate();

    useEffect(() => {
        setName(item.name);
        setEmail(item.email);
        setComments(item.comments);
    }, [item]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    // const Submit = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:4000/users", { name, email, comments })
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err));
    // };

    const Update = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4000/updateUser/' + item._id, {
            name,
            email,
            comments
        })
            .then(res => {
                console.log(res);
                navigate('/get')
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <form >
                <h2>Write Feedback</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder='eg: Hitman' value={name}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" placeholder='eg: pB8p1@example.com' value={email}
                        onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Comments:</label>
                    <input type="text" placeholder='Bak dalo ' value={comments}
                        onChange={handleCommentsChange} />
                </div>
                <button type='submit' onClick={Update}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default Updateuser;
