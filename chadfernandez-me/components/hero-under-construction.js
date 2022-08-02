import Image   from "next/image"


function HeroUnderConstruction(){
    return(
        <>
            <div className='flex flex-col items-center justify-center h-[95vh]'>
                <div className='w-[78vw] md:w-[60vw] lg:max-w-[55vw] xl:max-w-[40vw] px-6 py-8 border 2 border-[#FFFCFF] bg-[#FFFCFF] shadow-2xl text-[#50514F] font-medium rounded-3xl'>
                    <div className='flex justify-center'>
                        <Image src={'/android-chrome-512x512.png'} width={70} height={70} alt={'chadfernandez.me icon'} />
                    </div>
                    <div className='flex justify-center'>
                        <p className=''>
                            Sorry,
                            <br />
                            <br />
                            My website is not ready yet. I will update this page as new things are
                            up and running.
                            <br />
                            <br />
                            You can visit this website&apos;s repository at{' '}
                            <a className='hover:text-sky-500 text-sky-700' href="https://github.com/chof64/chof64">github.com/chof64/chof64</a>{' '}
                            to keep track of my progress.
                            <br />
                            <br />
                            All the best for now!
                        </p>
                    </div>
                </div>
            </div>
            <div className='-z-50 blur-3xl absolute inset-0 w-screen h-screen bg-gradient-to-r from-[#FB8D89] via-[#FEF085] to-[#A9DAC8] backdrop-blug-xl animate-gradient-xy'/>

        </>
    )
}

export default HeroUnderConstruction
