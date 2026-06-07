
const Resume = () => {
  const googleDriveId = '177u2FZfpJXQfHu9A6Wn9_vnIDntAPa_G';
  return (
    <div className='relative w-full h-full pt-[141.4286%] mx-auto pb-0 shadow-md  mb-[ 0.9em]'>
      <div className='absolute bottom-10 z-99 transform translate-x-1/2 right-1/2 '>
        <a href={`https://drive.google.com/file/d/${googleDriveId}/view?usp=drivesdk`} aria-label="resume downloading" className="  font px-10 py-2.5 rounded transition duration-700 bg-black text-white ">Download</a>
      </div>
      <iframe loading="lazy" className='absolute w-full h-full top-0 left-0  p-0 m-0 '
        src="https://www.canva.com/design/DAG1GF02tPg/Up-MukRiRuAYZrn9b2o7YA/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
      </iframe>
    </div>);
};

export default Resume;

