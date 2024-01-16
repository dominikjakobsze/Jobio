let counter = 0;
const Heading = ({ children }) => {
    console.log("Heading " + counter++);
    return (
        <h1 className="flex-[0_0_95%] text-gray-700 text-2xl font-[700] mx-auto text-center lg:text-left">
            {children}
        </h1>
    );
};

export default Heading;
