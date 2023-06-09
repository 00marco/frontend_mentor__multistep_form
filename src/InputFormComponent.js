function InputFormComponent() {
    return (  
        <div className="bg-white">
            <label className="block text-sm font-semibold text-blue-900" for="nameId">Placeholder</label>
            <input className="border rounded-s p-2 px-3 text-gray-500" id="nameId" type="text" placeholder="Placeholder"></input>
        </div> 
    );
}

export default InputFormComponent