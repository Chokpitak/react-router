import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-blue-500">
                <main className="flex-grow">
                    <section className="py-20 text-white w-full">
                        <div className="w-full px-4 py-12">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-5xl font-bold mb-12 text-center">Contact Me</h1>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-blue-600 p-8 rounded-lg flex items-center justify-center">
                                        <img src="https://tse4.mm.bing.net/th/id/OIP.042JlOfk0-FgQVrLYGMOSgHaEj?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Contact" className="w-full rounded-lg"/>
                                    </div>
                                    <div className="bg-blue-600 p-8 rounded-lg flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold mb-6">Address</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">ที่อยู่</h3>
                                                <p className="text-blue-100">90 ถนน เทศา ตำบลพระปฐมเจดีย์</p>
                                                <p className="text-blue-100">อำเภอเมืองนครปฐม </p>
                                                <p className="text-blue-100">นครปฐม 73000</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">เบอร์โทร</h3>
                                                <p className="text-blue-100">034-252-790 , 034-241-853</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                                <p className="text-blue-100">Saraban@nc.ac.th</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Contact
