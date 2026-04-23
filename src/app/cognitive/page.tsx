import React from "react";
import Image from "next/image";
import { Brain, Users, Clock, AlertCircle, Lightbulb, TrendingUp, CheckCircle, Cpu, Zap, Target, Eye, Mic } from "lucide-react";
import Footer from "@/components/Footer";

export default function CognitiveTestsPage() {
    return (
        <>
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white py-24 px-6">
                <div className="absolute inset-0 bg-[url('/images/testsforcognitive/VisserProjectThumbnail.png')] opacity-10 bg-cover bg-center"></div>
                <div className="relative max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                        VR Healthcare · Unity · AI Integration
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        VR Cognitive Impairment Tests
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A Virtual Reality application for detecting signs of mild cognitive impairment and 
                        Alzheimer&apos;s disease through immersive, automated testing.
                    </p>
                </div>
            </div>

            {/* ========== SECTION 1: INTRO ========== */}
            
            {/* Project Overview Cards */}
            <div className="bg-gradient-to-b from-white to-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                            <div className="text-emerald-600 font-bold text-sm mb-2">PROJECT TYPE</div>
                            <div className="text-slate-900 font-semibold text-lg">Healthcare VR Application</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                            <div className="text-emerald-600 font-bold text-sm mb-2">DURATION</div>
                            <div className="text-slate-900 font-semibold text-lg">January - May 2025</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                            <div className="text-emerald-600 font-bold text-sm mb-2">MY ROLE</div>
                            <div className="text-slate-900 font-semibold text-lg">Lead VR Developer</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                            <div className="text-emerald-600 font-bold text-sm mb-2">PLATFORM</div>
                            <div className="text-slate-900 font-semibold text-lg">Meta Quest 3</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Problem & Audience */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* The Problem */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
                        </div>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>
                                Traditional cognitive impairment tests like the Prospective Memory Test (PMT) require 
                                trained proctors to administer and monitor patients throughout the entire examination. 
                                This creates significant resource constraints for healthcare facilities.
                            </p>
                            <p className="font-semibold text-slate-900">
                                How can we automate cognitive testing while maintaining accuracy and creating a more 
                                immersive, realistic testing environment than 2D computer screens?
                            </p>
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Target Audience</h2>
                        </div>
                        <ul className="space-y-3 text-slate-700 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Medical Facilities:</strong> Hospitals and clinics needing efficient cognitive screening</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Patients:</strong> Individuals being tested for mild cognitive impairment and Alzheimer&apos;s</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Healthcare Providers:</strong> Doctors and researchers analyzing cognitive health</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                <span><strong>Research Institutions:</strong> Organizations studying VR&apos;s effectiveness in healthcare</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* About the Project */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">Project Overview</h2>
                        <div className="w-16 h-1 bg-emerald-500 mb-8"></div>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            This VR application digitizes the Prospective Memory Test (PMT), developed by Loewenstein 
                            and Acevedo in 2001 and revised in 2015. The test evaluates whether users show signs of 
                            mild cognitive impairment and Alzheimer&apos;s disease through specific task-based assessments.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            The application includes two primary tests: the Money Test (giving specific amounts of 
                            currency to a virtual proctor) and the Pill Test (organizing medication in a pillbox based 
                            on a weekend schedule). Users are fully immersed in a realistic office environment where 
                            they can physically interact with objects.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            By bringing this test into VR, we eliminate the need for constant proctor supervision while 
                            providing a more realistic testing environment than traditional 2D computer screens.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/testsforcognitive/cognitive-money-table.png"
                                alt="VR Cognitive Test - Money Scene"
                                width={700}
                                height={467}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Composition */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Team & Collaboration</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Working with medical professionals and researchers</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <div className="font-semibold text-slate-900 mb-1">Lead VR Developer</div>
                            <div className="text-sm text-slate-600">Unity & C# Development</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                            <div className="font-semibold text-slate-900 mb-1">Medical Advisors</div>
                            <div className="text-sm text-slate-600">Dr. Curiel & Research Team</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <div className="font-semibold text-slate-900 mb-1">Faculty Advisor</div>
                            <div className="text-sm text-slate-600">Professor Visser</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
                            <div className="font-semibold text-slate-900 mb-1">Previous Developer</div>
                            <div className="text-sm text-slate-600">2D Version Foundation</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== SECTION 2: CONTENT (Process & Methods) ========== */}

            {/* Demo Video Section */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">VR Experience Demo</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">See the tests in action</p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://drive.google.com/file/d/1aqx9bf-druf4OEAXA89vpXfFLBxMRmwL/preview"
                            title="VR Cognitive Tests walkthrough video"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    <div className="text-center">
                        <a 
                            href="https://drive.google.com/file/d/1ifI91nM_c70mtkrUAmJlrfxwZHgaA9SF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                        >
                            View OpenAI API Demo
                        </a>
                    </div>
                </div>
            </div>

            {/* Test Descriptions */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">The Two Tests</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Based on the revised Prospective Memory Test (PMT)</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Test A: Money Test */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Target className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Test A: Money Test</h3>
                            </div>
                            <div className="mb-6 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/testsforcognitive/cognitive-money-scene.png"
                                    alt="Money Test Scene"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    The user opens an envelope containing dollar bills and coins. They must give the 
                                    virtual proctor <strong>$10.25</strong> and give themselves <strong>$5.50</strong>.
                                </p>
                                <p>
                                    The system tracks which bills are picked up, who receives them, and how long each 
                                    action takes. Scoring is based on accuracy and the number of reminders needed.
                                </p>
                            </div>
                        </div>

                        {/* Test B: Pill Test */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Test B: Pill Test</h3>
                            </div>
                            <div className="mb-6 rounded-xl overflow-hidden">
                                <Image
                                    src="/images/testsforcognitive/cognitive-pills.png"
                                    alt="Pill Test Scene"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    The user imagines a weekend trip and must organize pills (multivitamin, blood 
                                    pressure medication, sleeping pill) into a pillbox based on a schedule.
                                </p>
                                <p className="text-sm bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <strong>Schedule:</strong> Daily multivitamin with breakfast, blood pressure 
                                    medication morning and evening, sleeping pill before bed. Trip spans Friday evening 
                                    through Sunday evening.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process & Methods */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Development Process</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">From 2D to immersive 3D VR</p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-emerald-600 font-bold text-xl">1</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Foundation Analysis</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        Analyzed the existing 2D Unity version created by Katarzyna Paternak, along with 
                                        medical documentation from Dr. Curiel&apos;s team. Studied the PMT protocol, scoring 
                                        criteria (Intention to Perform, Accuracy of Response, Need of Reminders), and 
                                        testing procedures to ensure medical accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-blue-600 font-bold text-xl">2</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">3D Asset Creation</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Created and sourced all necessary 3D models using multiple tools and repositories:
                                    </p>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Blender:</strong> Custom modeling for dollar bills, coins, pill bottles, and pillbox</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Unity Asset Store:</strong> Office furniture, table, clock, and environmental props</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Sketchfab:</strong> Pill bottles and supplementary objects</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-purple-600 font-bold text-xl">3</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">VR Implementation</h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Built the application in Unity using the XR Interaction Toolkit for Meta Quest 3 
                                        integration. Developed C# scripts for object interaction, scoring logic, and test flow.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed">
                                        Created a tutorial scene to familiarize users with VR controls (grabbing objects, 
                                        moving items) before beginning the actual cognitive tests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                                    <span className="text-orange-600 font-bold text-xl">4</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Integration</h3>
                                    <p className="text-slate-700 leading-relaxed">
                                        Integrated OpenAI&apos;s Whisper API for speech-to-text transcription and ChatGPT API 
                                        for evaluating user responses when asked to repeat instructions. This eliminates 
                                        the need for human evaluation of verbal recall accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Implementation */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Deliverables</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600">Key features and systems developed</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Eye className="w-6 h-6" />,
                            title: "VR Interaction System",
                            description: "XR Grab Interactable components with physics-based object handling. Rigidbody and collider systems for realistic object manipulation and collision detection."
                        },
                        {
                            icon: <Target className="w-6 h-6" />,
                            title: "Scoring Engine",
                            description: "Automated scoring based on three criteria: Intention to Perform, Accuracy of Response, and Need of Reminders. Tracks timing, object selection, and placement accuracy."
                        },
                        {
                            icon: <Cpu className="w-6 h-6" />,
                            title: "SpawnOnGrab Scripts",
                            description: "Dynamic object spawning system that triggers when users interact with specific items (e.g., opening envelope spawns money on table)."
                        },
                        {
                            icon: <Zap className="w-6 h-6" />,
                            title: "Demonstration System",
                            description: "Smooth animation system showing correct object movement paths to demonstrate proper test procedures before user attempts."
                        },
                        {
                            icon: <Mic className="w-6 h-6" />,
                            title: "AI Voice Processing",
                            description: "Whisper API for speech-to-text transcription and ChatGPT API for evaluating verbal response accuracy against test instructions."
                        },
                        {
                            icon: <Brain className="w-6 h-6" />,
                            title: "Collision Detection",
                            description: "OnTriggerEnter/OnCollisionEnter methods tracking correct pill and money placement in designated zones for automated scoring."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold text-slate-900">{feature.title}</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Showcase */}
            <div className="bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Visual Design Elements</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">3D models and environments</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Tutorial Scene</h3>
                                <Image
                                    src="/images/testsforcognitive/cognitive-tutorial.png"
                                    alt="Tutorial scene with apple and plate"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Users learn VR controls by picking up an apple and placing it on a green plate
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Money Scene</h3>
                                <Image
                                    src="/images/testsforcognitive/cognitive-money-table.png"
                                    alt="Money test table setup"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Realistic dollar bills, coins, envelope, and trays on a wooden table
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Pill Box Design</h3>
                                <Image
                                    src="/images/testsforcognitive/cognitive-pillbox.png"
                                    alt="Custom-designed pill box"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Custom Blender model with FRI/SAT/SUN days and AM/PM compartments
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 mb-3">Pills Scene</h3>
                                <Image
                                    src="/images/testsforcognitive/cognitive-pills-scene.png"
                                    alt="Custom-designed pill box"
                                    width={600}
                                    height={400}
                                    className="rounded-lg w-full h-auto mb-3"
                                />
                                <p className="text-sm text-slate-600">
                                    Pill bottles with labels and pills sourced from Sketchfab, arranged on a table for the pill test
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challenges */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Challenges & Solutions</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">Technical and design obstacles overcome</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-yellow-100 rounded-lg">
                                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">VR Complexity</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> VR adds exponentially more possibilities than 2D—users can throw objects, walk outside test areas, and encounter physics glitches.</p>
                                <p><strong>Solution:</strong> Implemented boundary constraints, object respawn systems, and robust physics handling to manage unexpected user behavior while maintaining test validity.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <Cpu className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">OpenAI Integration</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> Implementing OpenAI APIs (Whisper, ChatGPT) on Meta Quest 3 headset faced permission issues, internet access limitations, and API key privacy concerns.</p>
                                <p><strong>Solution:</strong> Created a separate demo showcasing API functionality. Continuing to work on secure implementation for headset deployment.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Zap className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Performance Optimization</h3>
                            </div>
                            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                                <p><strong>Challenge:</strong> High-quality 3D office models (Professor Visser&apos;s and Dr. Lisetti&apos;s offices) caused significant frame rate drops on the Quest 3.</p>
                                <p><strong>Solution:</strong> Used generic office assets from Unity Asset Store instead. Future iterations will optimize high-quality models through poly reduction and LOD systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Methods & Technology Stack</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">Development</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Unity Game Engine</li>
                                <li>• C# Programming</li>
                                <li>• VS Code IDE</li>
                                <li>• XR Interaction Toolkit</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">3D Assets</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Blender 3D</li>
                                <li>• Unity Asset Store</li>
                                <li>• Sketchfab</li>
                                <li>• Custom modeling</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">AI & Audio</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• OpenAI Whisper API</li>
                                <li>• ChatGPT API</li>
                                <li>• NaturalReader TTS</li>
                                <li>• Voice Recognition</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3">Hardware</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li>• Meta Quest 3</li>
                                <li>• VR Controllers</li>
                                <li>• 6-DOF Tracking</li>
                                <li>• Hand Tracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== SECTION 3: CLOSURE ========== */}

            {/* Key Learnings */}
            <div className="bg-gradient-to-b from-white to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Learnings</h2>
                        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600">What this project taught me</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <Lightbulb className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">VR Development Expertise</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Mastered Unity&apos;s XR Interaction Toolkit, physics-based VR interactions, and Meta Quest 3 
                                development. Learned to design for 3D space constraints and handle unexpected user 
                                behaviors that don&apos;t exist in 2D applications.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-100 rounded-lg">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Healthcare Technology</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Gained insight into medical testing protocols, cognitive assessment methodologies, and 
                                the importance of precision in healthcare applications. Learned to balance user experience 
                                with strict medical requirements.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Target className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">AI Integration</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Explored OpenAI API integration for speech recognition and natural language evaluation. 
                                Discovered the challenges and opportunities in combining AI with VR for automated assessment 
                                systems.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-orange-100 rounded-lg">
                                    <TrendingUp className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">3D Modeling Skills</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                                Developed proficiency in Blender for creating custom 3D assets. Learned to optimize models 
                                for VR performance and create realistic textures for medical-grade accuracy in object representation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Reflection */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Impact & Reflection</h2>
                    <div className="w-16 h-1 bg-white/30 mx-auto mb-8"></div>
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p className="text-blue-50">
                            This project represents the intersection of healthcare innovation and immersive technology. 
                            By automating cognitive testing while increasing immersion, we&apos;re making early detection of 
                            cognitive impairment more accessible and scalable for medical facilities.
                        </p>
                        <p className="text-blue-50">
                            The shift from 2D to VR creates a fundamentally more realistic testing environment—users 
                            physically manipulate objects in 3D space rather than clicking and dragging on a screen. This 
                            closer simulation of real-world tasks may yield more accurate cognitive assessments.
                        </p>
                        <p className="text-white font-semibold text-xl">
                            Beyond technical achievement, this project demonstrates VR&apos;s potential to transform medical 
                            diagnostics, making sophisticated testing procedures more efficient and accessible.
                        </p>
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Future Development</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 shadow-lg border border-emerald-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Additional Tests</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Expand the application to include NRAT and LASSI exams—additional cognitive assessments 
                            that follow similar protocols to the PMT, creating a comprehensive VR testing suite.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Environment Optimization</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Optimize high-quality office models (Professor Visser&apos;s and Dr. Lisetti&apos;s offices) through 
                            polygon reduction and LOD systems to maintain visual fidelity while achieving target frame rates.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border border-purple-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">AI Deployment</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Resolve OpenAI API integration challenges on Meta Quest 3 to enable fully automated 
                            voice-based instruction recall and evaluation without external processing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Research Goals */}
            <div className="bg-slate-50 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Research Implications</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        This project aims to contribute research on how full immersion in VR environments affects 
                        cognitive task performance and memory retention compared to traditional 2D computer-based testing. 
                        The findings could inform future development of VR-based medical assessments across multiple 
                        healthcare domains.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}