import useStore from '../store';
import { useEffect } from 'react';
import Container from 'components/container';
import Link from 'next/link';

// object to pass in their respective API call
const optionsEA = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EA_API,
		'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
	}
};
//https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/?text=${quoteObj.quote}

const optionsQ = {
  headers: {
    'X-Api-Key': process.env.NEXT_PUBLIC_QUERY_API
  }
};
// https://api.api-ninjas.com/v1/quotes?category=inspirational&limit=0

export default function Home() {
  const setQuote = useStore(state => state.setQuote);
  const setIsLoading = useStore(state => state.setIsLoading);
  const refreshCount = useStore(state => state.refreshCount);
  
/* Below retrieves 10 online quotes tagged as inspirational, then for each, analyzes the emotion, and sets our main
quote to be the one with the most joy.
Our state boolean isLoading is set to false in the final promise which is evaluated in our JSX
This is done since the quote analysis and ranking (processing) can cause the quote being displayed to 
change in less than a second. This boolean makes sure to display the quote once all processing is completed.
We also have a Refresh button that changes a state variable that is being watched. Upon being changed, it
causes the API calls to run again, hence a refresh
 */
  useEffect( () => {
    fetch('http://localhost:3000/api/fakeData/quotesData', optionsQ)
    .then((response) => response.json())
    .then((response) => {
      let maxJoy = -1;
      for (let quoteObj of response){
        fetch(`http://localhost:3000/api/fakeData/quoteAnalysis`, optionsEA)
        .then(response => response.json())
        .then(quoteAnalysis => {
          if (quoteAnalysis.emotion_scores.joy > maxJoy){
            maxJoy = quoteAnalysis.emotion_scores.joy;
            setQuote(quoteObj.quote);
          }
        })
      }
    })
    .then(() => {
      setIsLoading(false);
    })
  }, [refreshCount]);

  
  return (
    <div>
      <Container/>
      <div className='linkContainer'>
        <Link href="/creator">About Me</Link>
      </div>
    </div>
  )
}
