export default function InputArea({ text, setText }) {

    return (
        <div>
            <input type="text" className="block w-full p-8 text-gray-900 border-2 border-black rounded-lg bg-gray-200 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tap to start"  value={text} onChange={(e) => setText(e.target.value)}  />
            </div>
    )
}