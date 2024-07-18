import { useState } from 'react'
import InputArea from './components/InputArea'
import Button from './components/Button'


export default function Keyboard() {


    const [inputText, setInputText] = useState("")
    const [isCapsOn, setIsCapsOn] = useState(false)
    const [isShiftOn, setIsShiftOn] = useState(false)



    function handleKeyClick(keys) {

        if (keys === 'Space') {
            setInputText(inputText + " ");
        }

        else if (keys === 'Tab') {
            setInputText(inputText + "   ");
        }

        else if (keys === 'Enter') {
            setInputText(inputText + "\n");
        }

        else if (keys === "Backspace") {
            if (inputText.length === 0) return;
            const newContent = inputText.slice(0, inputText.length - 1);
            setInputText(newContent);
        }

        else if (keys === "CapsLock") {
            setIsCapsOn(!isCapsOn)
        }

        else if (keys === "Shift") {
            setIsShiftOn(!isShiftOn)
        }
        else {
            let newChar = keys;
            if (isCapsOn) {
                newChar = keys.toUpperCase();
            } else if (isShiftOn) {
                newChar = keys.toUpperCase();
            }
            else {
                newChar = keys.toLowerCase();
            }

            setInputText(inputText + newChar);
            if (isShiftOn) {
                setIsShiftOn(false);
            }
        }
    }




    return (
        <div className='flex justify-center h-screen items-center bg-slate-700'>

                <div className='  w-2/3 border-4 border-black rounded-lg p-8 bg-slate-400'>

                    <div className='p-5 bg-gray-200 border rounded-t-lg'>

                        <InputArea text={inputText} setText={setInputText}></InputArea>
                    </div>
                    <div className=" bg-gray-200 p-1 border rounded-b-lg">

                        <Button handleKeyClick={handleKeyClick} isShiftOn={isShiftOn} isCapsOn={isCapsOn} />

                    </div>

            </div>
        </div>
    )
}