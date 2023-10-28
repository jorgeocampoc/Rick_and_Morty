import React from 'react'
import { UseFetchChapters } from '../hooks/UseFetchChapters'
import { UseCounter } from '../hooks/Counter';
import { IsLoading } from '../components/IsLoading';
import { CardChapter } from '../components/CardChapter';
import { FooterSearch } from '../components/FooterSearch';

export const Chapters = () => {

  const { counter, dec, inc } = UseCounter();
  const { chapters, info, isLoading } = UseFetchChapters(counter);
  

  return (
    <>
    <div className='container pb-5 '>
      <h2 className='text-center p-4 m-auto'>Lista de capitulos</h2>
     
      <div className=''>
        {
          isLoading? <IsLoading/>: 
          <div className='row  '>
            {
              chapters.map( chapter =>{
                return (
                  <div className='col-12 col-sm-6 mb-4' key={chapter.id}> 
                    <CardChapter 
                    id = {chapter.id}
                    name = {chapter.name}
                    episode = {chapter.episode}
                    air_date = {chapter.air_date}
                    />
                  </div>
                )
              } )
            }
          </div>
        }
      </div>
     <FooterSearch counter = {counter} dec = {dec} inc = {inc} info = {info}/>
      

      
    </div>
    </>
  )
}
