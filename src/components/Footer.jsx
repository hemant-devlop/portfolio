const Footer = () => {
  return (
    <div className='d-sm-flex justify-content-sm-evenly bg-dark text-white flex-wrap p-4'>
      <div className='mb-4 mb-sm-0'>
        <h3 className='font'>Contact Me</h3>
        <p className="m-0">Email:<a href="mailto:hemant.devlop@gmail.com?subject=Job%20Opportunity&body=Hi%20Hemant,%0D%0AI'm%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you." aria-label="send_email" className='text-white text-decoration-none  '> Hemant.devlop@gmail.com</a></p>
        <p>Phone:<a href="tel:+917027122563" aria-label="phone" className='text-white text-decoration-none'> 7027122563</a></p>
      </div>
      <div className='mb-3 mb-sm-0 '>
        <h3 className='font'>Follow Me</h3>
        <a href="https://github.com/hemant-devlop" aria-label="github" target="_blank" className="btn  rounded-0 text-white"><i className="bi bi-github fs-1"></i></a>
        <a href="https://www.linkedin.com/in/hemantdevloper/" aria-label="linkedin" target="_blank" className="btn  rounded-0 text-white"><i className="bi bi-linkedin fs-1"></i></a>
        <a href="https://www.linkedin.com/in/hemantdevloper/" aria-label="instagram" target="_blank" className="btn  rounded-0 text-white"><i className="bi bi-instagram fs-1"></i></a>

      </div>
      <div className=''>
        <h3 className='font'>Address</h3>
        Palla no.1,shiv colony <br />
        Faridabad,Haryana <br />
        India,121003
      </div>
      <div className='w-100 text-center pt-3'>
        © 2025 Hemant.devlop All rights reserved.
      </div>
    </div>
  )
}

export default Footer
