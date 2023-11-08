

const Testimonials = () => {
    const testimonials = [
        { id: 1, author: 'John Doe', rating: 5, text: "This is a lovely hotel in all sense of the word. From the inviting reception to the different lounges to the lovely light dining room, all is quality and spotlessly clean. Our room was very comfortable and then there is the view. Overlooking the harbour and out to sea, you can sit on the terrace and watch boats coming and going. The hotel has its own swimming pool. The food was very good, we were not rushed at dinner. The continental breakfast was fresh and varied. Cant recommend this hotel enough" },
        { id: 2, author: 'Jane Smith', rating: 5, text: "The new owners have made this a must visit for anyone visiting Penzance and the surrounding area. The train station is just a few minutes away and that is adjacent to the stops for all the buses serving this part of Cornwall. Do choose a sea view room, you will not be disappointed. Breakfast is individually cooked to a very high standard .    A perfect place for a short stay or as long as you like" },
        { id: 3, author: 'Sharon ', rating: 4, text: "From the initial contact with the hotel to the moment we left, we could not fault this small friendly hotel, there was nothing at all we could fault - we stay in a lot of hotels, some are very expensive and the Hotel Penzance for our stay was superb. So many 'little' details had been refined to work like a Swiss clock and normally this is only achievable if all the staff are happy and this is certainly what we found." },
        { id: 4, author: ' Lauren', rating: 5, text: "It was a lovely experience, we enjoyed our stay here everything was clean and tidy, food was lovely, staff were great we will stay again if we are ever in the area!" },
        // Add more testimonials as needed
    ];

    return (
        <div className="testimonial-section p-12">
            <h2 className="font-extrabold text-3xl text-center">User Testimonials</h2>
            <div>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial m-2">
                        <div className=''>
                            <p className="author rounded-md bg-teal-200 font-bold text-lg p-2">By: {testimonial.author}</p>
                            <p className='bg-teal-200 text-lg rounded-ee-md font-medium px-2'>{testimonial.text}</p>
                            {/* <p className="rating bg-red-300 rounded p-2 border">Rating: {testimonial.rating}/5</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
