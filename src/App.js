
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Application2 from './components/Forms/Application2'; 
import BrochureBack from './components/Forms/BrochureBack'; 
import BrochureFront from './components/Forms/BrochureFront'; 
import Authorization from './components/Forms/Authorization'; 
import HandBook from './components/Forms/HandBook'; 
import Job from './components/Forms/Job'; 
import Verification from './components/Forms/Verification'; 
import Employee from './components/Forms/Employee'; 
import Hipaa from './components/Forms/Hipaa'; 
import Nurse from './components/Forms/Nurse'; 
import Registered from './components/Forms/Registered'; 
import NursingStaffSection from './components/NursingStaffSection';
import HourlyRate from './components/HourlyRate';
import MedicalInfoSection from './components/MedicalInfoSection';
import Patients from './components/Patients';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <MainSection />
                            <NursingStaffSection />
                            <HourlyRate />
                            <MedicalInfoSection />
                            <Patients />
                            <Footer />
                        </>
                    } />
                    <Route path="/application2" element={<Application2 />} />
                    <Route path="/authorization" element={<Authorization />} /> 
                    <Route path="/brochureback" element={<BrochureBack />} /> 
                    <Route path="/brochurefront" element={<BrochureFront />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/handbook" element={<HandBook />} />
                    <Route path="/hipaa" element={<Hipaa />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/nurse" element={<Nurse />} />
                    <Route path="/registered" element={<Registered />} />
                    <Route path="/verification" element={<Verification />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
