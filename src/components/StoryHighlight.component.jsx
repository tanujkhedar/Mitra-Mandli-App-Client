const storyData = <div className='shrink-0'>
            <img className='w-15 rounded-full border-3 border-purple-600 p-0.5 m-0.5' src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="story" />
            <div className='text-center text-gray-500 font-medium'>Tanuj</div>
        </div>

let i = 0;
let stories = [];

while(i<10) {
    stories.push(storyData);
    i++;
}

const StoryHighlight = () => {
  return (
    <div className='flex overflow-x-auto bg-white shadow py-4 px-6 gap-10'>
        {stories.map((item, i) => item)}
    </div>
  )
}

export default StoryHighlight