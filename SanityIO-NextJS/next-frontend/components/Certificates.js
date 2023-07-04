import React from "react";

const getUrlFromId = ref => {
    
    const PROJECT_ID = process.env.NEXT_PUBLIC_projectId;
    const DATASET = process.env.NEXT_PUBLIC_dataset;

    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`
  }


const CertificateCard = ({ certificate }) => {
    return (
        <div className="mb-8">
            <div className="h-full group shadow-inner rounded-t shadow-purple-900  px-8 hover:bg-primary hover:shadow-black transform transition-all">
                <div className="text-center">
                    <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                        {certificate.title}
                    </h3>
                    <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {certificate.brief}
                    </p>
                </div>
            </div>
            <a href={getUrlFromId(certificate.certificate.asset._ref)} target="_blank">
                <div className="text-center rounded-b cursor-pointer bg-slate-200 py-2 hover:bg-primary hover:text-white transition-colors">
                    Link to Certificate
                </div>
            </a>
        </div>
    )
}

const Certificates = ({ certificates }) => {
    return (
        <div className="bg-gray-100 py-16 md:py-20" id="certificates">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Here's what I achieved
            </h2>

            <div className="grid mx-5 grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
                {certificates.length > 0 && certificates.map((certificate) => {
                    return (
                        <CertificateCard key={certificate._key} certificate={certificate} />
                    )
                })}
            </div>
        </div>
    );
};

export default Certificates;
