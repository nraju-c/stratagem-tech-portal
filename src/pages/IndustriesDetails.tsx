


import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { industries } from '../components/Industrydata';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const IndustriesDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  console.log("IndustriesDetails rendered");

const handleBack = () => {
  navigate('/industries'); // Will go to your /industries route
};

  const decodedName = decodeURIComponent(name || '');
  const service = industries.find(
    (s) => s.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!service)
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900 text-red-500 text-xl">
        Service not found
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Back Button */}
 <div className="flex justify-end px-6">
  <button
    onClick={handleBack}
    className="inline-flex items-center gap-2 text-sm text-white border border-slate-600 px-5 py-2 rounded-full hover:text-blue-400 hover:border-blue-400 transition-colors"
  >
    <ArrowLeft className="w-4 h-4" />
    Back to Industries
  </button>
</div>


        {/* Header */}
        <div className="flex items-start gap-6">
          {/* <img
            src={service.image}
            alt={service.title}
            className="w-20 h-20 object-contain"
          /> */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-wide leading-tight mb-2">
              {service.title}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              {service.fullDesc}
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {service.sections.map((section, idx) => (
            <div key={idx} className="group border border-slate-700 rounded-lg p-6 bg-slate-800/40 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400">
                {section.title}
              </h2>

              {section.preSubText && (
                <p className="text-gray-400 italic mb-3 max-w-4xl">{section.preSubText}</p>
              )}

              {section.subTitle && (
                <h3 className="text-md font-semibold text-blue-400 mb-2">
                  {section.subTitle}
                </h3>
              )}

              <ul className="ml-6 list-disc text-gray-300 space-y-2 max-w-4xl">
                {section.items.map((item, i) => (
                  <li key={i} className="leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesDetails;

