import React from 'react'

const About = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                    <section className="bg-blue-500 py-20 text-white w-full">
                        <div className="w-full px-4 py-12">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-blue-600 p-8 rounded-lg">
                                        <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png" alt="Profile" className="w-full rounded-lg mb-4"/>
                                        <h2 className="text-2xl font-bold mb-2">Chokpitak</h2>
                                        <p className="text-blue-200">Student</p>
                                    </div>
                                    
                                    <div className="bg-blue-600 p-8 rounded-lg flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
                                        <p className="text-blue-100 leading-relaxed mb-4">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure neque quos, dolores cum, officia excepturi ipsum quasi rem nam facere veritatis, amet velit delectus deleniti. Quidem cumque hic ipsa eos.
                                        </p>
                                        <p className="text-blue-100 leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga modi repudiandae facere error!
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-blue-600 p-8 rounded-lg mb-12">
                                    <h3 className="text-2xl font-bold mb-6">Skills</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-blue-700 p-4 rounded">
                                            <h4 className="font-bold mb-2">Frontend</h4>
                                            <ul className="text-blue-100 text-sm space-y-1">
                                                <li>• React</li>
                                                <li>• Tailwind CSS</li>
                                                <li>• JavaScript</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-700 p-4 rounded">
                                            <h4 className="font-bold mb-2">Backend</h4>
                                            <ul className="text-blue-100 text-sm space-y-1">
                                                <li>• Node.js</li>
                                                <li>• Express</li>
                                                <li>• MongoDB</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-700 p-4 rounded">
                                            <h4 className="font-bold mb-2">Tools</h4>
                                            <ul className="text-blue-100 text-sm space-y-1">
                                                <li>• Git</li>
                                                <li>• VS Code</li>
                                                <li>• Docker</li>
                                            </ul>
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

export default About