import React from 'react';
import Headers from '../../Headers/Headers';

const PrivacyPolicy = () => {
    return (
        <>
            <Headers />
            <div className="termcon">
                <div className="container">
                    <div className="d-flex justity-content-center align-items-start flex-column mt-4 mb-4">
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Collection of Information:</h4>
                        <p className="text-dark">We may collect personal information from you when you visit the Site, such as your name,
                            email address, and phone number, as well as non-personal information, such as your IP
                            address, browser type, and operating system</p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Use of Information:</h4>
                        <p>We use the information we collect from you to provide you with a better experience on the
                            Site, to respond to your inquiries, to send you marketing communications, and to comply
                            with legal and regulatory requirements.</p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Sharing of Information:</h4>
                        <p>We may share your information with our affiliates, service providers, and business partners
                            as necessary to provide you with our services and products. We may also share your
                            information with third parties if required by law or if we believe that disclosure is necessary
                            to protect our rights or the rights of others.
                        </p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Cookies and Other Tracking Technologies:</h4>
                        <p>We may use cookies and other tracking technologies to collect information about your use
                            of the Site and to improve your experience. You can control the use of cookies at the
                            individual browser level.
                        </p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Security:</h4>
                        <p>We take reasonable measures to protect your information from unauthorized access or
                            disclosure.</p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Third-Party Links:</h4>
                        <p>The Site may contain links to third-party websites. We are not responsible for the privacy
                            practices or content of such websites</p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ International Users:</h4>
                        <p>If you are visiting the Site from outside Bangladesh, please be aware that your information
                            may be transferred to, stored, and processed in Bangladesh, where our servers are located.
                            By using the Site, you consent to such transfer, storage, and processing.</p>
                        <h4 className="text-start fw-bold shadow-sm p-1">✦ Changes to this Privacy Policy:</h4>
                        <p>We may update this Privacy Policy from time to time. We will post any changes to the
                            Privacy Policy on the Site.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy