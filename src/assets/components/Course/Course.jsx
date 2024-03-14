
const Course = ({course}) => {
 const {name,photo, description,credit,price} = course;

    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;