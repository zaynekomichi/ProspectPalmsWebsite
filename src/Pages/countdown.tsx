const Countdown = () => {
    return (
        <div className="container-fluid page">
            <div className="page bgGrad d-flex flex-column align-items-center">
                <div className="text-center">
                <h1 className="display-1">We Are Renovating!</h1>
                    <p><a href="https://www.facebook.com/ProspectPalms/" ><img className="Sirv" width="50px" data-src="https://ngratesc.sirv.com/Aurora/Facebook.png" alt="" /></a></p>
                </div>
                <div className="container"> 
                    <div className="row text-center">
                        <div className="col-sm ">
                            <iframe className="rounded vid shadow " src="https://www.youtube.com/embed/zsa0D23V5_Y" title="Prospect Palms: Virtual walk in" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
}

export default Countdown