import React from 'react';
import { Dna } from 'react-loader-spinner';

const Spinner1 = () => {
    return ( 
        <div className='LoaderSpinner text-center'>
               <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper dna-wrapper1"
                />
        </div>
     );
}
 
export default Spinner1;