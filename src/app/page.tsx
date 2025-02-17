import React from 'react';
import CopyEmail from "@/components/clientComps/CopyEmail";

export default function Home() {
  return (
    <section className='relative h-screen bg-cover bg-center'
    style={{backgroundImage: 'url(/backgrounds/snow_mountain1.jpg)'}}>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center'>
        <img src='/avatars/frieren.jpg' alt='MidC Avatar' className='rounded-full mx-auto mb-5 h-72 w-72'></img>
        <h1 className="text-7xl font-bold">MidC</h1>
        <div className="flex justify-center mt-5 space-x-5">
              <a href="https://osu.ppy.sh/users/20461077" target="_blank" rel="noopener noreferrer">
                <img src='/icons/osu.png' alt='osu!' className='rounded-full mx-auto h-20 w-20'></img>
              </a>
              <a href="https://github.com/MidVC" target="_blank" rel="noopener noreferrer">
                <img src='/icons/github.png' alt='github' className='rounded-full mx-auto h-20 w-20'></img>
              </a>
              <a href="https://discord.com/users/848463695998353459" target="_blank" rel="noopener noreferrer">
                <img src='/icons/discord.png' alt='discord' className='rounded-full mx-auto h-20 w-20'></img>
              </a>
              <CopyEmail />
            </div>
      </div>
    </section>
  );
}
