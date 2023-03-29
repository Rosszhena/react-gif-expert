import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragones']);

    const onAddCategory = ( newCategory ) => {

      if( categories.includes(newCategory) ) return;
       
        //categories.push( newCategory )
       setCategories( [ newCategory, ...categories] )
     //console.log(categories)

    }

  return (

    <>

     <h1>GifExpertApp</h1>

      <AddCategory
    
        onNewCategory={ value => onAddCategory( value )}
        />

           { 
            categories.map( (category) => (
              <GifGrid 
              key={ category } 
              category={ category } />
              ))
           }
         
    </>
   
  )
}