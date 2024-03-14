import { HiOutlineCurrencyDollar } from "react-icons/hi";


const Course = ({ course }) => {
    const { name, photo, description, credit, price } = course;

    return (
        <div>
            <div className="card  bg-base-100 lg:w-96 shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className="flex space-x-2">
                       <div className="flex">
                        <span>$</span>
                       <p>Price: {price}</p>
                       </div>
                      <div className="flex">
                        <span><HiOutlineCurrencyDollar /></span>
                        <p> Credit:{credit}</p>
                      </div>
                        <div>

                        </div>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;