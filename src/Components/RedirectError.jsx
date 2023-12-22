import React from 'react';
import YouTube from 'react-youtube';

const NotFoundPage = () => {
  const videoId = 'rcR4iBXgBVo';

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryColor">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-2xl font-bold mb-8">Oops! You seem to have tripped into the void...</h1>
        <p className="mb-6">Don't worry, happens to the best of us. Maybe you mistyped the URL, followed a broken link, or your time machine got a little wonky.</p>
        <p className="mb-6">Here are some things you can do:</p>
        <ul className="list-disc pl-4 mb-6">
          <li>Head back to <a href="/" className="underline">home</a> and start fresh.</li>
          {/* <li>Check out our <a href="/sitemap">sitemap</a> to see if the page you're looking for exists.</li> */}
          <li>
            Shoot us a message - we're always happy to help! You can find me on Github and raise an issue at <a target="_blank" href="https://github.com/WahajJaved20/Gumshudaa-NUCES" className="underline">Gumshuda NUCES</a>.
          </li>
        </ul>
        <p className="mb-6">And while you're here, enjoy this video:</p>
        <YouTube opts={{ height: '270', width: '100%' }} videoId={videoId} />
      </div>
    </div>
  );
};

export default NotFoundPage;
