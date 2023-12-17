import { useEffect, useState } from "react";
import news from '../../../assets/news.jpg'
import GoogleMap from "./Google/Google";
import Testimonials from "./Testimonial/Testimonial";
// import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";




const Home = () => {

    const [picture, setPicture] = useState([])


    useEffect(() => {
        const imgUrl = 'http://localhost:5000/homeBanner';
        fetch(imgUrl)
            .then(res => res.json())
            .then(data => {
                setPicture(data);
            })
    }, []);
    return (
        <div>
            <div className=" lg:grid grid-cols-3 gap-2 lg:pt-12">
                {/* <Parallax speed={-10}> */}

                {
                    picture.map((img) => (
                        <motion.div key={img._id} whileHover={{ scale: [null, 1.5, 1.5] }}
                            transition={{ duration: 0.5 }}>

                            <img src={img.url} alt="" className="h-96 w-full p-5" />

                        </motion.div>
                    ))
                }
                {/* </Parallax> */}
            </div>
            <div className="lg:flex flex-row  w-1/2 mx-auto gap-1">
                <div>
                    <img src={news} alt="" className="rounded-lg" />
                </div>
                <div className="bg-green-300 rounded-lg flex flex-col pt-10 text-center gap-2 px-5">
                    <h1 className="font-bold text-3xl text-center">Special Offer Are waiting for you </h1>
                    <p className="font-medium text-base">Subscribe to our newsletter</p>
                    <form className="grid grid-cols-1 gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div>
                            <input type="submit" value="Subscribe" className="btn btn-outline btn-neutral w-full" />
                        </div>
                    </form>
                </div>
            </div>
            <Testimonials></Testimonials>
            <div>
                <h1 className="text-center font-bold text-4xl">Hotel Location</h1>
                <GoogleMap />
            </div>
        </div >
    );
};

export default Home;