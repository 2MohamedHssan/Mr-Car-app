function LodImge({src,fileSelcethandler,imageUrl}) {
  const filUploderhandler = async (e) => {
    e.preventDefault()
    document.getElementById('click').click()
  }

  return (
    <div>
      <input type="file" onChange={fileSelcethandler} id='click' hidden />
      {imageUrl ? <img src={imageUrl} alt='image' style = {{ width: '100%',maxHeight:'300px' }} /> : <img src={`../${src}`} alt='Add car Image' style = {{ width: '100%' }} />}
      <div className='bg-[#ffa500] p-2 text-white text-center cursor-pointer font-bold text-xl w-full' onClick={filUploderhandler}>Load Car Image </div>
    </div>
  )
}

export default LodImge