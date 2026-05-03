import { Bookmark, Forward, Heart, MessageCircle } from 'lucide-react'
import React from 'react'

const PostCard = () => {
  return (
    <div className='mx-4 mt-4 bg-white shadow rounded-xl p-4'>
        <div className='flex'>
            <img className='w-12 rounded-full' src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="avtar" />
            <div className='mx-4'>
                <div className='font-semibold'>Tanuj Khedar</div>
                <div className='text-gray-500'>2 hour ago</div>
            </div>
        </div>
        <div className='my-4'> aur bhai kya haal chal</div>
            <img className='rounded-xl w-full aspect-square' src="https://img.magnific.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="post img"  />
        <div className='flex justify-around mt-4'>
            <button>
                <Heart color='gray'/>
            </button>
            <button>
                <MessageCircle color='gray'/>
            </button>
            <button>
                <Forward color='gray'/>
            </button>
            <button>
                <Bookmark color='gray'/>
            </button>
        </div>
        <div></div>
    </div>
  )
}

export default PostCard