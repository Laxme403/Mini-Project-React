import react from 'react';

function Diet() {

  // const handleSaveToJson = () => {
  //   const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({count}));
  //   const downloadAnchorNode = document.createElement('a');
  //   downloadAnchorNode.setAttribute("href",     dataStr);
  //   downloadAnchorNode.setAttribute("download", "count.json");
  //   document.body.appendChild(downloadAnchorNode); // required htmlFor firefox
  //   downloadAnchorNode.click();
  //   downloadAnchorNode.remove();
  // }

  return (
    <>
   <div className="mt-4 flex flex-col bg-black rounded-lg p-4 shadow-sm">
  <h2 className="ai-story-maker-dream-htmlForm text-white font-bold text-2xl">AI Story Maker Dream htmlForm</h2>

  <div className="mt-4">
    <label className="text-black" htmlFor="title">Title</label>
    <input placeholder="Enter a title htmlFor your dream" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" type="text"/>
  </div>

  <div className="mt-4">
    <label className="text-black" htmlFor="description">Description</label>
    <textarea placeholder="Describe your dream in detail" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="description"></textarea>
  </div>

  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-black" htmlFor="emotions">Emotions</label>
      <input placeholder="What emotions did you feel during your dream?" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="emotions" type="text"/>
    </div>

    <div className="flex-1">
      <label className="text-black" htmlFor="symbols">Symbols</label>
      <input placeholder="Did you see any symbols in your dream?" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="symbols" type="text"/>
    </div>
  </div>

  <div className="mt-4 flex flex-row space-x-2">
    <div className="flex-1">
      <label className="text-black" htmlFor="themes">Themes</label>
      <input placeholder="What themes do you think your dream might be about?" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1" id="themes" type="text"/>
    </div>
  </div>

  <div className="mt-4 flex justify-end">
    <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900" id="generate-button" type="button">Generate</button>
  </div>

  <div className="mt-4">
    <textarea placeholder="Your AI-generated story will appear here" className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 h-48" id="story-output"></textarea>
  </div>
</div>


    </>
  )
}

export default Diet