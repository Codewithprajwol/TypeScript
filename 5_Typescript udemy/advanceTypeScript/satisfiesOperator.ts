type properties='red'|'green'|'blue';

type RGB=[redd:number,ggreen:number,bblue:number];
const color={
    red:[255,0,0],
    green:'#00ff00',
    blue:[255,0,0]
}satisfies Record<properties,RGB |string>;

const redComponent=color.red[0]


// if(color.green==='string'){//?here in this case we have to use this ...so not use this we can use satisfies keyword which will pre-calculate the type of the particular key and we don't have to check or type narrowing them again.

//     const greenComponent=color.green.toUpperCase()
// }

    const greenValue=color.green.toUpperCase()//? now here type of the green is pre-checked so typeScript doesnot throws an error.
    
    // const blueValue=color.blue.toUpperCase()//! here it will throw error since .toUpperCase method doesnot exist in array 