
 export default function Button({handleKeyClick,isShiftOn,isCapsOn}){

    const keys = [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
        '@', '.com',"%", 'Space', '{', '}', '<', '>'
      ];

      const getWidthClass = (key) => {
        switch (key) {
          case 'CapsLock':
          case 'Backspace':
            return 'w-24';
          case 'Shift':
          case 'Enter':
          case 'Tab':
          case '.com':
            return 'w-20';
          case 'Space':
            return 'w-1/2';
          default:
            return 'w-14';
        }
      };
        
    return(

        <div >
            
        {keys.map((key , index)=> <button onClick={()=>handleKeyClick(key)}  key={index} className={`py-2.5 px-5 ${getWidthClass(key)}  me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none w- bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`} >

          <div> {isCapsOn || isShiftOn ? <p>{key.length <=1 ? key.toUpperCase() : key}</p> : <p>{key}</p> }</div>
          
        </button>)}

        </div>
    )
 }