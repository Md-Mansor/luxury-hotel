import { useEffect, useState } from "react";
// import { Parallax } from "react-scroll-parallax";


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
        <div className=" lg:grid grid-cols-3 gap-5 pt-12">
            {/* <Parallax speed={-10}> */}

            {
                picture.map((img) => (
                    <div key={img._id}>

                        <img src={img.url} alt="" className="h-96 w-full " />

                    </div>
                ))
            }
            {/* </Parallax> */}
        </div>
    );
};

export default Home;