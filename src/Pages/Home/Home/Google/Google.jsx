

const GoogleMap = () => {
    return (
        <div>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-78.910112!3d12.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI1JzAwLjIiTiA3OMKwMzknMzcuMCJX!5e0!3m2!1sen!2us!4v1642255751218!5m2!1sen!2us"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
