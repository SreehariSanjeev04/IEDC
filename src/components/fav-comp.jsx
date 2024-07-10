function FavoriteComponent({image,title,description}) {
    return (<div className="bg-hero-color w-full md:flex p-10 justify-center items-center">
        <img src={image} alt="" height={350} width={350}/>
        <div>
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <p className="text-lg">{description}</p>
        </div>
    </div>)
}
export default FavoriteComponent