import React,{useEffect} from 'react';
import Headers from '../../Headers/Headers';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Headers />
            <div className="container" id="contact">
                <div className="contactus d-flex justify-content-center align-items-start flex-column">
                    <h4 className="text-start fw-bold shadow-sm p-1">✦ Conact us:</h4>
                    <p className="text-dark">If you have any questions, comments, or concerns about the Bangladesh Women's Super
                        League (WSL) website, you can contact us:</p>
                    <h4 className="text-start fw-bold shadow-sm p-1">✦ Our Contact Email:</h4>
                    <p className="text-dark"> <b>wsl@ksportsbd.com</b> </p>
                </div>
            </div>
        </>
    )
}

export default ContactUs