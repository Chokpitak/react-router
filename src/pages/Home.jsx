import React from 'react'

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow bg-blue-500">
                    <section className="bg-blue-500 py-10 text-white w-full mt-50">
                        <div className="w-full px-4 py-12 text-center">
                            <h2 className="text-6xl font-bold mb-4">Welcome to My Web</h2>
                            <p className="text-xl">ยินดีต้อนรับสู่เว็บไซต์ของฉัน</p>
                            <button className="bg-blue-700 text-white px-8 py-2 rounded-full mt-6 hover:bg-blue-900 transition">เริ่มต้น!</button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home