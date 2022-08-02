
import Head from 'next/head';
import Image from 'next/image';


function Index(){
    return(
        <>
            <Head>
                <title>Chad Fernandez, 🇵🇭, Student</title>
            </Head>
            <div className='flex flex-col items-center justify-center h-screen m-auto bg-gradient-to-r from-[#FB8D89] via-[#FEF085] to-[#A9DAC8] backdrop-blug-xl animate-gradient-xy'>
                <div className='px-4 py-8 border-2 border-[#FFFCFF] bg-[#FFFCFF] shadow-2xl text-[#50514F] font-medium rounded-3xl'>
                    <div className='flex justify-center'>
                        <Image src={'/android-chrome-512x512.png'} width={70} height={70} />
                    </div>
                    <div className='flex justify-center mt-5'>
                        <p className='w-[60vh]'>
                            Sorry,
                            <br />
                            <br />
                            My website is not ready yet. I will update this page as new things are
                            up and running.
                            <br />
                            <br />
                            You can visit this website's repository at{' '}
                            <a className='hover:text-sky-500 text-sky-700' href="https://github.com/chof64/chof64">github.com/chof64/chof64</a>{' '}
                            to keep track of my progress.
                            <br />
                            <br />
                            All the best for now!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index