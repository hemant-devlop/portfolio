
const Resume = () => {
  const googleDriveId = '1Mg8RKknZYiQjchGmg32FHnAf7q9hmevw'; // ID from
  // https://drive.google.com/file/d/147ramDx9a-84fNPAIIIDUkVADhsGyG2t/view?usp=sharing
  return (
    <div className="mt-16 text-center">
      <div className='pt-4'>
        <a href={`https://drive.google.com/file/d/${googleDriveId}/view?usp=drivesdk`} className="border hover:bg-black/90 hover:text-white border-black/80 font px-4 py-2 rounded transition duration-700">Download</a>
      </div>
      <div className='relative w-full h-full pt-[141.4286%] mx-auto pb-0 shadow-md mt-[1.6em] mb-[ 0.9em]'>
        <iframe loading="lazy" className='absolute w-full h-full top-0 left-0  p-0 m-0 '
          src="https://www.canva.com/design/DAG1GF02tPg/Up-MukRiRuAYZrn9b2o7YA/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>
      {/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAG1GF02tPg&#x2F;Up-MukRiRuAYZrn9b2o7YA&#x2F;view?utm_content=DAG1GF02tPg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Hemant kumar</a> */}
    </div>
  );
};

export default Resume;
