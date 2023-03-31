
import Career from "./Component/Career";

function Cobj(){
    return(
        <>
            
<Career/>

<div className="sm:col-span-2">
  <label htmlFor="Career Objective" className="block text-sm font-medium text-gray-700">
  Career Objective
  </label>
  <div className="mt-1">
    <textarea
      id="Career Objective"
      name="Career Objective"
      rows={4}
      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
      defaultValue={''}
    />
  </div>
</div>
        </>
    );
}
export default Cobj;