import useStore from '../store';
import { useEffect } from 'react';


const optionsEA = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
	}
};

const optionsQ = {
  headers: {
    'X-Api-Key': ''
  }
};

export default function Home() {

  const a = useStore(state => state.a);
  const setA = useStore(state => state.setA);
  

  useEffect( () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational&limit=8', optionsQ)
    .then((response) => response.json())
    .then((response) => {
      setA(response);
    });

    fetch('https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.', optionsEA)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }, []);

  
  return (
    <div>
    <h1>Marlon:</h1>
    
      {a && a.map( (q) => {
      return (
      <div>{q.quote}<br></br></div>
      )
    }
    )}
    
    </div> 
  )
}
