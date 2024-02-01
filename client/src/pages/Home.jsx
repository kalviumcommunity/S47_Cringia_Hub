// import React from 'react';
import reel1 from '../assets/reel1.mp4'
import reel2 from '../assets/reel2.mp4'
import reel3 from '../assets/reel3.mp4'
import reel4 from '../assets/reel4.mp4'
import reel5 from '../assets/reel5.mp4'
import reel6 from '../assets/reel6.mp4'
import reel7 from '../assets/reel7.mp4'
import reel8 from '../assets/reel8.mp4'
import React, { useState } from 'react';
import './Home.css';
import data from '../data.json';

const Home = () => {
    const [reelLikes, setReelLikes] = useState(Array(8).fill(0));
  const [reelDislikes, setReelDislikes] = useState(Array(8).fill(0));

  const handleLike = (index) => {

    setReelLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index]++;
      return newLikes;
    });
  };

  const handleDislike = (index) => {
  
    setReelDislikes((prevDislikes) => {
      const newDislikes = [...prevDislikes];
      newDislikes[index]++;
      return newDislikes;
    });
  };
  
  return (
    <>
    

  
      
        <div className='main'>
          {/* <h1>{value.reel}</h1> */}
            <div className="topbar">
                <div className="leftop"><button>CRINGIA HUB</button></div>
                <div className="righttop">
                <button>Most viewed</button>
                <button>Sort A to Z</button>
                <button>Sort Z to A</button>
                </div>
            </div>
    
    
    
    
            <div className="reels">
    
                <div className="topreel">
    
                <div className="alignment">
                <div className="reel 1"><video width="200" height="360" controls><source src={reel1} type="video/mp4" /></video></div>
                <div className="buttonsreel">
                    <div className="like">
                    <button onClick={() => handleLike(1)}>Like</button>
                    <p>{reelLikes[1]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(1)}>दिस-Like</button>
                    <p>{reelDislikes[1]}</p>
                    </div>
                </div>
                </div>
    
    
                <div className="alignment">
                <div className="reel 1"><video width="200" height="360" controls><source src={reel2}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(0)}>Like</button>
                    <p>{reelLikes[0]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(0)}>दिस-Like</button>
                    <p>{reelDislikes[0]}</p>
                    </div>
                </div>
                </div>
    
    
                <div className="alignment">
                <div className="reel 2"><video width="200" height="360" controls><source src={reel3}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(2)}>Like</button>
                    <p>{reelLikes[2]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(2)}>दिस-Like</button>
                    <p>{reelDislikes[2]}</p>
                    </div>
                </div>
                </div>
    
    
                <div className="alignment">
                <div className="reel 3"><video width="200" height="360" controls><source src={reel4}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(3)}>Like</button>
                    <p>{reelLikes[3]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(3)}>दिस-Like</button>
                    <p>{reelDislikes[3]}</p>
                    </div>
                </div>
                </div>
                </div>
    
    
                <div className="bottomreel">
                <div className="alignment">
                <div className="reel 5"><video width="200" height="360" controls><source src={reel5}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(4)}>Like</button>
                    <p>{reelLikes[4]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(4)}>दिस-Like</button>
                    <p>{reelDislikes[4]}</p>
                    </div>
                </div>
                </div>
    
    
               <div className="alignment">
               <div className="reel 6"><video width="200" height="360" controls><source src={reel6}  type="video/mp4" /></video></div>
               <div className="buttonsreel">
               <div className="like">
                    <button onClick={() => handleLike(5)}>Like</button>
                    <p>{reelLikes[5]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(5)}>दिस-Like</button>
                    <p>{reelDislikes[5]}</p>
                    </div>
                </div>
               </div>
    
    
                <div className="alignment">
                <div className="reel 7"><video width="200" height="360" controls><source src={reel7}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(6)}>Like</button>
                    <p>{reelLikes[6]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(6)}>दिस-Like</button>
                    <p>{reelDislikes[6]}</p>
                    </div>
                </div>
                </div>
    
    
                <div className="alignment">
                <div className="reel 8"><video width="200" height="360" controls><source src={reel8}  type="video/mp4" /></video></div>
                <div className="buttonsreel">
                <div className="like">
                    <button onClick={() => handleLike(7)}>Like</button>
                    <p>{reelLikes[7]}</p>
                    </div>
    
                    <div className="dislike">
                    <button onClick={() => handleDislike(7)}>दिस-Like</button>
                    <p>{reelDislikes[7]}</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
    
            <div className="footer">
                <p>@Copyright By CRINGIA HUB</p>
            </div>
        </div>
    </>
  )
  
};

export default Home;
