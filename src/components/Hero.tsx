import React, { useState } from 'react';
import { invoke } from "@tauri-apps/api";

const Hero = () => {
  const [ result, setResult ] = useState<number>(0);


  return (
    <div>
      <h1>tauri-countUpDown-app</h1>
      <button 
        id='increment_btn' 
        onClick={ 
          () => { invoke("increment")
            .then((res) => setResult(res as number)); 
          }
        }
      >
        Increment
      </button>
      <button 
        id='decrement_btn' 
        onClick={
          () => { invoke("decrement")
            .then((res) => setResult(res as number)); 
          } 
        }
      >
        Decrement
      </button>
      <div id='result'>{ result }</div>
    </div>

  );
};

export default Hero;
