import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import { Button, Card } from 'semantic-ui-react';

const IndexPage =({notes})=>{
  return(
    <div className='notes-container'>
      <h1>Notes</h1>
      <div className='grid wrapper'>
        
        {notes.map(note =>{
          return(
            
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>
                        {note.title}
                      </a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>                    
                    <Button primary>Visualizar</Button>
                  </Link>
                              
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Alterar</Button>
                  </Link> 
                </Card.Content>  
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  );

}


//https://note-app-khaki.vercel.app
//http://localhost:3000/api/notes
IndexPage.getInitialProps = async () =>{
  const res = await fetch('http://localhost:3000/api/notes');
  const {data} = await res.json();
  return{notes: data}
}

export default IndexPage;