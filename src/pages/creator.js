import Link from 'next/link';

const Bio = () => 
(
   
    <div className='container2'>
         <h1>Who Am I?</h1>
         <div id="bioContainer">My name is Marlon Pimentel and I am a Software Engineer.
         I am a man of many talents, many skills. Both a creative and a visionary.
         Challenges interest me. Beyond my drive to understand things, I love
         to create through different ways. This app is simply one of them.</div>
         <div className="linkContainer">
            <Link href="/">Main Page</Link>
        </div>
    </div>
);

export default Bio;
