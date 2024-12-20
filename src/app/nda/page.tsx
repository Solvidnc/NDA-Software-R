"use client";
import Link from "next/link";
import { Metadata } from "next";
import { Input } from "antd";
import Select from 'react-select';
import { useEffect, useState } from 'react';
import "./homepage.css";
import { InputNumber } from "antd";
import React from 'react';
import { DatePicker } from "antd";
import { Document, Packer, Paragraph, HeadingLevel, ImageRun,AlignmentType,TextRun } from 'docx';
import
{ Button }
from
"antd"
    ;


const countryOptions = []; // This will hold country options

// Fetch country data
async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    console.log("country", countries);
    
    return countries.map(country => ({
        value: country.cca2,
        label: country.name.common,
    }));
}

// export const metadata: Metadata = {
//   title: "Error Page | Free Next.js Template for Startup and SaaS",
//   description: "This is Error Page for Startup Nextjs Template",
//   // other metadata
// };

const ErrorPage = () => {
    const [options, setOptions] = useState([]);
    const [fullname, setFullName] = useState("");
    const [efvDate, setEfvDate] = useState("");
    const [nameSoftware, setNameSoftware] = useState("");
    const [purpose, setPurpose] = useState("");
    const [signdate, setSigndate] = useState("");
    const [signatureData, setSignatureData] = useState("");
    const [postalcode, setPostalcode] = useState(0);
    const [mndaterm, setMndaterm] = useState(0);
    const [country, setCountry] = useState("");
    const [streeaddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
 // Ref for the signature canvas
    // Ref to hold the signature image URL
    const { TextArea } = Input;


    useEffect(() => {
        const loadCountries = async () => {
            const countries = await fetchCountries();
            setOptions(countries);
        };
        loadCountries();
    }, []);


    const dateOnChange = (date, dateString) => {
        setEfvDate(dateString);
    };
    
    const fullnameChange = (e) => {
        setFullName(e.target.value);
    }

    const onChangeSoftName = (e) => {
        setNameSoftware(e.target.value);
    }

    const onChangePurpose = (e) => {
        setPurpose(e.target.value);
    }

    const signdateOnChange = (date, dateString) => {
        setSigndate(dateString);
    }
    
        const postalcodeChange = (e) => {
        setPostalcode(e.target.value);
    }
 


    const onSignature = (e) => {
        setSignatureData(e.target.value);
    }
    
    const mndatermChange=(value) => {
        setMndaterm(value);
    }
    
    const countrySelect = (value) => {
        setCountry(value.label);
        
    }

    const inputCity = (e) => {
        setCity(e.target.value);
    }

    const inputStreet = (e) => {
        setStreetAddress(e.target.value);
    }


const downloadWordDocument = () => {
// Make sure this holds your Base64 data

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    text: "SOFTWARE DEVELOPMENT NON-DISCLOSURE AGREEMENT",
                    heading: HeadingLevel.HEADING_1,
                 
                   alignment: AlignmentType.CENTER,
                }),
                new Paragraph("\n"),
                new Paragraph(`I. THE PARTIES. This Software Development Non-Disclosure Agreement, hereinafter known as the “Agreement”, is created on the ${efvDate || "_________________"} by and between ${fullname || "_______________"} , hereinafter known as the “1st Party”, and _________________________, hereinafter known as the “2nd Party”, and collectively known as the “Parties”.`),
                new Paragraph("\n"),
                new Paragraph(`WHEREAS, this Agreement is created for the purpose of preventing the unauthorized disclosure of the confidential and proprietary information regarding the development of ${nameSoftware || "_________________"} [Name of Software] with its purpose of ${purpose || "_________________________"} [Purpose of Software].`),
                new Paragraph("\n"),
                new Paragraph("II. TYPE OF AGREEMENT. Check One (1)"),
                new Paragraph("\n"),
                new Paragraph("☐ - Mutual – This Agreement shall be Mutual, whereas, the Parties shall be prohibited from disclosing confidential and proprietary information that is to be shared between one another in an effort to develop the Software."),
                new Paragraph("\n"),
                new Paragraph("☐ - Unilateral – This Agreement shall be Unilateral, whereas, the 1st Party shall have sole ownership of the Software with the 2nd Party being prohibited from disclosing confidential and proprietary information that is to be released by the 1st Party in an effort to develop the Software."),
                new Paragraph("\n"),
                new Paragraph("III. DEFINITION. For the purposes of this Agreement, the term 'Confidential Information' shall include, but not be limited to, software products, software source code or any related codes in all formats, business plans, financial statements, customers or users, analytical data, documentation, and correspondences that have not otherwise been made publicly available."),
                new Paragraph("\n"),
                new Paragraph("However, Confidential Information does not include:"),
                new Paragraph("\n"),
                new Paragraph("(a) information generally available to the public;"),
                new Paragraph("(b) widely used programming practices or algorithms;"),
                new Paragraph("(c) information rightfully in the possession of the Parties prior to signing this Agreement;"),
                new Paragraph("(d) information independently developed without the use of any of the provided Confidential Information."),
                new Paragraph("\n"),
                new Paragraph("IV. OBLIGATIONS. The obligations of the Parties shall be to hold and maintain the Confidential Information in the strictest of confidence at all times and to their agents, employees, representatives, affiliates, and any other individual or entity that is on a 'need to know' basis."),
                new Paragraph(`If any such Confidential Information shall reach a third (3rd) party or become public, all liability will be on the Party that is responsible. Neither Party shall, without the written approval of the other Party, publish, copy, or use the Confidential Information for their sole benefit. If requested, either Party shall be bound to return any and all materials to the Requesting Party within ${mndaterm || " ____ "} days.`),
                new Paragraph("\n"),
                new Paragraph("This Section shall not apply to the 1st Party if this Agreement is Unilateral as marked in Section II."),
                new Paragraph("\n"),
                new Paragraph("V. TIME PERIOD. The bounded Party’s(ies’) duty to hold the Confidential Information in confidence shall remain in effect until such information no longer qualifies as a trade secret or written notice is given releasing such Party from this Agreement."),
                new Paragraph("\n"),
                new Paragraph("VI. RELATIONSHIP. The Parties agree that there is no such statement in this Agreement that suggests any Party is an employee, partner, or that the Software is a joint venture. All ownership interests, if any, shall be stated in a separate agreement."),
                new Paragraph("\n"),
                new Paragraph("VII. SEVERABILITY. If a court finds that any provision of this Agreement is invalid or unenforceable, the remainder of this Agreement shall be interpreted so as best to affect the intent of the Parties."),
                new Paragraph("\n"),
                new Paragraph("VIII. INTEGRATION. This Agreement expresses the complete understanding of the Parties with respect to the subject matter and supersedes all prior proposals, agreements, representations, and understandings. This Agreement may not be amended except in writing with the acknowledgment of the Parties."),
                new Paragraph("\n"),
                new Paragraph("IX. Enforcement. The Parties acknowledge and agree that due to the unique and sensitive nature of the Confidential Information, any breach of this Agreement would cause irreparable harm for which damages and or equitable relief may be sought. The harmed Party shall be entitled to all remedies available at law."),
                new Paragraph("\n"),
                new Paragraph("X. GOVERNING LAW. This Agreement shall be governed under the laws in the State of _________________________."),
                new Paragraph("\n"),
   
                new Paragraph("1st Party’s Signature"),
                new Paragraph(`Date ${signdate === "" ? "_________________" : signdate}`),
                new Paragraph(`Print Name ${fullname === "" ? "___________________________" : fullname}`),
                new Paragraph(`Street Address ${streeaddress === "" ? "___________________________" : streeaddress}`),
                new Paragraph(`City ${city === "" ? "___________________________" : city}`),
                new Paragraph(`Postal Code ${postalcode === "" ? "___________________________" : postalcode}`),
                new Paragraph("\n"),
                new Paragraph(
                    {
            children: [
                  new TextRun({
                  text: signatureData === "" ? "" : signatureData,
                  size: 40, // Font size in half-points (25px -> 50 in docx size units)
                  font: "Brush Script MT", // Font family
                  italics: true, // Italic style
        }),
    ],
                    } ),
                new Paragraph("\n"),
                new Paragraph("\n"),
                new Paragraph("2nd Party’s Signature"),
                new Paragraph("Date _________________"),
                new Paragraph("Print Name ___________________________"),
                new Paragraph("Street Address___________________________"),
                new Paragraph("City___________________________"),
                 new Paragraph("Postal Code ___________________________"),
            ],
        }],
    });


              Packer.toBlob(doc).then((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Software_Development_NDA.docx';
                a.click();
                URL.revokeObjectURL(url);
            }).catch((error) => {
                console.error("Error generating document: ", error);
            });
        
};

    

    return (
        <>
            
            
            <div className="main">
                  
                <div className="main-con ">
                    <div className="onboarding-title-container">
                        <h1 className="display-4 dark:text-white text-dark text-center">Welcome</h1>
                        <p className="display-5 dark:text-white text-dark text-center">You’re creating agreements on behalf of this organization or business:</p>
                    </div>
                    <div className="main-page ">
                      <div className="contact-input">
                       <div className="onboarding-form-container  dark:bg-gray-dark">
                        <div className="input-main">
                            <div className="input-column">
                                <div className="bold mb-8 dark:text-white text-dark " >Full Name</div>
                                <Input size="large" onChange={fullnameChange} className=" dark:bg-gray-dark dark:text-white text-dark"/>
                            </div>
                           
                            <div className="input-column">
                                <div className="bold mb-8 dark:text-white text-dark " >Country</div>
                                        <Select options={options} placeholder="Select a country" className="dark:bg-gray-dark dark:text-white text-dark" onChange={countrySelect} />
                            </div>
                            <div className="input-column form-select">
                                <div className="bold mb-8 dark:text-white text-dark">Street Address</div>
                                <Input  size="large" className=" dark:bg-gray-dark dark:text-white text-dark" onChange={inputStreet}/>
                            </div>
                            
                            <div className="city-state-zip-stacked-false">
                                <div className="input-row mb-32 ">
                                   <div className="bold mb-8 dark:text-white text-dark">City</div>
                                    <Input size="large" placeholder="City" className=" dark:bg-gray-dark dark:text-white text-dark" onChange={inputCity} />
                                        </div>
                                        
                                <div className="input-row mb-32">
                                  <div className="bold mb-8 dark:text-white text-dark">Postal code</div>
                                            <Input size="large" placeholder="Postal code" className=" dark:bg-gray-dark dark:text-white text-dark" onChange={postalcodeChange} />
                                        </div>                                        
                                    </div>
                                    
                             <div className="input-column form-select">
                                <div className="bold mb-8 dark:text-white text-dark">Effective Date:</div>
                                <DatePicker onChange={dateOnChange} size="large" style={{width: '100%',}} className=" dark:bg-gray-dark dark:text-white text-dark"/>
                                    </div>

 
                                
                                        
                                <div className="input-column form-select">
                                  <div className="bold mb-8 dark:text-white text-dark" >Sign Date</div>
                                     <DatePicker onChange={signdateOnChange} size="large" style={{width: '100%',}} className=" dark:bg-gray-dark dark:text-white text-dark"/>
                                        </div>
                                        
                        

                            <div className="input-column form-select">
                                <div className="bold mb-8 dark:text-white text-dark" >Your's Signature:</div>
                                <Input  size="large"onChange={onSignature} className="dark:bg-gray-dark dark:text-white text-dark" />
                                    </div>
                                    <button onClick={downloadWordDocument} className="dark:bg-gray-dark dark:text-white text-dark downbutton">Download Document</button>
                                   
                                    
                        </div>
                       </div>
                        </div>
                        <div className="contact-document">
                            <div className="contact-document-main dark:bg-gray-dark">
                                <div className="word-section text-dark dark:text-white">
                                                                      
                                    <p className="contact-title"> SOFTWARE DEVELOPMENT NON-DISCLOSURE </p>
                                    <p className="contact-title">AGREEMENT </p>

                                    <p><span className="contact-subtitle">I. THE PARTIES.</span> This Software Development Non-Disclosure Agreement,
                                    hereinafter known as the “Agreement”, is created on the {efvDate==="" ? "_________________" : <span style={{ textDecoration: "underline"}}>{efvDate}</span> } by and between {fullname === "" ? "_______________" : <span style={{ textDecoration: "underline"}}>{fullname}</span> } , hereinafter known as the “1st Party”, and
                                    _________________________, hereinafter known as the “2nd Party”, and 
                                    collectively known as the “Parties”.</p>
                                   <br />

                                    <p>WHEREAS, this Agreement is created for the purpose of preventing the 
                                    unauthorized disclosure of the confidential and proprietary information regarding
                                    the development of  _______________ [Name of Software] with its
                                    purpose of_______________ [Purpose of Software], hereinafter
                                        known as the “Software”. The Parties agree as follows: </p>
                                     <br />
                                    <p><span className="contact-subtitle">II. TYPE OF AGREEMENT.</span> Check One (1)</p>
                                     <br />
                                    <p><span className="contact-subtitle">☐ - Mutual</span> – This Agreement shall be Mutual, whereas, the Parties shall be
                                    prohibited from disclosing confidential and proprietary information that is to be
                                        shared between one another in an effort to develop the Software.</p>
                                     <br />
                                    <p><span className="contact-subtitle">☐ - Unilateral</span> – This Agreement shall be Unilateral, whereas, the 1st Party shall 
                                    have sole ownership of the Software with the 2nd Party being prohibited from 
                                    disclosing confidential and proprietary information that is to be released by the 1st Party
                                        in an effort to develop the Software.</p>
                                     <br />
                                    <p><span className="contact-subtitle">III. DEFINITION.</span> For the purposes of this Agreement, the term “Confidential Information”
                                    shall include, but not be limited to, software products, software source
                                    code or any related codes in all formats, business plans, financial statements,
                                    customers or users, analytical data, documentation, and correspondences that
                                        have not otherwise been made publicly available. </p>
                                     <br />
                                    <p>However, Confidential Information does not include: </p> <br />
                                    <p>(a) information generally available to the public; </p> <br />
                                    <p>(b) widely used programming practices or algorithms; </p> <br />
                                    <p>(c) information rightfully in the possession of the Parties prior to signing this
                                        Agreement; and </p> <br />
                                    
                                    <p>(d) information independently developed without the use of any of the 
                                        provided Confidential Information.</p> <br />
                                    
                                    <p><span className="contact-subtitle">IV. OBLIGATIONS. </span>The obligations of the Parties shall be to hold and maintain the
                                    Confidential Information in the strictest of confidence at all times and to their
                                    agents, employees, representatives, affiliates, and any other individual or entity that
                                     is on a “need to know” basis. If any such Confidential Information shall reach a third 
                                    (3rd) party or become public, all liability will be on the Party that is responsible.
                                     Neither Party shall, without the written approval of the other Party, publish, copy, or
                                     use the Confidential Information for their sole benefit. If requested, either Party
                                     shall be bound to return any and all materials to the Requesting Party within___days</p>
                                     <br />

                                    <p>This Section shall not apply to the 1st Party if this Agreement is Unilateral as
                                        marked in Section II.</p>
                                    <br />
                                    
                                    <p><span className="contact-subtitle">V. TIME PERIOD.</span> The bounded Party’s(ies’) duty to hold the Confidential
                                     Information in confidence shall remain in effect until such information no longer
                                    qualifies as a trade secret or written notice is given releasing such Party from this
                                        Agreement.</p>
                                    <br />
                                    <p><span className="contact-subtitle">VI. RELATIONSHIP.</span> The Parties agree that there is no such statement in this
                                    Agreement that suggests any Party is an employee, partner, or that the Software is
                                    a joint venture. All ownership interests, if any, shall be stated in a separate
                                        agreement.</p>
                                     <br />
                                    <p><span className="contact-subtitle">VII. SEVERABILITY.</span> If a court finds that any provision of this Agreement is invalid
                                     or unenforceable, the remainder of this Agreement shall be interpreted so as best
                                        to affect the intent of the Parties.</p>
                                     <br />
                                    <p><span className="contact-subtitle">VIII. INTEGRATION.</span> This Agreement expresses the complete understanding of the 
                                    Parties with respect to the subject matter and supersedes all prior proposals,
                                    agreements, representations, and understandings. This Agreement may not be
                                        amended except in writing with the acknowledgment of the Parties.</p>
                                     <br />
                                    <p><span className="contact-subtitle">IX. Enforcement.</span> The Parties acknowledge and agree that due to the
                                    unique and sensitive nature of the Confidential Information, any breach of
                                    this Agreement would cause irreparable harm for which damages and or
                                    equitable relief may be sought. The harmed Party shall be entitled to all
                                        remedies available at law.</p>
                                     <br />
                                    <p><span className="contact-subtitle">X. GOVERNING LAW.</span> This Agreement shall be governed under the laws in
                                        the State of _________________________.</p>
                                    <br />
                                    <div className="signature">
                                        <div className="first-signature">
                                             <p><span className="contact-subtitle">1st Party’s Signature</span>  </p>
                                             <p>Date  {signdate==="" ? "_________________" : <span style={{ textDecoration: "underline"}}>{signdate}</span> }</p>
                                            <p>Print Name  {fullname === "" ? "___________________________" : <span style={{ textDecoration: "underline" }}>{fullname}</span>}</p>
                                            <p>Country   {country === "" ? "___________________________" : <span style={{ textDecoration: "underline" }}>{country}</span>} </p>
                                            <p>Street Adress   {streeaddress === "" ? "___________________________" : <span style={{ textDecoration: "underline" }}>{streeaddress}</span>} </p>
                                            <p>City   {city === "" ? "___________________________" : <span style={{ textDecoration: "underline" }}>{city}</span>} </p>
                                            <p>Postal code {postalcode === "" ? "___________________________" : <span style={{ textDecoration: "underline" }}>{postalcode}</span>} </p>
                                            <br/> 
                                            <p style={{fontSize:"40px", textAlign:"center",fontFamily:"Brush Script MT, Brush Script Std, cursive",fontStyle:"italic"}}>{signatureData === "" ? "" : <span>{signatureData}</span> }</p>
                                     <br />
                                        </div>
                                        <div className="second-signature">
                                             <p><span className="contact-subtitle">2nd Party’s Signature</span></p>
                                             <p> Date _________________</p>
                                            <p>Print Name ___________________________</p> 
                                            <p>Country___________________________</p> 
                                            <p>Street Adress  ___________________________</p> 
                                            <p>City ___________________________</p> 
                                            <p>Postal code ___________________________</p>
                                        </div>
                                    </div>                        
                                </div>
                          
                            </div>
                           </div>
                    </div>
                   
                </div>
            </div>
            
        </>
    );
};

export default ErrorPage;
