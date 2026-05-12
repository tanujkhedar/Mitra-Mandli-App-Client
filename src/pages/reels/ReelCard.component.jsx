import { Forward, Heart, MessageCircle, Volume2, VolumeX  } from 'lucide-react'
import reel from '../../assets/reel.mp4'
import { useEffect, useState, useRef } from 'react'
import { api } from '../../app/Api.js'
import profile from '../../assets/profile.jpg'

const ReelCard = ({avatar, userName, video, likeCount, commentCount, index, muted, setMuted}) => {

    const videoRefs = useRef([]);
    

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.muted = muted;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [muted]);

  const handlePlayPause = (video) => {
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleMuteUnmute = () => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.muted = !video.muted;

    setMuted(video.muted);
  };


  return (
    <div className='
    flex 
    flex-col 
    justify-center
    items-center
    w-full
    max-w-5xl
    max-h-full
    aspect-9/16 
    snap-start 
    bg-gray-300 
    relative   
    mx-auto'>
        <video className='
        w-full 
        h-full 
        z-0 
        rounded' 
        ref={(el) => (videoRefs.current[index] = el)}
        src={video} 
        onClick={() =>
              handlePlayPause(videoRefs.current[index])
            }
        loop
        playsInline
        muted/>
        <button
        onClick={handleMuteUnmute}
        className="
        absolute
        top-5
        right-5
        z-20
        bg-black/40
        p-2
        rounded-full
        text-white"
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </button>
        <div className='
        z-10 
        absolute 
        bottom-20 
        p-4 
        flex 
        justify-between 
        items-end 
        w-full'>
            <div className='flex gap-4 items-center'>
                <img className='w-10 aspect-square rounded-full' src={avatar || profile} alt="avtar" />
                <div className='text-white' >{userName}</div>
                <button className='text-white border-2 border-purple-600 rounded-xl py-1 px-2' >Follow</button>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col items-center text-white'>
                    <Heart color='white'/>
                    <span>{likeCount}</span>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <MessageCircle color='white'/>
                    <span>{commentCount}</span>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <Forward color='white'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReelCard