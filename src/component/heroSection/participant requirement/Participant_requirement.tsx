import React from 'react'
import Image from 'next/image'



function ParticipantRequirement() {
    return (
        <div className='pt-12 pb-16 md:pb-40 mx-auto max-w-6xl px-4'>
            <div className="grid md:grid-cols-2 gap-8">
                <div className='flex md:items-start items-center justify-center md:justify-start'>
                    <Image className="object-cover rounded-3xl" alt="images"  width={420} height={420}    src='/assets/image/participation-requirement-image.png' />
                </div>
                <div className='mx-auto max-w-xl'>

                    <h2 className="mb-6 text-xl font-bold text-blue-600 flex md:items-start items-center justify-center md:justify-start">Participation Requirements</h2>
                    <div className={`text-black`}>
                        <ul className="space-y-2">
                            <div className='flex gap-2 relative'>
                                <div className=''><Image height={65} width={65} alt='image' src={'/assets/image/Screenshot 2025.png'} className="object-cover"/></div>
                                <p>Teams must be physically present at the venue in Lagos
                                    throughout the duration of the hacker house (March 24-29).</p>
                            </div>
                            <div className='flex gap-2'>
                                <div><Image height={55} width={55} alt='image' src={'/assets/image/Screenshot 2025.png'}/></div>
                                <p>Teams should ensure they can be fully engaged and
                                    attentive to their projects throughout this period.</p>
                            </div>
                            <div className='flex gap-2'>
                                <div><Image height={52} width={52} alt='image' src={'/assets/image/Screenshot 2025.png'}/></div>
                                <p>All participants will be required to adhere to the event
                                    guidelines and code of conduct..</p>
                            </div>
                            <div className='flex gap-2'>
                                <div><Image height={55} width={55} alt='image' src={'/assets/image/Screenshot 2025.png'}/></div>
                                <p>AIntellectual property created by teams during the hacker
                                    house will be retained by those teams.</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParticipantRequirement